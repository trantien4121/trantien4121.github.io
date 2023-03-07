const docHeader = document.querySelector('header')
// navigation bar scroll: Khi cuộn Menu thì vẫn hiện
document.addEventListener('scroll', () => {
	docHeader.style.boxShadow = '0 1rem 1rem rgba(0, 0, 0, 0.05)'
	if (window.pageYOffset < 50) {
		docHeader.style.boxShadow = ''
		docHeader.style.paddingTop = ''
	} else {
		docHeader.style.paddingTop = '0.8rem'
	}
})
// Responsive ẩn hiện menu
const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.nav-nav');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
	docHeader.style.height = '25rem';
	menuLinks.classList.toggle('active');
})