'use babel';

import * as ace from './lib/atom-commander-enhancements';
import {exec} from 'child_process';

function initPackages(packages, done) {

    exec("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
        process.env.PATH = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        exec(packages.map((pkg) => {
            return 'apm install ' + pkg;
        }).join(' && '),
        (err, stdout, stderr) => {
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

initPackages([
    'atom-commander'
], function () {
    console.log('done!');
})
