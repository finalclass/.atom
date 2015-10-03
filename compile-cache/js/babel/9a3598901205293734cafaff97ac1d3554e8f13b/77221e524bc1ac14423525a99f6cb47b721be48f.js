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
            var upCmd = atom.commands.add('atom-text-editor', {
                'move-fast:up': this.moveUp
            });
            this.subscriptions.add(upCmd);
            var downCmd = atom.commands.add('atom-text-editor', 'move-fast:up', this.moveDown);
            this.subscriptions.add(downCmd);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFa0MsTUFBTTs7a0JBQ3BCLElBQUk7O0lBQVosRUFBRTs7QUFIZCxXQUFXLENBQUM7O0lBS04sUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O2VBSUYsb0JBQUc7QUFDUCxnQkFBSSxDQUFDLGFBQWEsR0FBRywrQkFBeUIsQ0FBQztBQUMvQyxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7QUFDOUMsOEJBQWMsRUFBRSxJQUFJLENBQUMsTUFBTTthQUM5QixDQUFDLENBQUM7QUFDSCxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkYsZ0JBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DOzs7ZUFFUyxzQkFBRztBQUNYLGdCQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlCOzs7ZUFFSyxrQkFBRztBQUNMLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDbEQsZ0JBQUksQ0FBQyxNQUFNLEVBQUU7QUFBQyx1QkFBTzthQUFDO0FBQ3RCLGtCQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07dUJBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7U0FDeEQ7OztlQUVPLG9CQUFHO0FBQ1AsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNsRCxnQkFBSSxDQUFDLE1BQU0sRUFBRTtBQUFDLHVCQUFPO2FBQUM7QUFDdEIsa0JBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTt1QkFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztTQUMxRDs7O1dBNUJDLFFBQVE7OztxQkFnQ0MsSUFBSSxRQUFRLEVBQUUiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9tb3ZlLWZhc3QvbGliL21vdmUtZmFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQge0NvbXBvc2l0ZURpc3Bvc2FibGV9IGZyb20gJ2F0b20nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5jbGFzcyBNb3ZlRmFzdCB7XG5cbiAgICBzdWJzY3JpcHRpb25zO1xuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG4gICAgICAgIHZhciB1cENtZCA9IGF0b20uY29tbWFuZHMuYWRkKCdhdG9tLXRleHQtZWRpdG9yJywge1xuICAgICAgICAgICAgJ21vdmUtZmFzdDp1cCc6IHRoaXMubW92ZVVwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHVwQ21kKTtcbiAgICAgICAgdmFyIGRvd25DbWQgPSBhdG9tLmNvbW1hbmRzLmFkZCgnYXRvbS10ZXh0LWVkaXRvcicsICdtb3ZlLWZhc3Q6dXAnLCB0aGlzLm1vdmVEb3duKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChkb3duQ21kKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKCk7XG4gICAgICAgIGlmICghZWRpdG9yKSB7cmV0dXJuO31cbiAgICAgICAgZWRpdG9yLmN1cnNvcnMuZm9yRWFjaCgoY3Vyc29yKSA9PiBjdXJzb3IubW92ZVVwKDUpKTtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgICAgaWYgKCFlZGl0b3IpIHtyZXR1cm47fVxuICAgICAgICBlZGl0b3IuY3Vyc29ycy5mb3JFYWNoKChjdXJzb3IpID0+IGN1cnNvci5tb3ZlRG93big1KSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb3ZlRmFzdCgpO1xuIl19
//# sourceURL=/Users/szymon/.atom/packages/move-fast/lib/move-fast.js
