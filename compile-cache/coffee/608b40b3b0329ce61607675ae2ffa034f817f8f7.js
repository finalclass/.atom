(function() {
  var AddBookmarkDialog, InputDialog, fs,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  fs = require('fs-plus');

  InputDialog = require('@aki77/atom-input-dialog');

  module.exports = AddBookmarkDialog = (function(_super) {
    __extends(AddBookmarkDialog, _super);

    function AddBookmarkDialog(main, name, path, fromView) {
      this.main = main;
      this.name = name;
      this.path = path;
      this.fromView = fromView;
      AddBookmarkDialog.__super__.constructor.call(this, {
        prompt: "Enter a name for the bookmark (may be empty): " + this.path
      });
    }

    AddBookmarkDialog.prototype.initialize = function() {
      var options;
      options = {};
      options.defaultText = this.name;
      options.callback = (function(_this) {
        return function(text) {
          _this.main.addBookmark(text.trim(), _this.path);
          if (_this.fromView) {
            return _this.main.mainView.refocusLastView();
          }
        };
      })(this);
      options.validate = function(text) {
        return null;
      };
      return AddBookmarkDialog.__super__.initialize.call(this, options);
    };

    return AddBookmarkDialog;

  })(InputDialog);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvZGlhbG9ncy9hZGQtYm9va21hcmstZGlhbG9nLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxrQ0FBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxTQUFSLENBQUwsQ0FBQTs7QUFBQSxFQUNBLFdBQUEsR0FBYyxPQUFBLENBQVEsMEJBQVIsQ0FEZCxDQUFBOztBQUFBLEVBR0EsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLHdDQUFBLENBQUE7O0FBQWEsSUFBQSwyQkFBRSxJQUFGLEVBQVMsSUFBVCxFQUFnQixJQUFoQixFQUF1QixRQUF2QixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsT0FBQSxJQUNiLENBQUE7QUFBQSxNQURtQixJQUFDLENBQUEsT0FBQSxJQUNwQixDQUFBO0FBQUEsTUFEMEIsSUFBQyxDQUFBLE9BQUEsSUFDM0IsQ0FBQTtBQUFBLE1BRGlDLElBQUMsQ0FBQSxXQUFBLFFBQ2xDLENBQUE7QUFBQSxNQUFBLG1EQUFNO0FBQUEsUUFBQyxNQUFBLEVBQVEsZ0RBQUEsR0FBZ0QsSUFBQyxDQUFBLElBQTFEO09BQU4sQ0FBQSxDQURXO0lBQUEsQ0FBYjs7QUFBQSxnQ0FHQSxVQUFBLEdBQVksU0FBQSxHQUFBO0FBQ1YsVUFBQSxPQUFBO0FBQUEsTUFBQSxPQUFBLEdBQVUsRUFBVixDQUFBO0FBQUEsTUFDQSxPQUFPLENBQUMsV0FBUixHQUFzQixJQUFDLENBQUEsSUFEdkIsQ0FBQTtBQUFBLE1BR0EsT0FBTyxDQUFDLFFBQVIsR0FBbUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO0FBQ2pCLFVBQUEsS0FBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBbEIsRUFBK0IsS0FBQyxDQUFBLElBQWhDLENBQUEsQ0FBQTtBQUVBLFVBQUEsSUFBRyxLQUFDLENBQUEsUUFBSjttQkFDRSxLQUFDLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFmLENBQUEsRUFERjtXQUhpQjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBSG5CLENBQUE7QUFBQSxNQVNBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsSUFBRCxHQUFBO0FBQ2pCLGVBQU8sSUFBUCxDQURpQjtNQUFBLENBVG5CLENBQUE7YUFZQSxrREFBTSxPQUFOLEVBYlU7SUFBQSxDQUhaLENBQUE7OzZCQUFBOztLQUY4QixZQUpoQyxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/dialogs/add-bookmark-dialog.coffee
