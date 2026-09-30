function Gallery() {

  const galleryItems = [
    "📸 Community Activity",
    "📸 Education Program",
    "📸 Volunteer Activity",
    "📸 NGO Event",
    "📸 Awareness Program",
    "📸 Community Support"
  ];

  return (
    <section className="page">

      <p className="eyebrow">
        OUR WORK
      </p>

      <h1>
        Activity
        <span> Gallery.</span>
      </h1>

      <p className="page-intro">
        A collection of NGO activities, programs
        and community initiatives.
      </p>

      <div className="gallery">

        {galleryItems.map((item, index) => (

          <div key={index}>
            {item}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;