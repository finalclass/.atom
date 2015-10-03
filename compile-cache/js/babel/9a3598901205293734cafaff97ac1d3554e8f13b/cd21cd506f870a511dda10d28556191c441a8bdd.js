function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _libAtomCommanderEnhancements = require('./lib/atom-commander-enhancements');

var ace = _interopRequireWildcard(_libAtomCommanderEnhancements);

var _child_process = require('child_process');

'use babel';

(0, _child_process.exec)("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
    process.env.PATH = stdout;
    if (error !== null) {
        console.log('exec error: ' + error);
    }

    (0, _child_process.exec)('apm install atom-commander', function (err, stdout, stderr) {
        console.log(err, stdout, stderr);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs0Q0FFcUIsbUNBQW1DOztJQUE1QyxHQUFHOzs2QkFDSSxlQUFlOztBQUhsQyxXQUFXLENBQUM7O0FBS1oseUJBQUssbUNBQW1DLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN2RSxXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDMUIsUUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ2hCLGVBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOztBQUVELDZCQUFLLDRCQUE0QixFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDeEQsZUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvc3p5bW9uLy5hdG9tL2luaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0ICogYXMgYWNlIGZyb20gJy4vbGliL2F0b20tY29tbWFuZGVyLWVuaGFuY2VtZW50cyc7XG5pbXBvcnQge2V4ZWN9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leGVjKFwiJFNIRUxMIC0tbG9naW4gLWkgLWMgJ2VjaG8gJFBBVEgnXCIsIGZ1bmN0aW9uIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5QQVRIID0gc3Rkb3V0O1xuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBlcnJvcjogJyArIGVycm9yKTtcbiAgICB9XG5cbiAgICBleGVjKCdhcG0gaW5zdGFsbCBhdG9tLWNvbW1hbmRlcicsIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgc3Rkb3V0LCBzdGRlcnIpO1xuICAgIH0pO1xufSk7XG4iXX0=
//# sourceURL=/Users/szymon/.atom/init.js
