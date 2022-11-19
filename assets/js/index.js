const navMenu   = document.getElementById('navbar-menu'),
      navToggle = document.getElementById('navbar-toggle'),
      navClose  = document.getElementById('navbar-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('navbar__menu--visible');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('navbar__menu--visible');
  })
}

const navLinks = document.querySelectorAll('.navbar__link');

const handleClickLink = () => {
  navMenu.classList.remove('navbar__menu--visible');
}

navLinks.forEach(link => link.addEventListener('click', handleClickLink));
 
const scrollHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50
    ? header.classList.add('header--scrolling')
    : header.classList.remove('header--scrolling');
}

window.addEventListener('scroll', scrollHeader);




