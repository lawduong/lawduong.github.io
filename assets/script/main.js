// Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-100px";
  }
}

window.onscroll = function() {scrollFunction()};


var i = 0;

function typeWriter(txt, id) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
  } 
};
window.onload = setInterval(function() {typeWriter("Lawrence Duong", "greeting")}, 50);
