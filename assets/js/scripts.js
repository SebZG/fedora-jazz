document.addEventListener('DOMContentLoaded', () => {
	let navbarHidden;

	// Dynamically edit margin-top of body when navbar
	// is hidden for seamless scrolling.
	const addOrRemoveScrollMarginTop = () => {
		const body = document.querySelector('body');
		if (navbarHidden) {
			body.classList.add('navbar-hidden');
		} else {
			body.classList.remove('navbar-hidden');
		}
	};

	// Hide navbar when scrolling down.
	// Credits to w3schools.com.
	// Customized to suit project.
	const navbar = document.querySelector('.navbar');
	let prevScrollPos = window.scrollY;

	window.onscroll = () => {
		let currentScrollPos = window.scrollY;

		if (prevScrollPos > currentScrollPos) {
			navbar.style.top = '0px'; // Show navbar
			navbarHidden = false;
		} else {
			navbar.style.top = '-106px'; // Hide navbar
			navbarHidden = true;
		}

		addOrRemoveScrollMarginTop();
		prevScrollPos = currentScrollPos;
	};

	// Close the navbar on mobile view when a link is clicked.
	// Inspired by CodeInstitute.
	// Customized to suit project.
	document
		.querySelectorAll('.navbar-collapse .nav-link') // Returns Array like object
		.forEach((link) => {
			link.addEventListener('click', () => {
				document.querySelector('.navbar-collapse').classList.remove('show'); // Collapse navbar
			});
		});
});
