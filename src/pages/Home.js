import React from 'react';

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">
            Grihika Jeloka
            <br />
            <span className="gradient">Full Stack Developer</span>
          </h1>
          <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Profile" className="hero-avatar" />
        </div>
        <p className="hero-desc">
          Building responsive web apps that solve real-world problems with React, Node.js & modern tech stack.
        </p>
        <div className="hero-socials">
          <a href="https://github.com/Grihika" className="social-btn github" aria-label="GitHub" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/img/icons8-github-50.png'} className="social-img" alt="GitHub" />
            <span className="sr-only">GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/grihika-jeloka-453632327" className="social-btn linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/img/icons8-linkedin-48.png'} className="social-img" alt="LinkedIn" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a href="mailto:grihikajeloka@gmail.com" className="social-btn email" aria-label="Email">
            <img src={process.env.PUBLIC_URL + '/img/icons8-email-50.png'} className="social-img" alt="Email" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <div className="hero-buttons">
          <a href={process.env.PUBLIC_URL + '/resume.pdf'} className="btn primary" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="/projects" className="btn secondary">See Projects</a>
        </div>
      </div>
    </section>
  );
}
