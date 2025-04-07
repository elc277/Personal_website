import React, { useEffect, useState } from 'react';
import './ProjectsPage.css';
import BackButton from '../components/BackButton';

const staticProjects = [
  {
    title: "Football Gladiators - Player Info Web App",
    description:
      "Built a full-stack football player information web app using React (frontend) and Flask (backend), with SQLite for persistent data. Users can search players, save favorites, and build custom starting elevens. Integrated external sports APIs for live data, and handled real-time frontend-backend sync, user login, and player card design.",
    link: "https://github.com/VU-Applied-Programming-for-AI-2024/Group-6-"
  },
  {
    title: "Transformer Model - Shakespeare Generator",
    description:
      "Developed a lightweight character-level Transformer model from scratch in PyTorch to generate Shakespearean-style text. Trained on a custom dataset, with evaluations on perplexity, accuracy, sentiment, and style reproduction. Focused on balancing performance and efficiency under limited resources.",
    link: "https://github.com/elc277/LLM"
  },
  {
    title: "Cooking Companion - Conversational Recipe Recommender",
    description:
      "Built a speech-based conversational agent that recommends recipes based on user preferences like ingredients, cooking time, and dietary constraints. Integrated a Prolog-based knowledge base with a custom NLU pipeline, voice recognition, and visual UI. Supported dynamic dialogue flow, intent/slot classification, and creative user interactions.",
    link: "https://github.com/VU-PCA-2025/agent-group-b1-1"
  },
  {
    title: "Personal Website - Portfolio & Resume Platform",
    description:
      "Designed and developed this fully responsive personal website using React. It features a portfolio section, skill overview, API-integrated project gallery, and contact options. Includes a dark theme, animations, and is hosted on Netlify with a backend previously managed on Render.",
    link: "https://github.com/elc277/Personal_website"
  }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setProjects(staticProjects);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="projects-page">
      <h1 className="section-title">Projects</h1>
      <p className="projects-intro">
        Below are a few projects I've developed both during my academic journey and in my free time. Each one reflects my passion for solving real-world problems through technology, learning new tools and frameworks, and continuously challenging myself with diverse and impactful ideas.
      </p>

      {loading ? (
        <div className="project-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="project-card skeleton-card" />
          ))}
        </div>
      ) : (
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
      )}

      <BackButton />
    </div>
  );
};

export default ProjectsPage;
