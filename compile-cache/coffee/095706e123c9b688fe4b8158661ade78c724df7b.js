(function() {
  var fse, fsp, path;

  fsp = require('fs-plus');

  fse = require('fs-extra');

  path = require('path');

  module.exports = function(folderPath, names) {
    var callback, error, name, p, _i, _len;
    callback = this.async();
    try {
      for (_i = 0, _len = names.length; _i < _len; _i++) {
        name = names[_i];
        p = path.join(folderPath, name);
        fse.removeSync(p);
      }
    } catch (_error) {
      error = _error;
      console.log("Error deleting.");
    }
    return callback();
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdGFza3MvZGVsZXRlLXRhc2suY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGNBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFNBQVIsQ0FBTixDQUFBOztBQUFBLEVBQ0EsR0FBQSxHQUFNLE9BQUEsQ0FBUSxVQUFSLENBRE4sQ0FBQTs7QUFBQSxFQUVBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQUZQLENBQUE7O0FBQUEsRUFJQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLFVBQUQsRUFBYSxLQUFiLEdBQUE7QUFDZixRQUFBLGtDQUFBO0FBQUEsSUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUQsQ0FBQSxDQUFYLENBQUE7QUFFQTtBQUNFLFdBQUEsNENBQUE7eUJBQUE7QUFDRSxRQUFBLENBQUEsR0FBSSxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsSUFBdEIsQ0FBSixDQUFBO0FBQUEsUUFDQSxHQUFHLENBQUMsVUFBSixDQUFlLENBQWYsQ0FEQSxDQURGO0FBQUEsT0FERjtLQUFBLGNBQUE7QUFLRSxNQURJLGNBQ0osQ0FBQTtBQUFBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWixDQUFBLENBTEY7S0FGQTtXQVNBLFFBQUEsQ0FBQSxFQVZlO0VBQUEsQ0FKakIsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/tasks/delete-task.coffee
