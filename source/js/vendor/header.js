let headerToggle = document.querySelector('.header__toggle');

headerToggle.onclick = () => {
  document.querySelector('.header__nav').classList.toggle('modal--active');
  headerToggle.classList.toggle('toggle--active');
  document.querySelector('body').classList.toggle('scroll-lock');
}
