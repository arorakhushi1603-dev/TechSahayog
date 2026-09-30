import { useState } from "react";

function Volunteer() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: ""
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

    console.log("Volunteer:", form);

    setMessage(
      "Volunteer registration submitted successfully!"
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      skills: ""
    });
  }

  return (
    <section className="form-page">

      <div>

        <p className="eyebrow">
          JOIN THE MOVEMENT
        </p>

        <h1>
          Become a
          <span> Volunteer.</span>
        </h1>

        <p className="page-intro">
          Share your time, skills and ideas to support
          community initiatives.
        </p>

      </div>


      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
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

        <input
          name="skills"
          placeholder="Skills / Interests"
          value={form.skills}
          onChange={handleChange}
        />

        <button className="btn primary">
          Register as Volunteer
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

export default Volunteer;