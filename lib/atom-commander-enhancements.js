'use babel';
/*global atom*/

import {File} from 'atom';
import * as fs from 'fs';

atom.commands.add('atom-text-editor', 'atom-commander:reveal-current-file', () => {
  var editor = atom.workspace.getActiveTextEditor();
  if (!editor) {return;}

  var atomCommander = atom.packages.getActivePackage('atom-commander').mainModule;

  atomCommander.bottomPanel.show();
  atomCommander.mainView.refocusLastView();
  atomCommander.actions.goFile(new File(editor.getPath()));
});

atom.commands.add('.atom-commander-container-view', 'atom-commander:open-highlighted-item-and-hide', (event) => {
  var atomCommander = atom.packages.getActivePackage('atom-commander').mainModule;
  var view = atomCommander.actions.getFocusedView();
  if (view === null) {
      return;
  }

  var item = view.getHighlightedItem();

  atom.commands.dispatch(event.target, 'atom-commander:open-highlighted-item');

  if (fs.lstatSync(item.getPath()).isFile()) {
      atom.commands.dispatch(event.target, 'atom-commander:toggle-visible');
  }
});

atom.commands.add('body', 'atom-commander:go-project-and-show-commander', (event) => {
    var atomCommander = atom.packages.getActivePackage('atom-commander').mainModule;
    atomCommander.bottomPanel.show();
    atom.commands.dispatch(event.target, 'atom-commander:go-project');
});
