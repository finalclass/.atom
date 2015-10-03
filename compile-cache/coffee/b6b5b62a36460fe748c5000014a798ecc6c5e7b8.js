(function() {
  var Actions, AddBookmarkDialog, BookmarksView, DiffView, Directory, DirectoryController, DriveListView, File, FileController, ProjectListView, SelectDialog, TextEditor, Utils, fsp, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Utils = require('./utils');

  FileController = require('./controllers/file-controller');

  DirectoryController = require('./controllers/directory-controller');

  DiffView = require('./views/diff/diff-view');

  BookmarksView = require('./views/bookmarks-view');

  DriveListView = require('./views/drive-list-view');

  ProjectListView = require('./views/project-list-view');

  AddBookmarkDialog = require('./dialogs/add-bookmark-dialog');

  SelectDialog = require('./dialogs/select-dialog');

  _ref = require('atom'), File = _ref.File, Directory = _ref.Directory, TextEditor = _ref.TextEditor;

  fsp = require('fs-plus');

  module.exports = Actions = (function() {
    function Actions(main) {
      this.main = main;
      this.bookmarksOpen = __bind(this.bookmarksOpen, this);
      this.bookmarksRemove = __bind(this.bookmarksRemove, this);
      this.bookmarksAdd = __bind(this.bookmarksAdd, this);
      this.bookmarksAddEditor = __bind(this.bookmarksAddEditor, this);
      this.compareFiles = __bind(this.compareFiles, this);
      this.compareFolders = __bind(this.compareFolders, this);
      this.viewSwap = __bind(this.viewSwap, this);
      this.viewMirror = __bind(this.viewMirror, this);
      this.goProject = __bind(this.goProject, this);
      this.goDrive = __bind(this.goDrive, this);
      this.goDirectory = __bind(this.goDirectory, this);
      this.goFile = __bind(this.goFile, this);
      this.goPath = __bind(this.goPath, this);
      this.goEditor = __bind(this.goEditor, this);
      this.goRoot = __bind(this.goRoot, this);
      this.goHome = __bind(this.goHome, this);
      this.selectFiles = __bind(this.selectFiles, this);
      this.selectFolders = __bind(this.selectFolders, this);
      this.selectInvert = __bind(this.selectInvert, this);
      this.selectRemove = __bind(this.selectRemove, this);
      this.selectAdd = __bind(this.selectAdd, this);
      this.selectNone = __bind(this.selectNone, this);
      this.selectAll = __bind(this.selectAll, this);
    }

    Actions.prototype.getFocusedView = function() {
      var focusedView;
      focusedView = this.main.mainView.focusedView;
      if (focusedView === null) {
        focusedView = this.main.mainView.leftView;
      }
      return focusedView;
    };

    Actions.prototype.selectAll = function() {
      var view;
      view = this.getFocusedView();
      if (view !== null) {
        view.selectAll();
        return view.requestFocus();
      }
    };

    Actions.prototype.selectNone = function() {
      var view;
      view = this.getFocusedView();
      if (view !== null) {
        view.selectNone();
        return view.requestFocus();
      }
    };

    Actions.prototype.selectAdd = function() {
      return this.selectAddRemove(true);
    };

    Actions.prototype.selectRemove = function() {
      return this.selectAddRemove(false);
    };

    Actions.prototype.selectAddRemove = function(add) {
      var dialog, view;
      view = this.getFocusedView();
      if (view !== null) {
        view.requestFocus();
        dialog = new SelectDialog(this, view, add);
        return dialog.attach();
      }
    };

    Actions.prototype.selectInvert = function() {
      var view;
      view = this.getFocusedView();
      if (view !== null) {
        view.selectInvert();
        return view.requestFocus();
      }
    };

    Actions.prototype.selectFolders = function() {
      var itemView, view, _i, _len, _ref1, _results;
      view = this.getFocusedView();
      if (view === null) {
        return;
      }
      view.requestFocus();
      _ref1 = view.itemViews;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        itemView = _ref1[_i];
        if (itemView.isSelectable() && itemView.itemController instanceof DirectoryController) {
          _results.push(itemView.select(true));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Actions.prototype.selectFiles = function() {
      var itemView, view, _i, _len, _ref1, _results;
      view = this.getFocusedView();
      if (view === null) {
        return;
      }
      view.requestFocus();
      _ref1 = view.itemViews;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        itemView = _ref1[_i];
        if (itemView.isSelectable() && itemView.itemController instanceof FileController) {
          _results.push(itemView.select(true));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Actions.prototype.goHome = function() {
      return this.goDirectory(new Directory(fsp.getHomeDirectory()));
    };

    Actions.prototype.goRoot = function() {
      var directory, previousPath, view;
      view = this.getFocusedView();
      if (view === null) {
        return;
      }
      directory = view.directory;
      if (directory === null) {
        return;
      }
      while (!directory.isRoot()) {
        previousPath = directory.getPath();
        directory = directory.getParent();
        if (previousPath === directory.getPath()) {
          break;
        }
      }
      return this.goDirectory(directory);
    };

    Actions.prototype.goEditor = function() {
      var editor;
      editor = atom.workspace.getActiveTextEditor();
      if (editor instanceof TextEditor) {
        if (editor.getPath() != null) {
          return this.goFile(new File(editor.getPath()));
        }
      }
    };

    Actions.prototype.goPath = function(path, openIfFile) {
      var directory, file;
      if (fsp.isDirectorySync(path)) {
        this.goDirectory(new Directory(path));
        return;
      }
      file = new File(path);
      if (fsp.isFileSync(path)) {
        this.goFile(file);
        if (openIfFile) {
          atom.workspace.open(file.getPath());
        }
        return;
      }
      directory = file.getParent();
      if (fsp.isDirectorySync(directory.getPath())) {
        return this.goDirectory(directory);
      }
    };

    Actions.prototype.goFile = function(file) {
      var view;
      view = this.getFocusedView();
      if (view !== null) {
        view.openDirectory(file.getParent());
        view.highlightIndexWithName(file.getBaseName());
        return view.requestFocus();
      }
    };

    Actions.prototype.goDirectory = function(directory) {
      var view;
      view = this.getFocusedView();
      if (view !== null) {
        view.openDirectory(directory);
        return view.requestFocus();
      }
    };

    Actions.prototype.goDrive = function(fromView) {
      var view;
      if (fromView == null) {
        fromView = true;
      }
      this.main.mainView.hideMenuBar();
      return view = new DriveListView(this, fromView);
    };

    Actions.prototype.goProject = function(fromView) {
      var projects, view;
      if (fromView == null) {
        fromView = true;
      }
      projects = atom.project.getDirectories();
      if (projects.length === 0) {
        return;
      }
      if (projects.length === 1) {
        return this.goDirectory(projects[0]);
      } else {
        this.main.mainView.hideMenuBar();
        return view = new ProjectListView(this, fromView);
      }
    };

    Actions.prototype.viewMirror = function() {
      return this.main.mainView.mirror();
    };

    Actions.prototype.viewSwap = function() {
      return this.main.mainView.swap();
    };

    Actions.prototype.compareFolders = function() {
      var itemView, leftView, rightView, _i, _j, _len, _len1, _ref1, _ref2, _results;
      leftView = this.main.mainView.leftView;
      rightView = this.main.mainView.rightView;
      leftView.selectNone();
      rightView.selectNone();
      _ref1 = leftView.itemViews;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        itemView = _ref1[_i];
        if (rightView.getItemViewWithName(itemView.getName()) === null) {
          itemView.select(true);
        }
      }
      _ref2 = rightView.itemViews;
      _results = [];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        itemView = _ref2[_j];
        if (leftView.getItemViewWithName(itemView.getName()) === null) {
          _results.push(itemView.select(true));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Actions.prototype.compareFiles = function() {
      var item, leftFile, leftView, leftViewItem, pane, rightFile, rightView, rightViewItem, title, view;
      leftView = this.main.mainView.leftView;
      rightView = this.main.mainView.rightView;
      leftViewItem = leftView.getHighlightedItem();
      if (leftViewItem === null) {
        return;
      }
      rightViewItem = rightView.getHighlightedItem();
      if (rightViewItem === null) {
        return;
      }
      if (!(leftViewItem.itemController instanceof FileController)) {
        return;
      }
      if (!(rightViewItem.itemController instanceof FileController)) {
        return;
      }
      leftFile = leftViewItem.itemController.getFile();
      rightFile = rightViewItem.itemController.getFile();
      title = "Diff - " + leftFile.getBaseName() + " | " + rightFile.getBaseName();
      view = new DiffView(title, leftFile, rightFile);
      pane = atom.workspace.getActivePane();
      item = pane.addItem(view, 0);
      return pane.activateItem(item);
    };

    Actions.prototype.bookmarksAddEditor = function() {
      var dialog, editor, file;
      editor = atom.workspace.getActiveTextEditor();
      if (editor instanceof TextEditor) {
        if (editor.getPath() != null) {
          file = new File(editor.getPath());
          dialog = new AddBookmarkDialog(this.main, file.getBaseName(), file.getPath(), false);
          return dialog.attach();
        }
      }
    };

    Actions.prototype.bookmarksAdd = function(fromView) {
      var dialog, item, name, path, view;
      if (fromView == null) {
        fromView = true;
      }
      view = this.getFocusedView();
      if (view === null) {
        return;
      }
      item = view.getHighlightedItem();
      if (item === null) {
        return;
      }
      if (item.isSelectable()) {
        name = item.getName();
        path = item.getPath();
      } else {
        name = view.directory.getBaseName();
        path = view.directory.getRealPathSync();
      }
      this.main.mainView.hideMenuBar();
      dialog = new AddBookmarkDialog(this.main, name, path, fromView);
      return dialog.attach();
    };

    Actions.prototype.bookmarksRemove = function(fromView) {
      var view;
      if (fromView == null) {
        fromView = true;
      }
      this.main.mainView.hideMenuBar();
      return view = new BookmarksView(this, false, fromView);
    };

    Actions.prototype.bookmarksOpen = function(fromView) {
      var view;
      if (fromView == null) {
        fromView = true;
      }
      this.main.mainView.hideMenuBar();
      return view = new BookmarksView(this, true, fromView);
    };

    return Actions;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvYWN0aW9ucy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEscUxBQUE7SUFBQSxrRkFBQTs7QUFBQSxFQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsU0FBUixDQUFSLENBQUE7O0FBQUEsRUFDQSxjQUFBLEdBQWlCLE9BQUEsQ0FBUSwrQkFBUixDQURqQixDQUFBOztBQUFBLEVBRUEsbUJBQUEsR0FBc0IsT0FBQSxDQUFRLG9DQUFSLENBRnRCLENBQUE7O0FBQUEsRUFHQSxRQUFBLEdBQVcsT0FBQSxDQUFRLHdCQUFSLENBSFgsQ0FBQTs7QUFBQSxFQUlBLGFBQUEsR0FBZ0IsT0FBQSxDQUFRLHdCQUFSLENBSmhCLENBQUE7O0FBQUEsRUFLQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSx5QkFBUixDQUxoQixDQUFBOztBQUFBLEVBTUEsZUFBQSxHQUFrQixPQUFBLENBQVEsMkJBQVIsQ0FObEIsQ0FBQTs7QUFBQSxFQU9BLGlCQUFBLEdBQW9CLE9BQUEsQ0FBUSwrQkFBUixDQVBwQixDQUFBOztBQUFBLEVBUUEsWUFBQSxHQUFlLE9BQUEsQ0FBUSx5QkFBUixDQVJmLENBQUE7O0FBQUEsRUFTQSxPQUFnQyxPQUFBLENBQVEsTUFBUixDQUFoQyxFQUFDLFlBQUEsSUFBRCxFQUFPLGlCQUFBLFNBQVAsRUFBa0Isa0JBQUEsVUFUbEIsQ0FBQTs7QUFBQSxFQVVBLEdBQUEsR0FBTSxPQUFBLENBQVEsU0FBUixDQVZOLENBQUE7O0FBQUEsRUFZQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRVMsSUFBQSxpQkFBRSxJQUFGLEdBQUE7QUFBUyxNQUFSLElBQUMsQ0FBQSxPQUFBLElBQU8sQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSwrREFBQSxDQUFB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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/actions.coffee
