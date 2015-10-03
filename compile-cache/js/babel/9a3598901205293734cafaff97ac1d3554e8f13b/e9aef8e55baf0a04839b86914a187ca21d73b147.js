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
            editor.moveUp(5);
        }
    }, {
        key: 'moveDown',
        value: function moveDown() {
            var editor = atom.workspace.getActiveTextEditor();
            if (!editor) {
                return;
            }
            editor.moveDown(5);
        }
    }]);

    return MoveFast;
})();

exports['default'] = MoveFast;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFa0MsTUFBTTs7a0JBQ3BCLElBQUk7O0lBQVosRUFBRTs7QUFIZCxXQUFXLENBQUM7O0lBS1MsUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O2VBSWpCLG9CQUFHO0FBQ1AsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsK0JBQXlCLENBQUM7QUFDL0MsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFO0FBQzlDLDhCQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDOUIsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLGdCQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzs7O2VBRVMsc0JBQUc7QUFDWCxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5Qjs7O2VBRUssa0JBQUc7QUFDTCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjs7O2VBRU8sb0JBQUc7QUFDUCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0Qjs7O1dBNUJnQixRQUFROzs7cUJBQVIsUUFBUSIsImZpbGUiOiIvVXNlcnMvc3p5bW9uLy5hdG9tL3BhY2thZ2VzL21vdmUtZmFzdC9saWIvbW92ZS1mYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVGYXN0IHtcblxuICAgIHN1YnNjcmlwdGlvbnM7XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcbiAgICAgICAgdmFyIHVwQ21kID0gYXRvbS5jb21tYW5kcy5hZGQoJ2F0b20tdGV4dC1lZGl0b3InLCB7XG4gICAgICAgICAgICAnbW92ZS1mYXN0OnVwJzogdGhpcy5tb3ZlVXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodXBDbWQpO1xuICAgICAgICB2YXIgZG93bkNtZCA9IGF0b20uY29tbWFuZHMuYWRkKCdhdG9tLXRleHQtZWRpdG9yJywgJ21vdmUtZmFzdDp1cCcsIHRoaXMubW92ZURvd24pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGRvd25DbWQpO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgICAgaWYgKCFlZGl0b3IpIHtyZXR1cm47fVxuICAgICAgICBlZGl0b3IubW92ZVVwKDUpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB2YXIgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICAgICAgICBpZiAoIWVkaXRvcikge3JldHVybjt9XG4gICAgICAgIGVkaXRvci5tb3ZlRG93big1KTtcbiAgICB9XG59XG4iXX0=
//# sourceURL=/Users/szymon/.atom/packages/move-fast/lib/move-fast.js
