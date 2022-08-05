const menuNavMobile = document.querySelector('.menu-nav-mobile');
const menuBar = document.querySelector('.menu-nav-mobile #menu');
const advertPage = document.querySelector('.advert-page');
const body = document.querySelector('body');

menuBar.addEventListener('click', () => {
  menuNavMobile.classList.toggle('show');
  body.classList.toggle('show');
  advertPage.classList.toggle('show');
  menuBar.classList.toggle('show');
});

const mobileLinks = document.querySelectorAll('.mobile-link a');
Array.from(mobileLinks).forEach((link) => {
  link.addEventListener('click', () => {
    menuNavMobile.classList.remove('show');
    body.classList.remove('show');
    advertPage.classList.remove('show');
    menuBar.classList.remove('show');
  });
});