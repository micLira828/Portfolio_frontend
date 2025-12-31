const fallbackNutshell = [
  {
    title: "API-Driven Design",
    description: "I design systems that separate content from presentation."
  },
  {
    title: "Creative + Technical",
    description: "I blend storytelling, UX, and backend logic into cohesive products."
  },
  {
    title: "Resilient Systems",
    description: "My work degrades gracefully when services are unavailable."
  }
];

async function loadNutshell() {
  const container = document.getElementById("nutshell-cards");

  try {
    const res = await fetch("http://localhost:5000/api/nutshell");

    if (!res.ok) {
      throw new Error("API failed");
    }

    const data = await res.json();
    renderNutshell(data);

  } catch (error) {
    console.warn("Using fallback nutshell data");
    renderNutshell(fallbackNutshell);
  }
}


function renderNutshell(items) {
  const container = document.getElementById("nutshell-cards");
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    container.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  loadNutshell();
});





// // Smooth scrolling for nav links
// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     target.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// // Sneak peek tile hover effect (optional)
// const tiles = document.querySelectorAll('.sneak-peek div');
// tiles.forEach(tile => {
//   tile.addEventListener('click', () => {
//     alert(`You clicked on "${tile.textContent}"! Replace this with real navigation.`);
//   });
// });

// // Contact form placeholder (optional)
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   alert("Message sent! Replace this with real backend integration.");
// });
