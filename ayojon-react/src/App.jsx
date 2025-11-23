import React, { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Poppins" }}>
      <h1>🎉 Upcoming Events (from MySQL)</h1>

      {events.length === 0 ? (
        <p>Loading events or no events found...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                background: "#fff",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{event.title}</h2>
              <p><b>Date:</b> {event.date}</p>
              <p><b>Time:</b> {event.time}</p>
              <p><b>Location:</b> {event.location}</p>
              <p><b>Price:</b> {event.price} BDT</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
