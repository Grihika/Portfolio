const Skills = ({ skills }) => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon">{skill.charAt(0)}</div>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
