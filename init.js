'use babel';

import {} from './lib/atom-commander-enhancements';
import {} from './lib/cursor-enhancements';
import {PackagesInstaller} from './lib/PackagesInstaller';
import {exec} from 'child_process';

var bootstrapper = atom.packages.getActivePackage('bootstrapper').mainModule;
bootstrapper.bootstrap('./lib/boot');


exec("$SHELL --login -i -c 'echo $PATH'", function (error, stdout, stderr) {
    process.env.PATH = stdout;
    if (error !== null) {
        console.log('exec error: ' + error);
    }

    var pkgInstaller = new PackagesInstaller();

    pkgInstaller.add
});

pkgInstaller.install([

]);
