
import { useState } from "react";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Education Support Camp",
      icon: "📚",
      image: "/images/children-activities.jpg",
      category: "Learning Support",
      description:
        "Supporting children with learning guidance and educational resources.",
      details:
        "This initiative focuses on providing educational guidance and learning support to children from underprivileged and low-income families."
    },
    {
      title: "Girls' Education Awareness Drive",
      icon: "👧",
      image: "/images/school-building.jpg",
      category: "Girls' Education",
      description:
        "Creating awareness about the importance of girls' education.",
      details:
        "This activity promotes awareness about equal educational opportunities and encourages families and communities to support girls in continuing their education."
    },
    {
      title: "Learning Material Distribution",
      icon: "🎒",
      image: "/images/book-distribution.jpg",
      category: "Educational Resources",
      description:
        "Helping children access essential learning materials.",
      details:
        "This initiative focuses on supporting children with educational resources such as books, school supplies and other learning materials."
    },
    {
      title: "Community Teaching Session",
      icon: "👩‍🏫",
      image: "/images/children-activities.jpg",
      category: "Volunteering",
      description:
        "Volunteers supporting children through teaching and learning.",
      details:
        "Community teaching sessions provide children with additional academic guidance and learning support with the participation of volunteers."
    },
    {
      title: "Digital Learning Workshop",
      icon: "💻",
      image: "/images/school-building.jpg",
      category: "Digital Education",
      description:
        "Introducing children to digital learning opportunities.",
      details:
        "This workshop focuses on helping children become familiar with digital learning tools and encouraging the use of technology for education."
    },
    {
      title: "Education Awareness Program",
      icon: "🌱",
      image: "/images/uniform-distribution.jpg",
      category: "Community Awareness",
      description:
        "Encouraging families and communities to value education.",
      details:
        "This program focuses on spreading awareness about the importance of education and encouraging children to continue their learning journey."
    }
  ];

  return (
    <section className="events-page">

      {/* HERO */}
      <div className="events-hero">
        <div className="events-hero-content">
          <p className="eyebrow">HAR GHAR SHIKSHA</p>

          <h1>
            Learning today,
            <span> leading tomorrow.</span>
          </h1>

          <p>
            Explore educational initiatives and community activities
            focused on creating better learning opportunities for
            children and promoting girls' education.
          </p>
        </div>

        <div className="events-hero-image">
          <img
            src="/images/children-activities.jpg"
            alt="Children taking part in learning activities"
          />
        </div>
      </div>

      {/* EVENTS INTRO */}
      <div className="events-heading">
        <p className="eyebrow">OUR INITIATIVES</p>
        <h2>Explore Our Activities</h2>
        <p>
          Discover different ways to encourage education,
          participation and community support.
        </p>
      </div>

      {/* EVENT CARDS */}
      <div className="events-grid">
        {events.map((event, index) => (
          <article className="events-card" key={index}>
            <div className="events-card-image">
              <img src={event.image} alt={event.title} />
              <span className="events-card-icon">{event.icon}</span>
            </div>

            <div className="events-card-content">
              <span className="events-category">{event.category}</span>

              <h3>{event.title}</h3>

              <p>{event.description}</p>

              <button
                type="button"
                className="events-details-btn"
                onClick={() => setSelectedEvent(event)}
              >
                Explore Details <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* DETAILS POPUP */}
      {selectedEvent && (
        <div
          className="events-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="events-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="events-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              ×
            </button>

            <img
              className="events-modal-image"
              src={selectedEvent.image}
              alt={selectedEvent.title}
            />

            <div className="events-modal-content">
              <span className="events-modal-icon">
                {selectedEvent.icon}
              </span>

              <p className="eyebrow">{selectedEvent.category}</p>

              <h2 id="event-modal-title">{selectedEvent.title}</h2>

              <p>{selectedEvent.details}</p>

              <button
                type="button"
                className="events-modal-btn"
                onClick={() => setSelectedEvent(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BANNER */}
      <div className="events-banner">
        <img
          src="/images/book-distribution.jpg"
          alt="Books for children's education"
        />

        <div>
          <p className="eyebrow">BE A PART OF THE CHANGE</p>
          <h2>Every learning opportunity matters.</h2>
          <p>
            Interested in contributing? Join our volunteer community
            and support the cause of education.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Events;
