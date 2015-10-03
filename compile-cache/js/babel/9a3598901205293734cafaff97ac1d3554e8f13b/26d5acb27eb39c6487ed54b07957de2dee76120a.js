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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFa0MsTUFBTTs7a0JBQ3BCLElBQUk7O0lBQVosRUFBRTs7QUFIZCxXQUFXLENBQUM7O0lBS04sUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O2VBSUYsb0JBQUc7QUFDUCxnQkFBSSxDQUFDLGFBQWEsR0FBRywrQkFBeUIsQ0FBQzs7QUFFL0MsZ0JBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFO0FBQ3pELDhCQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDM0IsZ0NBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDUDs7O2VBRVMsc0JBQUc7QUFDWCxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5Qjs7O2VBRUssa0JBQUc7QUFDTCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3VCQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1NBQ3hEOzs7ZUFFTyxvQkFBRztBQUNQLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDbEQsZ0JBQUksQ0FBQyxNQUFNLEVBQUU7QUFBQyx1QkFBTzthQUFDO0FBQ3RCLGtCQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07dUJBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7U0FDMUQ7OztXQTNCQyxRQUFROzs7cUJBK0JDLElBQUksUUFBUSxFQUFFIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHtDb21wb3NpdGVEaXNwb3NhYmxlfSBmcm9tICdhdG9tJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuY2xhc3MgTW92ZUZhc3Qge1xuXG4gICAgc3Vic2NyaXB0aW9ucztcblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChhdG9tLmNvbW1hbmRzLmFkZCgnYXRvbS10ZXh0LWVkaXRvcicsIHtcbiAgICAgICAgICAgICdtb3ZlLWZhc3Q6dXAnOiB0aGlzLm1vdmVVcCxcbiAgICAgICAgICAgICdtb3ZlLWZhc3Q6ZG93bic6IHRoaXMubW92ZURvd25cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgICAgaWYgKCFlZGl0b3IpIHtyZXR1cm47fVxuICAgICAgICBlZGl0b3IuY3Vyc29ycy5mb3JFYWNoKChjdXJzb3IpID0+IGN1cnNvci5tb3ZlVXAoNSkpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB2YXIgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICAgICAgICBpZiAoIWVkaXRvcikge3JldHVybjt9XG4gICAgICAgIGVkaXRvci5jdXJzb3JzLmZvckVhY2goKGN1cnNvcikgPT4gY3Vyc29yLm1vdmVEb3duKDUpKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmVGYXN0KCk7XG4iXX0=
//# sourceURL=/Users/szymon/.atom/packages/move-fast/lib/move-fast.js
