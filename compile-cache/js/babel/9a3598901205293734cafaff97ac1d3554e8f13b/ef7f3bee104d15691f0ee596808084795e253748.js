function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBootstrapper = require('../lib/bootstrapper');

var _libBootstrapper2 = _interopRequireDefault(_libBootstrapper);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

/*
# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.
*/

'use babel';

describe('Bootstrapper', function () {
  var bootstrapper;

  beforeEach(function (next) {
    var bootstrapper = new _libBootstrapper2['default']();
  });

  it('works?', function (next) {
    bootstrapper.bootstrap(__dirname + '/tmp');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zenltb24vZ2l0aHViL2Jvb3RzdHJhcHBlci9zcGVjL2Jvb3RzdHJhcHBlci1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7K0JBRXlCLHFCQUFxQjs7OztrQkFDMUIsSUFBSTs7SUFBWixFQUFFOzs7Ozs7Ozs7QUFIZCxXQUFXLENBQUM7O0FBWVosUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFNO0FBQzNCLE1BQUksWUFBWSxDQUFDOztBQUVqQixZQUFVLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDakIsUUFBSSxZQUFZLEdBQUcsa0NBQWtCLENBQUM7R0FDekMsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDbkIsZ0JBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvc3p5bW9uL2dpdGh1Yi9ib290c3RyYXBwZXIvc3BlYy9ib290c3RyYXBwZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgQm9vdHN0cmFwcGVyIGZyb20gJy4uL2xpYi9ib290c3RyYXBwZXInO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG4vKlxuIyBVc2UgdGhlIGNvbW1hbmQgYHdpbmRvdzpydW4tcGFja2FnZS1zcGVjc2AgKGNtZC1hbHQtY3RybC1wKSB0byBydW4gc3BlY3MuXG4jXG4jIFRvIHJ1biBhIHNwZWNpZmljIGBpdGAgb3IgYGRlc2NyaWJlYCBibG9jayBhZGQgYW4gYGZgIHRvIHRoZSBmcm9udCAoZS5nLiBgZml0YFxuIyBvciBgZmRlc2NyaWJlYCkuIFJlbW92ZSB0aGUgYGZgIHRvIHVuZm9jdXMgdGhlIGJsb2NrLlxuKi9cblxuZGVzY3JpYmUoJ0Jvb3RzdHJhcHBlcicsICgpID0+IHtcbiAgICB2YXIgYm9vdHN0cmFwcGVyO1xuXG4gICAgYmVmb3JlRWFjaCgobmV4dCkgPT4ge1xuICAgICAgICB2YXIgYm9vdHN0cmFwcGVyID0gbmV3IEJvb3RzdHJhcHBlcigpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3dvcmtzPycsIChuZXh0KSA9PiB7XG4gICAgICAgIGJvb3RzdHJhcHBlci5ib290c3RyYXAoX19kaXJuYW1lICsgJy90bXAnKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8qXG4gIGJlZm9yZUVhY2ggLT5cbiAgICB3b3Jrc3BhY2VFbGVtZW50ID0gYXRvbS52aWV3cy5nZXRWaWV3KGF0b20ud29ya3NwYWNlKVxuICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2Jvb3RzdHJhcHBlcicpXG5cbiAgZGVzY3JpYmUgXCJ3aGVuIHRoZSBib290c3RyYXBwZXI6dG9nZ2xlIGV2ZW50IGlzIHRyaWdnZXJlZFwiLCAtPlxuICAgIGl0IFwiaGlkZXMgYW5kIHNob3dzIHRoZSBtb2RhbCBwYW5lbFwiLCAtPlxuICAgICAgIyBCZWZvcmUgdGhlIGFjdGl2YXRpb24gZXZlbnQgdGhlIHZpZXcgaXMgbm90IG9uIHRoZSBET00sIGFuZCBubyBwYW5lbFxuICAgICAgIyBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLm5vdC50b0V4aXN0KClcblxuICAgICAgIyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgd2lsbCBjYXVzZSB0aGUgcGFja2FnZSB0byBiZVxuICAgICAgIyBhY3RpdmF0ZWQuXG4gICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoIHdvcmtzcGFjZUVsZW1lbnQsICdib290c3RyYXBwZXI6dG9nZ2xlJ1xuXG4gICAgICB3YWl0c0ZvclByb21pc2UgLT5cbiAgICAgICAgYWN0aXZhdGlvblByb21pc2VcblxuICAgICAgcnVucyAtPlxuICAgICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLnRvRXhpc3QoKVxuXG4gICAgICAgIGJvb3RzdHJhcHBlckVsZW1lbnQgPSB3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib290c3RyYXBwZXInKVxuICAgICAgICBleHBlY3QoYm9vdHN0cmFwcGVyRWxlbWVudCkudG9FeGlzdCgpXG5cbiAgICAgICAgYm9vdHN0cmFwcGVyUGFuZWwgPSBhdG9tLndvcmtzcGFjZS5wYW5lbEZvckl0ZW0oYm9vdHN0cmFwcGVyRWxlbWVudClcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlclBhbmVsLmlzVmlzaWJsZSgpKS50b0JlIHRydWVcbiAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCB3b3Jrc3BhY2VFbGVtZW50LCAnYm9vdHN0cmFwcGVyOnRvZ2dsZSdcbiAgICAgICAgZXhwZWN0KGJvb3RzdHJhcHBlclBhbmVsLmlzVmlzaWJsZSgpKS50b0JlIGZhbHNlXG5cbiAgICBpdCBcImhpZGVzIGFuZCBzaG93cyB0aGUgdmlld1wiLCAtPlxuICAgICAgIyBUaGlzIHRlc3Qgc2hvd3MgeW91IGFuIGludGVncmF0aW9uIHRlc3QgdGVzdGluZyBhdCB0aGUgdmlldyBsZXZlbC5cblxuICAgICAgIyBBdHRhY2hpbmcgdGhlIHdvcmtzcGFjZUVsZW1lbnQgdG8gdGhlIERPTSBpcyByZXF1aXJlZCB0byBhbGxvdyB0aGVcbiAgICAgICMgYHRvQmVWaXNpYmxlKClgIG1hdGNoZXJzIHRvIHdvcmsuIEFueXRoaW5nIHRlc3RpbmcgdmlzaWJpbGl0eSBvciBmb2N1c1xuICAgICAgIyByZXF1aXJlcyB0aGF0IHRoZSB3b3Jrc3BhY2VFbGVtZW50IGlzIG9uIHRoZSBET00uIFRlc3RzIHRoYXQgYXR0YWNoIHRoZVxuICAgICAgIyB3b3Jrc3BhY2VFbGVtZW50IHRvIHRoZSBET00gYXJlIGdlbmVyYWxseSBzbG93ZXIgdGhhbiB0aG9zZSBvZmYgRE9NLlxuICAgICAgamFzbWluZS5hdHRhY2hUb0RPTSh3b3Jrc3BhY2VFbGVtZW50KVxuXG4gICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vdHN0cmFwcGVyJykpLm5vdC50b0V4aXN0KClcblxuICAgICAgIyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgY2F1c2VzIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAjIGFjdGl2YXRlZC5cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG5cbiAgICAgIHdhaXRzRm9yUHJvbWlzZSAtPlxuICAgICAgICBhY3RpdmF0aW9uUHJvbWlzZVxuXG4gICAgICBydW5zIC0+XG4gICAgICAgICMgTm93IHdlIGNhbiB0ZXN0IGZvciB2aWV3IHZpc2liaWxpdHlcbiAgICAgICAgYm9vdHN0cmFwcGVyRWxlbWVudCA9IHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvb3RzdHJhcHBlcicpXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJFbGVtZW50KS50b0JlVmlzaWJsZSgpXG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ2Jvb3RzdHJhcHBlcjp0b2dnbGUnXG4gICAgICAgIGV4cGVjdChib290c3RyYXBwZXJFbGVtZW50KS5ub3QudG9CZVZpc2libGUoKVxuXG5cbiovXG4iXX0=
//# sourceURL=/Users/szymon/github/bootstrapper/spec/bootstrapper-spec.js
