const programQuest = document.querySelector('.program-quests');

const questSpeakers = [
  {
    name: 'Ryan Merkley',
    image: './images/reagan.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Julia Leda',
    image: './images/julia.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Kelnam Chon',
    image: './images/kilnam.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Lila Tretkov',
    image: './images/lila.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Sohyeong Noh',
    image: './images/sohyeong.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Yochai Benkler',
    image: './images/yochai.png',
    description: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
  },
];

questSpeakers.forEach((quest) => {
  const programContainer = document.createElement('div');
  programContainer.className = 'program-container';
  programContainer.innerHTML = `<div class="speaker-description"> <img src=${quest.image} alt="speaker image" class="speaker-picture"> 
  <div class="name-descrip"> <h3><strong>${quest.name}</strong></h3>  <p class="guest-descrip"> ${quest.description}</p></div></div> <h3 class="studies">${quest.studies}</h3>`;
  programQuest.appendChild(programContainer);
});

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
