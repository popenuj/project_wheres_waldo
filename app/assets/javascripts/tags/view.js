var TAGGING = TAGGING || {}

TAGGING.View = (function($) {

  var $photo, $box, $dropdown, boxX, boxY;

  var _setBox = function() {
    $box = $( ".box" );
  }

  var _setPhoto = function() {
    $photo = $( ".photo" );
  }

  var _setDropdown = function() {
    $dropdown = $( ".dropdown" );
    $dropdown.hide();
  }

  var _turnOnMouseMoveListener = function() {
    $photo.mousemove(function( event ) {
      $box.css("left", (event.pageX) + "px");
      $box.css("top", (event.pageY) + "px");
    });
  };

  var _turnOnPhotoHoverListener = function() {
    $photo.hover(function( event ) {
      $box.toggleClass("finder");
    });
  };

  var _turnOnPhotoClickListener = function() {
    $photo.click(function(event) {
      _turnOffEventListeners();
      _positionDropdown(event.pageX, event.pageY);
      boxX = event.pageX;
      boxY = event.pageY;
      $dropdown.show();
      $dropdown.val(null);
    });
  }

  var _turnOnDropdownClickListener = function(selectChar) {
    $dropdown.on("change", function(e) {
      selectChar($(e.target).val(), boxX, boxY)
      $dropdown.hide();
      setTimeout(_turnOnEventListeners, 50); // hacky
    });
  }

  var _turnOnEventListeners = function() {
    _turnOnMouseMoveListener();
    _turnOnPhotoHoverListener();
    _turnOnPhotoClickListener();
  }

  var _turnOffEventListeners = function() {
    _turnOffMouseMoveListener();
    _turnOffPhotoHoverListener();
    _turnOffPhotoClickListener();
  }

  var _turnOffMouseMoveListener = function() {
    $photo.off("mousemove")
  }

  var _turnOffPhotoHoverListener = function() {
    $photo.off("hover")
  }

  var _turnOffPhotoClickListener = function() {
    $photo.off("click")
  }

  var _positionDropdown = function(x, y) {
    $dropdown.css("position", "absolute");
    $dropdown.css("left", x + "px");
    $dropdown.css("top", (y + 64) + "px");
  }

  var addTag = function(tag) {
    var $tagName = $("<div class='name'>").text(tag.character).css({
      left: tag.x,
      top: tag.y + 64
    });
    var $tagBox = $("<div class='found box'>").css({
      left: tag.x,
      top: tag.y
    });
    var $deleteLink = $("<a class='delete'>X</a>").css({
      left: tag.x + 4,
      top: tag.y
    })
    var $wrapper = $("<div>").attr("data-id", tag.id).append($tagBox).append($tagName).append($deleteLink)
    $photo.append($wrapper);
  }

  var init = function init(selectChar) {
    _setPhoto();
    _setBox();
    _setDropdown();
    _turnOnEventListeners();
    _turnOnDropdownClickListener(selectChar);
  };

  return {
    init: init,
    addTag: addTag
  }

})($);
