/* hamburger settings */
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
