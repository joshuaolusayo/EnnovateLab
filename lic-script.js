var nav = document.querySelector('nav');
var togglerButton = document.querySelector('.navbar-toggler-icon');
var navLink = document.querySelectorAll('.nav-link');

togglerButton.onclick = function () {
	changeStyle();
}

window.addEventListener('scroll', function (e) {
	event.preventDefault();

	if (window.scrollY >= 50) {
		changeStyle();
	} else {
		defaultStyle();
	}
});

function changeStyle() {
	nav.style.backgroundColor = '#fff';
	nav.style.borderBottom = '1px solid hsla(45, 100%, 51%, 1)';
	for (i = 0; i < navLink.length; i++) {
		navLink[i].classList.add('text-muted');
	}
	nav.classList.remove('navbar-dark');
	nav.classList.add('navbar-light');
}

function defaultStyle() {
	nav.style.backgroundColor = 'transparent';
	nav.style.borderBottom = 'none';
	for (i = 0; i < navLink.length; i++) {
		navLink[i].classList.remove('text-muted');
	}
	nav.classList.remove('navbar-light');
	nav.classList.add('navbar-dark');
}