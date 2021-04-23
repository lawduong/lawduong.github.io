// Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-100px";
  }
}

window.onscroll = function() {scrollFunction()};


// Typing animation
var greeting = document.getElementById('greeting');

var typewriter = new Typewriter(greeting, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();

