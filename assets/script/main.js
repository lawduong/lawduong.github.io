// Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-100px";
  }
}

window.onscroll = function() {scrollFunction()};

function typeWriter(str, id, speed) {
  let i = 0;
  if (i < str.length) {
    document.getElementsById(id).innerHTML += str.charAt(i);
    i ++
    setTimeout(typeWriter, speed);
  }
};


window.onload = function() {typeWriter("Lawrence Duong", "greeting", 50)};


// var i = 0;
// var txt = "Lawrence Duong"; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("greeting").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   } 
// }

//window.onload = function() {typeWriter()};
