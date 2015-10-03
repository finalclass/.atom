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
    //atom.commands.dispatch(workspace, 'bootstrapper:toggle');
    //var bootstrapper = atom.packages.getActivePackage('bootstrapper').mainModule;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9zcGVjL2Jvb3RzdHJhcHBlci1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OytCQUV5QixxQkFBcUI7Ozs7Ozs7Ozs7O0FBRjlDLFdBQVcsQ0FBQzs7QUFXWixRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDM0IsTUFBSSxpQkFBaUIsQ0FBQztBQUN0QixNQUFJLFNBQVMsQ0FBQzs7QUFFZCxZQUFVLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDakIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELHFCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDZixDQUFDLENBQUM7O0FBRUgsSUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSzs7Ozs7R0FLdEIsQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9zcGVjL2Jvb3RzdHJhcHBlci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBCb290c3RyYXBwZXIgZnJvbSAnLi4vbGliL2Jvb3RzdHJhcHBlcic7XG5cbi8qXG4jIFVzZSB0aGUgY29tbWFuZCBgd2luZG93OnJ1bi1wYWNrYWdlLXNwZWNzYCAoY21kLWFsdC1jdHJsLXApIHRvIHJ1biBzcGVjcy5cbiNcbiMgVG8gcnVuIGEgc3BlY2lmaWMgYGl0YCBvciBgZGVzY3JpYmVgIGJsb2NrIGFkZCBhbiBgZmAgdG8gdGhlIGZyb250IChlLmcuIGBmaXRgXG4jIG9yIGBmZGVzY3JpYmVgKS4gUmVtb3ZlIHRoZSBgZmAgdG8gdW5mb2N1cyB0aGUgYmxvY2suXG4qL1xuXG5kZXNjcmliZSgnQm9vdHN0cmFwcGVyJywgKCkgPT4ge1xuICAgIHZhciBhY3RpdmF0aW9uUHJvbWlzZTtcbiAgICB2YXIgd29ya3NwYWNlO1xuXG4gICAgYmVmb3JlRWFjaCgobmV4dCkgPT4ge1xuICAgICAgICB2YXIgd29ya3NwYWNlID0gYXRvbS52aWV3cy5nZXRWaWV3KGF0b20ud29ya3NwYWNlKTtcbiAgICAgICAgYWN0aXZhdGlvblByb21pc2UgPSBhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnYm9vdHN0cmFwcGVyJylcbiAgICAgICAgLnRoZW4obmV4dCk7XG4gICAgfSk7XG5cbiAgICBpdCgnd29ya3M/JywgKG5leHQpID0+IHtcbiAgICAgICAgLy9hdG9tLmNvbW1hbmRzLmRpc3BhdGNoKHdvcmtzcGFjZSwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnKTtcbiAgICAgICAgLy92YXIgYm9vdHN0cmFwcGVyID0gYXRvbS5wYWNrYWdlcy5nZXRBY3RpdmVQYWNrYWdlKCdib290c3RyYXBwZXInKS5tYWluTW9kdWxlO1xuXG4gICAgICAgIC8vYm9vdHN0cmFwcGVyLmJvb3RzdHJhcChfX2Rpcm5hbWUgKyAnLi90bXAnKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8qXG4gIGJlZm9yZUVhY2ggLT5cbiAgICB3b3Jrc3BhY2VFbGVtZW50ID0gYXRvbS52aWV3cy5nZXRWaWV3KGF0b20ud29ya3NwYWNlKVxuICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2Jvb3RzdHJhcHBlcicpXG5cbiAgZGVzY3JpYmUgXCJ3aGVuIHRoZSBib290c3RyYXBwZXI6dG9nZ2xlIGV2ZW50IGlzIHRyaWdnZXJlZFwiLCAtPlxuICAgIGl0IFwiaGlkZXMgYW5kIHNob3dzIHRoZSBtb2RhbCBwYW5lbFwiLCAtPlxuICAgICAgIyBCZWZvcmUgdGhlIGFjdGl2YXRpb24gZXZlbnQgdGhlIHZpZXcgaXMgbm90IG9uIHRoZSBET00sIGFuZCBubyBwYW5lbFxuICAgICAgIyBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLm5vdC50b0V4aXN0KClcblxuICAgICAgIyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgd2lsbCBjYXVzZSB0aGUgcGFja2FnZSB0byBiZVxuICAgICAgIyBhY3RpdmF0ZWQuXG4gICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoIHdvcmtzcGFjZUVsZW1lbnQsICdib290c3RyYXBwZXI6dG9nZ2xlJ1xuXG4gICAgICB3YWl0c0ZvclByb21pc2UgLT5cbiAgICAgICAgYWN0aXZhdGlvblByb21pc2VcblxuICAgICAgcnVucyAtPlxuICAgICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLnRvRXhpc3QoKVxuXG4gICAgICAgIGJvb3RzdHJhcHBlckVsZW1lbnQgPSB3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKVxuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyRWxlbWVudCkudG9FeGlzdCgpXG5cbiAgICAgICAgYm9vdHN0cmFwcGVyUGFuZWwgPSBhdG9tLndvcmtzcGFjZS5wYW5lbEZvckl0ZW0oYm9vdHN0cmFwcGVyRWxlbWVudClcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlclBhbmVsLmlzVmlzaWJsZSgpKS50b0JlIHRydWVcbiAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCB3b3Jrc3BhY2VFbGVtZW50LCAnYm9vdHN0cmFwcGVyOnRvZ2dsZSdcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlclBhbmVsLmlzVmlzaWJsZSgpKS50b0JlIGZhbHNlXG5cbiAgICBpdCBcImhpZGVzIGFuZCBzaG93cyB0aGUgdmlld1wiLCAtPlxuICAgICAgIyBUaGlzIHRlc3Qgc2hvd3MgeW91IGFuIGludGVncmF0aW9uIHRlc3QgdGVzdGluZyBhdCB0aGUgdmlldyBsZXZlbC5cblxuICAgICAgIyBBdHRhY2hpbmcgdGhlIHdvcmtzcGFjZUVsZW1lbnQgdG8gdGhlIERPTSBpcyByZXF1aXJlZCB0byBhbGxvdyB0aGVcbiAgICAgICMgYHRvQmVWaXNpYmxlKClgIG1hdGNoZXJzIHRvIHdvcmsuIEFueXRoaW5nIHRlc3RpbmcgdmlzaWJpbGl0eSBvciBmb2N1c1xuICAgICAgIyByZXF1aXJlcyB0aGF0IHRoZSB3b3Jrc3BhY2VFbGVtZW50IGlzIG9uIHRoZSBET00uIFRlc3RzIHRoYXQgYXR0YWNoIHRoZVxuICAgICAgIyB3b3Jrc3BhY2VFbGVtZW50IHRvIHRoZSBET00gYXJlIGdlbmVyYWxseSBzbG93ZXIgdGhhbiB0aG9zZSBvZmYgRE9NLlxuICAgICAgamFzbWluZS5hdHRhY2hUb0RPTSh3b3Jrc3BhY2VFbGVtZW50KVxuXG4gICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLm5vdC50b0V4aXN0KClcblxuICAgICAgIyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgY2F1c2VzIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAjIGFjdGl2YXRlZC5cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG5cbiAgICAgIHdhaXRzRm9yUHJvbWlzZSAtPlxuICAgICAgICBhY3RpdmF0aW9uUHJvbWlzZVxuXG4gICAgICBydW5zIC0+XG4gICAgICAgICMgTm93IHdlIGNhbiB0ZXN0IGZvciB2aWV3IHZpc2liaWxpdHlcbiAgICAgICAgYm9vdHN0cmFwcGVyRWxlbWVudCA9IHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJFbGVtZW50KS50b0JlVmlzaWJsZSgpXG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJFbGVtZW50KS5ub3QudG9CZVZpc2libGUoKVxuXG5cbiovXG4iXX0=
//# sourceURL=/Users/szymon/github/bootstrapper/spec/bootstrapper-spec.js
