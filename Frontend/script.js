// Sample mock events
const events = [
  { id: 1, title: "SUST Cultural Fest", date: "2025-09-25", location: "Main Auditorium,SUST" },
  { id: 2, title: "Tech Conference 2025", date: "2025-09-30", location: "Convention Center" },
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
