(function() {
  var FailureTree, coffeestack, path, sourceMaps, _,
    __slice = [].slice;

  path = require('path');

  _ = require('underscore');

  coffeestack = require('coffeestack');

  sourceMaps = {};

  module.exports = FailureTree = (function() {
    FailureTree.prototype.suites = null;

    function FailureTree() {
      this.suites = [];
    }

    FailureTree.prototype.isEmpty = function() {
      return this.suites.length === 0;
    };

    FailureTree.prototype.add = function(spec) {
      var failure, failurePath, item, parent, parentSuite, _base, _base1, _i, _j, _len, _len1, _name, _name1, _ref, _results;
      _ref = spec.results().items_;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (!(item.passed_ === false)) {
          continue;
        }
        failurePath = [];
        parent = spec.suite;
        while (parent) {
          failurePath.unshift(parent);
          parent = parent.parentSuite;
        }
        parentSuite = this;
        for (_j = 0, _len1 = failurePath.length; _j < _len1; _j++) {
          failure = failurePath[_j];
          if ((_base = parentSuite.suites)[_name = failure.id] == null) {
            _base[_name] = {
              spec: failure,
              suites: [],
              specs: []
            };
          }
          parentSuite = parentSuite.suites[failure.id];
        }
        if ((_base1 = parentSuite.specs)[_name1 = spec.id] == null) {
          _base1[_name1] = {
            spec: spec,
            failures: []
          };
        }
        parentSuite.specs[spec.id].failures.push(item);
        _results.push(this.filterStackTrace(item));
      }
      return _results;
    };

    FailureTree.prototype.filterJasmineLines = function(stackTraceLines) {
      var index, jasminePattern, _results;
      jasminePattern = /^\s*at\s+.*\(?.*[\\/]jasmine(-[^\\/]*)?\.js:\d+:\d+\)?\s*$/;
      index = 0;
      _results = [];
      while (index < stackTraceLines.length) {
        if (jasminePattern.test(stackTraceLines[index])) {
          _results.push(stackTraceLines.splice(index, 1));
        } else {
          _results.push(index++);
        }
      }
      return _results;
    };

    FailureTree.prototype.filterTrailingTimersLine = function(stackTraceLines) {
      if (/^(\s*at .* )\(timers\.js:\d+:\d+\)/.test(_.last(stackTraceLines))) {
        return stackTraceLines.pop();
      }
    };

    FailureTree.prototype.filterSetupLines = function(stackTraceLines) {
      var index, removeLine, _results;
      removeLine = false;
      index = 0;
      _results = [];
      while (index < stackTraceLines.length) {
        removeLine || (removeLine = /^\s*at Object\.jasmine\.executeSpecsInFolder/.test(stackTraceLines[index]));
        if (removeLine) {
          _results.push(stackTraceLines.splice(index, 1));
        } else {
          _results.push(index++);
        }
      }
      return _results;
    };

    FailureTree.prototype.filterFailureMessageLine = function(failure, stackTraceLines) {
      var errorLines, message, stackTraceErrorMessage;
      errorLines = [];
      while (stackTraceLines.length > 0) {
        if (/^\s+at\s+.*\((.*):(\d+):(\d+)\)\s*$/.test(stackTraceLines[0])) {
          break;
        } else {
          errorLines.push(stackTraceLines.shift());
        }
      }
      stackTraceErrorMessage = errorLines.join('\n');
      message = failure.message;
      if (stackTraceErrorMessage !== message && stackTraceErrorMessage !== ("Error: " + message)) {
        return stackTraceLines.splice.apply(stackTraceLines, [0, 0].concat(__slice.call(errorLines)));
      }
    };

    FailureTree.prototype.filterOriginLine = function(failure, stackTraceLines) {
      var column, filePath, line, match;
      if (stackTraceLines.length !== 1) {
        return stackTraceLines;
      }
      if (match = /^\s*at\s+((\[object Object\])|(null))\.<anonymous>\s+\((.*):(\d+):(\d+)\)\s*$/.exec(stackTraceLines[0])) {
        stackTraceLines.shift();
        filePath = path.relative(process.cwd(), match[4]);
        line = match[5];
        column = match[6];
        return failure.messageLine = "" + filePath + ":" + line + ":" + column;
      }
    };

    FailureTree.prototype.filterStackTrace = function(failure) {
      var stackTrace, stackTraceLines;
      stackTrace = failure.trace.stack;
      if (!stackTrace) {
        return;
      }
      stackTraceLines = stackTrace.split('\n').filter(function(line) {
        return line;
      });
      this.filterJasmineLines(stackTraceLines);
      this.filterTrailingTimersLine(stackTraceLines);
      this.filterSetupLines(stackTraceLines);
      stackTrace = coffeestack.convertStackTrace(stackTraceLines.join('\n'), sourceMaps);
      if (!stackTrace) {
        return;
      }
      stackTraceLines = stackTrace.split('\n').filter(function(line) {
        return line;
      });
      this.filterFailureMessageLine(failure, stackTraceLines);
      this.filterOriginLine(failure, stackTraceLines);
      return failure.filteredStackTrace = stackTraceLines.join('\n');
    };

    FailureTree.prototype.forEachSpec = function(_arg, callback, depth) {
      var child, failure, failures, spec, specs, suites, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results, _results1;
      _ref = _arg != null ? _arg : {}, spec = _ref.spec, suites = _ref.suites, specs = _ref.specs, failures = _ref.failures;
      if (depth == null) {
        depth = 0;
      }
      if (failures != null) {
        callback(spec, null, depth);
        _results = [];
        for (_i = 0, _len = failures.length; _i < _len; _i++) {
          failure = failures[_i];
          _results.push(callback(spec, failure, depth));
        }
        return _results;
      } else {
        callback(spec, null, depth);
        depth++;
        _ref1 = _.compact(suites);
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          child = _ref1[_j];
          this.forEachSpec(child, callback, depth);
        }
        _ref2 = _.compact(specs);
        _results1 = [];
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          child = _ref2[_k];
          _results1.push(this.forEachSpec(child, callback, depth));
        }
        return _results1;
      }
    };

    FailureTree.prototype.forEach = function(callback) {
      var suite, _i, _len, _ref, _results;
      _ref = _.compact(this.suites);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        suite = _ref[_i];
        _results.push(this.forEachSpec(suite, callback));
      }
      return _results;
    };

    return FailureTree;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL0FwcGxpY2F0aW9ucy9BdG9tLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2phc21pbmUtdGFnZ2VkL25vZGVfbW9kdWxlcy9qYXNtaW5lLWZvY3VzZWQvbm9kZV9tb2R1bGVzL2phc21pbmUtbm9kZS9saWIvamFzbWluZS1ub2RlL2ZhaWx1cmUtdHJlZS5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsNkNBQUE7SUFBQSxrQkFBQTs7QUFBQSxFQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQUFQLENBQUE7O0FBQUEsRUFFQSxDQUFBLEdBQUksT0FBQSxDQUFRLFlBQVIsQ0FGSixDQUFBOztBQUFBLEVBR0EsV0FBQSxHQUFjLE9BQUEsQ0FBUSxhQUFSLENBSGQsQ0FBQTs7QUFBQSxFQUtBLFVBQUEsR0FBYSxFQUxiLENBQUE7O0FBQUEsRUFPQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBQ0osMEJBQUEsTUFBQSxHQUFRLElBQVIsQ0FBQTs7QUFFYSxJQUFBLHFCQUFBLEdBQUE7QUFDWCxNQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsRUFBVixDQURXO0lBQUEsQ0FGYjs7QUFBQSwwQkFLQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFSLEtBQWtCLEVBQXJCO0lBQUEsQ0FMVCxDQUFBOztBQUFBLDBCQU9BLEdBQUEsR0FBSyxTQUFDLElBQUQsR0FBQTtBQUNILFVBQUEsa0hBQUE7QUFBQTtBQUFBO1dBQUEsMkNBQUE7d0JBQUE7Y0FBdUMsSUFBSSxDQUFDLE9BQUwsS0FBZ0I7O1NBQ3JEO0FBQUEsUUFBQSxXQUFBLEdBQWMsRUFBZCxDQUFBO0FBQUEsUUFDQSxNQUFBLEdBQVMsSUFBSSxDQUFDLEtBRGQsQ0FBQTtBQUVBLGVBQU0sTUFB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

//# sourceURL=/Applications/Atom.app/Contents/Resources/app.asar/node_modules/jasmine-tagged/node_modules/jasmine-focused/node_modules/jasmine-node/lib/jasmine-node/failure-tree.coffee
