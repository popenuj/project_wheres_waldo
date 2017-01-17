var TAGGING = TAGGING || {}

TAGGING.Controller = (function() {
  var view,
      model;

  var init = function init(tModel, tView) {
    model = tModel
    view = tView
    view.init();
  }

  return {
    init: init
  };

})();
$(document).ready(function() {
  TAGGING.Controller.init(TAGGING.Model, TAGGING.View);
});
// DROPDOWN MENU //
