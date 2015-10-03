Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _atom = require('atom');

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

'use babel';

var MoveFast = (function () {
    function MoveFast() {
        _classCallCheck(this, MoveFast);
    }

    _createClass(MoveFast, [{
        key: 'activate',
        value: function activate() {
            this.subscriptions = new _atom.CompositeDisposable();

            this.subscriptions.add(atom.commands.add('atom-text-editor', {
                'move-fast:up': this.moveUp,
                'move-fast:down': this.moveDown
            }));
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.subscriptions.dispose();
        }
    }, {
        key: 'moveUp',
        value: function moveUp() {

            var editor = atom.workspace.getActiveTextEditor();
            if (!editor) {
                return;
            }
            editor.cursors.forEach(function (cursor) {
                return cursor.moveUp(5);
            });
        }
    }, {
        key: 'moveDown',
        value: function moveDown() {
            var editor = atom.workspace.getActiveTextEditor();
            if (!editor) {
                return;
            }
            editor.cursors.forEach(function (cursor) {
                return cursor.moveDown(5);
            });
        }
    }]);

    return MoveFast;
})();

exports['default'] = new MoveFast();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFa0MsTUFBTTs7a0JBQ3BCLElBQUk7O0lBQVosRUFBRTs7QUFIZCxXQUFXLENBQUM7O0lBS04sUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O2VBSUYsb0JBQUc7QUFDUCxnQkFBSSxDQUFDLGFBQWEsR0FBRywrQkFBeUIsQ0FBQzs7QUFFL0MsZ0JBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFO0FBQ3pELDhCQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDM0IsZ0NBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDUDs7O2VBRVMsc0JBQUc7QUFDWCxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5Qjs7O2VBRUssa0JBQUc7O0FBRUwsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNsRCxnQkFBSSxDQUFDLE1BQU0sRUFBRTtBQUFDLHVCQUFPO2FBQUM7QUFDdEIsa0JBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTt1QkFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztTQUN4RDs7O2VBRU8sb0JBQUc7QUFDUCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3VCQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1NBQzFEOzs7V0E1QkMsUUFBUTs7O3FCQWdDQyxJQUFJLFFBQVEsRUFBRSIsImZpbGUiOiIvVXNlcnMvc3p5bW9uLy5hdG9tL3BhY2thZ2VzL21vdmUtZmFzdC9saWIvbW92ZS1mYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmNsYXNzIE1vdmVGYXN0IHtcblxuICAgIHN1YnNjcmlwdGlvbnM7XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGF0b20uY29tbWFuZHMuYWRkKCdhdG9tLXRleHQtZWRpdG9yJywge1xuICAgICAgICAgICAgJ21vdmUtZmFzdDp1cCc6IHRoaXMubW92ZVVwLFxuICAgICAgICAgICAgJ21vdmUtZmFzdDpkb3duJzogdGhpcy5tb3ZlRG93blxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgICAgaWYgKCFlZGl0b3IpIHtyZXR1cm47fVxuICAgICAgICBlZGl0b3IuY3Vyc29ycy5mb3JFYWNoKChjdXJzb3IpID0+IGN1cnNvci5tb3ZlVXAoNSkpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB2YXIgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICAgICAgICBpZiAoIWVkaXRvcikge3JldHVybjt9XG4gICAgICAgIGVkaXRvci5jdXJzb3JzLmZvckVhY2goKGN1cnNvcikgPT4gY3Vyc29yLm1vdmVEb3duKDUpKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmVGYXN0KCk7XG4iXX0=
//# sourceURL=/Users/szymon/.atom/packages/move-fast/lib/move-fast.js
