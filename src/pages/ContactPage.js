import React from 'react';

export default function ContactPage() {
  return (
    <section id="contact" className="section">
      <div className="section-container">
        <div className="details-container">
          <h2 className="title">Contact</h2>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div>
                <strong>Email</strong>
                <div><a href="mailto:grihikajeloka@gmail.com">grihikajeloka@gmail.com</a></div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <div><a href="tel:+919876543210">+91 98765 43210</a></div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Location</strong>
                <div>Chennai, India</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🔗</div>
              <div>
                <strong>LinkedIn</strong>
                <div><a href="https://www.linkedin.com/in/grihika-jeloka-453632327" target="_blank" rel="noreferrer">/in/grihika-jeloka-453632327</a></div>
              </div>
            </div>
          </div>

          <p className="about" style={{marginTop: '1.25rem'}}>Prefer a direct message? Click any contact method above, or send a message on LinkedIn.</p>
        </div>
      </div>
    </section>
  );
}
