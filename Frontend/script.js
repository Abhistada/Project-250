// Sample mock events
const events = [
  { id: 1, title: "Job Fest 2025", date: "2025-11-25", location: "Main Auditorium,SUST" },
  { id: 2, title: "Career Guideline Seminar", date: "2025-11-30", location: "Central Auditorium,SUST" },
];

// Render events
const eventsContainer = document.getElementById("eventsContainer");
if (eventsContainer) {
  events.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <button onclick="bookEvent(${event.id})">Book Event</button>
    `;
    eventsContainer.appendChild(card);
  });
}

// Mock booking function
function bookEvent(id) {
  const event = events.find(e => e.id === id);
  alert(`You booked: ${event.title}`);
}
