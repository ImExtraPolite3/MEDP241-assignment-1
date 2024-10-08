function slidedown() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.style.display = 'block';

  nav_bar.style.animation = 'slidedown 150ms';
}

function slideup() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.style.animation = 'slideup 150ms';

  setTimeout(() => {
    nav_bar.style.display = 'none';
  }, 200);
}

function show_nav_bar() {
  const menu = document.getElementById('hamb-menu');
  const nav_bar = document.getElementById('nav-bar');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (nav_bar.checkVisibility() === false) {
      nav_bar.classList.remove('hide');
      slidedown();
    } else {
      slideup();
    }
  });
}

function showActive() {}

show_nav_bar();
