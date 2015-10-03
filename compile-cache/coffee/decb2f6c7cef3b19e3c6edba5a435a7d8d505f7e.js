(function() {
  var MacFixPath;

  MacFixPath = require('../lib/mac-fix-path');

  describe("MacFixPath", function() {
    var activationPromise, workspaceElement, _ref;
    _ref = [], workspaceElement = _ref[0], activationPromise = _ref[1];
    beforeEach(function() {
      workspaceElement = atom.views.getView(atom.workspace);
      return activationPromise = atom.packages.activatePackage('mac-fix-path');
    });
    return describe("when the mac-fix-path:toggle event is triggered", function() {
      it("hides and shows the modal panel", function() {
        expect(workspaceElement.querySelector('.mac-fix-path')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'mac-fix-path:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var macFixPathElement, macFixPathPanel;
          expect(workspaceElement.querySelector('.mac-fix-path')).toExist();
          macFixPathElement = workspaceElement.querySelector('.mac-fix-path');
          expect(macFixPathElement).toExist();
          macFixPathPanel = atom.workspace.panelForItem(macFixPathElement);
          expect(macFixPathPanel.isVisible()).toBe(true);
          atom.commands.dispatch(workspaceElement, 'mac-fix-path:toggle');
          return expect(macFixPathPanel.isVisible()).toBe(false);
        });
      });
      return it("hides and shows the view", function() {
        jasmine.attachToDOM(workspaceElement);
        expect(workspaceElement.querySelector('.mac-fix-path')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'mac-fix-path:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var macFixPathElement;
          macFixPathElement = workspaceElement.querySelector('.mac-fix-path');
          expect(macFixPathElement).toBeVisible();
          atom.commands.dispatch(workspaceElement, 'mac-fix-path:toggle');
          return expect(macFixPathElement).not.toBeVisible();
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL3N6eW1vbi8uYXRvbS9wYWNrYWdlcy9tYWMtZml4LXBhdGgvc3BlYy9tYWMtZml4LXBhdGgtc3BlYy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsVUFBQTs7QUFBQSxFQUFBLFVBQUEsR0FBYSxPQUFBLENBQVEscUJBQVIsQ0FBYixDQUFBOztBQUFBLEVBT0EsUUFBQSxDQUFTLFlBQVQsRUFBdUIsU0FBQSxHQUFBO0FBQ3JCLFFBQUEseUNBQUE7QUFBQSxJQUFBLE9BQXdDLEVBQXhDLEVBQUMsMEJBQUQsRUFBbUIsMkJBQW5CLENBQUE7QUFBQSxJQUVBLFVBQUEsQ0FBVyxTQUFBLEdBQUE7QUFDVCxNQUFBLGdCQUFBLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFtQixJQUFJLENBQUMsU0FBeEIsQ0FBbkIsQ0FBQTthQUNBLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZCxDQUE4QixjQUE5QixFQUZYO0lBQUEsQ0FBWCxDQUZBLENBQUE7V0FNQSxRQUFBLENBQVMsaURBQVQsRUFBNEQsU0FBQSxHQUFBO0FBQzFELE1BQUEsRUFBQSxDQUFHLGlDQUFILEVBQXNDLFNBQUEsR0FBQTtBQUdwQyxRQUFBLE1BQUEsQ0FBTyxnQkFBZ0IsQ0FBQyxhQUFqQixDQUErQixlQUEvQixDQUFQLENBQXVELENBQUMsR0FBRyxDQUFDLE9BQTVELENBQUEsQ0FBQSxDQUFBO0FBQUEsUUFJQSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLHFCQUF6QyxDQUpBLENBQUE7QUFBQSxRQU1BLGVBQUEsQ0FBZ0IsU0FBQSxHQUFBO2lCQUNkLGtCQURjO1FBQUEsQ0FBaEIsQ0FOQSxDQUFBO2VBU0EsSUFBQSxDQUFLLFNBQUEsR0FBQTtBQUNILGNBQUEsa0NBQUE7QUFBQSxVQUFBLE1BQUEsQ0FBTyxnQkFBZ0IsQ0FBQyxhQUFqQixDQUErQixlQUEvQixDQUFQLENBQXVELENBQUMsT0FBeEQsQ0FBQSxDQUFBLENBQUE7QUFBQSxVQUVBLGlCQUFBLEdBQW9CLGdCQUFnQixDQUFDLGFBQWpCLENBQStCLGVBQS9CLENBRnBCLENBQUE7QUFBQSxVQUdBLE1BQUEsQ0FBTyxpQkFBUCxDQUF5QixDQUFDLE9BQTFCLENBQUEsQ0FIQSxDQUFBO0FBQUEsVUFLQSxlQUFBLEdBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBZixDQUE0QixpQkFBNUIsQ0FMbEIsQ0FBQTtBQUFBLFVBTUEsTUFBQSxDQUFPLGVBQWUsQ0FBQyxTQUFoQixDQUFBLENBQVAsQ0FBbUMsQ0FBQyxJQUFwQyxDQUF5QyxJQUF6QyxDQU5BLENBQUE7QUFBQSxVQU9BLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBZCxDQUF1QixnQkFBdkIsRUFBeUMscUJBQXpDLENBUEEsQ0FBQTtpQkFRQSxNQUFBLENBQU8sZUFBZSxDQUFDLFNBQWhCLENBQUEsQ0FBUCxDQUFtQyxDQUFDLElBQXBDLENBQXlDLEtBQXpDLEVBVEc7UUFBQSxDQUFMLEVBWm9DO01BQUEsQ0FBdEMsQ0FBQSxDQUFBO2FBdUJBLEVBQUEsQ0FBRywwQkFBSCxFQUErQixTQUFBLEdBQUE7QUFPN0IsUUFBQSxPQUFPLENBQUMsV0FBUixDQUFvQixnQkFBcEIsQ0FBQSxDQUFBO0FBQUEsUUFFQSxNQUFBLENBQU8sZ0JBQWdCLENBQUMsYUFBakIsQ0FBK0IsZUFBL0IsQ0FBUCxDQUF1RCxDQUFDLEdBQUcsQ0FBQyxPQUE1RCxDQUFBLENBRkEsQ0FBQTtBQUFBLFFBTUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFkLENBQXVCLGdCQUF2QixFQUF5QyxxQkFBekMsQ0FOQSxDQUFBO0FBQUEsUUFRQSxlQUFBLENBQWdCLFNBQUEsR0FBQTtpQkFDZCxrQkFEYztRQUFBLENBQWhCLENBUkEsQ0FBQTtlQVdBLElBQUEsQ0FBSyxTQUFBLEdBQUE7QUFFSCxjQUFBLGlCQUFBO0FBQUEsVUFBQSxpQkFBQSxHQUFvQixnQkFBZ0IsQ0FBQyxhQUFqQixDQUErQixlQUEvQixDQUFwQixDQUFBO0FBQUEsVUFDQSxNQUFBLENBQU8saUJBQVAsQ0FBeUIsQ0FBQyxXQUExQixDQUFBLENBREEsQ0FBQTtBQUFBLFVBRUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFkLENBQXVCLGdCQUF2QixFQUF5QyxxQkFBekMsQ0FGQSxDQUFBO2lCQUdBLE1BQUEsQ0FBTyxpQkFBUCxDQUF5QixDQUFDLEdBQUcsQ0FBQyxXQUE5QixDQUFBLEVBTEc7UUFBQSxDQUFMLEVBbEI2QjtNQUFBLENBQS9CLEVBeEIwRDtJQUFBLENBQTVELEVBUHFCO0VBQUEsQ0FBdkIsQ0FQQSxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/szymon/.atom/packages/mac-fix-path/spec/mac-fix-path-spec.coffee
