'use babel';

import {} from './custom/atom-commander-enhancements';
import {} from './custom/cursor-enhancements';

import {exec} from 'child_process';

exec("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
    process.env.PATH = stdout;
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
