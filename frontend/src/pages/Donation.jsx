import { useState } from "react";

function Donation() {

  const [amount, setAmount] = useState("");

  const [message, setMessage] = useState("");

  function handleDonation(e) {
    e.preventDefault();

    if (!amount || amount <= 0) {
      setMessage("Please enter a valid donation amount.");
      return;
    }

    setMessage(
      `Donation request of ₹${amount} received.`
    );
  }

  return (
    <section className="page">

      <p className="eyebrow">
        SUPPORT OUR WORK
      </p>

      <h1>
        Make a
        <span> Difference.</span>
      </h1>

      <p className="page-intro">
        Your support can help community initiatives
        reach more people.
      </p>

      <form
        className="donation-card"
        onSubmit={handleDonation}
      >

        <div className="icon">
          💚
        </div>

        <h2>
          Support TechSahayog
        </h2>

        <input
          type="number"
          min="1"
          placeholder="Enter Donation Amount ₹"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button className="btn primary">
          Continue
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

export default Donation;