export default function About() {
  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "Firebase", level: 70 },
    { name: "Git & GitHub", level: 70 },
  ];

  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        I am a passionate React developer building modern, responsive, and
        visually engaging web experiences. I love clean code, sleek design, and
        solving real-world problems with software.
      </p>

      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
