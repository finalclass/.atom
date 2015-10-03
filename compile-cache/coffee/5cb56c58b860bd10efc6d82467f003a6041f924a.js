(function() {
  var ListDirectoryView, ListItemView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ListItemView = require('./list-item-view');

  module.exports = ListDirectoryView = (function(_super) {
    __extends(ListDirectoryView, _super);

    function ListDirectoryView() {
      ListDirectoryView.__super__.constructor.call(this);
    }

    ListDirectoryView.prototype.initialize = function(containerView, index, parentDirectory, directoryController) {
      this.index = index;
      this.parentDirectory = parentDirectory;
      ListDirectoryView.__super__.initialize.call(this, containerView, directoryController);
      this.classList.add('directory');
      this.name = document.createElement('td');
      this.extension = document.createElement('td');
      this.name.textContent = this.getName();
      if (this.parentDirectory) {
        this.name.classList.add('icon', 'icon-arrow-up');
      } else {
        this.name.classList.add('icon', 'icon-file-directory');
      }
      this.appendChild(this.name);
      return this.appendChild(this.extension);
    };

    ListDirectoryView.prototype.getName = function() {
      if (this.parentDirectory) {
        return "..";
      }
      return this.itemController.getName();
    };

    ListDirectoryView.prototype.canRename = function() {
      if (this.parentDirectory) {
        return false;
      }
      return ListDirectoryView.__super__.canRename.call(this);
    };

    ListDirectoryView.prototype.getPath = function() {
      return this.itemController.getPath();
    };

    ListDirectoryView.prototype.isSelectable = function() {
      return !this.parentDirectory;
    };

    ListDirectoryView.prototype.performOpenAction = function() {
      if (this.parentDirectory) {
        return this.getContainerView().openParentDirectory();
      } else {
        return ListDirectoryView.__super__.performOpenAction.call(this);
      }
    };

    return ListDirectoryView;

  })(ListItemView);

  module.exports = document.registerElement('list-directory-view', {
    prototype: ListDirectoryView.prototype,
    "extends": 'tr'
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbGlzdC1kaXJlY3Rvcnktdmlldy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsK0JBQUE7SUFBQTttU0FBQTs7QUFBQSxFQUFBLFlBQUEsR0FBZSxPQUFBLENBQVEsa0JBQVIsQ0FBZixDQUFBOztBQUFBLEVBRUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLHdDQUFBLENBQUE7O0FBQWEsSUFBQSwyQkFBQSxHQUFBO0FBQ1gsTUFBQSxpREFBQSxDQUFBLENBRFc7SUFBQSxDQUFiOztBQUFBLGdDQUdBLFVBQUEsR0FBWSxTQUFDLGFBQUQsRUFBaUIsS0FBakIsRUFBeUIsZUFBekIsRUFBMEMsbUJBQTFDLEdBQUE7QUFDVixNQUQwQixJQUFDLENBQUEsUUFBQSxLQUMzQixDQUFBO0FBQUEsTUFEa0MsSUFBQyxDQUFBLGtCQUFBLGVBQ25DLENBQUE7QUFBQSxNQUFBLGtEQUFNLGFBQU4sRUFBcUIsbUJBQXJCLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFaLENBQWdCLFdBQWhCLENBREEsQ0FBQTtBQUFBLE1BR0EsSUFBQyxDQUFBLElBQUQsR0FBUSxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUhSLENBQUE7QUFBQSxNQUlBLElBQUMsQ0FBQSxTQUFELEdBQWEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FKYixDQUFBO0FBQUEsTUFNQSxJQUFDLENBQUEsSUFBSSxDQUFDLFdBQU4sR0FBb0IsSUFBQyxDQUFBLE9BQUQsQ0FBQSxDQU5wQixDQUFBO0FBUUEsTUFBQSxJQUFHLElBQUMsQ0FBQSxlQUFKO0FBQ0UsUUFBQSxJQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQixFQUE0QixlQUE1QixDQUFBLENBREY7T0FBQSxNQUFBO0FBR0UsUUFBQSxJQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQixFQUE0QixxQkFBNUIsQ0FBQSxDQUhGO09BUkE7QUFBQSxNQWFBLElBQUMsQ0FBQSxXQUFELENBQWEsSUFBQyxDQUFBLElBQWQsQ0FiQSxDQUFBO2FBY0EsSUFBQyxDQUFBLFdBQUQsQ0FBYSxJQUFDLENBQUEsU0FBZCxFQWZVO0lBQUEsQ0FIWixDQUFBOztBQUFBLGdDQW9CQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1AsTUFBQSxJQUFHLElBQUMsQ0FBQSxlQUFKO0FBQ0UsZUFBTyxJQUFQLENBREY7T0FBQTtBQUdBLGFBQU8sSUFBQyxDQUFBLGNBQWMsQ0FBQyxPQUFoQixDQUFBLENBQVAsQ0FKTztJQUFBLENBcEJULENBQUE7O0FBQUEsZ0NBMEJBLFNBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxNQUFBLElBQUcsSUFBQyxDQUFBLGVBQUo7QUFDRSxlQUFPLEtBQVAsQ0FERjtPQUFBO0FBR0EsYUFBTywrQ0FBQSxDQUFQLENBSlM7SUFBQSxDQTFCWCxDQUFBOztBQUFBLGdDQWdDQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQ1AsSUFBQyxDQUFBLGNBQWMsQ0FBQyxPQUFoQixDQUFBLEVBRE87SUFBQSxDQWhDVCxDQUFBOztBQUFBLGdDQW1DQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osYUFBTyxDQUFBLElBQUUsQ0FBQSxlQUFULENBRFk7SUFBQSxDQW5DZCxDQUFBOztBQUFBLGdDQXNDQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7QUFDakIsTUFBQSxJQUFHLElBQUMsQ0FBQSxlQUFKO2VBQ0UsSUFBQyxDQUFBLGdCQUFELENBQUEsQ0FBbUIsQ0FBQyxtQkFBcEIsQ0FBQSxFQURGO09BQUEsTUFBQTtlQUdFLHVEQUFBLEVBSEY7T0FEaUI7SUFBQSxDQXRDbkIsQ0FBQTs7NkJBQUE7O0tBRjhCLGFBSGhDLENBQUE7O0FBQUEsRUFpREEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBUSxDQUFDLGVBQVQsQ0FBeUIscUJBQXpCLEVBQWdEO0FBQUEsSUFBQSxTQUFBLEVBQVcsaUJBQWlCLENBQUMsU0FBN0I7QUFBQSxJQUF3QyxTQUFBLEVBQVMsSUFBakQ7R0FBaEQsQ0FqRGpCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/list-directory-view.coffee
