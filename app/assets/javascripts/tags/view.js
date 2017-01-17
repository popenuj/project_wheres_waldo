var TAGGING = TAGGING || {}

TAGGING.View = (function($) {

  var $photo, $box, $dropdown;

  // var $box = $(".display-box");
  // var $photo = $( ".photo" ),
  //     $box = $(".box"),
  //     $dropdown = $('<ul>').html(
  //       '<li class="choice">Bob</li><li class="choice">Frank</li><li class="choice">Waldo</li>'
  //     ).addClass('push-down').slideUp(0);

  var _setBox = function() {
    $box = $( ".box" );
  }

  var _setPhoto = function() {
    $photo = $( ".photo" );
  }

  var _setDropdown = function() {
    $dropdown = $( ".dropdown" );
    $dropdown.css("width", "60px");
    $dropdown.hide();
  }

  var _addMouseMoveListener = function() {
    var $photo = $( ".photo" )
    $photo.mousemove(function( event ) {
      console.log("move")
      $box.css("left", (event.pageX) + "px");
      $box.css("top", (event.pageY) + "px");
    });
  };

  var _addPhotoHoverListener = function() {
    console.log("hover")
    $photo.hover(function( event ) {
      $box.toggleClass("finder");
    });
  };

  // $photo.click(function( event ) {
  //   newDiv = $('<div>').css("left", (event.pageX - 85) + "px")
  //                      .css("top", (event.pageY - 40) + "px")
  //                      .addClass("finder box");
  //   newDiv.append($dropdown).slideDown(500);
  //
  //   $photo.append(newDiv);
  //
  //   $("ul").slideUp(0);
  //
  //
  //   $box.click(function(){
  //     $("ul").slideDown(1000);
  //   });
  //scs").val(e.target.innerText);
  //     $("ul").slideUp(500);
  //   });
  //
  // });

  var _addDropdownListener = function() {
    $photo.click(function(event) {
      _freezeBox(event.pageX, event.pageY);
      _positionDropdown(event.pageX, event.pageY);
      $dropdown.show();
    });
  }

  var _freezeBox = function(x, y) {
    $frozenBox = $('<div>');
    $frozenBox.css("left", x + "px");
    $frozenBox.css("top", y + "px");
  }

  var _positionDropdown = function(x, y) {
    $dropdown.css("position", "absolute");
    $dropdown.css("left", x + "px");
    $dropdown.css("top", (y + 60) + "px");
  }

  var init = function init() {
    _setPhoto();
    _setBox();
    _setDropdown();
    _addMouseMoveListener();
    _addPhotoHoverListener();
    _addDropdownListener();
  };

  return {
    init: init
  }

})($);
