var TAGGING = TAGGING || {}

TAGGING.View = (function($) {

  var $photo,
      $box;

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
    $photo = $( ".photo" )
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
  //
  //   $("ul").on("click", "li", function(e) {
  //     $(".display-box").val(e.target.innerText);
  //     $("ul").slideUp(500);
  //   });
  //
  // });

  var init = function init() {
    _setPhoto();
    _setBox();
    _addMouseMoveListener();
    _addPhotoHoverListener();
  };

  return {
    init: init
  }
})($);
