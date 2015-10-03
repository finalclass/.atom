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

            return new Promise(function (resolve, reject) {
                fs.readdirSync(directory, function (err, files) {
                    if (err) {
                        reject(err);
                    }
                    resolve(files);
                });
            });
        }
    }]);

    return Bootstrapper;
})();

exports['default'] = Bootstrapper;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9saWIvYm9vdHN0cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBRWtDLE1BQU07O2tCQUNwQixJQUFJOztJQUFaLEVBQUU7O0FBSGQsV0FBVyxDQUFDOztJQUtTLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUVwQixtQkFBQyxTQUFTLEVBQUU7O0FBRWpCLG1CQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxrQkFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3RDLHdCQUFJLEdBQUcsRUFBRTtBQUFDLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQUM7QUFDdkIsMkJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFBO1NBQ0w7OztXQVZnQixZQUFZOzs7cUJBQVosWUFBWSIsImZpbGUiOiIvVXNlcnMvc3p5bW9uL2dpdGh1Yi9ib290c3RyYXBwZXIvbGliL2Jvb3RzdHJhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQge0NvbXBvc2l0ZURpc3Bvc2FibGV9IGZyb20gJ2F0b20nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290c3RyYXBwZXIge1xuXG4gICAgYm9vdHN0cmFwKGRpcmVjdG9yeSkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnksIChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge3JlamVjdChlcnIpO31cbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19
//# sourceURL=/Users/szymon/github/bootstrapper/lib/bootstrapper.js
