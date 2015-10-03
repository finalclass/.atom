(function() {
  var InputDialog, NewFileDialog, fs,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  fs = require('fs-plus');

  InputDialog = require('@aki77/atom-input-dialog');

  module.exports = NewFileDialog = (function(_super) {
    __extends(NewFileDialog, _super);

    function NewFileDialog(containerView, directory) {
      this.containerView = containerView;
      this.directory = directory;
      NewFileDialog.__super__.constructor.call(this, {
        prompt: 'Enter a name for the new file:'
      });
    }

    NewFileDialog.prototype.initialize = function() {
      var options;
      options = {};
      options.callback = (function(_this) {
        return function(text) {
          var file, name;
          name = text.trim();
          file = _this.directory.getFile(name);
          return file.create().then(function(created) {
            if (created) {
              _this.containerView.refreshDirectory();
              _this.containerView.highlightIndexWithName(file.getBaseName());
              return atom.workspace.open(file.getPath());
            }
          });
        };
      })(this);
      options.validate = function(text) {
        var file, name;
        name = text.trim();
        if (name.length === 0) {
          return 'The file name may not be empty.';
        }
        file = this.directory.getFile(name);
        if (fs.isFileSync(file.getRealPathSync())) {
          return "A file with this name already exists.";
        }
        return null;
      };
      return NewFileDialog.__super__.initialize.call(this, options);
    };

    return NewFileDialog;

  })(InputDialog);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvZGlhbG9ncy9uZXctZmlsZS1kaWFsb2cuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDhCQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLFNBQVIsQ0FBTCxDQUFBOztBQUFBLEVBQ0EsV0FBQSxHQUFjLE9BQUEsQ0FBUSwwQkFBUixDQURkLENBQUE7O0FBQUEsRUFHQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRUosb0NBQUEsQ0FBQTs7QUFBYSxJQUFBLHVCQUFFLGFBQUYsRUFBa0IsU0FBbEIsR0FBQTtBQUNYLE1BRFksSUFBQyxDQUFBLGdCQUFBLGFBQ2IsQ0FBQTtBQUFBLE1BRDRCLElBQUMsQ0FBQSxZQUFBLFNBQzdCLENBQUE7QUFBQSxNQUFBLCtDQUFNO0FBQUEsUUFBQyxNQUFBLEVBQU8sZ0NBQVI7T0FBTixDQUFBLENBRFc7SUFBQSxDQUFiOztBQUFBLDRCQUdBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixVQUFBLE9BQUE7QUFBQSxNQUFBLE9BQUEsR0FBVSxFQUFWLENBQUE7QUFBQSxNQUNBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLElBQUQsR0FBQTtBQUNqQixjQUFBLFVBQUE7QUFBQSxVQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVAsQ0FBQTtBQUFBLFVBQ0EsSUFBQSxHQUFPLEtBQUMsQ0FBQSxTQUFTLENBQUMsT0FBWCxDQUFtQixJQUFuQixDQURQLENBQUE7aUJBR0EsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFhLENBQUMsSUFBZCxDQUFtQixTQUFDLE9BQUQsR0FBQTtBQUNqQixZQUFBLElBQUcsT0FBSDtBQUNFLGNBQUEsS0FBQyxDQUFBLGFBQWEsQ0FBQyxnQkFBZixDQUFBLENBQUEsQ0FBQTtBQUFBLGNBQ0EsS0FBQyxDQUFBLGFBQWEsQ0FBQyxzQkFBZixDQUFzQyxJQUFJLENBQUMsV0FBTCxDQUFBLENBQXRDLENBREEsQ0FBQTtxQkFFQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQWYsQ0FBb0IsSUFBSSxDQUFDLE9BQUwsQ0FBQSxDQUFwQixFQUhGO2FBRGlCO1VBQUEsQ0FBbkIsRUFKaUI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQURuQixDQUFBO0FBQUEsTUFXQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLElBQUQsR0FBQTtBQUNqQixZQUFBLFVBQUE7QUFBQSxRQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVAsQ0FBQTtBQUVBLFFBQUEsSUFBRyxJQUFJLENBQUMsTUFBTCxLQUFlLENBQWxCO0FBQ0UsaUJBQU8saUNBQVAsQ0FERjtTQUZBO0FBQUEsUUFLQSxJQUFBLEdBQU8sSUFBQyxDQUFBLFNBQVMsQ0FBQyxPQUFYLENBQW1CLElBQW5CLENBTFAsQ0FBQTtBQU9BLFFBQUEsSUFBRyxFQUFFLENBQUMsVUFBSCxDQUFjLElBQUksQ0FBQyxlQUFMLENBQUEsQ0FBZCxDQUFIO0FBQ0UsaUJBQU8sdUNBQVAsQ0FERjtTQVBBO0FBVUEsZUFBTyxJQUFQLENBWGlCO01BQUEsQ0FYbkIsQ0FBQTthQXdCQSw4Q0FBTSxPQUFOLEVBekJVO0lBQUEsQ0FIWixDQUFBOzt5QkFBQTs7S0FGMEIsWUFKNUIsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/dialogs/new-file-dialog.coffee
