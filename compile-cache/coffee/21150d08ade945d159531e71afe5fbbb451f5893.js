(function() {
  var $, $$, CompositeDisposable, DiffView, Range, TextEditorView, View, jsdiff, _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  jsdiff = require('diff');

  _ref = require('atom-space-pen-views'), $ = _ref.$, $$ = _ref.$$, View = _ref.View, TextEditorView = _ref.TextEditorView;

  _ref1 = require('atom'), CompositeDisposable = _ref1.CompositeDisposable, Range = _ref1.Range;

  module.exports = DiffView = (function(_super) {
    __extends(DiffView, _super);

    function DiffView(title, leftFile, rightFile) {
      this.title = title;
      this.leftFile = leftFile;
      this.rightFile = rightFile;
      this.appendPart = __bind(this.appendPart, this);
      this.fileRead = __bind(this.fileRead, this);
      this.readFiles = __bind(this.readFiles, this);
      this.refreshFileNames = __bind(this.refreshFileNames, this);
      DiffView.__super__.constructor.call(this, this.title, this.leftFile, this.rightFile);
    }

    DiffView.content = function() {
      return this.div({
        "class": 'atom-commander-diff-view'
      }, (function(_this) {
        return function() {
          _this.div({
            "class": 'left-pane'
          }, function() {
            return _this.subview('leftTextEditor', new TextEditorView());
          });
          return _this.div({
            "class": 'right-pane'
          }, function() {
            return _this.subview('rightTextEditor', new TextEditorView());
          });
        };
      })(this));
    };

    DiffView.prototype.initialize = function() {
      this.disposables = new CompositeDisposable();
      this.markers = [];
      this.leftDecorations = [];
      this.rightDecorations = [];
      this.selection = null;
      this.leftTextEditor[0].removeAttribute('tabindex');
      this.leftTextEditor.getModel().getDecorations({
        "class": 'cursor-line',
        type: 'line'
      })[0].destroy();
      this.rightTextEditor[0].removeAttribute('tabindex');
      this.rightTextEditor.getModel().getDecorations({
        "class": 'cursor-line',
        type: 'line'
      })[0].destroy();
      this.leftBuffer = this.leftTextEditor.getModel().getBuffer();
      this.rightBuffer = this.rightTextEditor.getModel().getBuffer();
      this.leftTextEditor.css("height", "100%");
      this.rightTextEditor.css("height", "100%");
      this.leftTextEditor.on('contextmenu', false);
      this.rightTextEditor.on('contextmenu', false);
      this.leftTextEditor.mousedown((function(_this) {
        return function(e) {
          return _this.handleMouseDown(e, _this.leftTextEditor);
        };
      })(this));
      this.rightTextEditor.mousedown((function(_this) {
        return function(e) {
          return _this.handleMouseDown(e, _this.rightTextEditor);
        };
      })(this));
      this.refreshFileNames();
      return this.readFiles();
    };

    DiffView.prototype.resetSelections = function() {
      if (this.selection === null) {
        return;
      }
      this.resetSelection(this.selection);
      this.resetSelection(this.selection.otherDecoration);
      return this.selection = null;
    };

    DiffView.prototype.resetSelection = function(selection) {
      var newProperties, properties;
      if (selection == null) {
        return;
      }
      properties = selection.getProperties();
      newProperties = {};
      newProperties.type = properties.type;
      newProperties["class"] = properties["class"].replace("-highlight", "");
      return selection.setProperties(newProperties);
    };

    DiffView.prototype.handleMouseDown = function(e, textEditor) {
      var y;
      this.resetSelections();
      y = e.offsetY + textEditor.getModel().getScrollTop();
      this.selection = this.getDecorationAtPixelY(y, textEditor);
      if (this.selection === null) {
        return;
      }
      this.highlightDecoration(this.selection);
      this.highlightDecoration(this.selection.otherDecoration);
      if (textEditor === this.leftTextEditor) {
        return this.scrollToDecoration(this.rightTextEditor, this.selection.otherDecoration);
      } else {
        return this.scrollToDecoration(this.leftTextEditor, this.selection.otherDecoration);
      }
    };

    DiffView.prototype.scrollToDecoration = function(textEditor, decoration) {
      if (decoration == null) {
        return;
      }
      return textEditor.getModel().scrollToBufferPosition(decoration.getMarker().getStartBufferPosition());
    };

    DiffView.prototype.highlightDecoration = function(decoration) {
      var newProperties, properties;
      if (decoration == null) {
        return;
      }
      properties = decoration.getProperties();
      if (properties["class"].search("highlight") !== -1) {
        return;
      }
      newProperties = {};
      newProperties.type = properties.type;
      newProperties["class"] = properties["class"] + "-highlight";
      return decoration.setProperties(newProperties);
    };

    DiffView.prototype.getDecorationAtPixelY = function(y, textEditor) {
      var decoration, decorations, lineHeight, pixelRange, _i, _len;
      if (textEditor === this.leftTextEditor) {
        decorations = this.leftDecorations;
      } else {
        decorations = this.rightDecorations;
      }
      lineHeight = textEditor.getModel().getLineHeightInPixels();
      for (_i = 0, _len = decorations.length; _i < _len; _i++) {
        decoration = decorations[_i];
        pixelRange = decoration.getMarker().getPixelRange();
        if ((y >= pixelRange.start.top) && (y <= (pixelRange.end.top + lineHeight))) {
          return decoration;
        }
      }
      return null;
    };

    DiffView.prototype.refreshFileNames = function() {};

    DiffView.prototype.readFiles = function() {
      var decoration, marker, _i, _j, _k, _len, _len1, _len2, _ref2, _ref3, _ref4;
      this.resetSelections();
      _ref2 = this.leftDecorations;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        decoration = _ref2[_i];
        decoration.destroy();
      }
      _ref3 = this.rightDecorations;
      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
        decoration = _ref3[_j];
        decoration.destroy();
      }
      _ref4 = this.markers;
      for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
        marker = _ref4[_k];
        marker.destroy();
      }
      this.markers = [];
      this.leftDecorations = [];
      this.rightDecorations = [];
      this.leftSelection = null;
      this.rightSelection = null;
      this.leftBuffer.setText("");
      this.rightBuffer.setText("");
      this.leftContent = null;
      this.rightContent = null;
      this.leftFile.read(true).then((function(_this) {
        return function(content) {
          _this.leftContent = content;
          return _this.fileRead(true);
        };
      })(this));
      return this.rightFile.read(true).then((function(_this) {
        return function(content) {
          _this.rightContent = content;
          return _this.fileRead(false);
        };
      })(this));
    };

    DiffView.prototype.fileRead = function(left) {
      var diff;
      if ((this.leftContent === null) || (this.rightContent === null)) {
        return;
      }
      this.leftBuffer.setText("");
      this.rightBuffer.setText("");
      diff = jsdiff.diffLines(this.rightContent, this.leftContent);
      return diff.forEach((function(_this) {
        return function(part) {
          var leftDecoration, rightDecoration;
          if (part.added) {
            return _this.appendPart(_this.leftTextEditor, _this.leftBuffer, _this.leftDecorations, part, true);
          } else if (part.removed) {
            return _this.appendPart(_this.rightTextEditor, _this.rightBuffer, _this.rightDecorations, part, false);
          } else {
            leftDecoration = _this.appendPart(_this.leftTextEditor, _this.leftBuffer, _this.leftDecorations, part);
            rightDecoration = _this.appendPart(_this.rightTextEditor, _this.rightBuffer, _this.rightDecorations, part);
            leftDecoration['otherDecoration'] = rightDecoration;
            return rightDecoration['otherDecoration'] = leftDecoration;
          }
        };
      })(this));
    };

    DiffView.prototype.appendPart = function(editor, buffer, decorations, part, added) {
      var cls, count, decoration, endPoint, i, line, lines, marker, options, range, startPoint, _i, _ref2;
      if (added == null) {
        added = null;
      }
      cls = 'line-normal';
      lines = part.value.split("\n");
      count = lines.length;
      if ((part.count !== null) && (part.count !== void 0)) {
        count = part.count;
      }
      if (added !== null) {
        if (added) {
          cls = "line-added";
        } else {
          cls = "line-removed";
        }
      }
      options = {};
      options.normalizeLineEndings = true;
      options.undo = "skip";
      startPoint = buffer.getEndPosition();
      for (i = _i = 1, _ref2 = Math.min(lines.length, count); 1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; i = 1 <= _ref2 ? ++_i : --_i) {
        line = lines[i - 1];
        buffer.append(line, options);
        endPoint = buffer.getEndPosition();
        buffer.append("\n", options);
      }
      range = new Range(startPoint, endPoint);
      marker = editor.getModel().markBufferRange(range, {
        invalidate: 'never'
      });
      this.markers.push[marker];
      decoration = editor.getModel().decorateMarker(marker, {
        type: 'line',
        "class": cls
      });
      decorations.push(decoration);
      return decoration;
    };

    DiffView.prototype.getTitle = function() {
      return this.title;
    };

    DiffView.prototype.destroy = function() {
      var _ref2;
      return (_ref2 = this.disposables) != null ? _ref2.dispose() : void 0;
    };

    DiffView.prototype.serialize = function() {};

    return DiffView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9hdG9tLWNvbW1hbmRlci9saWIvdmlld3MvZGlmZi9kaWZmLXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHNGQUFBO0lBQUE7O21TQUFBOztBQUFBLEVBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxNQUFSLENBQVQsQ0FBQTs7QUFBQSxFQUNBLE9BQWdDLE9BQUEsQ0FBUSxzQkFBUixDQUFoQyxFQUFDLFNBQUEsQ0FBRCxFQUFJLFVBQUEsRUFBSixFQUFRLFlBQUEsSUFBUixFQUFjLHNCQUFBLGNBRGQsQ0FBQTs7QUFBQSxFQUVBLFFBQStCLE9BQUEsQ0FBUSxNQUFSLENBQS9CLEVBQUMsNEJBQUEsbUJBQUQsRUFBc0IsY0FBQSxLQUZ0QixDQUFBOztBQUFBLEVBSUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLCtCQUFBLENBQUE7O0FBQWEsSUFBQSxrQkFBRSxLQUFGLEVBQVUsUUFBVixFQUFxQixTQUFyQixHQUFBO0FBQ1gsTUFEWSxJQUFDLENBQUEsUUFBQSxLQUNiLENBQUE7QUFBQSxNQURvQixJQUFDLENBQUEsV0FBQSxRQUNyQixDQUFBO0FBQUEsTUFEK0IsSUFBQyxDQUFBLFlBQUEsU0FDaEMsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlFQUFBLENBQUE7QUFBQSxNQUFBLDBDQUFNLElBQUMsQ0FBQSxLQUFQLEVBQWMsSUFBQyxDQUFBLFFBQWYsRUFBeUIsSUFBQyxDQUFBLFNBQTFCLENBQUEsQ0FEVztJQUFBLENBQWI7O0FBQUEsSUFHQSxRQUFDLENBQUEsT0FBRCxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFDLE9BQUEsRUFBTywwQkFBUjtP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

//# sourceURL=/Users/szymon/.atom/packages/atom-commander/lib/views/diff/diff-view.coffee
