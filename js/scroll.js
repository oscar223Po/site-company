//===================== active link by click ===================================================================================================================================
let section = document.querySelectorAll('section')
let lists = document.querySelectorAll('.fixed__link');
function activeLink() {
	lists.forEach((item) =>
		item.classList.remove('fixed-active'));
	this.classList.add('fixed-active');
}
lists.forEach((item) =>
	item.addEventListener('click', activeLink));
window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		if (top >= offset && top < offset + height) {
			lists.forEach(sec => {
				activeLink;
			})
		}
	})
};
//===================== active link navbar by click ===================================================================================================================================
// let sectionSec = document.querySelectorAll('section')
// let listsSec = document.querySelectorAll('.menu-navbar__link');
// function activeLink() {
// 	listsSec.forEach((item) =>
// 		item.classList.remove('navbar-active'));
// 	this.classList.add('navbar-active');
// }
// listsSec.forEach((item) =>
// 	item.addEventListener('click', activeLink));
// window.onscroll = () => {
// 	sectionSec.forEach(sec => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop;
// 		let height = sec.offsetHeight;
// 		let id = sec.getAttribute('id');
// 		if (top >= offset && top < offset + height) {
// 			listsSec.forEach(sec => {
// 				activeLink;
// 			})
// 		}
// 	})
// };
//========================================================================================================================================================
// const sections = document.querySelectorAll('section[id]')
// function scrollActive() {
// 	const scrollY = window.pageYOffset
// 	sections.forEach(current => {
// 		const sectionHeight = current.offsetHeight
// 		const sectionTop = current.offsetTop - 50;
// 		sectionId = current.getAttribute('id')
// 		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
// 			document.querySelector('.fixed__link a[href*=' + sectionId + ']').classList.add('fixed-active')
// 		} else {
// 			document.querySelector('.fixed__link a[href*=' + sectionId + ']').classList.remove('fixed-active')
// 		}
// 	})
// }
// window.addEventListener('scroll', scrollActive)
//========================================================================================================================================================
// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".fixed__link");
// window.onscroll = () => {
// 	var current = "";
// 	sections.forEach((section) => {
// 		const sectionTop = section.offsetTop;
// 		if (pageYOffset >= sectionTop - 60) {
// 			current = section.getAttribute("id");
// 		}
// 	});
// 	navLi.forEach((a) => {
// 		a.classList.remove("fixed-active");
// 		if (a.classList.contains(current)) {
// 			a.classList.add("fixed-active");
// 		}
// 	});
// };