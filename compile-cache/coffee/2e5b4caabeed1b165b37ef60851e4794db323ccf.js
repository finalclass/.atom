(function() {
  var Directory, File, fse, fsp, path, _ref;

  fsp = require('fs-plus');

  fse = require('fs-extra');

  path = require('path');

  _ref = require('atom'), Directory = _ref.Directory, File = _ref.File;

  module.exports = function(srcFolderPath, srcNames, dstFolderPath, move) {
    var callback, dstDirectory, dstPath, error, index, srcIsDir, srcName, srcPath, stop, _i, _len;
    if (move == null) {
      move = false;
    }
    callback = this.async();
    dstDirectory = new Directory(dstFolderPath);
    try {
      index = 0;
      for (_i = 0, _len = srcNames.length; _i < _len; _i++) {
        srcName = srcNames[_i];
        srcPath = path.join(srcFolderPath, srcName);
        dstPath = path.join(dstFolderPath, srcName);
        srcIsDir = fsp.isDirectorySync(srcPath);
        stop = move && (dstPath.indexOf(srcPath) === 0);
        if (!stop) {
          if (srcIsDir || !fsp.isFileSync(dstPath)) {
            if (move) {
              fsp.moveSync(srcPath, dstPath);
            } else {
              fse.copySync(srcPath, dstPath);
            }
            emit("success", {
              index: index
            });
          }
        }
        index++;
      }
    } catch (_error) {
      error = _error;
      console.log("Error copying.");
    }
    return callback();
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdGFza3MvY29weS10YXNrLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxxQ0FBQTs7QUFBQSxFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsU0FBUixDQUFOLENBQUE7O0FBQUEsRUFDQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFVBQVIsQ0FETixDQUFBOztBQUFBLEVBRUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBRlAsQ0FBQTs7QUFBQSxFQUdBLE9BQW9CLE9BQUEsQ0FBUSxNQUFSLENBQXBCLEVBQUMsaUJBQUEsU0FBRCxFQUFZLFlBQUEsSUFIWixDQUFBOztBQUFBLEVBS0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLGFBQTFCLEVBQXlDLElBQXpDLEdBQUE7QUFDZixRQUFBLHlGQUFBOztNQUR3RCxPQUFLO0tBQzdEO0FBQUEsSUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUQsQ0FBQSxDQUFYLENBQUE7QUFBQSxJQUNBLFlBQUEsR0FBbUIsSUFBQSxTQUFBLENBQVUsYUFBVixDQURuQixDQUFBO0FBR0E7QUFDRSxNQUFBLEtBQUEsR0FBUSxDQUFSLENBQUE7QUFFQSxXQUFBLCtDQUFBOytCQUFBO0FBQ0UsUUFBQSxPQUFBLEdBQVUsSUFBSSxDQUFDLElBQUwsQ0FBVSxhQUFWLEVBQXlCLE9BQXpCLENBQVYsQ0FBQTtBQUFBLFFBQ0EsT0FBQSxHQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsYUFBVixFQUF5QixPQUF6QixDQURWLENBQUE7QUFBQSxRQUdBLFFBQUEsR0FBVyxHQUFHLENBQUMsZUFBSixDQUFvQixPQUFwQixDQUhYLENBQUE7QUFBQSxRQU1BLElBQUEsR0FBTyxJQUFBLElBQVMsQ0FBQyxPQUFPLENBQUMsT0FBUixDQUFnQixPQUFoQixDQUFBLEtBQTRCLENBQTdCLENBTmhCLENBQUE7QUFRQSxRQUFBLElBQUcsQ0FBQSxJQUFIO0FBS0UsVUFBQSxJQUFHLFFBQUEsSUFBWSxDQUFBLEdBQUksQ0FBQyxVQUFKLENBQWUsT0FBZixDQUFoQjtBQUNFLFlBQUEsSUFBRyxJQUFIO0FBQ0UsY0FBQSxHQUFHLENBQUMsUUFBSixDQUFhLE9BQWIsRUFBc0IsT0FBdEIsQ0FBQSxDQURGO2FBQUEsTUFBQTtBQUdFLGNBQUEsR0FBRyxDQUFDLFFBQUosQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLENBQUEsQ0FIRjthQUFBO0FBQUEsWUFLQSxJQUFBLENBQUssU0FBTCxFQUFnQjtBQUFBLGNBQUMsT0FBQSxLQUFEO2FBQWhCLENBTEEsQ0FERjtXQUxGO1NBUkE7QUFBQSxRQXFCQSxLQUFBLEVBckJBLENBREY7QUFBQSxPQUhGO0tBQUEsY0FBQTtBQTJCRSxNQURJLGNBQ0osQ0FBQTtBQUFBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWixDQUFBLENBM0JGO0tBSEE7V0FnQ0EsUUFBQSxDQUFBLEVBakNlO0VBQUEsQ0FMakIsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/tasks/copy-task.coffee
