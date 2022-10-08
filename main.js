const btn = document.getElementById('btn');
const menu = document.querySelector('.menu-ol_bar');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('menu-bar_active')
});