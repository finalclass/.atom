require('./custom/atom-commander-enhancements');

require('./custom/cursor-enhancements');

var _child_process = require('child_process');

'use babel';

(0, _child_process.exec)("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
    process.env.PATH = stdout;
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiUUFFZSxzQ0FBc0M7O1FBQ3RDLDhCQUE4Qjs7NkJBRTFCLGVBQWU7O0FBTGxDLFdBQVcsQ0FBQzs7QUFPWix5QkFBSyxtQ0FBbUMsRUFBRSxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3ZFLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUMxQixRQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7S0FDdkM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL3N6eW1vbi8uYXRvbS9pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB7fSBmcm9tICcuL2N1c3RvbS9hdG9tLWNvbW1hbmRlci1lbmhhbmNlbWVudHMnO1xuaW1wb3J0IHt9IGZyb20gJy4vY3VzdG9tL2N1cnNvci1lbmhhbmNlbWVudHMnO1xuXG5pbXBvcnQge2V4ZWN9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leGVjKFwiJFNIRUxMIC0tbG9naW4gLWkgLWMgJ2VjaG8gJFBBVEgnXCIsIGZ1bmN0aW9uIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5QQVRIID0gc3Rkb3V0O1xuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBlcnJvcjogJyArIGVycm9yKTtcbiAgICB9XG59KTtcbiJdfQ==
//# sourceURL=/Users/szymon/.atom/init.js
