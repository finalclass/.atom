(function() {
  var DirectoryController, ItemController,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ItemController = require('./item-controller');

  module.exports = DirectoryController = (function(_super) {
    __extends(DirectoryController, _super);

    function DirectoryController(directory) {
      DirectoryController.__super__.constructor.call(this, directory);
    }

    DirectoryController.prototype.getDirectory = function() {
      return this.item;
    };

    DirectoryController.prototype.getName = function() {
      return this.item.getBaseName();
    };

    DirectoryController.prototype.canRename = function() {
      return true;
    };

    DirectoryController.prototype.getPath = function() {
      return this.item.getRealPathSync();
    };

    DirectoryController.prototype.performOpenAction = function() {
      return this.getContainerView().openDirectory(this.getDirectory());
    };

    return DirectoryController;

  })(ItemController);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvY29udHJvbGxlcnMvZGlyZWN0b3J5LWNvbnRyb2xsZXIuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLG1DQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxjQUFBLEdBQWlCLE9BQUEsQ0FBUSxtQkFBUixDQUFqQixDQUFBOztBQUFBLEVBRUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLDBDQUFBLENBQUE7O0FBQWEsSUFBQSw2QkFBQyxTQUFELEdBQUE7QUFDWCxNQUFBLHFEQUFNLFNBQU4sQ0FBQSxDQURXO0lBQUEsQ0FBYjs7QUFBQSxrQ0FHQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osYUFBTyxJQUFDLENBQUEsSUFBUixDQURZO0lBQUEsQ0FIZCxDQUFBOztBQUFBLGtDQU1BLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDUCxhQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsV0FBTixDQUFBLENBQVAsQ0FETztJQUFBLENBTlQsQ0FBQTs7QUFBQSxrQ0FTQSxTQUFBLEdBQVcsU0FBQSxHQUFBO0FBQ1QsYUFBTyxJQUFQLENBRFM7SUFBQSxDQVRYLENBQUE7O0FBQUEsa0NBWUEsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLGFBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxlQUFOLENBQUEsQ0FBUCxDQURPO0lBQUEsQ0FaVCxDQUFBOztBQUFBLGtDQWVBLGlCQUFBLEdBQW1CLFNBQUEsR0FBQTthQUNqQixJQUFDLENBQUEsZ0JBQUQsQ0FBQSxDQUFtQixDQUFDLGFBQXBCLENBQWtDLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FBbEMsRUFEaUI7SUFBQSxDQWZuQixDQUFBOzsrQkFBQTs7S0FGZ0MsZUFIbEMsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/controllers/directory-controller.coffee
