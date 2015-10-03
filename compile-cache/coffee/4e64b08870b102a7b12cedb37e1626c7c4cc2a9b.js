(function() {
  var InputDialog, SelectDialog,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  InputDialog = require('@aki77/atom-input-dialog');

  module.exports = SelectDialog = (function(_super) {
    __extends(SelectDialog, _super);

    function SelectDialog(actions, containerView, add) {
      this.actions = actions;
      this.containerView = containerView;
      this.add = add;
      if (this.add) {
        SelectDialog.__super__.constructor.call(this, {
          prompt: 'Select items that matches pattern:'
        });
      } else {
        SelectDialog.__super__.constructor.call(this, {
          prompt: 'Deselect items that matches pattern:'
        });
      }
    }

    SelectDialog.prototype.initialize = function() {
      var options;
      options = {};
      options.defaultText = "*";
      options.callback = (function(_this) {
        return function(text) {
          var itemView, itemViews, pattern, _i, _len, _results;
          pattern = text.trim();
          itemViews = _this.containerView.getItemViewsWithPattern(pattern);
          _results = [];
          for (_i = 0, _len = itemViews.length; _i < _len; _i++) {
            itemView = itemViews[_i];
            if (itemView.isSelectable()) {
              _results.push(itemView.select(_this.add));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        };
      })(this);
      options.validate = function(text) {
        var pattern;
        pattern = text.trim();
        if (pattern.length === 0) {
          return 'The pattern may not be empty.';
        }
      };
      return SelectDialog.__super__.initialize.call(this, options);
    };

    return SelectDialog;

  })(InputDialog);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvZGlhbG9ncy9zZWxlY3QtZGlhbG9nLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSx5QkFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsV0FBQSxHQUFjLE9BQUEsQ0FBUSwwQkFBUixDQUFkLENBQUE7O0FBQUEsRUFFQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRUosbUNBQUEsQ0FBQTs7QUFBYSxJQUFBLHNCQUFFLE9BQUYsRUFBWSxhQUFaLEVBQTRCLEdBQTVCLEdBQUE7QUFDWCxNQURZLElBQUMsQ0FBQSxVQUFBLE9BQ2IsQ0FBQTtBQUFBLE1BRHNCLElBQUMsQ0FBQSxnQkFBQSxhQUN2QixDQUFBO0FBQUEsTUFEc0MsSUFBQyxDQUFBLE1BQUEsR0FDdkMsQ0FBQTtBQUFBLE1BQUEsSUFBRyxJQUFDLENBQUEsR0FBSjtBQUNFLFFBQUEsOENBQU07QUFBQSxVQUFDLE1BQUEsRUFBTyxvQ0FBUjtTQUFOLENBQUEsQ0FERjtPQUFBLE1BQUE7QUFHRSxRQUFBLDhDQUFNO0FBQUEsVUFBQyxNQUFBLEVBQU8sc0NBQVI7U0FBTixDQUFBLENBSEY7T0FEVztJQUFBLENBQWI7O0FBQUEsMkJBTUEsVUFBQSxHQUFZLFNBQUEsR0FBQTtBQUNWLFVBQUEsT0FBQTtBQUFBLE1BQUEsT0FBQSxHQUFVLEVBQVYsQ0FBQTtBQUFBLE1BQ0EsT0FBTyxDQUFDLFdBQVIsR0FBc0IsR0FEdEIsQ0FBQTtBQUFBLE1BR0EsT0FBTyxDQUFDLFFBQVIsR0FBbUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO0FBQ2pCLGNBQUEsZ0RBQUE7QUFBQSxVQUFBLE9BQUEsR0FBVSxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVYsQ0FBQTtBQUFBLFVBQ0EsU0FBQSxHQUFZLEtBQUMsQ0FBQSxhQUFhLENBQUMsdUJBQWYsQ0FBdUMsT0FBdkMsQ0FEWixDQUFBO0FBR0E7ZUFBQSxnREFBQTtxQ0FBQTtBQUNFLFlBQUEsSUFBRyxRQUFRLENBQUMsWUFBVCxDQUFBLENBQUg7NEJBQ0UsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBQyxDQUFBLEdBQWpCLEdBREY7YUFBQSxNQUFBO29DQUFBO2FBREY7QUFBQTswQkFKaUI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUhuQixDQUFBO0FBQUEsTUFXQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLElBQUQsR0FBQTtBQUNqQixZQUFBLE9BQUE7QUFBQSxRQUFBLE9BQUEsR0FBVSxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVYsQ0FBQTtBQUVBLFFBQUEsSUFBRyxPQUFPLENBQUMsTUFBUixLQUFrQixDQUFyQjtBQUNFLGlCQUFPLCtCQUFQLENBREY7U0FIaUI7TUFBQSxDQVhuQixDQUFBO2FBaUJBLDZDQUFNLE9BQU4sRUFsQlU7SUFBQSxDQU5aLENBQUE7O3dCQUFBOztLQUZ5QixZQUgzQixDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/dialogs/select-dialog.coffee
