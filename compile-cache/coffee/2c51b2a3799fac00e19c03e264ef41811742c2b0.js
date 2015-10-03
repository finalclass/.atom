(function() {
  var instantBuild;

  instantBuild = require('../lib/instant-build');

  describe("instantBuild", function() {
    var activationPromise, workspaceElement, _ref;
    _ref = [], workspaceElement = _ref[0], activationPromise = _ref[1];
    beforeEach(function() {
      workspaceElement = atom.views.getView(atom.workspace);
      return activationPromise = atom.packages.activatePackage('instant-build');
    });
    return describe("when the instant-build:toggle event is triggered", function() {
      it("hides and shows the modal panel", function() {
        expect(workspaceElement.querySelector('.instant-build')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'instant-build:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var instantBuildElement, instantBuildPanel;
          expect(workspaceElement.querySelector('.instant-build')).toExist();
          instantBuildElement = workspaceElement.querySelector('.instant-build');
          expect(instantBuildElement).toExist();
          instantBuildPanel = atom.workspace.panelForItem(instantBuildElement);
          expect(instantBuildPanel.isVisible()).toBe(true);
          atom.commands.dispatch(workspaceElement, 'instant-build:toggle');
          return expect(instantBuildPanel.isVisible()).toBe(false);
        });
      });
      return it("hides and shows the view", function() {
        jasmine.attachToDOM(workspaceElement);
        expect(workspaceElement.querySelector('.instant-build')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'instant-build:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var instantBuildElement;
          instantBuildElement = workspaceElement.querySelector('.instant-build');
          expect(instantBuildElement).toBeVisible();
          atom.commands.dispatch(workspaceElement, 'instant-build:toggle');
          return expect(instantBuildElement).not.toBeVisible();
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9pbnN0YW50LWJ1aWxkL3NwZWMvaW5zdGFudC1idWlsZC1zcGVjLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxZQUFBOztBQUFBLEVBQUEsWUFBQSxHQUFlLE9BQUEsQ0FBUSxzQkFBUixDQUFmLENBQUE7O0FBQUEsRUFPQSxRQUFBLENBQVMsY0FBVCxFQUF5QixTQUFBLEdBQUE7QUFDdkIsUUFBQSx5Q0FBQTtBQUFBLElBQUEsT0FBd0MsRUFBeEMsRUFBQywwQkFBRCxFQUFtQiwyQkFBbkIsQ0FBQTtBQUFBLElBRUEsVUFBQSxDQUFXLFNBQUEsR0FBQTtBQUNULE1BQUEsZ0JBQUEsR0FBbUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFYLENBQW1CLElBQUksQ0FBQyxTQUF4QixDQUFuQixDQUFBO2FBQ0EsaUJBQUEsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLGVBQTlCLEVBRlg7SUFBQSxDQUFYLENBRkEsQ0FBQTtXQU1BLFFBQUEsQ0FBUyxrREFBVCxFQUE2RCxTQUFBLEdBQUE7QUFDM0QsTUFBQSxFQUFBLENBQUcsaUNBQUgsRUFBc0MsU0FBQSxHQUFBO0FBR3BDLFFBQUEsTUFBQSxDQUFPLGdCQUFnQixDQUFDLGFBQWpCLENBQStCLGdCQUEvQixDQUFQLENBQXdELENBQUMsR0FBRyxDQUFDLE9BQTdELENBQUEsQ0FBQSxDQUFBO0FBQUEsUUFJQSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLHNCQUF6QyxDQUpBLENBQUE7QUFBQSxRQU1BLGVBQUEsQ0FBZ0IsU0FBQSxHQUFBO2lCQUNkLGtCQURjO1FBQUEsQ0FBaEIsQ0FOQSxDQUFBO2VBU0EsSUFBQSxDQUFLLFNBQUEsR0FBQTtBQUNILGNBQUEsc0NBQUE7QUFBQSxVQUFBLE1BQUEsQ0FBTyxnQkFBZ0IsQ0FBQyxhQUFqQixDQUErQixnQkFBL0IsQ0FBUCxDQUF3RCxDQUFDLE9BQXpELENBQUEsQ0FBQSxDQUFBO0FBQUEsVUFFQSxtQkFBQSxHQUFzQixnQkFBZ0IsQ0FBQyxhQUFqQixDQUErQixnQkFBL0IsQ0FGdEIsQ0FBQTtBQUFBLFVBR0EsTUFBQSxDQUFPLG1CQUFQLENBQTJCLENBQUMsT0FBNUIsQ0FBQSxDQUhBLENBQUE7QUFBQSxVQUtBLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBZixDQUE0QixtQkFBNUIsQ0FMcEIsQ0FBQTtBQUFBLFVBTUEsTUFBQSxDQUFPLGlCQUFpQixDQUFDLFNBQWxCLENBQUEsQ0FBUCxDQUFxQyxDQUFDLElBQXRDLENBQTJDLElBQTNDLENBTkEsQ0FBQTtBQUFBLFVBT0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFkLENBQXVCLGdCQUF2QixFQUF5QyxzQkFBekMsQ0FQQSxDQUFBO2lCQVFBLE1BQUEsQ0FBTyxpQkFBaUIsQ0FBQyxTQUFsQixDQUFBLENBQVAsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxLQUEzQyxFQVRHO1FBQUEsQ0FBTCxFQVpvQztNQUFBLENBQXRDLENBQUEsQ0FBQTthQXVCQSxFQUFBLENBQUcsMEJBQUgsRUFBK0IsU0FBQSxHQUFBO0FBTzdCLFFBQUEsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsZ0JBQXBCLENBQUEsQ0FBQTtBQUFBLFFBRUEsTUFBQSxDQUFPLGdCQUFnQixDQUFDLGFBQWpCLENBQStCLGdCQUEvQixDQUFQLENBQXdELENBQUMsR0FBRyxDQUFDLE9BQTdELENBQUEsQ0FGQSxDQUFBO0FBQUEsUUFNQSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLHNCQUF6QyxDQU5BLENBQUE7QUFBQSxRQVFBLGVBQUEsQ0FBZ0IsU0FBQSxHQUFBO2lCQUNkLGtCQURjO1FBQUEsQ0FBaEIsQ0FSQSxDQUFBO2VBV0EsSUFBQSxDQUFLLFNBQUEsR0FBQTtBQUVILGNBQUEsbUJBQUE7QUFBQSxVQUFBLG1CQUFBLEdBQXNCLGdCQUFnQixDQUFDLGFBQWpCLENBQStCLGdCQUEvQixDQUF0QixDQUFBO0FBQUEsVUFDQSxNQUFBLENBQU8sbUJBQVAsQ0FBMkIsQ0FBQyxXQUE1QixDQUFBLENBREEsQ0FBQTtBQUFBLFVBRUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFkLENBQXVCLGdCQUF2QixFQUF5QyxzQkFBekMsQ0FGQSxDQUFBO2lCQUdBLE1BQUEsQ0FBTyxtQkFBUCxDQUEyQixDQUFDLEdBQUcsQ0FBQyxXQUFoQyxDQUFBLEVBTEc7UUFBQSxDQUFMLEVBbEI2QjtNQUFBLENBQS9CLEVBeEIyRDtJQUFBLENBQTdELEVBUHVCO0VBQUEsQ0FBekIsQ0FQQSxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/instant-build/spec/instant-build-spec.coffee
