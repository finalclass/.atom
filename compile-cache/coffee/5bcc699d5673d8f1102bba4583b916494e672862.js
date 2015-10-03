(function() {
  var Builder, CompositeDisposable, StatusBarView, instantBuild, path;

  CompositeDisposable = require('atom').CompositeDisposable;

  path = require('path');

  Builder = require('./builder');

  StatusBarView = require('./status-bar-view');

  module.exports = instantBuild = {
    subscriptions: null,
    config: {
      buildOnSave: {
        title: 'Build on save',
        type: 'boolean',
        "default": true
      }
    },
    activate: function(state) {
      this.subscriptions = new CompositeDisposable;
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'instant-build:build': (function(_this) {
          return function() {
            return _this.build();
          };
        })(this)
      }));
      this.subscriptions.add(atom.workspace.observeTextEditors((function(_this) {
        return function(editor) {
          return editor.onDidSave(function() {
            if (atom.config.get('instant-build.buildOnSave')) {
              return _this.build();
            }
          });
        };
      })(this)));
      this.statusBarView = new StatusBarView(state.statusBarView);
      return Builder.setStatusBarView(this.statusBarView);
    },
    consumeStatusBar: function(statusBar) {
      return this.statusBarTile = statusBar.addLeftTile({
        item: this.statusBarView.getElement(),
        priority: -1
      });
    },
    deactivate: function() {
      var _ref, _ref1, _ref2;
      this.subscriptions.dispose();
      if ((_ref = Builder.messagePanel) != null) {
        _ref.close();
      }
      if ((_ref1 = this.statusBarView) != null) {
        _ref1.destroy();
      }
      Builder.setStatusBarView(this.statusBarView = null);
      if ((_ref2 = this.statusBarTile) != null) {
        _ref2.destroy();
      }
      return this.statusBarTile = null;
    },
    serialize: function() {
      var _ref;
      return {
        statusBarView: (_ref = this.statusBarView) != null ? _ref.serialize() : void 0
      };
    },
    build: function() {
      var editor, file, filePath, projectDirectory, projectDirectoryPath, _ref;
      editor = atom.workspace.getActivePaneItem();
      file = editor != null ? (_ref = editor.buffer) != null ? _ref.file : void 0 : void 0;
      if (!file) {
        return;
      }
      filePath = file.path;
      projectDirectory = atom.project.getDirectories().filter(function(dir) {
        return dir.contains(filePath);
      });
      if (!projectDirectory.length) {
        return;
      }
      if (projectDirectoryPath = projectDirectory[0].path) {
        return Builder.build(projectDirectoryPath);
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9pbnN0YW50LWJ1aWxkL2xpYi9pbnN0YW50LWJ1aWxkLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSwrREFBQTs7QUFBQSxFQUFDLHNCQUF1QixPQUFBLENBQVEsTUFBUixFQUF2QixtQkFBRCxDQUFBOztBQUFBLEVBQ0EsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBRFAsQ0FBQTs7QUFBQSxFQUVBLE9BQUEsR0FBVSxPQUFBLENBQVEsV0FBUixDQUZWLENBQUE7O0FBQUEsRUFHQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSxtQkFBUixDQUhoQixDQUFBOztBQUFBLEVBS0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBQSxHQUNmO0FBQUEsSUFBQSxhQUFBLEVBQWUsSUFBZjtBQUFBLElBRUEsTUFBQSxFQUNFO0FBQUEsTUFBQSxXQUFBLEVBQ0U7QUFBQSxRQUFBLEtBQUEsRUFBTyxlQUFQO0FBQUEsUUFDQSxJQUFBLEVBQU0sU0FETjtBQUFBLFFBRUEsU0FBQSxFQUFTLElBRlQ7T0FERjtLQUhGO0FBQUEsSUFRQSxRQUFBLEVBQVUsU0FBQyxLQUFELEdBQUE7QUFDUixNQUFBLElBQUMsQ0FBQSxhQUFELEdBQWlCLEdBQUEsQ0FBQSxtQkFBakIsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLGFBQWEsQ0FBQyxHQUFmLENBQW1CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0M7QUFBQSxRQUFBLHFCQUFBLEVBQXVCLENBQUEsU0FBQSxLQUFBLEdBQUE7aUJBQUEsU0FBQSxHQUFBO21CQUFHLEtBQUMsQ0FBQSxLQUFELENBQUEsRUFBSDtVQUFBLEVBQUE7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZCO09BQXBDLENBQW5CLENBREEsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLGFBQWEsQ0FBQyxHQUFmLENBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWYsQ0FBa0MsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsTUFBRCxHQUFBO2lCQUNuRCxNQUFNLENBQUMsU0FBUCxDQUFpQixTQUFBLEdBQUE7QUFDZixZQUFBLElBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLDJCQUFoQixDQUFaO3FCQUFBLEtBQUMsQ0FBQSxLQUFELENBQUEsRUFBQTthQURlO1VBQUEsQ0FBakIsRUFEbUQ7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQyxDQUFuQixDQUZBLENBQUE7QUFBQSxNQU1BLElBQUMsQ0FBQSxhQUFELEdBQXFCLElBQUEsYUFBQSxDQUFjLEtBQUssQ0FBQyxhQUFwQixDQU5yQixDQUFBO2FBT0EsT0FBTyxDQUFDLGdCQUFSLENBQXlCLElBQUMsQ0FBQSxhQUExQixFQVJRO0lBQUEsQ0FSVjtBQUFBLElBa0JBLGdCQUFBLEVBQWtCLFNBQUMsU0FBRCxHQUFBO2FBQ2hCLElBQUMsQ0FBQSxhQUFELEdBQWlCLFNBQVMsQ0FBQyxXQUFWLENBQ2Y7QUFBQSxRQUFBLElBQUEsRUFBTSxJQUFDLENBQUEsYUFBYSxDQUFDLFVBQWYsQ0FBQSxDQUFOO0FBQUEsUUFDQSxRQUFBLEVBQVUsQ0FBQSxDQURWO09BRGUsRUFERDtJQUFBLENBbEJsQjtBQUFBLElBd0JBLFVBQUEsRUFBWSxTQUFBLEdBQUE7QUFDVixVQUFBLGtCQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsYUFBYSxDQUFDLE9BQWYsQ0FBQSxDQUFBLENBQUE7O1lBRW9CLENBQUUsS0FBdEIsQ0FBQTtPQUZBOzthQUljLENBQUUsT0FBaEIsQ0FBQTtPQUpBO0FBQUEsTUFLQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBMUMsQ0FMQSxDQUFBOzthQU9jLENBQUUsT0FBaEIsQ0FBQTtPQVBBO2FBUUEsSUFBQyxDQUFBLGFBQUQsR0FBaUIsS0FUUDtJQUFBLENBeEJaO0FBQUEsSUFtQ0EsU0FBQSxFQUFXLFNBQUEsR0FBQTtBQUNULFVBQUEsSUFBQTthQUFBO0FBQUEsUUFBQSxhQUFBLDRDQUE2QixDQUFFLFNBQWhCLENBQUEsVUFBZjtRQURTO0lBQUEsQ0FuQ1g7QUFBQSxJQXNDQSxLQUFBLEVBQU8sU0FBQSxHQUFBO0FBQ0wsVUFBQSxvRUFBQTtBQUFBLE1BQUEsTUFBQSxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWYsQ0FBQSxDQUFULENBQUE7QUFBQSxNQUNBLElBQUEseURBQXFCLENBQUUsc0JBRHZCLENBQUE7QUFFQSxNQUFBLElBQUEsQ0FBQSxJQUFBO0FBQUEsY0FBQSxDQUFBO09BRkE7QUFBQSxNQUlBLFFBQUEsR0FBVyxJQUFJLENBQUMsSUFKaEIsQ0FBQTtBQUFBLE1BS0EsZ0JBQUEsR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFiLENBQUEsQ0FBNkIsQ0FBQyxNQUE5QixDQUFxQyxTQUFDLEdBQUQsR0FBQTtlQUN0RCxHQUFHLENBQUMsUUFBSixDQUFhLFFBQWIsRUFEc0Q7TUFBQSxDQUFyQyxDQUxuQixDQUFBO0FBUUEsTUFBQSxJQUFBLENBQUEsZ0JBQThCLENBQUMsTUFBL0I7QUFBQSxjQUFBLENBQUE7T0FSQTtBQVVBLE1BQUEsSUFBRyxvQkFBQSxHQUF1QixnQkFBaUIsQ0FBQSxDQUFBLENBQUUsQ0FBQyxJQUE5QztlQUNFLE9BQU8sQ0FBQyxLQUFSLENBQWMsb0JBQWQsRUFERjtPQVhLO0lBQUEsQ0F0Q1A7R0FORixDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/instant-build/lib/instant-build.coffee
