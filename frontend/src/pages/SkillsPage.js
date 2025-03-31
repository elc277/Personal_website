import React from 'react';
import './SkillsPage.css';
import BackButton from '../components/BackButton';

const skillGroups = {
  "🧠 Artificial Intelligence & Machine Learning": [
    "Machine Learning",
    "Transformers",
    "Prolog",
    "SPARQL",
    "RDF/RDFS/OWL",
    "Data Wrangling"
  ],
  "💻 Programming Languages": [
    "Python",
    "C++",
    "C#"
  ],
  "🛠️ Tools & Frameworks": [
    "React",
    "Flask",
    "SQLite",
    "REST APIs",
    "Pandas",
    "Matplotlib",
    "PyTorch"
  ],
  "🤝 Soft Skills": [
    "Problem Solving",
    "Teamwork"
  ]
};

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Skills</h1>

      {Object.entries(skillGroups).map(([category, skills], index) => (
        <div key={index} className="skill-group">
          <h2 className="skill-category">{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <span key={i} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}

      <BackButton />
    </div>
  );
};

export default SkillsPage;
