
import { useState } from "react";

function Certificate() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");

  function verifyCertificate(e) {
    e.preventDefault();

    if (!certificateId.trim()) {
      setResult("Please enter a certificate ID.");
      return;
    }

    setResult(
      `Certificate ID "${certificateId.trim()}" has been submitted. Please contact our team for authenticity verification.`
    );
  }

  return (
    <section className="page certificate-page">

      <div className="certificate-hero">
        <div className="certificate-icon">🏅</div>

        <p className="eyebrow">RECOGNITION & ACHIEVEMENT</p>

        <h1>
          Every Effort Deserves
          <span> Recognition.</span>
        </h1>

        <p className="page-intro">
          We appreciate every individual who contributes to
          creating educational opportunities and positive change.
        </p>
      </div>

      <div className="certificate-layout">

        <div className="certificate-info">
          <div className="certificate-preview">
            <div className="preview-border">
              <span className="preview-leaf">🌿</span>
              <p className="preview-org">HAR GHAR SHIKSHA</p>
              <h2>Certificate</h2>
              <p className="preview-subtitle">OF APPRECIATION</p>
              <div className="preview-line"></div>
              <p className="preview-description">
                Recognizing dedication, kindness and contribution
                towards educational support.
              </p>
              <div className="preview-footer">
                <span>EDUCATION</span>
                <span>EMPOWERMENT</span>
              </div>
            </div>
          </div>

          <h2>Celebrating meaningful contributions.</h2>

          <p>
            Certificates can recognize the dedication of volunteers
            and individuals who participate in educational and
            community initiatives.
          </p>
        </div>

        <form className="verification-card" onSubmit={verifyCertificate}>

          <div className="verification-icon">🔎</div>

          <h2>Certificate Verification</h2>

          <p>
            Have a certificate ID? Enter it below to submit
            a verification enquiry.
          </p>

          <label htmlFor="certificateId">
            Certificate ID
          </label>

          <input
            id="certificateId"
            type="text"
            placeholder="e.g. HGS-2026-001"
            value={certificateId}
            onChange={(e) => {
              setCertificateId(e.target.value);
              setResult("");
            }}
          />

          <button type="submit" className="btn primary verify-btn">
            Submit for Verification →
          </button>

          {result && (
            <p className="verification-result" role="status">
              {result}
            </p>
          )}

          <div className="verification-note">
            <span>ℹ️</span>
            <p>
              Submitting an ID does not automatically verify
              certificate authenticity.
            </p>
          </div>

        </form>

      </div>

      <div className="certificate-bottom">
        <h2>Thank you for making a difference 💚</h2>
        <p>
          Your time, effort and support help build a future
          where every child gets the opportunity to learn.
        </p>
      </div>

    </section>
  );
}

export default Certificate;
