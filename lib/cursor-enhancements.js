'use babel';
/*global atom*/

atom.commands.add('atom-text-editor', 'cursor:move-up-fast', () => {
  var editor = atom.workspace.getActiveTextEditor();
  if (!editor) {return;}

  editor.cursors.forEach(cursor => cursor.moveUp(5));
});

atom.commands.add('atom-text-editor', 'cursor:move-down-fast', () => {
  var editor = atom.workspace.getActiveTextEditor();
  if (!editor) {return;}

  editor.cursors.forEach(cursor => cursor.moveDown(5));
});
