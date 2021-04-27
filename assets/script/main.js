// Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-100px";
  }
}

window.onscroll = function() {scrollFunction()};

function typeWriter() {

	var app = document.getElementById('greeting');

	var typewriter = new Typewriter(app, {
		loop: true,
	});


	typewriter.typeString('Hello there!')
		.pauseFor(1500)
		.deleteAll()
		.typeString("I'm Lawrence.")
		.pauseFor(1500)
		.deleteAll()
		.typeString("Nice to meet you.")
		.pauseFor(1500)
		.deleteAll()
		.start();

}

window.onload = function() {typeWriter()};


function showCourses(id) {
	let boxElement = document.getElementById(id)
	if (boxElement.style.visibility === "visible") {
		boxElement.style.visibility = "hidden";
	} else {
		boxElement.style.visibility = "visible";

	}
}

function dsButtonClicked() {
	showCourses('ds-courses');
}

let dsBtn = document.getElementById("ds-btn");
dsBtn.onclick = function() {dsButtonClicked()
};


function econButtonClicked() {
	showCourses('econ-courses');
}

let econBtn = document.getElementById("econ-btn");
econBtn.onclick = function() {econButtonClicked()
};

function otherButtonClicked() {
	showCourses("other-courses");
}

let otherBtn = document.getElementById("other-btn");
otherBtn.onclick = function() {otherButtonClicked()
};