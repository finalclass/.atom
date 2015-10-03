(function() {
  var MenuItem;

  module.exports = MenuItem = (function() {
    function MenuItem(parent, id, name, callback) {
      this.parent = parent;
      this.id = id;
      this.name = name;
      this.callback = callback != null ? callback : null;
      this.title = "" + this.id + " " + this.name;
      this.ids = [];
      this.subMenuItems = {};
    }

    MenuItem.prototype.addMenuItem = function(id, name, callback) {
      var subMenuItem;
      if (callback == null) {
        callback = null;
      }
      subMenuItem = new MenuItem(this, id, name, callback);
      this.ids.push(id);
      this.subMenuItems[id] = subMenuItem;
      return subMenuItem;
    };

    MenuItem.prototype.getMenuItem = function(id) {
      return this.subMenuItems[id];
    };

    MenuItem.prototype.getMenuItemWithTitle = function(title) {
      var id, subMenuItem, _i, _len, _ref;
      _ref = this.ids;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        id = _ref[_i];
        subMenuItem = this.subMenuItems[id];
        if (subMenuItem.title === title) {
          return subMenuItem;
        }
      }
      return null;
    };

    return MenuItem;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvbWVudS9tZW51LWl0ZW0uY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLFFBQUE7O0FBQUEsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBRVMsSUFBQSxrQkFBRSxNQUFGLEVBQVcsRUFBWCxFQUFnQixJQUFoQixFQUF1QixRQUF2QixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsU0FBQSxNQUNiLENBQUE7QUFBQSxNQURxQixJQUFDLENBQUEsS0FBQSxFQUN0QixDQUFBO0FBQUEsTUFEMEIsSUFBQyxDQUFBLE9BQUEsSUFDM0IsQ0FBQTtBQUFBLE1BRGlDLElBQUMsQ0FBQSw4QkFBQSxXQUFTLElBQzNDLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsRUFBQSxHQUFHLElBQUMsQ0FBQSxFQUFKLEdBQU8sR0FBUCxHQUFVLElBQUMsQ0FBQSxJQUFwQixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsR0FBRCxHQUFPLEVBRFAsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsRUFGaEIsQ0FEVztJQUFBLENBQWI7O0FBQUEsdUJBS0EsV0FBQSxHQUFhLFNBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxRQUFYLEdBQUE7QUFDWCxVQUFBLFdBQUE7O1FBRHNCLFdBQVM7T0FDL0I7QUFBQSxNQUFBLFdBQUEsR0FBa0IsSUFBQSxRQUFBLENBQVMsSUFBVCxFQUFZLEVBQVosRUFBZ0IsSUFBaEIsRUFBc0IsUUFBdEIsQ0FBbEIsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsRUFBVixDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxZQUFhLENBQUEsRUFBQSxDQUFkLEdBQW9CLFdBSHBCLENBQUE7QUFLQSxhQUFPLFdBQVAsQ0FOVztJQUFBLENBTGIsQ0FBQTs7QUFBQSx1QkFhQSxXQUFBLEdBQWEsU0FBQyxFQUFELEdBQUE7QUFDWCxhQUFPLElBQUMsQ0FBQSxZQUFhLENBQUEsRUFBQSxDQUFyQixDQURXO0lBQUEsQ0FiYixDQUFBOztBQUFBLHVCQWdCQSxvQkFBQSxHQUFzQixTQUFDLEtBQUQsR0FBQTtBQUNwQixVQUFBLCtCQUFBO0FBQUE7QUFBQSxXQUFBLDJDQUFBO3NCQUFBO0FBQ0UsUUFBQSxXQUFBLEdBQWMsSUFBQyxDQUFBLFlBQWEsQ0FBQSxFQUFBLENBQTVCLENBQUE7QUFFQSxRQUFBLElBQUcsV0FBVyxDQUFDLEtBQVosS0FBcUIsS0FBeEI7QUFDRSxpQkFBTyxXQUFQLENBREY7U0FIRjtBQUFBLE9BQUE7QUFNQSxhQUFPLElBQVAsQ0FQb0I7SUFBQSxDQWhCdEIsQ0FBQTs7b0JBQUE7O01BSEYsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/menu/menu-item.coffee
