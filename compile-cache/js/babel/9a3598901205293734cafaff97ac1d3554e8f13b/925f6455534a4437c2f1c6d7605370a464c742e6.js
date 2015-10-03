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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5zdGFsbFBhY2thZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFJd0IsZUFBZTs7NkJBRnBCLGVBQWU7O0FBRmxDLFdBQVcsQ0FBQzs7QUFJRyxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFOztBQUVwRCw2QkFBSyxtQ0FBbUMsRUFBRSxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3ZFLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUMxQixZQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOztBQUVELGlDQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDdkIsbUJBQU8sY0FBYyxHQUFHLEdBQUcsQ0FBQztTQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNmLFVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDckIsZ0JBQUksR0FBRyxFQUFFO0FBQ0wsdUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN4QyxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7QUFDRCxnQkFBSSxNQUFNLEVBQUU7QUFDUix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEM7QUFDRCxnQkFBSSxNQUFNLEVBQUU7QUFDUix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtBQUNELGdCQUFJLEVBQUUsQ0FBQztTQUNWLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUVOIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vLmF0b20vaW5zdGFsbFBhY2thZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7ZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc3RhbGxQYWNrYWdlcyhwYWNrYWdlcywgZG9uZSkge1xuXG4gICAgZXhlYyhcIiRTSEVMTCAtLWxvZ2luIC1pIC1jICdlY2hvICRQQVRIJ1wiLCBmdW5jdGlvbiAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSB7XG4gICAgICAgIHByb2Nlc3MuZW52LlBBVEggPSBzdGRvdXQ7XG4gICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBleGVjKHBhY2thZ2VzLm1hcCgocGtnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ2FwbSBpbnN0YWxsICcgKyBwa2c7XG4gICAgICAgIH0pLmpvaW4oJyAmJiAnKSxcbiAgICAgICAgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW5zdGFsbGluZyBwYWNrYWdlJyk7XG4gICAgICAgICAgICAgICAgZG9uZShlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIHN0ZGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Rkb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3Rkb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn1cbiJdfQ==
//# sourceURL=/Users/szymon/.atom/installPackages.js
