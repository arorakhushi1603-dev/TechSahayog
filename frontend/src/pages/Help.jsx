import { useState } from "react";

function Help() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    location: "",
    description: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Help Request:", form);

    setMessage(
      "Your help request has been submitted successfully!"
    );

    setForm({
      name: "",
      phone: "",
      category: "",
      location: "",
      description: ""
    });
  }

  return (
    <section className="form-page">

      <div>

        <p className="eyebrow">
          COMMUNITY SUPPORT
        </p>

        <h1>
          How can we
          <span> help you?</span>
        </h1>

        <p className="page-intro">
          Submit your requirement and connect with
          the NGO for community support.
        </p>

      </div>


      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Support Category
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Food">
            Food Support
          </option>

          <option value="Medical">
            Medical Support
          </option>

          <option value="Community">
            Community Support
          </option>

          <option value="Other">
            Other
          </option>

        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Describe your requirement"
          value={form.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn primary"
        >
          Submit Help Request
        </button>

        {message && (
          <p className="success">
            {message}
          </p>
        )}

      </form>

    </section>
  );
}

export default Help;