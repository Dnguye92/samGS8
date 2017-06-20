// PARALLAX
var yPos;
var phoneImage;

function parallax() {
	yPos = window.pageYOffset;
	phoneImage = document.getElementById('handImg');
	phoneImage.style.top = yPos * 0.6 + 'px';
}

window.addEventListener('scroll', parallax);