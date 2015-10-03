(function() {
  var InputDialog, RenameDialog, fs, path,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  fs = require('fs-plus');

  path = require('path');

  InputDialog = require('@aki77/atom-input-dialog');

  module.exports = RenameDialog = (function(_super) {
    __extends(RenameDialog, _super);

    function RenameDialog(containerView, item) {
      this.containerView = containerView;
      this.item = item;
      RenameDialog.__super__.constructor.call(this, {
        prompt: 'Enter a new name:'
      });
    }

    RenameDialog.prototype.initialize = function() {
      var options;
      this.itemName = this.item.getBaseName();
      this.oldPath = this.item.getRealPathSync();
      this.directoryPath = this.item.getParent().getRealPathSync();
      options = {};
      options.defaultText = this.itemName;
      options.callback = (function(_this) {
        return function(text) {
          var name, newPath;
          name = text.trim();
          newPath = path.join(_this.directoryPath, name);
          if (_this.oldPath !== newPath) {
            fs.moveSync(_this.oldPath, newPath);
            return _this.containerView.requestFocus();
          }
        };
      })(this);
      options.validate = function(text) {
        var name, newPath;
        name = text.trim();
        if (name.length === 0) {
          return 'The name may not be empty.';
        }
        if (name !== this.itemName) {
          newPath = path.join(this.directoryPath, name);
          if (fs.isFileSync(newPath)) {
            return "A file with this name already exists.";
          } else if (fs.isDirectorySync(newPath)) {
            return "A folder with this name already exists.";
          }
        }
        return null;
      };
      return RenameDialog.__super__.initialize.call(this, options);
    };

    return RenameDialog;

  })(InputDialog);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvZGlhbG9ncy9yZW5hbWUtZGlhbG9nLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxtQ0FBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxTQUFSLENBQUwsQ0FBQTs7QUFBQSxFQUNBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQURQLENBQUE7O0FBQUEsRUFFQSxXQUFBLEdBQWMsT0FBQSxDQUFRLDBCQUFSLENBRmQsQ0FBQTs7QUFBQSxFQUlBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFHSixtQ0FBQSxDQUFBOztBQUFhLElBQUEsc0JBQUUsYUFBRixFQUFrQixJQUFsQixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsZ0JBQUEsYUFDYixDQUFBO0FBQUEsTUFENEIsSUFBQyxDQUFBLE9BQUEsSUFDN0IsQ0FBQTtBQUFBLE1BQUEsOENBQU07QUFBQSxRQUFDLE1BQUEsRUFBTyxtQkFBUjtPQUFOLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsMkJBR0EsVUFBQSxHQUFZLFNBQUEsR0FBQTtBQUNWLFVBQUEsT0FBQTtBQUFBLE1BQUEsSUFBQyxDQUFBLFFBQUQsR0FBWSxJQUFDLENBQUEsSUFBSSxDQUFDLFdBQU4sQ0FBQSxDQUFaLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLElBQUksQ0FBQyxlQUFOLENBQUEsQ0FEWCxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFDLENBQUEsSUFBSSxDQUFDLFNBQU4sQ0FBQSxDQUFpQixDQUFDLGVBQWxCLENBQUEsQ0FGakIsQ0FBQTtBQUFBLE1BSUEsT0FBQSxHQUFVLEVBSlYsQ0FBQTtBQUFBLE1BS0EsT0FBTyxDQUFDLFdBQVIsR0FBc0IsSUFBQyxDQUFBLFFBTHZCLENBQUE7QUFBQSxNQU9BLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLElBQUQsR0FBQTtBQUNqQixjQUFBLGFBQUE7QUFBQSxVQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVAsQ0FBQTtBQUFBLFVBQ0EsT0FBQSxHQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBQyxDQUFBLGFBQVgsRUFBMEIsSUFBMUIsQ0FEVixDQUFBO0FBR0EsVUFBQSxJQUFHLEtBQUMsQ0FBQSxPQUFELEtBQVksT0FBZjtBQUNFLFlBQUEsRUFBRSxDQUFDLFFBQUgsQ0FBWSxLQUFDLENBQUEsT0FBYixFQUFzQixPQUF0QixDQUFBLENBQUE7bUJBQ0EsS0FBQyxDQUFBLGFBQWEsQ0FBQyxZQUFmLENBQUEsRUFGRjtXQUppQjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBUG5CLENBQUE7QUFBQSxNQWVBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsSUFBRCxHQUFBO0FBQ2pCLFlBQUEsYUFBQTtBQUFBLFFBQUEsSUFBQSxHQUFPLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBUCxDQUFBO0FBRUEsUUFBQSxJQUFHLElBQUksQ0FBQyxNQUFMLEtBQWUsQ0FBbEI7QUFDRSxpQkFBTyw0QkFBUCxDQURGO1NBRkE7QUFLQSxRQUFBLElBQUcsSUFBQSxLQUFRLElBQUMsQ0FBQSxRQUFaO0FBQ0UsVUFBQSxPQUFBLEdBQVUsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFDLENBQUEsYUFBWCxFQUEwQixJQUExQixDQUFWLENBQUE7QUFFQSxVQUFBLElBQUcsRUFBRSxDQUFDLFVBQUgsQ0FBYyxPQUFkLENBQUg7QUFDRSxtQkFBTyx1Q0FBUCxDQURGO1dBQUEsTUFFSyxJQUFHLEVBQUUsQ0FBQyxlQUFILENBQW1CLE9BQW5CLENBQUg7QUFDSCxtQkFBTyx5Q0FBUCxDQURHO1dBTFA7U0FMQTtBQWFBLGVBQU8sSUFBUCxDQWRpQjtNQUFBLENBZm5CLENBQUE7YUErQkEsNkNBQU0sT0FBTixFQWhDVTtJQUFBLENBSFosQ0FBQTs7d0JBQUE7O0tBSHlCLFlBTDNCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/dialogs/rename-dialog.coffee
