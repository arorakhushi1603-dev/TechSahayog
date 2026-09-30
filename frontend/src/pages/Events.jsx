function Events() {

  const events = [
    {
      title: "Education Support Camp",
      icon: "📚",
      description:
        "Community education and student support initiative."
    },
    {
      title: "Community Clean-Up Drive",
      icon: "🌱",
      description:
        "Community participation for a cleaner environment."
    },
    {
      title: "Digital Literacy Workshop",
      icon: "💻",
      description:
        "Promoting essential digital skills in the community."
    }
  ];

  return (
    <section className="page">

      <p className="eyebrow">
        NGO ACTIVITIES
      </p>

      <h1>
        Events &
        <span> Activities.</span>
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

            <button className="btn secondary">
              View Details
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Events;