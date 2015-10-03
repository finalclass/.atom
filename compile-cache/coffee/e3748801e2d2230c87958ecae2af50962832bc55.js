(function() {
  var BaseItemView, ListItemView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BaseItemView = require('./base-item-view');

  module.exports = ListItemView = (function(_super) {
    __extends(ListItemView, _super);

    function ListItemView() {
      ListItemView.__super__.constructor.call(this);
    }

    return ListItemView;

  })(BaseItemView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbGlzdC1pdGVtLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDBCQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxZQUFBLEdBQWUsT0FBQSxDQUFRLGtCQUFSLENBQWYsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixtQ0FBQSxDQUFBOztBQUFhLElBQUEsc0JBQUEsR0FBQTtBQUNYLE1BQUEsNENBQUEsQ0FBQSxDQURXO0lBQUEsQ0FBYjs7d0JBQUE7O0tBRnlCLGFBSDNCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/list-item-view.coffee
