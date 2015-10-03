var _child_process = require('child_process');

'use babel';

function installPackages(packages, done) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5zdGFsbFBhY2thZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2QkFFbUIsZUFBZTs7QUFGbEMsV0FBVyxDQUFDOztBQUlaLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7O0FBRXJDLDZCQUFLLG1DQUFtQyxFQUFFLFVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDdkUsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQzFCLFlBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUNoQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdkM7O0FBRUQsaUNBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUN2QixtQkFBTyxjQUFjLEdBQUcsR0FBRyxDQUFDO1NBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ2YsVUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNyQixnQkFBSSxHQUFHLEVBQUU7QUFDTCx1QkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3hDLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYjtBQUNELGdCQUFJLE1BQU0sRUFBRTtBQUNSLHVCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNoQztBQUNELGdCQUFJLE1BQU0sRUFBRTtBQUNSLHVCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO0FBQ0QsZ0JBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBRU4iLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9pbnN0YWxsUGFja2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHtleGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZnVuY3Rpb24gaW5zdGFsbFBhY2thZ2VzKHBhY2thZ2VzLCBkb25lKSB7XG5cbiAgICBleGVjKFwiJFNIRUxMIC0tbG9naW4gLWkgLWMgJ2VjaG8gJFBBVEgnXCIsIGZ1bmN0aW9uIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuUEFUSCA9IHN0ZG91dDtcbiAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWMocGFja2FnZXMubWFwKChwa2cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnYXBtIGluc3RhbGwgJyArIHBrZztcbiAgICAgICAgfSkuam9pbignICYmICcpLFxuICAgICAgICAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbnN0YWxsaW5nIHBhY2thZ2UnKTtcbiAgICAgICAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGRvdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGRvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufVxuIl19
//# sourceURL=/Users/szymon/.atom/installPackages.js
