
import { useState } from "react";

function Donation() {
  const [amount, setAmount] = useState("500");
  const [message, setMessage] = useState("");

  const donationAmounts = [100, 250, 500, 1000, 2000];

  function handleDonation(e) {
    e.preventDefault();

    const value = Number(amount);

    if (!value || value <= 0) {
      setMessage("Please enter a valid donation amount.");
      return;
    }

    setMessage(
      `Thank you for your interest in donating ₹${value}. Please contact our team to complete your contribution.`
    );
  }

  return (
    <section className="page donation-page">

      <div className="donation-hero">
        <p className="eyebrow">BE A PART OF THE CHANGE</p>

        <h1>
          Small Acts,
          <span> Big Dreams.</span>
        </h1>

        <p className="page-intro">
          Your contribution can support learning opportunities,
          educational resources and a brighter future for children.
        </p>
      </div>

      <div className="donation-layout">

        <div className="donation-info">
          <img
            src="/images/book-distribution.jpg"
            alt="Educational books for children"
          />

          <h2>Invest in a child's future.</h2>

          <p>
            Every child deserves the opportunity to learn, grow
            and build a better future. Your support can help
            educational initiatives reach children who need them.
          </p>

          <div className="donation-points">
            <div>
              <span>📚</span>
              <p>Learning resources</p>
            </div>

            <div>
              <span>🎓</span>
              <p>Educational support</p>
            </div>

            <div>
              <span>🌸</span>
              <p>Girls' education</p>
            </div>
          </div>
        </div>

        <form className="donation-card" onSubmit={handleDonation}>

          <div className="donation-icon">💚</div>

          <h2>Make a Contribution</h2>

          <p className="donation-subtitle">
            Choose an amount you would like to contribute.
          </p>

          <label className="donation-label">
            Select donation amount
          </label>

          <div className="donation-amounts">
            {donationAmounts.map((value) => (
              <button
                type="button"
                key={value}
                className={Number(amount) === value ? "amount-option selected" : "amount-option"}
                onClick={() => {
                  setAmount(String(value));
                  setMessage("");
                }}
              >
                ₹{value}
              </button>
            ))}
          </div>

          <label className="donation-label" htmlFor="donationAmount">
            Or enter a custom amount
          </label>

          <div className="amount-input">
            <span>₹</span>
            <input
              id="donationAmount"
              type="number"
              min="1"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setMessage("");
              }}
            />
          </div>

          <button type="submit" className="btn primary donation-submit">
            Continue
            <span> →</span>
          </button>

          {message && (
            <p className="donation-message" role="status">
              {message}
            </p>
          )}

          <p className="donation-note">
            🔒 No payment is collected on this page.
          </p>

        </form>
      </div>

      <div className="donation-bottom">
        <h2>Every contribution matters.</h2>
        <p>
          Together, we can help make education more accessible
          and create opportunities for every child.
        </p>
      </div>

    </section>
  );
}

export default Donation;
