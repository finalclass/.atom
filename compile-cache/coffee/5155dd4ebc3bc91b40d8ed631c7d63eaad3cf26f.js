(function() {
  var BaseItemView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = BaseItemView = (function(_super) {
    __extends(BaseItemView, _super);

    function BaseItemView() {
      BaseItemView.__super__.constructor.call(this);
      this.selected = false;
      this.highlighted = false;
      this.focused = false;
      this.itemName = '';
    }

    BaseItemView.prototype.initialize = function(containerView, itemController) {
      this.containerView = containerView;
      this.itemController = itemController;
      this.itemController.initialize(this);
      this.classList.add('item');
      return this.itemName = this.getName();
    };

    BaseItemView.prototype.getContainerView = function() {
      return this.containerView;
    };

    BaseItemView.prototype.getItemController = function() {
      return this.itemController;
    };

    BaseItemView.prototype.getName = function() {};

    BaseItemView.prototype.getPath = function() {};

    BaseItemView.prototype.isSelectable = function() {};

    BaseItemView.prototype.canRename = function() {
      return this.itemController.canRename();
    };

    BaseItemView.prototype.highlight = function(highlighted, focused) {
      this.highlighted = highlighted;
      this.focused = focused;
      return this.refreshClassList();
    };

    BaseItemView.prototype.toggleSelect = function() {
      return this.select(!this.selected);
    };

    BaseItemView.prototype.select = function(selected) {
      if (this.isSelectable()) {
        this.selected = selected;
        return this.refreshClassList();
      }
    };

    BaseItemView.prototype.refreshClassList = function() {
      this.classList.remove('selected');
      this.classList.remove('highlighted-focused');
      this.classList.remove('highlighted-unfocused');
      if (this.highlighted) {
        if (this.focused) {
          this.classList.add('highlighted-focused');
        } else {
          this.classList.add('highlighted-unfocused');
        }
      }
      if (this.selected) {
        return this.classList.add('selected');
      }
    };

    BaseItemView.prototype.performOpenAction = function() {
      return this.itemController.performOpenAction();
    };

    return BaseItemView;

  })(HTMLElement);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvYmFzZS1pdGVtLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLFlBQUE7SUFBQTttU0FBQTs7QUFBQSxFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixtQ0FBQSxDQUFBOztBQUFhLElBQUEsc0JBQUEsR0FBQTtBQUNYLE1BQUEsNENBQUEsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsUUFBRCxHQUFZLEtBRFosQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFdBQUQsR0FBZSxLQUZmLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxPQUFELEdBQVcsS0FIWCxDQUFBO0FBQUEsTUFJQSxJQUFDLENBQUEsUUFBRCxHQUFZLEVBSlosQ0FEVztJQUFBLENBQWI7O0FBQUEsMkJBT0EsVUFBQSxHQUFZLFNBQUUsYUFBRixFQUFrQixjQUFsQixHQUFBO0FBQ1YsTUFEVyxJQUFDLENBQUEsZ0JBQUEsYUFDWixDQUFBO0FBQUEsTUFEMkIsSUFBQyxDQUFBLGlCQUFBLGNBQzVCLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxjQUFjLENBQUMsVUFBaEIsQ0FBMkIsSUFBM0IsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUMsU0FBUyxDQUFDLEdBQVosQ0FBZ0IsTUFBaEIsQ0FEQSxDQUFBO2FBRUEsSUFBQyxDQUFBLFFBQUQsR0FBWSxJQUFDLENBQUEsT0FBRCxDQUFBLEVBSEY7SUFBQSxDQVBaLENBQUE7O0FBQUEsMkJBWUEsZ0JBQUEsR0FBa0IsU0FBQSxHQUFBO0FBQ2hCLGFBQU8sSUFBQyxDQUFBLGFBQVIsQ0FEZ0I7SUFBQSxDQVpsQixDQUFBOztBQUFBLDJCQWVBLGlCQUFBLEdBQW1CLFNBQUEsR0FBQTtBQUNqQixhQUFPLElBQUMsQ0FBQSxjQUFSLENBRGlCO0lBQUEsQ0FmbkIsQ0FBQTs7QUFBQSwyQkFtQkEsT0FBQSxHQUFTLFNBQUEsR0FBQSxDQW5CVCxDQUFBOztBQUFBLDJCQXNCQSxPQUFBLEdBQVMsU0FBQSxHQUFBLENBdEJULENBQUE7O0FBQUEsMkJBeUJBLFlBQUEsR0FBYyxTQUFBLEdBQUEsQ0F6QmQsQ0FBQTs7QUFBQSwyQkEyQkEsU0FBQSxHQUFXLFNBQUEsR0FBQTtBQUNULGFBQU8sSUFBQyxDQUFBLGNBQWMsQ0FBQyxTQUFoQixDQUFBLENBQVAsQ0FEUztJQUFBLENBM0JYLENBQUE7O0FBQUEsMkJBOEJBLFNBQUEsR0FBVyxTQUFFLFdBQUYsRUFBZ0IsT0FBaEIsR0FBQTtBQUNULE1BRFUsSUFBQyxDQUFBLGNBQUEsV0FDWCxDQUFBO0FBQUEsTUFEd0IsSUFBQyxDQUFBLFVBQUEsT0FDekIsQ0FBQTthQUFBLElBQUMsQ0FBQSxnQkFBRCxDQUFBLEVBRFM7SUFBQSxDQTlCWCxDQUFBOztBQUFBLDJCQWlDQSxZQUFBLEdBQWMsU0FBQSxHQUFBO2FBQ1osSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFBLElBQUUsQ0FBQSxRQUFWLEVBRFk7SUFBQSxDQWpDZCxDQUFBOztBQUFBLDJCQW9DQSxNQUFBLEdBQVEsU0FBQyxRQUFELEdBQUE7QUFDTixNQUFBLElBQUcsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFIO0FBQ0UsUUFBQSxJQUFDLENBQUEsUUFBRCxHQUFZLFFBQVosQ0FBQTtlQUNBLElBQUMsQ0FBQSxnQkFBRCxDQUFBLEVBRkY7T0FETTtJQUFBLENBcENSLENBQUE7O0FBQUEsMkJBeUNBLGdCQUFBLEdBQWtCLFNBQUEsR0FBQTtBQUNoQixNQUFBLElBQUMsQ0FBQyxTQUFTLENBQUMsTUFBWixDQUFtQixVQUFuQixDQUFBLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQyxTQUFTLENBQUMsTUFBWixDQUFtQixxQkFBbkIsQ0FEQSxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUMsU0FBUyxDQUFDLE1BQVosQ0FBbUIsdUJBQW5CLENBRkEsQ0FBQTtBQUlBLE1BQUEsSUFBRyxJQUFDLENBQUEsV0FBSjtBQUNFLFFBQUEsSUFBRyxJQUFDLENBQUEsT0FBSjtBQUNFLFVBQUEsSUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFaLENBQWdCLHFCQUFoQixDQUFBLENBREY7U0FBQSxNQUFBO0FBR0UsVUFBQSxJQUFDLENBQUMsU0FBUyxDQUFDLEdBQVosQ0FBZ0IsdUJBQWhCLENBQUEsQ0FIRjtTQURGO09BSkE7QUFVQSxNQUFBLElBQUcsSUFBQyxDQUFBLFFBQUo7ZUFDRSxJQUFDLENBQUMsU0FBUyxDQUFDLEdBQVosQ0FBZ0IsVUFBaEIsRUFERjtPQVhnQjtJQUFBLENBekNsQixDQUFBOztBQUFBLDJCQXVEQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7YUFDakIsSUFBQyxDQUFBLGNBQWMsQ0FBQyxpQkFBaEIsQ0FBQSxFQURpQjtJQUFBLENBdkRuQixDQUFBOzt3QkFBQTs7S0FGeUIsWUFEM0IsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/base-item-view.coffee
