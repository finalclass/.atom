(function() {
  var ListFileView, ListItemView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ListItemView = require('./list-item-view');

  module.exports = ListFileView = (function(_super) {
    __extends(ListFileView, _super);

    function ListFileView() {
      ListFileView.__super__.constructor.call(this);
    }

    ListFileView.prototype.initialize = function(containerView, index, fileController) {
      var nameExtension;
      this.index = index;
      ListFileView.__super__.initialize.call(this, containerView, fileController);
      this.classList.add('file');
      this.name = document.createElement('td');
      this.extension = document.createElement('td');
      nameExtension = fileController.getNameExtension();
      this.name.textContent = nameExtension[0];
      this.name.classList.add('icon', 'icon-file-text');
      this.extension.textContent = nameExtension[1];
      this.extension.classList.add('extension');
      this.appendChild(this.name);
      return this.appendChild(this.extension);
    };

    ListFileView.prototype.getName = function() {
      return this.itemController.getName();
    };

    ListFileView.prototype.getPath = function() {
      return this.itemController.getPath();
    };

    ListFileView.prototype.isSelectable = function() {
      return true;
    };

    return ListFileView;

  })(ListItemView);

  module.exports = document.registerElement('list-file-view', {
    prototype: ListFileView.prototype,
    "extends": 'tr'
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbGlzdC1maWxlLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDBCQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxZQUFBLEdBQWUsT0FBQSxDQUFRLGtCQUFSLENBQWYsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixtQ0FBQSxDQUFBOztBQUFhLElBQUEsc0JBQUEsR0FBQTtBQUNYLE1BQUEsNENBQUEsQ0FBQSxDQURXO0lBQUEsQ0FBYjs7QUFBQSwyQkFHQSxVQUFBLEdBQVksU0FBQyxhQUFELEVBQWlCLEtBQWpCLEVBQXdCLGNBQXhCLEdBQUE7QUFDVixVQUFBLGFBQUE7QUFBQSxNQUQwQixJQUFDLENBQUEsUUFBQSxLQUMzQixDQUFBO0FBQUEsTUFBQSw2Q0FBTSxhQUFOLEVBQXFCLGNBQXJCLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFaLENBQWdCLE1BQWhCLENBREEsQ0FBQTtBQUFBLE1BR0EsSUFBQyxDQUFBLElBQUQsR0FBUSxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUhSLENBQUE7QUFBQSxNQUlBLElBQUMsQ0FBQSxTQUFELEdBQWEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FKYixDQUFBO0FBQUEsTUFNQSxhQUFBLEdBQWdCLGNBQWMsQ0FBQyxnQkFBZixDQUFBLENBTmhCLENBQUE7QUFBQSxNQVFBLElBQUMsQ0FBQSxJQUFJLENBQUMsV0FBTixHQUFvQixhQUFjLENBQUEsQ0FBQSxDQVJsQyxDQUFBO0FBQUEsTUFTQSxJQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQixFQUE0QixnQkFBNUIsQ0FUQSxDQUFBO0FBQUEsTUFXQSxJQUFDLENBQUEsU0FBUyxDQUFDLFdBQVgsR0FBeUIsYUFBYyxDQUFBLENBQUEsQ0FYdkMsQ0FBQTtBQUFBLE1BWUEsSUFBQyxDQUFBLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBckIsQ0FBeUIsV0FBekIsQ0FaQSxDQUFBO0FBQUEsTUFjQSxJQUFDLENBQUEsV0FBRCxDQUFhLElBQUMsQ0FBQSxJQUFkLENBZEEsQ0FBQTthQWVBLElBQUMsQ0FBQSxXQUFELENBQWEsSUFBQyxDQUFBLFNBQWQsRUFoQlU7SUFBQSxDQUhaLENBQUE7O0FBQUEsMkJBcUJBLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDUCxhQUFPLElBQUMsQ0FBQSxjQUFjLENBQUMsT0FBaEIsQ0FBQSxDQUFQLENBRE87SUFBQSxDQXJCVCxDQUFBOztBQUFBLDJCQXdCQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1AsYUFBTyxJQUFDLENBQUEsY0FBYyxDQUFDLE9BQWhCLENBQUEsQ0FBUCxDQURPO0lBQUEsQ0F4QlQsQ0FBQTs7QUFBQSwyQkEyQkEsWUFBQSxHQUFjLFNBQUEsR0FBQTtBQUNaLGFBQU8sSUFBUCxDQURZO0lBQUEsQ0EzQmQsQ0FBQTs7d0JBQUE7O0tBRnlCLGFBSDNCLENBQUE7O0FBQUEsRUFtQ0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsZ0JBQXpCLEVBQTJDO0FBQUEsSUFBQSxTQUFBLEVBQVcsWUFBWSxDQUFDLFNBQXhCO0FBQUEsSUFBbUMsU0FBQSxFQUFTLElBQTVDO0dBQTNDLENBbkNqQixDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/list-file-view.coffee
