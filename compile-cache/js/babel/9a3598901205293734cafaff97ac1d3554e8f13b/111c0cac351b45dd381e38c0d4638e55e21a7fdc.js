'use babel';
/*global atom*/

atom.commands.add('atom-text-editor', 'cursor:move-up-fast', function () {
  var editor = atom.workspace.getActiveTextEditor();
  if (!editor) {
    return;
  }

  editor.cursors.forEach(function (cursor) {
    return cursor.moveUp(5);
  });
});

atom.commands.add('atom-text-editor', 'cursor:move-down-fast', function () {
  var editor = atom.workspace.getActiveTextEditor();
  if (!editor) {
    return;
  }

  editor.cursors.forEach(function (cursor) {
    return cursor.moveDown(5);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vLmF0b20vbGliL2N1cnNvci1lbmhhbmNlbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxDQUFDOzs7QUFHWixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxZQUFNO0FBQ2pFLE1BQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNsRCxNQUFJLENBQUMsTUFBTSxFQUFFO0FBQUMsV0FBTztHQUFDOztBQUV0QixRQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07V0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FBQztDQUNwRCxDQUFDLENBQUM7O0FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsWUFBTTtBQUNuRSxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDbEQsTUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFDLFdBQU87R0FBQzs7QUFFdEIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1dBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7R0FBQSxDQUFDLENBQUM7Q0FDdEQsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vLmF0b20vbGliL2N1cnNvci1lbmhhbmNlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qZ2xvYmFsIGF0b20qL1xuXG5hdG9tLmNvbW1hbmRzLmFkZCgnYXRvbS10ZXh0LWVkaXRvcicsICdjdXJzb3I6bW92ZS11cC1mYXN0JywgKCkgPT4ge1xuICB2YXIgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICBpZiAoIWVkaXRvcikge3JldHVybjt9XG5cbiAgZWRpdG9yLmN1cnNvcnMuZm9yRWFjaChjdXJzb3IgPT4gY3Vyc29yLm1vdmVVcCg1KSk7XG59KTtcblxuYXRvbS5jb21tYW5kcy5hZGQoJ2F0b20tdGV4dC1lZGl0b3InLCAnY3Vyc29yOm1vdmUtZG93bi1mYXN0JywgKCkgPT4ge1xuICB2YXIgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICBpZiAoIWVkaXRvcikge3JldHVybjt9XG5cbiAgZWRpdG9yLmN1cnNvcnMuZm9yRWFjaChjdXJzb3IgPT4gY3Vyc29yLm1vdmVEb3duKDUpKTtcbn0pO1xuIl19
//# sourceURL=/Users/szymon/.atom/lib/cursor-enhancements.js
