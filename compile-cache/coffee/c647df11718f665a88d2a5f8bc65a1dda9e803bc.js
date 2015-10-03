(function() {
  var Directory, ProjectListView, SelectListView, drivelist,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  drivelist = require('drivelist');

  Directory = require('atom').Directory;

  SelectListView = require('atom-space-pen-views').SelectListView;

  module.exports = ProjectListView = (function(_super) {
    __extends(ProjectListView, _super);

    function ProjectListView(actions, fromView) {
      this.actions = actions;
      this.fromView = fromView;
      ProjectListView.__super__.constructor.call(this);
    }

    ProjectListView.prototype.initialize = function() {
      ProjectListView.__super__.initialize.call(this);
      this.refreshItems();
      this.addClass('overlay from-top');
      if (this.panel == null) {
        this.panel = atom.workspace.addModalPanel({
          item: this
        });
      }
      this.panel.show();
      return this.focusFilterEditor();
    };

    ProjectListView.prototype.refreshItems = function() {
      var items, project, projects, _i, _len;
      items = [];
      projects = atom.project.getDirectories();
      for (_i = 0, _len = projects.length; _i < _len; _i++) {
        project = projects[_i];
        items.push(this.createItem(project));
      }
      return this.setItems(items);
    };

    ProjectListView.prototype.createItem = function(project) {
      var item;
      item = {};
      item.project = project;
      item.primary = project.getBaseName();
      item.secondary = project.getPath();
      return item;
    };

    ProjectListView.prototype.getFilterKey = function() {
      return "secondary";
    };

    ProjectListView.prototype.viewForItem = function(item) {
      return "<li class='two-lines'>\n<div class='primary-line'>" + item.primary + "</div>\n<div class='secondary-line'>" + item.secondary + "</div>\n</li>";
    };

    ProjectListView.prototype.confirmed = function(item) {
      this.actions.goDirectory(item.project);
      return this.cancel();
    };

    ProjectListView.prototype.cancelled = function() {
      var _ref;
      this.hide();
      if ((_ref = this.panel) != null) {
        _ref.destroy();
      }
      if (this.fromView) {
        return this.actions.main.mainView.refocusLastView();
      }
    };

    return ProjectListView;

  })(SelectListView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvcHJvamVjdC1saXN0LXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHFEQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxTQUFBLEdBQVksT0FBQSxDQUFRLFdBQVIsQ0FBWixDQUFBOztBQUFBLEVBQ0MsWUFBYSxPQUFBLENBQVEsTUFBUixFQUFiLFNBREQsQ0FBQTs7QUFBQSxFQUVDLGlCQUFrQixPQUFBLENBQVEsc0JBQVIsRUFBbEIsY0FGRCxDQUFBOztBQUFBLEVBSUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLHNDQUFBLENBQUE7O0FBQWEsSUFBQSx5QkFBRSxPQUFGLEVBQVksUUFBWixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsVUFBQSxPQUNiLENBQUE7QUFBQSxNQURzQixJQUFDLENBQUEsV0FBQSxRQUN2QixDQUFBO0FBQUEsTUFBQSwrQ0FBQSxDQUFBLENBRFc7SUFBQSxDQUFiOztBQUFBLDhCQUdBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixNQUFBLDhDQUFBLENBQUEsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxRQUFELENBQVUsa0JBQVYsQ0FIQSxDQUFBOztRQUlBLElBQUMsQ0FBQSxRQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBZixDQUE2QjtBQUFBLFVBQUEsSUFBQSxFQUFNLElBQU47U0FBN0I7T0FKVjtBQUFBLE1BS0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQUEsQ0FMQSxDQUFBO2FBTUEsSUFBQyxDQUFBLGlCQUFELENBQUEsRUFQVTtJQUFBLENBSFosQ0FBQTs7QUFBQSw4QkFZQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osVUFBQSxrQ0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFRLEVBQVIsQ0FBQTtBQUFBLE1BQ0EsUUFBQSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYixDQUFBLENBRFgsQ0FBQTtBQUdBLFdBQUEsK0NBQUE7K0JBQUE7QUFDRSxRQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBQyxDQUFBLFVBQUQsQ0FBWSxPQUFaLENBQVgsQ0FBQSxDQURGO0FBQUEsT0FIQTthQU1BLElBQUMsQ0FBQSxRQUFELENBQVUsS0FBVixFQVBZO0lBQUEsQ0FaZCxDQUFBOztBQUFBLDhCQXFCQSxVQUFBLEdBQVksU0FBQyxPQUFELEdBQUE7QUFDVixVQUFBLElBQUE7QUFBQSxNQUFBLElBQUEsR0FBTyxFQUFQLENBQUE7QUFBQSxNQUVBLElBQUksQ0FBQyxPQUFMLEdBQWUsT0FGZixDQUFBO0FBQUEsTUFHQSxJQUFJLENBQUMsT0FBTCxHQUFlLE9BQU8sQ0FBQyxXQUFSLENBQUEsQ0FIZixDQUFBO0FBQUEsTUFJQSxJQUFJLENBQUMsU0FBTCxHQUFpQixPQUFPLENBQUMsT0FBUixDQUFBLENBSmpCLENBQUE7QUFNQSxhQUFPLElBQVAsQ0FQVTtJQUFBLENBckJaLENBQUE7O0FBQUEsOEJBOEJBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixhQUFPLFdBQVAsQ0FEWTtJQUFBLENBOUJkLENBQUE7O0FBQUEsOEJBaUNBLFdBQUEsR0FBYSxTQUFDLElBQUQsR0FBQTtBQUNYLGFBQ0osb0RBQUEsR0FDd0IsSUFBSSxDQUFDLE9BRDdCLEdBQ3FDLHNDQURyQyxHQUVzQixJQUFJLENBQUMsU0FGM0IsR0FFcUMsZUFIakMsQ0FEVztJQUFBLENBakNiLENBQUE7O0FBQUEsOEJBd0NBLFNBQUEsR0FBVyxTQUFDLElBQUQsR0FBQTtBQUNULE1BQUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLElBQUksQ0FBQyxPQUExQixDQUFBLENBQUE7YUFDQSxJQUFDLENBQUEsTUFBRCxDQUFBLEVBRlM7SUFBQSxDQXhDWCxDQUFBOztBQUFBLDhCQTRDQSxTQUFBLEdBQVcsU0FBQSxHQUFBO0FBQ1QsVUFBQSxJQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsSUFBRCxDQUFBLENBQUEsQ0FBQTs7WUFDTSxDQUFFLE9BQVIsQ0FBQTtPQURBO0FBR0EsTUFBQSxJQUFHLElBQUMsQ0FBQSxRQUFKO2VBQ0UsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQXZCLENBQUEsRUFERjtPQUpTO0lBQUEsQ0E1Q1gsQ0FBQTs7MkJBQUE7O0tBRjRCLGVBTDlCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/project-list-view.coffee
