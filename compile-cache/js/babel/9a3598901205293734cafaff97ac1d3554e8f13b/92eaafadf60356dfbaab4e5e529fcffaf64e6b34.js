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
            var upCmd = atom.commands.add('atom-text-editor', 'move-fast:up', this.moveUp);
            this.subscriptions.add(upCmd);
            var downCmd = atom.commands.add('atom-text-editor', 'move-fast:up', this.moveDown);
            this.subscriptions.add(downCmd);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbW92ZS1mYXN0L2xpYi9tb3ZlLWZhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFa0MsTUFBTTs7a0JBQ3BCLElBQUk7O0lBQVosRUFBRTs7QUFIZCxXQUFXLENBQUM7O0lBS1MsUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O2VBSWpCLG9CQUFHO0FBQ1AsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsK0JBQXlCLENBQUM7QUFDL0MsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0UsZ0JBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLGdCQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzs7O2VBRUssa0JBQUc7QUFDTCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjs7O2VBRU8sb0JBQUc7QUFDUCxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGdCQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsdUJBQU87YUFBQztBQUN0QixrQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0Qjs7O1dBdEJnQixRQUFROzs7cUJBQVIsUUFBUSIsImZpbGUiOiIvVXNlcnMvc3p5bW9uLy5hdG9tL3BhY2thZ2VzL21vdmUtZmFzdC9saWIvbW92ZS1mYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVGYXN0IHtcblxuICAgIHN1YnNjcmlwdGlvbnM7XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcbiAgICAgICAgdmFyIHVwQ21kID0gYXRvbS5jb21tYW5kcy5hZGQoJ2F0b20tdGV4dC1lZGl0b3InLCAnbW92ZS1mYXN0OnVwJywgdGhpcy5tb3ZlVXApO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHVwQ21kKTtcbiAgICAgICAgdmFyIGRvd25DbWQgPSBhdG9tLmNvbW1hbmRzLmFkZCgnYXRvbS10ZXh0LWVkaXRvcicsICdtb3ZlLWZhc3Q6dXAnLCB0aGlzLm1vdmVEb3duKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChkb3duQ21kKTtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKCk7XG4gICAgICAgIGlmICghZWRpdG9yKSB7cmV0dXJuO31cbiAgICAgICAgZWRpdG9yLm1vdmVVcCg1KTtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgICAgaWYgKCFlZGl0b3IpIHtyZXR1cm47fVxuICAgICAgICBlZGl0b3IubW92ZURvd24oNSk7XG4gICAgfVxufVxuIl19
//# sourceURL=/Users/szymon/.atom/packages/move-fast/lib/move-fast.js
