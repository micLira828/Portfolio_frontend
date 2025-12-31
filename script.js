const projects = [
  {
    title: "Identi Landing Page",
    description: "Brand-forward landing page for a creative identity studio.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/identi.png",
    link: "https://miclira828.github.io/IdentiLandingPage/#links"
  },
  {
    title: "Marketing Page",
    description: "Clean, conversion-focused marketing site.",
    tech: ["HTML", "CSS"],
    image: "assets/projects/marketing_page.png",
    link: "https://miclira828.github.io/Marketing-Page/"
  },
];

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




const projectsContainer = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
  <div class = "project-content">
    <img src="${project.image}" alt="${project.title} screenshot">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
   </div>
  `;
  projectsContainer.appendChild(card);
});

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
    card.className = "service-card";
    
    card.innerHTML = `
    <div class = "service-content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
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
