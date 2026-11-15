
import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      image: "/images/school-building.jpg",
      title: "Our School",
      description: "A place where learning and growth begin."
    },
    {
      image: "/images/children-activities.jpg",
      title: "Children's Activities",
      description: "Moments from educational and community activities."
    },
    {
      image: "/images/book-distribution.jpg",
      title: "Book Distribution",
      description: "Learning resources for young learners."
    },
    {
      image: "/images/uniform-distribution.jpg",
      title: "Uniform Distribution",
      description: "Supporting children with school uniforms."
    }
  ];

  return (
    <section className="page gallery-page">

      <p className="eyebrow">HAR GHAR SHIKSHA</p>

      <h1>
        Moments That
        <span> Inspire.</span>
      </h1>

      <p className="page-intro">
        Explore real moments from our educational activities,
        school environment and community initiatives.
        Every photograph tells a story of learning and hope.
      </p>

      <div className="gallery">

        {galleryItems.map((item, index) => (
          <button
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(item)}
            type="button"
          >
            <img src={item.image} alt={item.title} />

            <span className="gallery-caption">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
              <small>Click to view photo ↗</small>
            </span>
          </button>
        ))}

      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            type="button"
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <h2>{selectedImage.title}</h2>
          <p>{selectedImage.description}</p>
        </div>
      )}

    </section>
  );
}

export default Gallery;
