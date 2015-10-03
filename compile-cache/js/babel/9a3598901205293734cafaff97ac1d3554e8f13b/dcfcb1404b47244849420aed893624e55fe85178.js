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

var Bootstrapper = (function () {
    function Bootstrapper() {
        _classCallCheck(this, Bootstrapper);
    }

    _createClass(Bootstrapper, [{
        key: 'bootstrap',
        value: function bootstrap(directory) {
            fs.readDir(directory, function (err, files) {
                console.log('files');
            });
        }
    }]);

    return Bootstrapper;
})();

exports['default'] = Bootstrapper;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9saWIvYm9vdHN0cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBRWtDLE1BQU07O2tCQUNwQixJQUFJOztJQUFaLEVBQUU7O0FBSGQsV0FBVyxDQUFDOztJQUtTLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUVwQixtQkFBQyxTQUFTLEVBQUU7QUFDakIsY0FBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ2xDLHVCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hCLENBQUMsQ0FBQztTQUNOOzs7V0FOZ0IsWUFBWTs7O3FCQUFaLFlBQVkiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi9naXRodWIvYm9vdHN0cmFwcGVyL2xpYi9ib290c3RyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHtDb21wb3NpdGVEaXNwb3NhYmxlfSBmcm9tICdhdG9tJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdHN0cmFwcGVyIHtcblxuICAgIGJvb3RzdHJhcChkaXJlY3RvcnkpIHtcbiAgICAgICAgZnMucmVhZERpcihkaXJlY3RvcnksIChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=
//# sourceURL=/Users/szymon/github/bootstrapper/lib/bootstrapper.js
