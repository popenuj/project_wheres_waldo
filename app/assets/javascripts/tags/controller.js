 var TAGGING = TAGGING || {}

TAGGING.Controller = (function() {

  var view, model;

  var init = function init(tModel, tView) {
    model = tModel
    view = tView
    view.init(selectChar);
    model.init();
    addExistingTags();
  }

  var selectChar = function(character, x, y) {
    model.addTag(character, x, y);
    model.addTagData(character, x, y);
    model.addTagData(character, x, y).done(function(response) {
      view.addTag(response);
    });
  }

  var addExistingTags = function() {
    model.getExistingTags().done(function(response) {
      response.forEach(function(tag) {
        console.log(tag)
        view.addTag(tag);
      })
    });
  }

  return {
    init: init
  };

})();

$(document).ready(function() {
  TAGGING.Controller.init(TAGGING.Model, TAGGING.View);
});
