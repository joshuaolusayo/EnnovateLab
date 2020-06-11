var nav = document.querySelector("nav");
var togglerButton = document.querySelector(".navbar-toggler-icon");
var toggler = document.querySelector(".navbar-toggler");
var navLink = document.querySelectorAll(".nav-link");
let togglerMode = false;

let animate = document.querySelector(".tryAnimate");
let hiddenElements = document.getElementsByClassName("hidden");
let hiddenElements2 = document.getElementsByClassName("hide");

window.addEventListener("load", () => {
	if (animate) {
		animate.classList.toggle("active");
	}

	for (i = 0; i < hiddenElements2.length; i++) {
		if (
			hiddenElements2[i].getBoundingClientRect().top -
				window.innerHeight <=
			0
		) {
			hiddenElements2[i].classList.add("active");
		}
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768 && togglerMode) {
		nav.classList.remove("h-100");
		nav.classList.remove("align-items-start");
	} else if (window.innerWidth < 768 && togglerMode) {
		nav.classList.add("h-100");
		nav.classList.add("align-items-start");
	}
});

togglerButton.onclick = () => {
	if (togglerMode == false) {
		togglerMode = true;
	} else {
		togglerMode = false;
	}
	changeStyle();
	changeSomeStyle();
};

window.addEventListener("scroll", () => {
	if (window.scrollY < 50 && togglerMode == false) {
		defaultStyle();
	} else {
		changeStyle();
	}

	// Animating div elements
	for (i = 0; i < hiddenElements.length; i++) {
		if (
			hiddenElements[i].getBoundingClientRect().top -
				window.innerHeight <=
			0
		) {
			hiddenElements[i].classList.add("active");
		}
	}
});

changeSomeStyle = () => {
	nav.classList.toggle("h-100");
	toggler.style.marginTop = "12px";
	nav.classList.toggle("align-items-start");
}

changeStyle = () => {
	nav.classList.remove("bg-transparent");
	nav.classList.add("bg-light");
	nav.style.borderBottom = "1px solid hsla(45, 100%, 51%, 1)";
	for (i = 0; i < navLink.length; i++) {
		navLink[i].classList.remove("text-light");
		navLink[i].classList.add("text-muted");
	}
	nav.classList.remove("navbar-dark");
	nav.classList.add("navbar-light");
}

defaultStyle = () => {
	nav.classList.remove("bg-light");
	nav.classList.add("bg-transparent");
	nav.style.borderBottom = "none";
	nav.classList.remove("navbar-light");
	nav.classList.add("navbar-dark");
}
