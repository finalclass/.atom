function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBootstrapper = require('../lib/bootstrapper');

var _libBootstrapper2 = _interopRequireDefault(_libBootstrapper);

/*
# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.
*/

'use babel';

describe('Bootstrapper', function () {
  var activationPromise;
  var workspace;

  beforeEach(function (next) {
    var workspace = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('bootstrapper').then(next);
  });

  it('works?', function (next) {
    atom.commands.dispatch(workspace, 'instant-build:toggle');
    var bootstrapper = atom.packages.getActivePackage('bootstrapper').mainModule;

    bootstrapper.bootstrap(__dirname + './tmp');
  });
});

/*
  beforeEach ->
    workspaceElement = atom.views.getView(atom.workspace)
    activationPromise = atom.packages.activatePackage('bootstrapper')

  describe "when the bootstrapper:toggle event is triggered", ->
    it "hides and shows the modal panel", ->
      # Before the activation event the view is not on the DOM, and no panel
      # has been created
      expect(workspaceElement.querySelector('.bootstrapper')).not.toExist()

      # This is an activation event, triggering it will cause the package to be
      # activated.
      atom.commands.dispatch workspaceElement, 'bootstrapper:toggle'

      waitsForPromise ->
        activationPromise

      runs ->
        expect(workspaceElement.querySelector('.bootstrapper')).toExist()

        bootstrapperElement = workspaceElement.querySelector('.bootstrapper')
        expect(bootstrapperElement).toExist()

        bootstrapperPanel = atom.workspace.panelForItem(bootstrapperElement)
        expect(bootstrapperPanel.isVisible()).toBe true
        atom.commands.dispatch workspaceElement, 'bootstrapper:toggle'
        expect(bootstrapperPanel.isVisible()).toBe false

    it "hides and shows the view", ->
      # This test shows you an integration test testing at the view level.

      # Attaching the workspaceElement to the DOM is required to allow the
      # `toBeVisible()` matchers to work. Anything testing visibility or focus
      # requires that the workspaceElement is on the DOM. Tests that attach the
      # workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement)

      expect(workspaceElement.querySelector('.bootstrapper')).not.toExist()

      # This is an activation event, triggering it causes the package to be
      # activated.
      atom.commands.dispatch workspaceElement, 'bootstrapper:toggle'

      waitsForPromise ->
        activationPromise

      runs ->
        # Now we can test for view visibility
        bootstrapperElement = workspaceElement.querySelector('.bootstrapper')
        expect(bootstrapperElement).toBeVisible()
        atom.commands.dispatch workspaceElement, 'bootstrapper:toggle'
        expect(bootstrapperElement).not.toBeVisible()


*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9zcGVjL2Jvb3RzdHJhcHBlci1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OytCQUV5QixxQkFBcUI7Ozs7Ozs7Ozs7O0FBRjlDLFdBQVcsQ0FBQzs7QUFXWixRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDM0IsTUFBSSxpQkFBaUIsQ0FBQztBQUN0QixNQUFJLFNBQVMsQ0FBQzs7QUFFZCxZQUFVLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDakIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELHFCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDZixDQUFDLENBQUM7O0FBRUgsSUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNuQixRQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUMxRCxRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzs7QUFFN0UsZ0JBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0dBQy9DLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvc3p5bW9uL2dpdGh1Yi9ib290c3RyYXBwZXIvc3BlYy9ib290c3RyYXBwZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgQm9vdHN0cmFwcGVyIGZyb20gJy4uL2xpYi9ib290c3RyYXBwZXInO1xuXG4vKlxuIyBVc2UgdGhlIGNvbW1hbmQgYHdpbmRvdzpydW4tcGFja2FnZS1zcGVjc2AgKGNtZC1hbHQtY3RybC1wKSB0byBydW4gc3BlY3MuXG4jXG4jIFRvIHJ1biBhIHNwZWNpZmljIGBpdGAgb3IgYGRlc2NyaWJlYCBibG9jayBhZGQgYW4gYGZgIHRvIHRoZSBmcm9udCAoZS5nLiBgZml0YFxuIyBvciBgZmRlc2NyaWJlYCkuIFJlbW92ZSB0aGUgYGZgIHRvIHVuZm9jdXMgdGhlIGJsb2NrLlxuKi9cblxuZGVzY3JpYmUoJ0Jvb3RzdHJhcHBlcicsICgpID0+IHtcbiAgICB2YXIgYWN0aXZhdGlvblByb21pc2U7XG4gICAgdmFyIHdvcmtzcGFjZTtcblxuICAgIGJlZm9yZUVhY2goKG5leHQpID0+IHtcbiAgICAgICAgdmFyIHdvcmtzcGFjZSA9IGF0b20udmlld3MuZ2V0VmlldyhhdG9tLndvcmtzcGFjZSk7XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2Jvb3RzdHJhcHBlcicpXG4gICAgICAgIC50aGVuKG5leHQpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3dvcmtzPycsIChuZXh0KSA9PiB7XG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2god29ya3NwYWNlLCAnaW5zdGFudC1idWlsZDp0b2dnbGUnKTtcbiAgICAgICAgdmFyIGJvb3RzdHJhcHBlciA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZSgnYm9vdHN0cmFwcGVyJykubWFpbk1vZHVsZTtcblxuICAgICAgICBib290c3RyYXBwZXIuYm9vdHN0cmFwKF9fZGlybmFtZSArICcuL3RtcCcpO1xuICAgIH0pO1xufSk7XG5cblxuLypcbiAgYmVmb3JlRWFjaCAtPlxuICAgIHdvcmtzcGFjZUVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpXG4gICAgYWN0aXZhdGlvblByb21pc2UgPSBhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnYm9vdHN0cmFwcGVyJylcblxuICBkZXNjcmliZSBcIndoZW4gdGhlIGJvb3RzdHJhcHBlcjp0b2dnbGUgZXZlbnQgaXMgdHJpZ2dlcmVkXCIsIC0+XG4gICAgaXQgXCJoaWRlcyBhbmQgc2hvd3MgdGhlIG1vZGFsIHBhbmVsXCIsIC0+XG4gICAgICAjIEJlZm9yZSB0aGUgYWN0aXZhdGlvbiBldmVudCB0aGUgdmlldyBpcyBub3Qgb24gdGhlIERPTSwgYW5kIG5vIHBhbmVsXG4gICAgICAjIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgIGV4cGVjdCh3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKSkubm90LnRvRXhpc3QoKVxuXG4gICAgICAjIFRoaXMgaXMgYW4gYWN0aXZhdGlvbiBldmVudCwgdHJpZ2dlcmluZyBpdCB3aWxsIGNhdXNlIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAjIGFjdGl2YXRlZC5cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG5cbiAgICAgIHdhaXRzRm9yUHJvbWlzZSAtPlxuICAgICAgICBhY3RpdmF0aW9uUHJvbWlzZVxuXG4gICAgICBydW5zIC0+XG4gICAgICAgIGV4cGVjdCh3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKSkudG9FeGlzdCgpXG5cbiAgICAgICAgYm9vdHN0cmFwcGVyRWxlbWVudCA9IHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJFbGVtZW50KS50b0V4aXN0KClcblxuICAgICAgICBib290c3RyYXBwZXJQYW5lbCA9IGF0b20ud29ya3NwYWNlLnBhbmVsRm9ySXRlbShib290c3RyYXBwZXJFbGVtZW50KVxuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyUGFuZWwuaXNWaXNpYmxlKCkpLnRvQmUgdHJ1ZVxuICAgICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoIHdvcmtzcGFjZUVsZW1lbnQsICdib290c3RyYXBwZXI6dG9nZ2xlJ1xuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyUGFuZWwuaXNWaXNpYmxlKCkpLnRvQmUgZmFsc2VcblxuICAgIGl0IFwiaGlkZXMgYW5kIHNob3dzIHRoZSB2aWV3XCIsIC0+XG4gICAgICAjIFRoaXMgdGVzdCBzaG93cyB5b3UgYW4gaW50ZWdyYXRpb24gdGVzdCB0ZXN0aW5nIGF0IHRoZSB2aWV3IGxldmVsLlxuXG4gICAgICAjIEF0dGFjaGluZyB0aGUgd29ya3NwYWNlRWxlbWVudCB0byB0aGUgRE9NIGlzIHJlcXVpcmVkIHRvIGFsbG93IHRoZVxuICAgICAgIyBgdG9CZVZpc2libGUoKWAgbWF0Y2hlcnMgdG8gd29yay4gQW55dGhpbmcgdGVzdGluZyB2aXNpYmlsaXR5IG9yIGZvY3VzXG4gICAgICAjIHJlcXVpcmVzIHRoYXQgdGhlIHdvcmtzcGFjZUVsZW1lbnQgaXMgb24gdGhlIERPTS4gVGVzdHMgdGhhdCBhdHRhY2ggdGhlXG4gICAgICAjIHdvcmtzcGFjZUVsZW1lbnQgdG8gdGhlIERPTSBhcmUgZ2VuZXJhbGx5IHNsb3dlciB0aGFuIHRob3NlIG9mZiBET00uXG4gICAgICBqYXNtaW5lLmF0dGFjaFRvRE9NKHdvcmtzcGFjZUVsZW1lbnQpXG5cbiAgICAgIGV4cGVjdCh3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKSkubm90LnRvRXhpc3QoKVxuXG4gICAgICAjIFRoaXMgaXMgYW4gYWN0aXZhdGlvbiBldmVudCwgdHJpZ2dlcmluZyBpdCBjYXVzZXMgdGhlIHBhY2thZ2UgdG8gYmVcbiAgICAgICMgYWN0aXZhdGVkLlxuICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCB3b3Jrc3BhY2VFbGVtZW50LCAnYm9vdHN0cmFwcGVyOnRvZ2dsZSdcblxuICAgICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlXG5cbiAgICAgIHJ1bnMgLT5cbiAgICAgICAgIyBOb3cgd2UgY2FuIHRlc3QgZm9yIHZpZXcgdmlzaWJpbGl0eVxuICAgICAgICBib290c3RyYXBwZXJFbGVtZW50ID0gd29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJylcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlckVsZW1lbnQpLnRvQmVWaXNpYmxlKClcbiAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCB3b3Jrc3BhY2VFbGVtZW50LCAnYm9vdHN0cmFwcGVyOnRvZ2dsZSdcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlckVsZW1lbnQpLm5vdC50b0JlVmlzaWJsZSgpXG5cblxuKi9cbiJdfQ==
//# sourceURL=/Users/szymon/github/bootstrapper/spec/bootstrapper-spec.js
