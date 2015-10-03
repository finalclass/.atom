(function() {
  var FileController, ItemController,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ItemController = require('./item-controller');

  module.exports = FileController = (function(_super) {
    __extends(FileController, _super);

    function FileController(file) {
      FileController.__super__.constructor.call(this, file);
    }

    FileController.prototype.getFile = function() {
      return this.item;
    };

    FileController.prototype.getName = function() {
      return this.item.getBaseName();
    };

    FileController.prototype.getPath = function() {
      return this.item.getRealPathSync();
    };

    FileController.prototype.canRename = function() {
      return true;
    };

    FileController.prototype.getNameExtension = function() {
      var baseName, index, lastIndex;
      baseName = this.item.getBaseName();
      index = baseName.lastIndexOf(".");
      lastIndex = baseName.length - 1;
      if ((index === -1) || (index === 0) || (index === lastIndex)) {
        return [baseName, ''];
      }
      return [baseName.slice(0, index), baseName.slice(index + 1)];
    };

    FileController.prototype.performOpenAction = function() {
      return atom.workspace.open(this.getFile().getPath());
    };

    return FileController;

  })(ItemController);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvY29udHJvbGxlcnMvZmlsZS1jb250cm9sbGVyLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSw4QkFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsY0FBQSxHQUFpQixPQUFBLENBQVEsbUJBQVIsQ0FBakIsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixxQ0FBQSxDQUFBOztBQUFhLElBQUEsd0JBQUMsSUFBRCxHQUFBO0FBQ1gsTUFBQSxnREFBTSxJQUFOLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsNkJBR0EsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLGFBQU8sSUFBQyxDQUFBLElBQVIsQ0FETztJQUFBLENBSFQsQ0FBQTs7QUFBQSw2QkFNQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1AsYUFBTyxJQUFDLENBQUEsSUFBSSxDQUFDLFdBQU4sQ0FBQSxDQUFQLENBRE87SUFBQSxDQU5ULENBQUE7O0FBQUEsNkJBU0EsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLGFBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxlQUFOLENBQUEsQ0FBUCxDQURPO0lBQUEsQ0FUVCxDQUFBOztBQUFBLDZCQVlBLFNBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxhQUFPLElBQVAsQ0FEUztJQUFBLENBWlgsQ0FBQTs7QUFBQSw2QkFlQSxnQkFBQSxHQUFrQixTQUFBLEdBQUE7QUFDaEIsVUFBQSwwQkFBQTtBQUFBLE1BQUEsUUFBQSxHQUFXLElBQUMsQ0FBQSxJQUFJLENBQUMsV0FBTixDQUFBLENBQVgsQ0FBQTtBQUFBLE1BRUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxXQUFULENBQXFCLEdBQXJCLENBRlIsQ0FBQTtBQUFBLE1BR0EsU0FBQSxHQUFZLFFBQVEsQ0FBQyxNQUFULEdBQWtCLENBSDlCLENBQUE7QUFLQSxNQUFBLElBQUcsQ0FBQyxLQUFBLEtBQVMsQ0FBQSxDQUFWLENBQUEsSUFBaUIsQ0FBQyxLQUFBLEtBQVMsQ0FBVixDQUFqQixJQUFpQyxDQUFDLEtBQUEsS0FBUyxTQUFWLENBQXBDO0FBQ0UsZUFBTyxDQUFDLFFBQUQsRUFBVyxFQUFYLENBQVAsQ0FERjtPQUxBO0FBUUEsYUFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBZixFQUFrQixLQUFsQixDQUFELEVBQTJCLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBQSxHQUFRLENBQXZCLENBQTNCLENBQVAsQ0FUZ0I7SUFBQSxDQWZsQixDQUFBOztBQUFBLDZCQTBCQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7YUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFmLENBQW9CLElBQUMsQ0FBQSxPQUFELENBQUEsQ0FBVSxDQUFDLE9BQVgsQ0FBQSxDQUFwQixFQURpQjtJQUFBLENBMUJuQixDQUFBOzswQkFBQTs7S0FGMkIsZUFIN0IsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/controllers/file-controller.coffee
