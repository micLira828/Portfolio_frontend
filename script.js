const API_BASE_URL = "https://portfolio-in-flask.onrender.com";

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

document.addEventListener("DOMContentLoaded", () => {
loadProjects();
loadNutshell();
});

/* =====================
PROJECTS
===================== */

async function loadProjects() {
const projectsContainer = document.getElementById("projects-grid");
if (!projectsContainer) {
console.error("Projects container not found");
return;
}

try {
const res = await fetch(`${API_BASE_URL}/api/projects`);
const data = await res.json();

projectsContainer.innerHTML = "";

data.forEach(project => {
const card = document.createElement("div");
card.className = "project-card";

card.innerHTML = `
<img src="${project.image_url || 'assets/projects/marketing_page.png'}"
alt="${project.title} screenshot">
<div class="project-content">
<h3>${project.title}</h3>
<p>${project.description}</p>
<a href="${project.live_url}" target="_blank">View Project</a>
</div>
`;

projectsContainer.appendChild(card);
});

} catch (err) {
console.error("Failed to load projects:", err);
}
}

/* =====================
NUTSHELL
===================== */

async function loadNutshell() {
const container = document.getElementById("nutshell-cards");

try {
const res = await fetch(`${API_BASE_URL}/api/nutshell/`);
if (!res.ok) throw new Error("API failed");

const data = await res.json();
renderNutshell(data);

} catch {
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
<div class="service-content">
<h3>${item.title}</h3>
<p>${item.content || item.description}</p>
</div>
`;

container.appendChild(card);
});
}

/* =====================
CONTACT FORM
===================== */

document.getElementById("contact-form")
.addEventListener("submit", async (e) => {
e.preventDefault();

const form = e.target;
const status = document.getElementById("form-status");

const data = {
name: form.name.value,
email: form.email.value,
message: form.message.value
};

try {
const res = await fetch(`${API_BASE_URL}/api/messages`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
});

if (!res.ok) throw new Error("Failed");

status.textContent = "Thanks! I’ll get back to you soon.";
form.reset();

} catch {
status.textContent = "Something went wrong. Please try again later.";
}
});