(function() {
  var InputDialog, NewDirectoryDialog, fs,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  fs = require('fs-plus');

  InputDialog = require('@aki77/atom-input-dialog');

  module.exports = NewDirectoryDialog = (function(_super) {
    __extends(NewDirectoryDialog, _super);

    function NewDirectoryDialog(containerView, directory) {
      this.containerView = containerView;
      this.directory = directory;
      NewDirectoryDialog.__super__.constructor.call(this, {
        prompt: 'Enter a name for the new folder:'
      });
    }

    NewDirectoryDialog.prototype.initialize = function() {
      var options;
      options = {};
      options.callback = (function(_this) {
        return function(text) {
          var name, sub;
          name = text.trim();
          sub = _this.directory.getSubdirectory(name);
          return sub.create().then(function(created) {
            if (created) {
              _this.containerView.refreshDirectory();
              return _this.containerView.highlightIndexWithName(sub.getBaseName());
            }
          });
        };
      })(this);
      options.validate = function(text) {
        var name, sub;
        name = text.trim();
        if (name.length === 0) {
          return 'The folder name may not be empty.';
        }
        sub = this.directory.getSubdirectory(name);
        if (fs.isDirectorySync(sub.getRealPathSync())) {
          return "A folder with this name already exists.";
        }
        return null;
      };
      return NewDirectoryDialog.__super__.initialize.call(this, options);
    };

    return NewDirectoryDialog;

  })(InputDialog);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvZGlhbG9ncy9uZXctZGlyZWN0b3J5LWRpYWxvZy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsbUNBQUE7SUFBQTttU0FBQTs7QUFBQSxFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsU0FBUixDQUFMLENBQUE7O0FBQUEsRUFDQSxXQUFBLEdBQWMsT0FBQSxDQUFRLDBCQUFSLENBRGQsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSix5Q0FBQSxDQUFBOztBQUFhLElBQUEsNEJBQUUsYUFBRixFQUFrQixTQUFsQixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsZ0JBQUEsYUFDYixDQUFBO0FBQUEsTUFENEIsSUFBQyxDQUFBLFlBQUEsU0FDN0IsQ0FBQTtBQUFBLE1BQUEsb0RBQU07QUFBQSxRQUFDLE1BQUEsRUFBTyxrQ0FBUjtPQUFOLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsaUNBR0EsVUFBQSxHQUFZLFNBQUEsR0FBQTtBQUNWLFVBQUEsT0FBQTtBQUFBLE1BQUEsT0FBQSxHQUFVLEVBQVYsQ0FBQTtBQUFBLE1BQ0EsT0FBTyxDQUFDLFFBQVIsR0FBbUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO0FBQ2pCLGNBQUEsU0FBQTtBQUFBLFVBQUEsSUFBQSxHQUFPLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBUCxDQUFBO0FBQUEsVUFDQSxHQUFBLEdBQU0sS0FBQyxDQUFBLFNBQVMsQ0FBQyxlQUFYLENBQTJCLElBQTNCLENBRE4sQ0FBQTtpQkFHQSxHQUFHLENBQUMsTUFBSixDQUFBLENBQVksQ0FBQyxJQUFiLENBQWtCLFNBQUMsT0FBRCxHQUFBO0FBQ2hCLFlBQUEsSUFBRyxPQUFIO0FBQ0UsY0FBQSxLQUFDLENBQUEsYUFBYSxDQUFDLGdCQUFmLENBQUEsQ0FBQSxDQUFBO3FCQUNBLEtBQUMsQ0FBQSxhQUFhLENBQUMsc0JBQWYsQ0FBc0MsR0FBRyxDQUFDLFdBQUosQ0FBQSxDQUF0QyxFQUZGO2FBRGdCO1VBQUEsQ0FBbEIsRUFKaUI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQURuQixDQUFBO0FBQUEsTUFVQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLElBQUQsR0FBQTtBQUNqQixZQUFBLFNBQUE7QUFBQSxRQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFBLENBQVAsQ0FBQTtBQUVBLFFBQUEsSUFBRyxJQUFJLENBQUMsTUFBTCxLQUFlLENBQWxCO0FBQ0UsaUJBQU8sbUNBQVAsQ0FERjtTQUZBO0FBQUEsUUFLQSxHQUFBLEdBQU0sSUFBQyxDQUFBLFNBQVMsQ0FBQyxlQUFYLENBQTJCLElBQTNCLENBTE4sQ0FBQTtBQU9BLFFBQUEsSUFBRyxFQUFFLENBQUMsZUFBSCxDQUFtQixHQUFHLENBQUMsZUFBSixDQUFBLENBQW5CLENBQUg7QUFDRSxpQkFBTyx5Q0FBUCxDQURGO1NBUEE7QUFVQSxlQUFPLElBQVAsQ0FYaUI7TUFBQSxDQVZuQixDQUFBO2FBdUJBLG1EQUFNLE9BQU4sRUF4QlU7SUFBQSxDQUhaLENBQUE7OzhCQUFBOztLQUYrQixZQUpqQyxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/dialogs/new-directory-dialog.coffee
