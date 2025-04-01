import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectsPage.css';
import BackButton from '../components/BackButton';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://personal-website-1-zid4.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="projects-page">
      <h1 className="section-title">Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <BackButton />
    </div>
  );
};

export default ProjectsPage;
