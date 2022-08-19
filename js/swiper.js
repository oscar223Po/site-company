const slides = document.querySelectorAll(".slider-home__slide");
const nextBtn = document.querySelector(".next__btn");
const prevBtn = document.querySelector(".prev__btn");
//============================================================
slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`
});
//============================================================
let counter = 0;
nextBtn.addEventListener('click', function () {
	counter++;
	carusel();
});
prevBtn.addEventListener('click', function () {
	counter--;
	carusel();
});
//=============== u need to invoke the function ===============
function carusel() {
	if (counter === slides.length) {
		counter = 0;
	}
	if (counter < 0) {
		counter = slides.length - 1;
	}
	if (counter < slides.length - 1) {
		nextBtn.style.display = "block";
	}
	else {
		nextBtn.style.display = "block";
	}
	slides.forEach(function (slide) {
		slide.style.transform = `translate(-${counter * 100}%)`;
	})
}
//============================================================