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
                fs.readDir(directory, function (err, files) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9saWIvYm9vdHN0cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBRWtDLE1BQU07O2tCQUNwQixJQUFJOztJQUFaLEVBQUU7O0FBSGQsV0FBVyxDQUFDOztJQUtTLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUVwQixtQkFBQyxTQUFTLEVBQUU7QUFDakIsbUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLGtCQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDbEMsd0JBQUksR0FBRyxFQUFFO0FBQUMsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFBQztBQUN2QiwyQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQixDQUFDLENBQUM7YUFDTixDQUFDLENBQUE7U0FDTDs7O1dBVGdCLFlBQVk7OztxQkFBWixZQUFZIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9saWIvYm9vdHN0cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RzdHJhcHBlciB7XG5cbiAgICBib290c3RyYXAoZGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmcy5yZWFkRGlyKGRpcmVjdG9yeSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7cmVqZWN0KGVycik7fVxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=
//# sourceURL=/Users/szymon/github/bootstrapper/lib/bootstrapper.js
