(function() {
  var Actions, AtomCommander, AtomCommanderView, CompositeDisposable, DiffView, Directory, File, ListView, fsp, _ref;

  fsp = require('fs-plus');

  Actions = require('./actions');

  ListView = require('./views/list-view');

  DiffView = require('./views/diff/diff-view');

  AtomCommanderView = require('./atom-commander-view');

  _ref = require('atom'), CompositeDisposable = _ref.CompositeDisposable, File = _ref.File, Directory = _ref.Directory;

  module.exports = AtomCommander = {
    mainView: null,
    bottomPanel: null,
    subscriptions: null,
    activate: function(state) {
      this.state = state;
      this.loadState();
      this.bookmarks = [];
      this.actions = new Actions(this);
      this.mainView = new AtomCommanderView(this, this.state);
      this.bottomPanel = atom.workspace.addBottomPanel({
        item: this.mainView.getElement(),
        visible: false
      });
      this.subscriptions = new CompositeDisposable();
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:toggle-visible': (function(_this) {
          return function() {
            return _this.toggleVisible();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:toggle-focus': (function(_this) {
          return function() {
            return _this.toggleFocus();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-all': (function(_this) {
          return function() {
            return _this.actions.selectAll();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-none': (function(_this) {
          return function() {
            return _this.actions.selectNone();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-add': (function(_this) {
          return function() {
            return _this.actions.selectAdd();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-remove': (function(_this) {
          return function() {
            return _this.actions.selectRemove();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-invert': (function(_this) {
          return function() {
            return _this.actions.selectInvert();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-folders': (function(_this) {
          return function() {
            return _this.actions.selectFolders();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:select-files': (function(_this) {
          return function() {
            return _this.actions.selectFiles();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:mirror-view': (function(_this) {
          return function() {
            return _this.actions.viewMirror();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:swap-view': (function(_this) {
          return function() {
            return _this.actions.viewSwap();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:compare-folders': (function(_this) {
          return function() {
            return _this.actions.compareFolders();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:compare-files': (function(_this) {
          return function() {
            return _this.actions.compareFiles();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:go-project': (function(_this) {
          return function() {
            return _this.actions.goProject();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:go-editor': (function(_this) {
          return function() {
            return _this.actions.goEditor();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:go-drive': (function(_this) {
          return function() {
            return _this.actions.goDrive();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:go-root': (function(_this) {
          return function() {
            return _this.actions.goRoot();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:go-home': (function(_this) {
          return function() {
            return _this.actions.goHome();
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:add-bookmark': (function(_this) {
          return function() {
            return _this.actions.bookmarksAdd(false);
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:remove-bookmark': (function(_this) {
          return function() {
            return _this.actions.bookmarksRemove(false);
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-commander:open-bookmark': (function(_this) {
          return function() {
            return _this.actions.bookmarksOpen(false);
          };
        })(this)
      }));
      this.subscriptions.add(atom.commands.add('atom-text-editor', {
        'atom-commander:add-bookmark': (function(_this) {
          return function(event) {
            event.stopPropagation();
            return _this.actions.bookmarksAddEditor();
          };
        })(this)
      }));
      if (this.state.visible) {
        this.bottomPanel.show();
      }
      if (this.state.bookmarks != null) {
        return this.bookmarks = this.state.bookmarks;
      }
    },
    getSaveFile: function() {
      var configFile, directory;
      configFile = new File(atom.config.getUserConfigPath());
      directory = configFile.getParent();
      return directory.getFile("atom-commander.json");
    },
    loadState: function() {
      var error, file;
      if (this.state == null) {
        this.state = {};
        this.state.bookmarks = [];
        this.state.visible = false;
      }
      file = this.getSaveFile();
      if (!file.existsSync()) {
        return;
      }
      try {
        return this.state = JSON.parse(fsp.readFileSync(file.getPath()));
      } catch (_error) {
        error = _error;
        console.log("Error loading Atom Commander state.");
        return console.log(error);
      }
    },
    saveState: function() {
      var error, file, state;
      state = this.serialize();
      file = this.getSaveFile();
      try {
        return fsp.writeFileSync(file.getPath(), JSON.stringify(state));
      } catch (_error) {
        error = _error;
        console.log("Error saving Atom Commander state.");
        return console.log(error);
      }
    },
    deactivate: function() {
      this.saveState();
      this.bottomPanel.destroy();
      this.subscriptions.dispose();
      return this.mainView.destroy();
    },
    serialize: function() {
      var state;
      if (this.mainView !== null) {
        state = this.mainView.serialize();
        state.visible = this.bottomPanel.isVisible();
        state.bookmarks = this.bookmarks;
        return state;
      }
      return this.state;
    },
    toggleVisible: function() {
      if (this.bottomPanel.isVisible()) {
        if ((this.mainView.focusedView !== null) && this.mainView.focusedView.hasFocus()) {
          this.mainView.focusedView.unfocus();
        }
        this.bottomPanel.hide();
      } else {
        this.bottomPanel.show();
      }
      return this.saveState();
    },
    hidePanel: function() {
      this.bottomPanel.hide();
      return this.saveState();
    },
    toggleFocus: function() {
      if (this.bottomPanel.isVisible()) {
        if ((this.mainView.focusedView !== null) && this.mainView.focusedView.hasFocus()) {
          return this.mainView.focusedView.unfocus();
        } else {
          return this.mainView.refocusLastView();
        }
      } else {
        this.bottomPanel.show();
        this.mainView.refocusLastView();
        return this.saveState();
      }
    },
    addBookmark: function(name, path) {
      this.bookmarks.push([name, path]);
      return this.saveState();
    },
    removeBookmark: function(bookmark) {
      var index;
      index = this.bookmarks.indexOf(bookmark);
      if (index >= 0) {
        this.bookmarks.splice(index, 1);
      }
      return this.saveState();
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvYXRvbS1jb21tYW5kZXIuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDhHQUFBOztBQUFBLEVBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSLENBQU4sQ0FBQTs7QUFBQSxFQUNBLE9BQUEsR0FBVSxPQUFBLENBQVEsV0FBUixDQURWLENBQUE7O0FBQUEsRUFFQSxRQUFBLEdBQVcsT0FBQSxDQUFRLG1CQUFSLENBRlgsQ0FBQTs7QUFBQSxFQUdBLFFBQUEsR0FBVyxPQUFBLENBQVEsd0JBQVIsQ0FIWCxDQUFBOztBQUFBLEVBSUEsaUJBQUEsR0FBb0IsT0FBQSxDQUFRLHVCQUFSLENBSnBCLENBQUE7O0FBQUEsRUFLQSxPQUF5QyxPQUFBLENBQVEsTUFBUixDQUF6QyxFQUFDLDJCQUFBLG1CQUFELEVBQXNCLFlBQUEsSUFBdEIsRUFBNEIsaUJBQUEsU0FMNUIsQ0FBQTs7QUFBQSxFQU9BLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLGFBQUEsR0FDZjtBQUFBLElBQUEsUUFBQSxFQUFVLElBQVY7QUFBQSxJQUNBLFdBQUEsRUFBYSxJQURiO0FBQUEsSUFFQSxhQUFBLEVBQWUsSUFGZjtBQUFBLElBSUEsUUFBQSxFQUFVLFNBQUUsS0FBRixHQUFBO0FBQ1IsTUFEUyxJQUFDLENBQUEsUUFBQSxLQUNWLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsU0FBRCxHQUFhLEVBRGIsQ0FBQTtBQUFBLE1BR0EsSUFBQyxDQUFBLE9BQUQsR0FBZSxJQUFBLE9BQUEsQ0FBUSxJQUFSLENBSGYsQ0FBQTtBQUFBLE1BSUEsSUFBQyxDQUFBLFFBQUQsR0FBZ0IsSUFBQSxpQkFBQSxD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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/atom-commander.coffee
