const menuBtn = document.querySelector('.navbar__btn');
const menuMain = document.querySelector('.navbar__menu');
menuBtn.addEventListener('click', function () {
	menuMain.classList.toggle('menu-open');
});


