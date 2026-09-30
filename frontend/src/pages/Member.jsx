import { useState } from "react";

function Member() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
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

    console.log("Member:", form);

    setMessage(
      "Membership registration submitted successfully!"
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      address: ""
    });
  }

  return (
    <section className="form-page">

      <div>

        <p className="eyebrow">
          MEMBERSHIP
        </p>

        <h1>
          Join our
          <span> community.</span>
        </h1>

        <p className="page-intro">
          Become a member and participate in NGO
          activities and community programs.
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

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <button className="btn primary">
          Register Member
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

export default Member;