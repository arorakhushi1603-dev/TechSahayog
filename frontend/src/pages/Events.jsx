import { useState } from "react";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Education Support Camp",
      icon: "📚",
      description:
        "Community education and student support initiative.",
      details:
        "This event provides educational support, learning resources and guidance to students from the community."
    },
    {
      title: "Community Clean-Up Drive",
      icon: "🌱",
      description:
        "Community participation for a cleaner environment.",
      details:
        "This activity encourages community members and volunteers to work together to maintain a cleaner and healthier environment."
    },
    {
      title: "Digital Literacy Workshop",
      icon: "💻",
      description:
        "Promoting essential digital skills in the community.",
      details:
        "This workshop introduces basic digital skills and helps community members become more comfortable using digital technologies."
    }
  ];

  return (
    <section className="page">

      <p className="eyebrow">
        NGO ACTIVITIES
      </p>

      <h1>
        Events & <span>Activities.</span>
      </h1>

      <div className="cards">

        {events.map((event, index) => (

          <div className="card" key={index}>

            <div className="icon">
              {event.icon}
            </div>

            <h3>
              {event.title}
            </h3>

            <p>
              {event.description}
            </p>

            <button
              className="btn secondary"
              onClick={() => setSelectedEvent(event)}
            >
              View Details
            </button>

          </div>

        ))}

      </div>

      {/* Event Details Popup */}

      {selectedEvent && (
        <div className="event-overlay">

          <div className="event-modal">

            <div className="icon">
              {selectedEvent.icon}
            </div>

            <h2>
              {selectedEvent.title}
            </h2>

            <p>
              {selectedEvent.details}
            </p>

            <button
              className="btn"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Events;