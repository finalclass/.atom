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
                fs.readdir(directory, function (err, files) {
                    if (err) {
                        reject(err);
                    }

                    files.forEach(function (file) {
                        console.log('requireing ', directory + '/' + file);
                        require(directory + '/' + file);
                    });

                    resolve(files);
                });
            });
        }
    }]);

    return Bootstrapper;
})();

exports['default'] = Bootstrapper;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9saWIvYm9vdHN0cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBRWtDLE1BQU07O2tCQUNwQixJQUFJOztJQUFaLEVBQUU7O0FBSGQsV0FBVyxDQUFDOztJQUtTLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUVwQixtQkFBQyxTQUFTLEVBQUU7QUFDakIsbUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLGtCQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDbEMsd0JBQUksR0FBRyxFQUFFO0FBQUMsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFBQzs7QUFFdkIseUJBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDcEIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDbkQsK0JBQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO3FCQUNuQyxDQUFDLENBQUM7O0FBRUgsMkJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFBO1NBQ0w7OztXQWZnQixZQUFZOzs7cUJBQVosWUFBWSIsImZpbGUiOiIvVXNlcnMvc3p5bW9uL2dpdGh1Yi9ib290c3RyYXBwZXIvbGliL2Jvb3RzdHJhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQge0NvbXBvc2l0ZURpc3Bvc2FibGV9IGZyb20gJ2F0b20nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290c3RyYXBwZXIge1xuXG4gICAgYm9vdHN0cmFwKGRpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZnMucmVhZGRpcihkaXJlY3RvcnksIChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge3JlamVjdChlcnIpO31cblxuICAgICAgICAgICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVpcmVpbmcgJywgZGlyZWN0b3J5ICsgJy8nICsgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmUoZGlyZWN0b3J5ICsgJy8nICsgZmlsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19
//# sourceURL=/Users/szymon/github/bootstrapper/lib/bootstrapper.js
