import { useState } from "react";

function Certificate() {

  const [certificateId, setCertificateId] =
    useState("");

  const [result, setResult] =
    useState("");

  function verifyCertificate() {

    if (!certificateId.trim()) {
      setResult("Please enter a certificate ID.");
      return;
    }

    setResult(
      `Certificate ID ${certificateId} submitted for verification.`
    );
  }

  return (
    <section className="page">

      <p className="eyebrow">
        CERTIFICATE VERIFICATION
      </p>

      <h1>
        Verify your
        <span> certificate.</span>
      </h1>

      <p className="page-intro">
        Enter your certificate ID to verify a certificate
        issued by the organization.
      </p>

      <div className="verification-card">

        <input
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) =>
            setCertificateId(e.target.value)
          }
        />

        <button
          className="btn primary"
          onClick={verifyCertificate}
        >
          Verify Certificate
        </button>

        {result && (
          <p className="success">
            {result}
          </p>
        )}

      </div>

    </section>
  );
}

export default Certificate;