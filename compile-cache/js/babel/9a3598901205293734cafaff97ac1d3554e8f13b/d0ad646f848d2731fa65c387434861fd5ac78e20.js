Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = installPackages;

var _child_process = require('child_process');

'use babel';

function installPackages(packages, done) {

    (0, _child_process.exec)("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
        process.env.PATH = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        console.log('Installing packages ', packages.join(', '));

        (0, _child_process.exec)('apm install ' + packages.join(' '), function (err, stdout, stderr) {
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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5zdGFsbFBhY2thZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFJd0IsZUFBZTs7NkJBRnBCLGVBQWU7O0FBRmxDLFdBQVcsQ0FBQzs7QUFJRyxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFOztBQUVwRCw2QkFBSyxtQ0FBbUMsRUFBRSxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3ZFLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUMxQixZQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOztBQUVELGVBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUV6RCxpQ0FBSyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDeEMsVUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNyQixnQkFBSSxHQUFHLEVBQUU7QUFDTCx1QkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3hDLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYjtBQUNELGdCQUFJLE1BQU0sRUFBRTtBQUNSLHVCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNoQztBQUNELGdCQUFJLE1BQU0sRUFBRTtBQUNSLHVCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO0FBQ0QsZ0JBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBRU4iLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9pbnN0YWxsUGFja2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHtleGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zdGFsbFBhY2thZ2VzKHBhY2thZ2VzLCBkb25lKSB7XG5cbiAgICBleGVjKFwiJFNIRUxMIC0tbG9naW4gLWkgLWMgJ2VjaG8gJFBBVEgnXCIsIGZ1bmN0aW9uIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuUEFUSCA9IHN0ZG91dDtcbiAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnN0YWxsaW5nIHBhY2thZ2VzICcsIHBhY2thZ2VzLmpvaW4oJywgJykpO1xuXG4gICAgICAgIGV4ZWMoJ2FwbSBpbnN0YWxsICcgKyBwYWNrYWdlcy5qb2luKCcgJyksXG4gICAgICAgIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluc3RhbGxpbmcgcGFja2FnZScpO1xuICAgICAgICAgICAgICAgIGRvbmUoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBzdGRlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0ZG91dCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZG91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XG4iXX0=
//# sourceURL=/Users/szymon/.atom/installPackages.js
