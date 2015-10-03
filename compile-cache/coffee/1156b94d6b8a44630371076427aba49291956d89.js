(function() {
  var BookmarksView, Directory, SelectListView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Directory = require('atom').Directory;

  SelectListView = require('atom-space-pen-views').SelectListView;

  module.exports = BookmarksView = (function(_super) {
    __extends(BookmarksView, _super);

    function BookmarksView(actions, open, fromView) {
      this.actions = actions;
      this.open = open;
      this.fromView = fromView;
      BookmarksView.__super__.constructor.call(this);
    }

    BookmarksView.prototype.initialize = function() {
      BookmarksView.__super__.initialize.call(this);
      this.addClass('overlay from-top');
      this.refreshItems();
      if (this.panel == null) {
        this.panel = atom.workspace.addModalPanel({
          item: this
        });
      }
      this.panel.show();
      return this.focusFilterEditor();
    };

    BookmarksView.prototype.refreshItems = function() {
      var bookmark, item, items, _i, _len, _ref;
      items = [];
      _ref = this.actions.main.bookmarks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        bookmark = _ref[_i];
        item = {};
        item.bookmark = bookmark;
        if (bookmark[0].length === 0) {
          item.text = bookmark[1];
        } else {
          item.text = bookmark[0] + ": " + bookmark[1];
        }
        items.push(item);
      }
      return this.setItems(items);
    };

    BookmarksView.prototype.getFilterKey = function() {
      return "text";
    };

    BookmarksView.prototype.viewForItem = function(item) {
      if (item.bookmark[0].length === 0) {
        return "<li>" + item.text + "</li>";
      }
      return "<li class='two-lines'>\n<div class='primary-line'>" + item.bookmark[0] + "</div>\n<div class='secondary-line'>" + item.bookmark[1] + "</div>\n</li>";
      return "<li><span class='badge badge-info'>" + item.bookmark[0] + "</span> " + item.bookmark[1] + "</li>";
    };

    BookmarksView.prototype.confirmed = function(item) {
      if (this.open) {
        this.actions.goPath(item.bookmark[1], true);
        return this.cancel();
      } else {
        this.actions.main.removeBookmark(item.bookmark);
        return this.refreshItems();
      }
    };

    BookmarksView.prototype.cancelled = function() {
      var _ref;
      this.hide();
      if ((_ref = this.panel) != null) {
        _ref.destroy();
      }
      if (this.fromView) {
        return this.actions.main.mainView.refocusLastView();
      }
    };

    return BookmarksView;

  })(SelectListView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvYm9va21hcmtzLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHdDQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQyxZQUFhLE9BQUEsQ0FBUSxNQUFSLEVBQWIsU0FBRCxDQUFBOztBQUFBLEVBQ0MsaUJBQWtCLE9BQUEsQ0FBUSxzQkFBUixFQUFsQixjQURELENBQUE7O0FBQUEsRUFHQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRUosb0NBQUEsQ0FBQTs7QUFBYSxJQUFBLHVCQUFFLE9BQUYsRUFBWSxJQUFaLEVBQW1CLFFBQW5CLEdBQUE7QUFDWCxNQURZLElBQUMsQ0FBQSxVQUFBLE9BQ2IsQ0FBQTtBQUFBLE1BRHNCLElBQUMsQ0FBQSxPQUFBLElBQ3ZCLENBQUE7QUFBQSxNQUQ2QixJQUFDLENBQUEsV0FBQSxRQUM5QixDQUFBO0FBQUEsTUFBQSw2Q0FBQSxDQUFBLENBRFc7SUFBQSxDQUFiOztBQUFBLDRCQUdBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixNQUFBLDRDQUFBLENBQUEsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFFBQUQsQ0FBVSxrQkFBVixDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FIQSxDQUFBOztRQUtBLElBQUMsQ0FBQSxRQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBZixDQUE2QjtBQUFBLFVBQUEsSUFBQSxFQUFNLElBQU47U0FBN0I7T0FMVjtBQUFBLE1BTUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQUEsQ0FOQSxDQUFBO2FBT0EsSUFBQyxDQUFBLGlCQUFELENBQUEsRUFSVTtJQUFBLENBSFosQ0FBQTs7QUFBQSw0QkFhQSxZQUFBLEdB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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/bookmarks-view.coffee
