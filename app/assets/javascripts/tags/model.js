var TAGGING = TAGGING || {}

TAGGING.Model = (function() {

  var _tags;

  var init = function() {
    _tags = [];
  }

  var addTag = function(character, x, y) {
    _tags.push({
      character: character,
      x: x,
      y: y
    });
  }

  var getTags = function() {
    return _tags;
  }

  var getLastTag = function() {
    return _tags[_tags.length - 1]
  }

  return {
    init: init,
    addTag: addTag,
    getTags: getTags,
    getLastTag: getLastTag
  }

})();
