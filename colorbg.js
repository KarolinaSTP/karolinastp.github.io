const AREA = document.body;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
  var horizontal = e.clientX * 360 / windowWidth;
  console.log(horizontal);
  var vertical = e.clientY * 100 / windowHeight;
  console.log(vertical);

  AREA.style.backgroundColor = `hsl(${horizontal}, ${vertical}%, 50%)`;
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener("mousemove", mouseCoordinates, false);