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

    //bootstrapper.bootstrap(__dirname + './tmp');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9zcGVjL2Jvb3RzdHJhcHBlci1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OytCQUV5QixxQkFBcUI7Ozs7Ozs7Ozs7O0FBRjlDLFdBQVcsQ0FBQzs7QUFXWixRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDM0IsTUFBSSxpQkFBaUIsQ0FBQztBQUN0QixNQUFJLFNBQVMsQ0FBQzs7QUFFZCxZQUFVLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDakIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELHFCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDZixDQUFDLENBQUM7O0FBRUgsSUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNuQixRQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUMxRCxRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzs7O0dBR2hGLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvc3p5bW9uL2dpdGh1Yi9ib290c3RyYXBwZXIvc3BlYy9ib290c3RyYXBwZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgQm9vdHN0cmFwcGVyIGZyb20gJy4uL2xpYi9ib290c3RyYXBwZXInO1xuXG4vKlxuIyBVc2UgdGhlIGNvbW1hbmQgYHdpbmRvdzpydW4tcGFja2FnZS1zcGVjc2AgKGNtZC1hbHQtY3RybC1wKSB0byBydW4gc3BlY3MuXG4jXG4jIFRvIHJ1biBhIHNwZWNpZmljIGBpdGAgb3IgYGRlc2NyaWJlYCBibG9jayBhZGQgYW4gYGZgIHRvIHRoZSBmcm9udCAoZS5nLiBgZml0YFxuIyBvciBgZmRlc2NyaWJlYCkuIFJlbW92ZSB0aGUgYGZgIHRvIHVuZm9jdXMgdGhlIGJsb2NrLlxuKi9cblxuZGVzY3JpYmUoJ0Jvb3RzdHJhcHBlcicsICgpID0+IHtcbiAgICB2YXIgYWN0aXZhdGlvblByb21pc2U7XG4gICAgdmFyIHdvcmtzcGFjZTtcblxuICAgIGJlZm9yZUVhY2goKG5leHQpID0+IHtcbiAgICAgICAgdmFyIHdvcmtzcGFjZSA9IGF0b20udmlld3MuZ2V0VmlldyhhdG9tLndvcmtzcGFjZSk7XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2Jvb3RzdHJhcHBlcicpXG4gICAgICAgIC50aGVuKG5leHQpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3dvcmtzPycsIChuZXh0KSA9PiB7XG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2god29ya3NwYWNlLCAnaW5zdGFudC1idWlsZDp0b2dnbGUnKTtcbiAgICAgICAgdmFyIGJvb3RzdHJhcHBlciA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZSgnYm9vdHN0cmFwcGVyJykubWFpbk1vZHVsZTtcblxuICAgICAgICAvL2Jvb3RzdHJhcHBlci5ib290c3RyYXAoX19kaXJuYW1lICsgJy4vdG1wJyk7XG4gICAgfSk7XG59KTtcblxuXG4vKlxuICBiZWZvcmVFYWNoIC0+XG4gICAgd29ya3NwYWNlRWxlbWVudCA9IGF0b20udmlld3MuZ2V0VmlldyhhdG9tLndvcmtzcGFjZSlcbiAgICBhY3RpdmF0aW9uUHJvbWlzZSA9IGF0b20ucGFja2FnZXMuYWN0aXZhdGVQYWNrYWdlKCdib290c3RyYXBwZXInKVxuXG4gIGRlc2NyaWJlIFwid2hlbiB0aGUgYm9vdHN0cmFwcGVyOnRvZ2dsZSBldmVudCBpcyB0cmlnZ2VyZWRcIiwgLT5cbiAgICBpdCBcImhpZGVzIGFuZCBzaG93cyB0aGUgbW9kYWwgcGFuZWxcIiwgLT5cbiAgICAgICMgQmVmb3JlIHRoZSBhY3RpdmF0aW9uIGV2ZW50IHRoZSB2aWV3IGlzIG5vdCBvbiB0aGUgRE9NLCBhbmQgbm8gcGFuZWxcbiAgICAgICMgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpKS5ub3QudG9FeGlzdCgpXG5cbiAgICAgICMgVGhpcyBpcyBhbiBhY3RpdmF0aW9uIGV2ZW50LCB0cmlnZ2VyaW5nIGl0IHdpbGwgY2F1c2UgdGhlIHBhY2thZ2UgdG8gYmVcbiAgICAgICMgYWN0aXZhdGVkLlxuICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCB3b3Jrc3BhY2VFbGVtZW50LCAnYm9vdHN0cmFwcGVyOnRvZ2dsZSdcblxuICAgICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlXG5cbiAgICAgIHJ1bnMgLT5cbiAgICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpKS50b0V4aXN0KClcblxuICAgICAgICBib290c3RyYXBwZXJFbGVtZW50ID0gd29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJylcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlckVsZW1lbnQpLnRvRXhpc3QoKVxuXG4gICAgICAgIGJvb3RzdHJhcHBlclBhbmVsID0gYXRvbS53b3Jrc3BhY2UucGFuZWxGb3JJdGVtKGJvb3RzdHJhcHBlckVsZW1lbnQpXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJQYW5lbC5pc1Zpc2libGUoKSkudG9CZSB0cnVlXG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJQYW5lbC5pc1Zpc2libGUoKSkudG9CZSBmYWxzZVxuXG4gICAgaXQgXCJoaWRlcyBhbmQgc2hvd3MgdGhlIHZpZXdcIiwgLT5cbiAgICAgICMgVGhpcyB0ZXN0IHNob3dzIHlvdSBhbiBpbnRlZ3JhdGlvbiB0ZXN0IHRlc3RpbmcgYXQgdGhlIHZpZXcgbGV2ZWwuXG5cbiAgICAgICMgQXR0YWNoaW5nIHRoZSB3b3Jrc3BhY2VFbGVtZW50IHRvIHRoZSBET00gaXMgcmVxdWlyZWQgdG8gYWxsb3cgdGhlXG4gICAgICAjIGB0b0JlVmlzaWJsZSgpYCBtYXRjaGVycyB0byB3b3JrLiBBbnl0aGluZyB0ZXN0aW5nIHZpc2liaWxpdHkgb3IgZm9jdXNcbiAgICAgICMgcmVxdWlyZXMgdGhhdCB0aGUgd29ya3NwYWNlRWxlbWVudCBpcyBvbiB0aGUgRE9NLiBUZXN0cyB0aGF0IGF0dGFjaCB0aGVcbiAgICAgICMgd29ya3NwYWNlRWxlbWVudCB0byB0aGUgRE9NIGFyZSBnZW5lcmFsbHkgc2xvd2VyIHRoYW4gdGhvc2Ugb2ZmIERPTS5cbiAgICAgIGphc21pbmUuYXR0YWNoVG9ET00od29ya3NwYWNlRWxlbWVudClcblxuICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpKS5ub3QudG9FeGlzdCgpXG5cbiAgICAgICMgVGhpcyBpcyBhbiBhY3RpdmF0aW9uIGV2ZW50LCB0cmlnZ2VyaW5nIGl0IGNhdXNlcyB0aGUgcGFja2FnZSB0byBiZVxuICAgICAgIyBhY3RpdmF0ZWQuXG4gICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoIHdvcmtzcGFjZUVsZW1lbnQsICdib290c3RyYXBwZXI6dG9nZ2xlJ1xuXG4gICAgICB3YWl0c0ZvclByb21pc2UgLT5cbiAgICAgICAgYWN0aXZhdGlvblByb21pc2VcblxuICAgICAgcnVucyAtPlxuICAgICAgICAjIE5vdyB3ZSBjYW4gdGVzdCBmb3IgdmlldyB2aXNpYmlsaXR5XG4gICAgICAgIGJvb3RzdHJhcHBlckVsZW1lbnQgPSB3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKVxuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyRWxlbWVudCkudG9CZVZpc2libGUoKVxuICAgICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoIHdvcmtzcGFjZUVsZW1lbnQsICdib290c3RyYXBwZXI6dG9nZ2xlJ1xuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyRWxlbWVudCkubm90LnRvQmVWaXNpYmxlKClcblxuXG4qL1xuIl19
//# sourceURL=/Users/szymon/github/bootstrapper/spec/bootstrapper-spec.js
