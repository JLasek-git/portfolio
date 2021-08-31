/* hamburger menu settings */
const burgerBtn = document.querySelector('#hamburger-btn');
const burgerMenu = document.querySelector('#hamburger-menu');
const burgerBtnClose = document.querySelector('#hamburger-close');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('active');
  burgerMenu.classList.remove('hidden');
  burgerBtn.classList.add('clicked');
});



burgerBtnClose.addEventListener('click', () => {
  burgerBtn.classList.remove('clicked');
  burgerMenu.classList.remove('active');
  burgerMenu.classList.add('hidden');
});


/* read more about project INDUSTRIO*/
const industrioMoreBtn = document.querySelector('.more-industrio');
const industrioInfo = document.getElementById('industrio');
const industrioCloseBtn = document.getElementById('industrio-close');

industrioMoreBtn.addEventListener('click', () => {
  industrioInfo.classList.toggle('active');
  document.body.style.overflowY = 'hidden';
  
});

industrioCloseBtn.addEventListener('click', () => {
  industrioInfo.classList.toggle('active');
  document.body.style.overflowY = 'scroll';
});


