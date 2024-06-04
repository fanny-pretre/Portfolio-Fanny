import "./styles/ChosenProjects.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "./data/ProjectData";

export default function Slider() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleDotClick = (index) => {
    const test = projects.find((p) => p.id === index);
    setCurrentProject(test);
  };

  useEffect(() => {
    console.log(currentProject);
  }, [currentProject]);

  return (
    <div className="project-section">
      <h2>Quelques projets</h2>
      <div className="project-container">
        <div className="project">
          <div className="project-title">
            <p className="project-name">{currentProject.name}</p>
          </div>
          <div className="project-overlay"></div>
          <img
            src={currentProject.image}
            alt={currentProject.imagealt}
            className="img-project"
          />
          <Link className="button-project" to={`/project/${currentProject.id}`}>
            En savoir plus sur {currentProject.name}
          </Link>
        </div>
      </div>
      <div className="project-dots">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`dot ${
              project.id === currentProject.id ? "active" : ""
            }`}
            onClick={() => handleDotClick(project.id)}
            type="button"
          />
        ))}
      </div>
      <div className="project-button-section">
        <Link to="/projects">
          <button>Accès à la page contenant tous les projets</button>
        </Link>
      </div>
    </div>
  );
}
