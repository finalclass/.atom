(function() {
  var ItemController;

  module.exports = ItemController = (function() {
    function ItemController(item) {
      this.item = item;
    }

    ItemController.prototype.initialize = function(itemView) {
      this.itemView = itemView;
    };

    ItemController.prototype.getItem = function() {
      return this.item;
    };

    ItemController.prototype.getItemView = function() {
      return this.itemView;
    };

    ItemController.prototype.getContainerView = function() {
      return this.itemView.getContainerView();
    };

    ItemController.prototype.canRename = function() {
      return false;
    };

    ItemController.prototype.performOpenAction = function() {};

    return ItemController;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvY29udHJvbGxlcnMvaXRlbS1jb250cm9sbGVyLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxjQUFBOztBQUFBLEVBQUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVTLElBQUEsd0JBQUUsSUFBRixHQUFBO0FBQVMsTUFBUixJQUFDLENBQUEsT0FBQSxJQUFPLENBQVQ7SUFBQSxDQUFiOztBQUFBLDZCQUVBLFVBQUEsR0FBWSxTQUFFLFFBQUYsR0FBQTtBQUFhLE1BQVosSUFBQyxDQUFBLFdBQUEsUUFBVyxDQUFiO0lBQUEsQ0FGWixDQUFBOztBQUFBLDZCQUlBLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDUCxhQUFPLElBQUMsQ0FBQSxJQUFSLENBRE87SUFBQSxDQUpULENBQUE7O0FBQUEsNkJBT0EsV0FBQSxHQUFhLFNBQUEsR0FBQTtBQUNYLGFBQU8sSUFBQyxDQUFBLFFBQVIsQ0FEVztJQUFBLENBUGIsQ0FBQTs7QUFBQSw2QkFVQSxnQkFBQSxHQUFrQixTQUFBLEdBQUE7QUFDaEIsYUFBTyxJQUFDLENBQUEsUUFBUSxDQUFDLGdCQUFWLENBQUEsQ0FBUCxDQURnQjtJQUFBLENBVmxCLENBQUE7O0FBQUEsNkJBY0EsU0FBQSxHQUFXLFNBQUEsR0FBQTtBQUNULGFBQU8sS0FBUCxDQURTO0lBQUEsQ0FkWCxDQUFBOztBQUFBLDZCQWtCQSxpQkFBQSxHQUFtQixTQUFBLEdBQUEsQ0FsQm5CLENBQUE7OzBCQUFBOztNQUhGLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/controllers/item-controller.coffee
