// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sneak peek tile hover effect (optional)
const tiles = document.querySelectorAll('.sneak-peek div');
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    alert(`You clicked on "${tile.textContent}"! Replace this with real navigation.`);
  });
});

// Contact form placeholder (optional)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent! Replace this with real backend integration.");
});
