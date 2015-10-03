(function() {
  var Directory, DriveListView, SelectListView, drivelist,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  drivelist = require('drivelist');

  Directory = require('atom').Directory;

  SelectListView = require('atom-space-pen-views').SelectListView;

  module.exports = DriveListView = (function(_super) {
    __extends(DriveListView, _super);

    function DriveListView(actions, fromView) {
      this.actions = actions;
      this.fromView = fromView;
      DriveListView.__super__.constructor.call(this);
    }

    DriveListView.prototype.initialize = function() {
      DriveListView.__super__.initialize.call(this);
      if (process.platform === "darwin") {
        this.refreshDarwinItems();
      } else {
        drivelist.list((function(_this) {
          return function(error, disks) {
            if (!error) {
              return _this.refreshItems(disks);
            }
          };
        })(this));
      }
      this.addClass('overlay from-top');
      if (this.panel == null) {
        this.panel = atom.workspace.addModalPanel({
          item: this
        });
      }
      this.panel.show();
      return this.focusFilterEditor();
    };

    DriveListView.prototype.refreshDarwinItems = function() {
      var directory, entry, items, _i, _len, _ref;
      items = [];
      directory = new Directory("/Volumes");
      _ref = directory.getEntriesSync();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        entry = _ref[_i];
        if (entry.isDirectory()) {
          items.push(this.createDarwinItem(entry.getBaseName()));
        }
      }
      return this.setItems(items);
    };

    DriveListView.prototype.refreshItems = function(disks) {
      var createItem, disk, item, items, _i, _len;
      items = [];
      createItem = this.createLinuxItem;
      if (process.platform === "win32") {
        createItem = this.createWindowsItem;
      }
      for (_i = 0, _len = disks.length; _i < _len; _i++) {
        disk = disks[_i];
        item = createItem(disk);
        if (item !== null) {
          items.push(item);
        }
      }
      return this.setItems(items);
    };

    DriveListView.prototype.createDarwinItem = function(volume) {
      var item;
      item = {};
      item.path = "/Volumes/" + volume;
      item.primary = volume;
      item.secondary = item.path;
      item.text = volume;
      return item;
    };

    DriveListView.prototype.createLinuxItem = function(disk) {
      var item;
      if (disk.mountpoint == null) {
        return null;
      }
      item = {};
      item.path = disk.mountpoint;
      item.primary = disk.mountpoint;
      item.secondary = disk.description;
      item.text = item.primary + " " + item.secondary;
      return item;
    };

    DriveListView.prototype.createWindowsItem = function(disk) {
      var item;
      item = {};
      item.path = disk.mountpoint + "\\";
      item.primary = disk.mountpoint;
      item.secondary = disk.description;
      item.text = item.primary + " " + item.secondary;
      return item;
    };

    DriveListView.prototype.getFilterKey = function() {
      return "text";
    };

    DriveListView.prototype.viewForItem = function(item) {
      return "<li class='two-lines'>\n<div class='primary-line'>" + item.primary + "</div>\n<div class='secondary-line'>" + item.secondary + "</div>\n</li>";
    };

    DriveListView.prototype.confirmed = function(item) {
      this.actions.goDirectory(new Directory(item.path));
      return this.cancel();
    };

    DriveListView.prototype.cancelled = function() {
      var _ref;
      this.hide();
      if ((_ref = this.panel) != null) {
        _ref.destroy();
      }
      if (this.fromView) {
        return this.actions.main.mainView.refocusLastView();
      }
    };

    return DriveListView;

  })(SelectListView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvZHJpdmUtbGlzdC12aWV3LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxtREFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUEsU0FBQSxHQUFZLE9BQUEsQ0FBUSxXQUFSLENBQVosQ0FBQTs7QUFBQSxFQUNDLFlBQWEsT0FBQSxDQUFRLE1BQVIsRUFBYixTQURELENBQUE7O0FBQUEsRUFFQyxpQkFBa0IsT0FBQSxDQUFRLHNCQUFSLEVBQWxCLGNBRkQsQ0FBQTs7QUFBQSxFQUlBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFFSixvQ0FBQSxDQUFBOztBQUFhLElBQUEsdUJBQUUsT0FBRixFQUFZLFFBQVosR0FBQTtBQUNYLE1BRFksSUFBQyxDQUFBLFVBQUEsT0FDYixDQUFBO0FBQUEsTUFEc0IsSUFBQyxDQUFBLFdBQUEsUUFDdkIsQ0FBQTtBQUFBLE1BQUEsNkNBQUEsQ0FBQSxDQURXO0lBQUEsQ0FBYjs7QUFBQSw0QkFHQSxVQUFBLEdBQVksU0FBQSxHQUFBO0FBQ1YsTUFBQSw0Q0FBQSxDQUFBLENBQUE7QUFFQSxNQUFBLElBQUcsT0FBTyxDQUFDLFFBQVIsS0FBb0IsUUFBdkI7QUFDRSxRQUFBLElBQUMsQ0FBQSxrQkFBRCxDQUFBLENBQUEsQ0FERjtPQUFBLE1BQUE7QUFHRSxRQUFBLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtpQkFBQSxTQUFDLEtBQUQsRUFBUSxLQUFSLEdBQUE7QUFDYixZQUFBLElBQUcsQ0FBQSxLQUFIO3FCQUNFLEtBQUMsQ0FBQSxZQUFELENBQWMsS0FBZCxFQURGO2FBRGE7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFmLENBQUEsQ0FIRjtP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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/drive-list-view.coffee
