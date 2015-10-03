(function() {
  var Builder, CONFIG_FILENAME, MessagePanelView, PlainMessageView, STATUS_BUILDING, STATUS_ERROR, STATUS_SUCCESS, build, buildConfigs, buildTimes, childProcess, currentBuild, extend, fs, iconForStatus, isArray, last, locateBuildConfig, parseBuildConfig, path, showBuildError, showBuildSuccess, showError, startBuild, _ref, _ref1,
    __hasProp = {}.hasOwnProperty;

  fs = require('fs');

  path = require('path');

  childProcess = require('child_process');

  _ref = require('underscore'), extend = _ref.extend, isArray = _ref.isArray, last = _ref.last;

  _ref1 = require('atom-message-panel'), MessagePanelView = _ref1.MessagePanelView, PlainMessageView = _ref1.PlainMessageView;

  CONFIG_FILENAME = '.atom-build.json';

  STATUS_BUILDING = 'building';

  STATUS_SUCCESS = 'success';

  STATUS_ERROR = 'error';

  buildConfigs = {
    instantBuild: function(root) {
      var configPath, e;
      configPath = path.join(root, CONFIG_FILENAME);
      try {
        delete require.cache[configPath];
        return require(configPath);
      } catch (_error) {
        e = _error;
        return false;
      }
    }
  };

  locateBuildConfig = function(root) {
    return new Promise(function(resolve, reject) {
      var config, key, parser;
      for (key in buildConfigs) {
        if (!__hasProp.call(buildConfigs, key)) continue;
        parser = buildConfigs[key];
        if (config = parser(root)) {
          return resolve({
            root: root,
            config: config
          });
        }
      }
      return reject('No valid configuration file found');
    });
  };

  parseBuildConfig = function(_arg) {
    var config, configPath, e, root;
    root = _arg.root, configPath = _arg.configPath;
    try {
      delete require.cache[configPath];
      config = require(configPath);
      return Promise.resolve({
        root: root,
        config: config
      });
    } catch (_error) {
      e = _error;
      return Promise.reject(e);
    }
  };

  build = function(_arg) {
    var cmd, config, root;
    root = _arg.root, config = _arg.config;
    cmd = config.cmd;
    if (isArray(cmd)) {
      cmd = cmd.join(' ');
    }
    if (isArray(config.args)) {
      cmd += ' ' + config.args.join(' ');
    }
    Builder.setStatus(STATUS_BUILDING, 'Building&hellip;');
    return new Promise(function(resolve, reject) {
      var procConfig, shell, shellBuffer;
      procConfig = {
        cwd: root,
        env: {},
        sh: config.sh || config.shell || process.env.SHELL
      };
      shellBuffer = new Buffer(0);
      shell = childProcess.spawn(procConfig.sh, ['-lc', 'export'], {
        detached: true,
        stdio: ['ignore', 'pipe', 'ignore']
      });
      shell.stdout.on('data', function(data) {
        return shellBuffer = Buffer.concat([shellBuffer, data]);
      });
      return shell.on('close', function() {
        var k, row, v, _i, _len, _ref2, _ref3;
        _ref2 = shellBuffer.toString().trim().split('\n');
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          row = _ref2[_i];
          _ref3 = row.split('=', 2), k = _ref3[0], v = _ref3[1];
          k = last(k.split(' '));
          if ((v != null ? v.length : void 0) && v[0] === '"' && last(v) === '"') {
            v = v.slice(1, -1);
          }
          procConfig.env[k] = v;
        }
        extend(procConfig.env, config.env || {});
        return childProcess.exec(cmd, procConfig, function(err, stdout, stderr) {
          if (err) {
            return reject({
              err: err,
              stdout: stdout,
              stderr: stderr
            });
          } else {
            return resolve(true);
          }
        });
      });
    });
  };

  startBuild = function(args) {
    return build(args).then(showBuildSuccess, showBuildError);
  };

  showBuildSuccess = function() {
    return Builder.setStatus(STATUS_SUCCESS, 'Build finished');
  };

  showBuildError = function(arg) {
    var err, stderr, stdout;
    if (!arg) {
      return;
    }
    err = arg.err, stdout = arg.stdout, stderr = arg.stderr;
    Builder.setStatus(STATUS_ERROR, 'Build failed');
    return Builder.setErrorMessage(stdout || stderr);
  };

  showError = function(message) {
    Builder.setStatus(STATUS_ERROR, 'Build failed');
    return Builder.setErrorMessage(message);
  };

  iconForStatus = function(status) {
    switch (status) {
      case STATUS_SUCCESS:
        return 'icon-check';
      case STATUS_ERROR:
        return 'icon-x';
    }
  };

  currentBuild = null;

  buildTimes = {};

  module.exports = Builder = {
    setStatusBarView: function(statusBarView) {
      this.statusBarView = statusBarView;
    },
    setStatus: function(status, message, silent) {
      var _ref2;
      this.statusBarView.setStatusIcon(iconForStatus(status));
      this.statusBarView.setStatus(status, message, {
        resetAfterTimeout: status !== STATUS_BUILDING
      });
      if (status === STATUS_BUILDING) {
        this.statusBarView.animateProgressBar(buildTimes[currentBuild]);
        this.statusBarView.setSpinnerVisibility('show');
      } else {
        this.statusBarView.setSpinnerVisibility('hide');
      }
      if (!silent) {
        return (_ref2 = this.messagePanel) != null ? _ref2.close() : void 0;
      }
    },
    setErrorMessage: function(message) {
      if (!this.messagePanel) {
        this.messagePanel = new MessagePanelView({
          title: 'Build failed'
        });
      }
      this.messagePanel.clear();
      this.messagePanel.attach();
      return this.messagePanel.add(new PlainMessageView({
        message: message,
        className: 'text-error'
      }));
    },
    build: function(projectRoot) {
      var buildFinished, startedAt;
      if (currentBuild) {
        return;
      }
      currentBuild = projectRoot;
      startedAt = Date.now();
      buildFinished = function() {
        currentBuild = null;
        return buildTimes[projectRoot] = Date.now() - startedAt;
      };
      return locateBuildConfig(projectRoot).then(startBuild, showError).then(buildFinished, buildFinished);
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9pbnN0YW50LWJ1aWxkL2xpYi9idWlsZGVyLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxtVUFBQTtJQUFBLDZCQUFBOztBQUFBLEVBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxJQUFSLENBQUwsQ0FBQTs7QUFBQSxFQUNBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQURQLENBQUE7O0FBQUEsRUFFQSxZQUFBLEdBQWUsT0FBQSxDQUFRLGVBQVIsQ0FGZixDQUFBOztBQUFBLEVBR0EsT0FBMEIsT0FBQSxDQUFRLFlBQVIsQ0FBMUIsRUFBQyxjQUFBLE1BQUQsRUFBUyxlQUFBLE9BQVQsRUFBa0IsWUFBQSxJQUhsQixDQUFBOztBQUFBLEVBSUEsUUFBdUMsT0FBQSxDQUFRLG9CQUFSLENBQXZDLEVBQUMseUJBQUEsZ0JBQUQsRUFBbUIseUJBQUEsZ0JBSm5CLENBQUE7O0FBQUEsRUFNQSxlQUFBLEdBQWtCLGtCQU5sQixDQUFBOztBQUFBLEVBT0EsZUFBQSxHQUFrQixVQVBsQixDQUFBOztBQUFBLEVBUUEsY0FBQSxHQUFpQixTQVJqQixDQUFBOztBQUFBLEVBU0EsWUFBQSxHQUFlLE9BVGYsQ0FBQTs7QUFBQSxFQVdBLFlBQUEsR0FDRTtBQUFBLElBQUEsWUFBQSxFQUFjLFNBQUMsSUFBRCxHQUFBO0FBQ1osVUFBQSxhQUFBO0FBQUEsTUFBQSxVQUFBLEdBQWEsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFWLEVBQWdCLGVBQWhCLENBQWIsQ0FBQTtBQUNBO0FBQ0UsUUFBQSxNQUFBLENBQUEsT0FBYyxDQUFDLEtBQU0sQ0FBQSxVQUFBLENBQXJCLENBQUE7ZUFDQSxPQUFBLENBQVEsVUFBUixFQUZGO09BQUEsY0FBQTtBQUlFLFFBREksVUFDSixDQUFBO2VBQUEs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

//# sourceURL=/Users/szymon/.atom/packages/instant-build/lib/builder.coffee
