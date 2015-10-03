function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _libAtomCommanderEnhancements = require('./lib/atom-commander-enhancements');

var ace = _interopRequireWildcard(_libAtomCommanderEnhancements);

var _child_process = require('child_process');

'use babel';

(0, _child_process.exec)('apm install atom-commander', function (err, stdout, stderr) {
    console.log(err, stdout, stderr);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs0Q0FFcUIsbUNBQW1DOztJQUE1QyxHQUFHOzs2QkFDSSxlQUFlOztBQUhsQyxXQUFXLENBQUM7O0FBS1oseUJBQUssNEJBQTRCLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUN4RCxXQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDcEMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgKiBhcyBhY2UgZnJvbSAnLi9saWIvYXRvbS1jb21tYW5kZXItZW5oYW5jZW1lbnRzJztcbmltcG9ydCB7ZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4ZWMoJ2FwbSBpbnN0YWxsIGF0b20tY29tbWFuZGVyJywgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIsIHN0ZG91dCwgc3RkZXJyKTtcbn0pO1xuIl19
//# sourceURL=/Users/szymon/.atom/init.js
