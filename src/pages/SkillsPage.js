import React from 'react';
import Skills from '../components/skills';

const skillsList = [
  'JavaScript', 'React', 'Node.js', 'Express', 'HTML & CSS', 'MongoDB', 'Git', 'TypeScript'
];

export default function SkillsPage() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-text">
          <h2 className="title">Skills</h2>
          <p className="section-text-p1">Technologies and tools I use to build products.</p>
          <Skills skills={skillsList} />
        </div>
      </div>
    </section>
  );
}
