const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

// Toggle hamburger icon aur menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navLinks.classList.toggle('active');
});

// Jab kisi nav item pe click ho jaye to menu close ho jaye
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove icon 'X' state
    hamburger.classList.remove('change');
    // Menu height zero hona chahiye
    navLinks.classList.remove('active');
  });
});
