Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _child_process = require('child_process');

'use babel';

var MacFixPath = function MacFixPath() {
    _classCallCheck(this, MacFixPath);

    (0, _child_process.exec)('$SHELL --login -i -c "echo $PATH"', function (error, stdout, stderr) {
        process.env.PATH = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        if (stderr) {
            console.log('err', stderr);
        }
    });
};

exports['default'] = MacFixPath;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vcGFja2FnZXMvbWFjLWZpeC1wYXRoL2xpYi9tYWMtZml4LXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OzZCQUVtQixlQUFlOztBQUZsQyxXQUFXLENBQUM7O0lBSVMsVUFBVSxHQUNoQixTQURNLFVBQVUsR0FDYjswQkFERyxVQUFVOztBQUV2Qiw2QkFBSyxtQ0FBbUMsRUFBRSxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3ZFLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUMxQixZQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0FBQ0QsWUFBSSxNQUFNLEVBQUU7QUFDUixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUI7S0FDSixDQUFDLENBQUM7Q0FDTjs7cUJBWGdCLFVBQVUiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9tYWMtZml4LXBhdGgvbGliL21hYy1maXgtcGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQge2V4ZWN9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWNGaXhQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZXhlYygnJFNIRUxMIC0tbG9naW4gLWkgLWMgXCJlY2hvICRQQVRIXCInLCBmdW5jdGlvbiAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5QQVRIID0gc3Rkb3V0O1xuICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicsIHN0ZGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
//# sourceURL=/Users/szymon/.atom/packages/mac-fix-path/lib/mac-fix-path.js
