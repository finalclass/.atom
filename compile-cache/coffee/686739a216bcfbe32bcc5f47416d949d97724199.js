(function() {
  var $, AtomCommanderView, Directory, DirectoryController, FileController, ListView, MenuBarView, NewDirectoryDialog, NewFileDialog, RenameDialog, Task, View, fs, _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  fs = require('fs-plus');

  _ref = require('atom'), Directory = _ref.Directory, Task = _ref.Task;

  _ref1 = require('atom-space-pen-views'), $ = _ref1.$, View = _ref1.View;

  ListView = require('./views/list-view');

  MenuBarView = require('./views/menu/menu-bar-view');

  NewFileDialog = require('./dialogs/new-file-dialog');

  NewDirectoryDialog = require('./dialogs/new-directory-dialog');

  RenameDialog = require('./dialogs/rename-dialog');

  FileController = require('./controllers/file-controller');

  DirectoryController = require('./controllers/directory-controller');

  module.exports = AtomCommanderView = (function(_super) {
    __extends(AtomCommanderView, _super);

    function AtomCommanderView(main, state) {
      this.main = main;
      this.resizeView = __bind(this.resizeView, this);
      this.resizeStopped = __bind(this.resizeStopped, this);
      this.resizeStarted = __bind(this.resizeStarted, this);
      AtomCommanderView.__super__.constructor.call(this, this.main);
      this.focusedView = this.leftView;
      this.menuBar.setMainView(this);
      this.leftView.setMainView(this);
      this.rightView.setMainView(this);
      this.leftView.addClass('left');
      this.rightView.addClass('right');
      this.leftView.deserialize(state.leftPath, state.left);
      this.rightView.deserialize(state.rightPath, state.right);
      if (state.height) {
        this.leftView.setContentHeight(state.height);
        this.rightView.setContentHeight(state.height);
      }
    }

    AtomCommanderView.content = function() {
      var buttonStyle;
      buttonStyle = 'width: 11.1%';
      return this.div({
        "class": 'atom-commander atom-commander-resizer'
      }, (function(_this) {
        return function() {
          _this.div({
            "class": 'atom-commander-resize-handle',
            outlet: 'resizeHandle'
          });
          _this.subview('menuBar', new MenuBarView(_this));
          _this.div({
            "class": 'content'
          }, function() {
            _this.subview('leftView', new ListView(true));
            return _this.subview('rightView', new ListView(false));
          });
          return _this.div({
            "class": 'btn-group-xs'
          }, function() {
            _this.button('F2 Rename', {
              "class": 'btn',
              style: buttonStyle,
              click: 'renameButton'
            });
            _this.button('F3 Add Project', {
              "class": 'btn',
              style: buttonStyle,
              click: 'addProjectButton'
            });
            _this.button('F4 New File', {
              "class": 'btn',
              style: buttonStyle,
              click: 'newFileButton'
            });
            _this.button('F5 Copy', {
              "class": 'btn',
              style: buttonStyle,
              click: 'copyButton'
            });
            _this.button('F6 Move', {
              "class": 'btn',
              style: buttonStyle,
              click: 'moveButton'
            });
            _this.button('F7 New Folder', {
              "class": 'btn',
              style: buttonStyle,
              click: 'newDirectoryButton'
            });
            _this.button('F8 Delete', {
              "class": 'btn',
              style: buttonStyle,
              click: 'deleteButton'
            });
            _this.button('F9 Focus', {
              "class": 'btn',
              style: buttonStyle,
              click: 'focusButton'
            });
            return _this.button('F10 Hide', {
              "class": 'btn',
              style: buttonStyle,
              click: 'hideButton'
            });
          });
        };
      })(this));
    };

    AtomCommanderView.prototype.initialize = function() {
      this.menuBar.hide();
      atom.commands.add(this.element, {
        'atom-commander:focus-other-view': (function(_this) {
          return function() {
            return _this.focusOtherView();
          };
        })(this),
        'atom-commander:rename': (function(_this) {
          return function() {
            return _this.renameButton();
          };
        })(this),
        'atom-commander:add-project': (function(_this) {
          return function() {
            return _this.addProjectButton();
          };
        })(this),
        'atom-commander:new-file': (function(_this) {
          return function() {
            return _this.newFileButton();
          };
        })(this),
        'atom-commander:copy': (function(_this) {
          return function() {
            return _this.copyButton();
          };
        })(this),
        'atom-commander:move': (function(_this) {
          return function() {
            return _this.moveButton();
          };
        })(this),
        'atom-commander:new-folder': (function(_this) {
          return function() {
            return _this.newDirectoryButton();
          };
        })(this),
        'atom-commander:delete': (function(_this) {
          return function() {
            return _this.deleteButton();
          };
        })(this),
        'atom-commander:focus': (function(_this) {
          return function() {
            return _this.focusButton();
          };
        })(this),
        'atom-commander:hide': (function(_this) {
          return function() {
            return _this.hideButton();
          };
        })(this),
        'atom-commander:mirror': (function(_this) {
          return function() {
            return _this.mirror();
          };
        })(this)
      });
      this.on('mousedown', '.atom-commander-resize-handle', (function(_this) {
        return function(e) {
          return _this.resizeStarted(e);
        };
      })(this));
      this.keyup((function(_this) {
        return function(e) {
          return _this.handleKeyUp(e);
        };
      })(this));
      this.keydown((function(_this) {
        return function(e) {
          return _this.handleKeyDown(e);
        };
      })(this));
      return this.keypress((function(_this) {
        return function(e) {
          return _this.handleKeyPress(e);
        };
      })(this));
    };

    AtomCommanderView.prototype.destroy = function() {
      this.leftView.dispose();
      this.rightView.dispose();
      return this.element.remove();
    };

    AtomCommanderView.prototype.getElement = function() {
      return this.element;
    };

    AtomCommanderView.prototype.handleKeyDown = function(e) {
      if (e.altKey && this.menuBar.isHidden()) {
        this.menuBar.reset();
        this.menuBar.show();
        e.preventDefault();
        return e.stopPropagation();
      } else if (this.menuBar.isVisible()) {
        this.menuBar.handleKeyDown(e);
        e.preventDefault();
        return e.stopPropagation();
      }
    };

    AtomCommanderView.prototype.handleKeyUp = function(e) {
      if (e.altKey) {
        this.menuBar.handleKeyUp(e);
        e.preventDefault();
        return e.stopPropagation();
      } else if (this.menuBar.isVisible()) {
        this.hideMenuBar();
        e.preventDefault();
        return e.stopPropagation();
      }
    };

    AtomCommanderView.prototype.handleKeyPress = function(e) {
      if (this.menuBar.isVisible()) {
        this.menuBar.handleKeyUp(e);
        e.preventDefault();
        return e.stopPropagation();
      }
    };

    AtomCommanderView.prototype.hideMenuBar = function() {
      this.menuBar.hide();
      this.menuBar.reset();
      return this.refocusLastView();
    };

    AtomCommanderView.prototype.resizeStarted = function() {
      $(document).on('mousemove', this.resizeView);
      return $(document).on('mouseup', this.resizeStopped);
    };

    AtomCommanderView.prototype.resizeStopped = function() {
      $(document).off('mousemove', this.resizeView);
      return $(document).off('mouseup', this.resizeStopped);
    };

    AtomCommanderView.prototype.resizeView = function(_arg) {
      var change, pageY, which;
      pageY = _arg.pageY, which = _arg.which;
      if (which !== 1) {
        return this.resizeStopped();
      }
      change = this.offset().top - pageY;
      this.leftView.adjustContentHeight(change);
      return this.rightView.adjustContentHeight(change);
    };

    AtomCommanderView.prototype.getOtherView = function(view) {
      if (view === this.leftView) {
        return this.rightView;
      }
      return this.leftView;
    };

    AtomCommanderView.prototype.focusView = function(focusedView) {
      var otherView;
      this.focusedView = focusedView;
      otherView = this.getOtherView(this.focusedView);
      otherView.unfocus();
      return this.focusedView.focus();
    };

    AtomCommanderView.prototype.focusOtherView = function() {
      if (this.leftView.hasFocus()) {
        return this.focusView(this.rightView);
      } else {
        return this.focusView(this.leftView);
      }
    };

    AtomCommanderView.prototype.addProjectButton = function() {
      if (this.focusedView !== null) {
        return this.focusedView.addProject();
      }
    };

    AtomCommanderView.prototype.getFocusedViewDirectory = function() {
      if (this.focusedView === null) {
        return null;
      }
      return this.focusedView.directory;
    };

    AtomCommanderView.prototype.renameButton = function() {
      var dialog, itemView;
      if (this.focusedView === null) {
        return;
      }
      itemView = this.focusedView.getHighlightedItem();
      if ((itemView === null) || !itemView.canRename()) {
        return;
      }
      if (itemView.itemController instanceof FileController) {
        dialog = new RenameDialog(this.focusedView, itemView.itemController.getFile());
        return dialog.attach();
      } else if (itemView.itemController instanceof DirectoryController) {
        dialog = new RenameDialog(this.focusedView, itemView.itemController.getDirectory());
        return dialog.attach();
      }
    };

    AtomCommanderView.prototype.newFileButton = function() {
      var dialog, directory;
      directory = this.getFocusedViewDirectory();
      if (directory === null) {
        return;
      }
      dialog = new NewFileDialog(this.focusedView, directory);
      return dialog.attach();
    };

    AtomCommanderView.prototype.copyButton = function() {
      return this.copyOrMoveButton(false);
    };

    AtomCommanderView.prototype.moveButton = function() {
      return this.copyOrMoveButton(true);
    };

    AtomCommanderView.prototype.copyOrMoveButton = function(move) {
      var dstPath, dstView, srcItemView, srcItemViews, srcNames, srcPath, srcView, task, _i, _len;
      if (this.focusedView === null) {
        return;
      }
      srcView = this.focusedView;
      dstView = this.getOtherView(srcView);
      srcPath = srcView.getPath();
      dstPath = dstView.getPath();
      if (srcPath === dstPath) {
        return;
      }
      srcItemViews = srcView.getSelectedItemViews(true);
      if (srcItemViews.length === 0) {
        return;
      }
      srcNames = [];
      for (_i = 0, _len = srcItemViews.length; _i < _len; _i++) {
        srcItemView = srcItemViews[_i];
        srcNames.push(srcItemView.getName());
      }
      task = Task.once(require.resolve('./tasks/copy-task'), srcPath, srcNames, dstPath, move, function() {
        if (move) {
          srcView.refreshDirectory();
        }
        return dstView.refreshDirectory();
      });
      return task.on('success', (function(_this) {
        return function(data) {
          return srcItemViews[data.index].select(false);
        };
      })(this));
    };

    AtomCommanderView.prototype.deleteButton = function() {
      var option, srcNames, srcPath, view;
      if (this.focusedView === null) {
        return;
      }
      view = this.focusedView;
      srcPath = view.getPath();
      srcNames = view.getSelectedNames(true);
      if (srcNames.length === 0) {
        return;
      }
      option = atom.confirm({
        message: 'Delete',
        detailedMessage: 'Delete the selected files?',
        buttons: ["No", "Yes"]
      });
      if (option === 1) {
        return Task.once(require.resolve('./tasks/delete-task'), srcPath, srcNames, function() {
          return view.refreshDirectory();
        });
      }
    };

    AtomCommanderView.prototype.newDirectoryButton = function() {
      var dialog, directory;
      directory = this.getFocusedViewDirectory();
      if (directory === null) {
        return;
      }
      dialog = new NewDirectoryDialog(this.focusedView, directory);
      return dialog.attach();
    };

    AtomCommanderView.prototype.focusButton = function() {
      return this.main.toggleFocus();
    };

    AtomCommanderView.prototype.hideButton = function() {
      return this.main.hidePanel();
    };

    AtomCommanderView.prototype.mirror = function() {
      if (this.focusedView !== null) {
        return this.getOtherView(this.focusedView).openDirectory(this.focusedView.directory);
      }
    };

    AtomCommanderView.prototype.swap = function() {
      var directory, highlightedIndex, otherDirectory, otherHighlightedIndex, otherSelectedNames, otherView, selectedNames;
      if (this.focusedView === null) {
        return;
      }
      otherView = this.getOtherView(this.focusedView);
      directory = this.focusedView.directory;
      otherDirectory = otherView.directory;
      highlightedIndex = this.focusedView.highlightedIndex;
      otherHighlightedIndex = otherView.highlightedIndex;
      selectedNames = this.focusedView.getSelectedNames();
      otherSelectedNames = otherView.getSelectedNames();
      this.focusedView.openDirectory(otherDirectory);
      this.focusedView.selectNames(otherSelectedNames);
      this.focusedView.highlightIndex(otherHighlightedIndex, true);
      otherView.openDirectory(directory);
      otherView.selectNames(selectedNames);
      otherView.highlightIndex(highlightedIndex, true);
      return otherView.requestFocus();
    };

    AtomCommanderView.prototype.refocusLastView = function() {
      if (this.focusedView !== null) {
        return this.focusView(this.focusedView);
      } else {
        return this.focusView(this.leftView);
      }
    };

    AtomCommanderView.prototype.serialize = function() {
      var state;
      state = {};
      state.left = this.leftView.serialize();
      state.right = this.rightView.serialize();
      state.height = this.leftView.getContentHeight();
      return state;
    };

    return AtomCommanderView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvYXRvbS1jb21tYW5kZXItdmlldy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEseUtBQUE7SUFBQTs7bVNBQUE7O0FBQUEsRUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLFNBQVIsQ0FBTCxDQUFBOztBQUFBLEVBQ0EsT0FBb0IsT0FBQSxDQUFRLE1BQVIsQ0FBcEIsRUFBQyxpQkFBQSxTQUFELEVBQVksWUFBQSxJQURaLENBQUE7O0FBQUEsRUFFQSxRQUFZLE9BQUEsQ0FBUSxzQkFBUixDQUFaLEVBQUMsVUFBQSxDQUFELEVBQUksYUFBQSxJQUZKLENBQUE7O0FBQUEsRUFHQSxRQUFBLEdBQVcsT0FBQSxDQUFRLG1CQUFSLENBSFgsQ0FBQTs7QUFBQSxFQUlBLFdBQUEsR0FBYyxPQUFBLENBQVEsNEJBQVIsQ0FKZCxDQUFBOztBQUFBLEVBS0EsYUFBQSxHQUFnQixPQUFBLENBQVEsMkJBQVIsQ0FMaEIsQ0FBQTs7QUFBQSxFQU1BLGtCQUFBLEdBQXFCLE9BQUEsQ0FBUSxnQ0FBUixDQU5yQixDQUFBOztBQUFBLEVBT0EsWUFBQSxHQUFlLE9BQUEsQ0FBUSx5QkFBUixDQVBmLENBQUE7O0FBQUEsRUFRQSxjQUFBLEdBQWlCLE9BQUEsQ0FBUSwrQkFBUixDQVJqQixDQUFBOztBQUFBLEVBU0EsbUJBQUEsR0FBc0IsT0FBQSxDQUFRLG9DQUFSLENBVHRCLENBQUE7O0FBQUEsRUFXQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRUosd0NBQUEsQ0FBQTs7QUFBYSxJQUFBLDJCQUFFLElBQUYsRUFBUSxLQUFSLEdBQUE7QUFDWCxNQURZLElBQUMsQ0FBQSxPQUFBLElBQ2IsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSwyREFBQSxDQUFBO0FB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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/atom-commander-view.coffee
