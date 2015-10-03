function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _libAtomCommanderEnhancements = require('./lib/atom-commander-enhancements');

var ace = _interopRequireWildcard(_libAtomCommanderEnhancements);

var _child_process = require('child_process');

'use babel';

function initPackages(packages, done) {

    (0, _child_process.exec)("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
        process.env.PATH = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        (0, _child_process.exec)(packages.map(function (pkg) {
            return 'apm install ' + pkg;
        }).join(' && '), function (err, stdout, stderr) {
            if (err) {
                console.log('Error installing package');
                done(err);
            }
            if (stderr) {
                console.log('Error', stderr);
            }
            if (stdout) {
                console.log(stdout);
            }
            done();
        });
    });
}

initPackages(['atom-commander'], function () {
    console.log('done!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs0Q0FFcUIsbUNBQW1DOztJQUE1QyxHQUFHOzs2QkFDSSxlQUFlOztBQUhsQyxXQUFXLENBQUM7O0FBS1osU0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRTs7QUFFbEMsNkJBQUssbUNBQW1DLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN2RSxlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDMUIsWUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ2hCLG1CQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7QUFFRCxpQ0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ3ZCLG1CQUFPLGNBQWMsR0FBRyxHQUFHLENBQUM7U0FDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDZixVQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFLO0FBQ3JCLGdCQUFJLEdBQUcsRUFBRTtBQUNMLHVCQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDeEMsb0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNiO0FBQ0QsZ0JBQUksTUFBTSxFQUFFO0FBQ1IsdUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO0FBQ0QsZ0JBQUksTUFBTSxFQUFFO0FBQ1IsdUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkI7QUFDRCxnQkFBSSxFQUFFLENBQUM7U0FDVixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FFTjs7QUFFRCxZQUFZLENBQUMsQ0FDVCxnQkFBZ0IsQ0FDbkIsRUFBRSxZQUFZO0FBQ1gsV0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN4QixDQUFDLENBQUEiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCAqIGFzIGFjZSBmcm9tICcuL2xpYi9hdG9tLWNvbW1hbmRlci1lbmhhbmNlbWVudHMnO1xuaW1wb3J0IHtleGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZnVuY3Rpb24gaW5pdFBhY2thZ2VzKHBhY2thZ2VzLCBkb25lKSB7XG5cbiAgICBleGVjKFwiJFNIRUxMIC0tbG9naW4gLWkgLWMgJ2VjaG8gJFBBVEgnXCIsIGZ1bmN0aW9uIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuUEFUSCA9IHN0ZG91dDtcbiAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWMocGFja2FnZXMubWFwKChwa2cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnYXBtIGluc3RhbGwgJyArIHBrZztcbiAgICAgICAgfSkuam9pbignICYmICcpLFxuICAgICAgICAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbnN0YWxsaW5nIHBhY2thZ2UnKTtcbiAgICAgICAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGRvdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGRvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufVxuXG5pbml0UGFja2FnZXMoW1xuICAgICdhdG9tLWNvbW1hbmRlcidcbl0sIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZG9uZSEnKTtcbn0pXG4iXX0=
//# sourceURL=/Users/szymon/.atom/init.js
