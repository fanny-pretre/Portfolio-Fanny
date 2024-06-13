import "./styles/ChosenProjects.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "./data/ProjectData";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    console.log(projects[currentIndex]);
  }, [currentIndex, projects]);

  const currentProject = projects[currentIndex];

  return (
    <section className="project-section">
      <h2>Quelques projets</h2>
      <div className="project-container">
        <div className="project">
          <div className="project-title">
            <h3 className="project-name">{currentProject.name}</h3>
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
        <button
          onClick={handlePrevClick}
          className="previous-next"
          aria-label="previous-button"
        >
          Précédent
        </button>
        {projects.map((project, index) => (
          <button
            key={project.id}
            aria-label={`dot-carousel-${index}`}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            type="button"
          />
        ))}
        <button
          onClick={handleNextClick}
          className="previous-next"
          aria-label="next-button"
        >
          Suivant
        </button>
      </div>
      <div className="project-button-section">
        <Link to="/projects">
          <button>Accès à la page contenant tous les projets</button>
        </Link>
      </div>
    </section>
  );
}
