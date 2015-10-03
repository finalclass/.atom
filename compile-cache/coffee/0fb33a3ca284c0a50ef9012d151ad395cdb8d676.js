(function() {
  var Actions, FileController;

  FileController = require('./controllers/file-controller');

  module.exports = Actions = (function() {
    function Actions() {}

    Actions.getFirstFileViewItem = function(viewItems) {
      var viewItem, _i, _len;
      if (viewItems === null) {
        return null;
      }
      for (_i = 0, _len = viewItems.length; _i < _len; _i++) {
        viewItem = viewItems[_i];
        if (viewItem.itemController instanceof FileController) {
          return viewItem;
        }
      }
      return null;
    };

    return Actions;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdXRpbHMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHVCQUFBOztBQUFBLEVBQUEsY0FBQSxHQUFpQixPQUFBLENBQVEsK0JBQVIsQ0FBakIsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007eUJBRUo7O0FBQUEsSUFBQSxPQUFDLENBQUEsb0JBQUQsR0FBdUIsU0FBQyxTQUFELEdBQUE7QUFDckIsVUFBQSxrQkFBQTtBQUFBLE1BQUEsSUFBRyxTQUFBLEtBQWEsSUFBaEI7QUFDRSxlQUFPLElBQVAsQ0FERjtPQUFBO0FBR0EsV0FBQSxnREFBQTtpQ0FBQTtBQUNFLFFBQUEsSUFBRyxRQUFRLENBQUMsY0FBVCxZQUFtQyxjQUF0QztBQUNFLGlCQUFPLFFBQVAsQ0FERjtTQURGO0FBQUEsT0FIQTtBQU9BLGFBQU8sSUFBUCxDQVJxQjtJQUFBLENBQXZCLENBQUE7O21CQUFBOztNQUxGLENBQUE7QUFBQSIKfQ==

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/utils.coffee
