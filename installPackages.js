'use babel';

import {exec} from 'child_process';

export default function installPackages(packages, done) {

    exec("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
        process.env.PATH = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        console.log('apm install ', packages.join(' '));

        exec('apm install ' + packages.join(' '),
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
