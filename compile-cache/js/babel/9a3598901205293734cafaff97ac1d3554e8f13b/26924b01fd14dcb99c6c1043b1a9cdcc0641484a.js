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

(0, _child_process.exec)('apm install atom-commander', function (err, stdout, stderr) {
    console.log(err, stdout, stderr);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs0Q0FFcUIsbUNBQW1DOztJQUE1QyxHQUFHOzs2QkFDSSxlQUFlOztBQUhsQyxXQUFXLENBQUM7O0FBS1oseUJBQUssbUNBQW1DLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN2RSxXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDMUIsUUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ2hCLGVBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOztBQUVELDZCQUFLLDRCQUE0QixFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDeEQsZUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQzs7QUFHSCx5QkFBSyw0QkFBNEIsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFLO0FBQ3hELFdBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNwQyxDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCAqIGFzIGFjZSBmcm9tICcuL2xpYi9hdG9tLWNvbW1hbmRlci1lbmhhbmNlbWVudHMnO1xuaW1wb3J0IHtleGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZXhlYyhcIiRTSEVMTCAtLWxvZ2luIC1pIC1jICdlY2hvICRQQVRIJ1wiLCBmdW5jdGlvbiAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSB7XG4gICAgcHJvY2Vzcy5lbnYuUEFUSCA9IHN0ZG91dDtcbiAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgfVxuXG4gICAgZXhlYygnYXBtIGluc3RhbGwgYXRvbS1jb21tYW5kZXInLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIsIHN0ZG91dCwgc3RkZXJyKTtcbiAgICB9KTtcbn0pO1xuXG5cbmV4ZWMoJ2FwbSBpbnN0YWxsIGF0b20tY29tbWFuZGVyJywgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIsIHN0ZG91dCwgc3RkZXJyKTtcbn0pO1xuIl19
//# sourceURL=/Users/szymon/.atom/init.js
