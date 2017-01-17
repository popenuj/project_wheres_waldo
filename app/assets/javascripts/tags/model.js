var TAGGING = TAGGING || {}

TAGGING.Model = (function($) {

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

  var addTagData = function(character, x, y) {
    var newTag = {
      tag: {
        character: character,
        x: x,
        y: y
      }
    };
    return $.ajax({
      url: '/tags.json',
      method: 'POST',
      data: newTag,
      dataType: 'json',
    });
  }

  var getExistingTags = function() {
    return $.ajax({
      url: '/tags.json',
      method: 'GET'
    });
  }

  return {
    init: init,
    addTag: addTag,
    addTagData: addTagData,
    getTags: getTags,
    getLastTag: getLastTag,
    getExistingTags: getExistingTags
  }

})($);
