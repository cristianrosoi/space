$(document).ready(function(){
  var top = 20;
  var left = 20;

  function goUp() {
    top--;
    $("#rocketLayer").css("top", top + "%");
  }

  function goDown() {
    top++;
    $("#rocketLayer").css("top", top + "%");
  }

  function goLeft() {
    left--;
    $("#rocketLayer").css("left", left + "%");
  }

  function goRight() {
    left++;
    $("#rocketLayer").css("left", left + "%");
  }

  function laserBeam() {
    //to be added
  }

  $(document).keydown(function(e) {
      switch(e.which) {
          case 32: //spacebar
          //shoot laser
          break;

          case 37: // left
          goLeft();
          break;

          case 38: // up
          goUp();
          break;

          case 39: // right
          goRight();
          break;

          case 40: // down
          goDown();
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

});