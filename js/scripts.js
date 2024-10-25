// Close the navbar on mobile view when a link is clicked
document
	.querySelectorAll('.navbar-collapse .nav-link') // Returns Array like object
	.forEach((link) => {
		link.addEventListener('click', function (e) {
			document.querySelector('.navbar-collapse').classList.remove('show'); // Collapse navbar
		});
	});

// Close navbar on scroll.
// credits to w3schools.com.
// Customized to suit project.
const navbar = document.querySelector('.navbar');
let prevScrollPos = window.scrollY;

window.onscroll = () => {
	var currentScrollPos = window.scrollY;

	if (prevScrollPos > currentScrollPos) {
		navbar.style.top = '0'; // Show navbar
	} else {
		navbar.style.top = '-106px'; // Hide navbar
	}

	prevScrollPos = currentScrollPos;
};
