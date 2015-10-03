(function() {
  var $, ContainerView, ListDirectoryView, ListFileView, ListView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ListFileView = require('./list-file-view');

  ListDirectoryView = require('./list-directory-view');

  ContainerView = require('./container-view');

  $ = require('atom-space-pen-views').$;

  module.exports = ListView = (function(_super) {
    __extends(ListView, _super);

    function ListView(left) {
      ListView.__super__.constructor.call(this, left);
    }

    ListView.container = function() {
      return this.div({
        "class": 'atom-commander-list-view-resizer',
        click: 'requestFocus',
        outlet: 'listViewResizer'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'atom-commander-list-view-scroller',
            outlet: 'scroller',
            click: 'requestFocus'
          }, function() {
            return _this.table({
              "class": 'atom-commander-list-view-table'
            }, function() {
              return _this.tbody({
                "class": 'atom-commander-list-view list',
                tabindex: -1,
                outlet: 'tableBody'
              });
            });
          });
        };
      })(this));
    };

    ListView.prototype.initialize = function(state) {
      ListView.__super__.initialize.call(this, state);
      return this.tableBody.focusout((function(_this) {
        return function() {
          return _this.refreshHighlight();
        };
      })(this));
    };

    ListView.prototype.clearItemViews = function() {
      this.tableBody.empty();
      return this.tableBody.append($(this.createHeaderView()));
    };

    ListView.prototype.createParentView = function(index, directoryController) {
      var itemView;
      itemView = new ListDirectoryView();
      itemView.initialize(this, index, true, directoryController);
      return itemView;
    };

    ListView.prototype.createFileView = function(index, fileController) {
      var itemView;
      itemView = new ListFileView();
      itemView.initialize(this, index, fileController);
      return itemView;
    };

    ListView.prototype.createDirectoryView = function(index, directoryController) {
      var itemView;
      itemView = new ListDirectoryView();
      itemView.initialize(this, index, false, directoryController);
      return itemView;
    };

    ListView.prototype.addItemView = function(itemView) {
      return this.tableBody[0].appendChild(itemView);
    };

    ListView.prototype.createHeaderView = function() {
      return "<tr>\n  <th>Name</th>\n  <th>Extension</th>\n</tr>";
    };

    ListView.prototype.focus = function() {
      this.tableBody.focus();
      return ListView.__super__.focus.call(this);
    };

    ListView.prototype.hasFocus = function() {
      return this.tableBody.is(':focus') || document.activeElement === this.tableBody[0];
    };

    ListView.prototype.pageUp = function() {
      return this.pageAdjust(true);
    };

    ListView.prototype.pageDown = function() {
      return this.pageAdjust(false);
    };

    ListView.prototype.pageAdjust = function(up) {
      var itemViewHeight, itemsPerPage, scrollHeight;
      if ((this.highlightIndex === null) || (this.itemViews.length === 0)) {
        return;
      }
      itemViewHeight = this.tableBody.height() / this.itemViews.length;
      if (itemViewHeight === 0) {
        return;
      }
      scrollHeight = this.scroller.scrollBottom() - this.scroller.scrollTop();
      itemsPerPage = Math.round(scrollHeight / itemViewHeight);
      if (up) {
        return this.highlightIndex(this.highlightedIndex - itemsPerPage);
      } else {
        return this.highlightIndex(this.highlightedIndex + itemsPerPage);
      }
    };

    ListView.prototype.adjustContentHeight = function(change) {
      return this.listViewResizer.height(this.listViewResizer.outerHeight() + change);
    };

    ListView.prototype.getContentHeight = function() {
      return this.listViewResizer.height();
    };

    ListView.prototype.setContentHeight = function(contentHeight) {
      return this.listViewResizer.height(contentHeight);
    };

    return ListView;

  })(ContainerView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbGlzdC12aWV3LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSwyREFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsWUFBQSxHQUFlLE9BQUEsQ0FBUSxrQkFBUixDQUFmLENBQUE7O0FBQUEsRUFDQSxpQkFBQSxHQUFvQixPQUFBLENBQVEsdUJBQVIsQ0FEcEIsQ0FBQTs7QUFBQSxFQUVBLGFBQUEsR0FBZ0IsT0FBQSxDQUFRLGtCQUFSLENBRmhCLENBQUE7O0FBQUEsRUFHQyxJQUFLLE9BQUEsQ0FBUSxzQkFBUixFQUFMLENBSEQsQ0FBQTs7QUFBQSxFQUtBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSiwrQkFBQSxDQUFBOztBQUFhLElBQUEsa0JBQUMsSUFBRCxHQUFBO0FBQ1gsTUFBQSwwQ0FBTSxJQUFOLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsSUFHQSxRQUFDLENBQUEsU0FBRCxHQUFZLFNBQUEsR0FBQTthQUNWLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFDLE9BQUEsRUFBTyxrQ0FBUjtBQUFBLFFBQTRDLEtBQUEsRUFBTSxjQUFsRDtBQUFBLFFBQWtFLE1BQUEsRUFBUSxpQkFBMUU7T0FBTCxFQUFtRyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO2lCQUNqRyxLQUFDLENBQUEsR0FBRCxDQUFLO0FBQUEsWUFBQyxPQUFBLEVBQU8sbUNBQVI7QUFBQSxZQUE2QyxNQUFBLEVBQU8sVUFBcEQ7QUFBQSxZQUFnRSxLQUFBLEVBQU0sY0FBdEU7V0FBTCxFQUE0RixTQUFBLEdBQUE7bUJBQzFGLEtBQUMsQ0FBQSxLQUFELENBQU87QUFBQSxjQUFDLE9BQUEsRUFBTyxnQ0FBUjthQUFQLEVB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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/list-view.coffee
