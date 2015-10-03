'use babel';

import installPackages from './installPackages.js';

installPackages([
    'atom-commander',
    'move-fast',
    'mac-fix-path'
], function () {
    console.log('done!');
})
