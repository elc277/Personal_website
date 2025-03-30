import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className="p-8 bg-white shadow-md m-4 rounded-xl">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded hover:shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
