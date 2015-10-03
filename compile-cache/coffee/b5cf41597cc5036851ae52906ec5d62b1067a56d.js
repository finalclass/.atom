(function() {
  var $, $$, MenuBarView, MenuItem, View, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MenuItem = require('./menu-item');

  _ref = require('atom-space-pen-views'), $ = _ref.$, $$ = _ref.$$, View = _ref.View;

  module.exports = MenuBarView = (function(_super) {
    __extends(MenuBarView, _super);

    function MenuBarView() {
      this.buttonClicked = __bind(this.buttonClicked, this);
      MenuBarView.__super__.constructor.call(this);
    }

    MenuBarView.content = function() {
      return this.div({
        "class": 'atom-commander-menu-bar'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'block content',
            outlet: 'content'
          });
        };
      })(this));
    };

    MenuBarView.prototype.setMainView = function(mainView) {
      var buttonClicked;
      this.mainView = mainView;
      this.rootMenuItem = this.createRootMenuItem();
      this.showMenuItem(this.rootMenuItem);
      buttonClicked = this.buttonClicked;
      return this.content.on('click', 'button', function() {
        return buttonClicked($(this).text());
      });
    };

    MenuBarView.prototype.buttonClicked = function(title) {
      if (title === "") {
        return this.showParentMenuItem();
      } else {
        return this.handleMenuItem(this.currentMenuItem.getMenuItemWithTitle(title));
      }
    };

    MenuBarView.prototype.showParentMenuItem = function() {
      if (this.currentMenuItem.parent === null) {
        return this.mainView.hideMenuBar();
      } else {
        return this.handleMenuItem(this.currentMenuItem.parent);
      }
    };

    MenuBarView.prototype.reset = function() {
      return this.showMenuItem(this.rootMenuItem);
    };

    MenuBarView.prototype.createRootMenuItem = function() {
      var actions, bookmarks, compare, go, root, select, view;
      actions = this.mainView.main.actions;
      root = new MenuItem(null, "0", "root");
      select = root.addMenuItem("1", "Select");
      select.addMenuItem("1", "All", actions.selectAll);
      select.addMenuItem("2", "None", actions.selectNone);
      select.addMenuItem("3", "Add", actions.selectAdd);
      select.addMenuItem("4", "Remove", actions.selectRemove);
      select.addMenuItem("5", "Invert", actions.selectInvert);
      select.addMenuItem("6", "Folders", actions.selectFolders);
      select.addMenuItem("7", "Files", actions.selectFiles);
      go = root.addMenuItem("2", "Go");
      go.addMenuItem("1", "Project", actions.goProject);
      go.addMenuItem("2", "Editor", actions.goEditor);
      go.addMenuItem("3", "Drive", actions.goDrive);
      go.addMenuItem("4", "Root", actions.goRoot);
      go.addMenuItem("5", "Home", actions.goHome);
      bookmarks = root.addMenuItem("3", "Bookmarks");
      bookmarks.addMenuItem("1", "Add", actions.bookmarksAdd);
      bookmarks.addMenuItem("2", "Remove", actions.bookmarksRemove);
      bookmarks.addMenuItem("3", "Open", actions.bookmarksOpen);
      view = root.addMenuItem("4", "View");
      view.addMenuItem("1", "Mirror", actions.viewMirror);
      view.addMenuItem("2", "Swap", actions.viewSwap);
      compare = root.addMenuItem("5", "Compare");
      compare.addMenuItem("1", "Folders", actions.compareFolders);
      compare.addMenuItem("2", "Files", actions.compareFiles);
      return root;
    };

    MenuBarView.prototype.showMenuItem = function(currentMenuItem) {
      var id, subMenuItem, _i, _len, _ref1, _results;
      this.currentMenuItem = currentMenuItem;
      this.content.empty();
      this.content.append($$(function() {
        return this.button({
          "class": 'btn icon-arrow-up inline-block'
        });
      }));
      _ref1 = this.currentMenuItem.ids;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        id = _ref1[_i];
        subMenuItem = this.currentMenuItem.getMenuItem(id);
        _results.push(this.content.append($$(function() {
          return this.button(subMenuItem.title, {
            "class": 'btn btn-primary inline-block'
          });
        })));
      }
      return _results;
    };

    MenuBarView.prototype.handleKeyDown = function(event) {
      var charCode;
      charCode = event.which | event.keyCode;
      if (event.shiftKey || (charCode === 27)) {
        return this.showParentMenuItem();
      }
    };

    MenuBarView.prototype.handleKeyUp = function(event) {
      var charCode, sCode, subMenuItem;
      charCode = event.which | event.keyCode;
      sCode = String.fromCharCode(charCode);
      if (sCode === "0") {
        return this.showParentMenuItem();
      } else {
        subMenuItem = this.currentMenuItem.getMenuItem(sCode);
        return this.handleMenuItem(subMenuItem);
      }
    };

    MenuBarView.prototype.handleMenuItem = function(menuItem) {
      if (menuItem) {
        if (menuItem.callback) {
          return menuItem.callback();
        } else {
          return this.showMenuItem(menuItem);
        }
      }
    };

    return MenuBarView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbWVudS9tZW51LWJhci12aWV3LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSx3Q0FBQTtJQUFBOzttU0FBQTs7QUFBQSxFQUFBLFFBQUEsR0FBVyxPQUFBLENBQVEsYUFBUixDQUFYLENBQUE7O0FBQUEsRUFDQSxPQUFnQixPQUFBLENBQVEsc0JBQVIsQ0FBaEIsRUFBQyxTQUFBLENBQUQsRUFBSSxVQUFBLEVBQUosRUFBUSxZQUFBLElBRFIsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixrQ0FBQSxDQUFBOztBQUFhLElBQUEscUJBQUEsR0FBQTtBQUNYLDJEQUFBLENBQUE7QUFBQSxNQUFBLDJDQUFBLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsSUFHQSxXQUFDLENBQUEsT0FBRCxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFDLE9BQUEsRUFBTyx5QkFBUjtPQUFMLEVBQXlDLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQ3ZDLEtBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxZQUFDLE9BQUEsRUFBTSxlQUFQO0FBQUEsWUFBd0IsTUFBQSxFQUFPLFNBQS9CO1dBQUwsRUFEdUM7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF6QyxFQURRO0lBQUEsQ0FIVixDQUFBOztBQUFBLDBCQU9BLFdBQUEsR0FBYSxTQUFFLFFBQUYsR0FBQTtBQUNYLFVBQUEsYUFBQTtBQUFBLE1BRFksSUFBQyxDQUFBLFdBQUEsUUFDYixDQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsWUFBRCxHQUFnQixJQUFDLENBQUEsa0JBQUQs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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/menu/menu-bar-view.coffee
