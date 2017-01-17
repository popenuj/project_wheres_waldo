var TAGGING = TAGGING || {}

TAGGING.Controller = (function() {
  var view,
      model;

  var init = function init(tModel, tView) {
    model = tModel
    view = tView
    view.init(selectChar);
    model.init();
  }

  var selectChar = function(character, x, y) {
    model.addTag(character, x, y);
    view.addTag(model.getLastTag());
  }

  return {
    init: init
  };

})();
$(document).ready(function() {
  TAGGING.Controller.init(TAGGING.Model, TAGGING.View);
});
