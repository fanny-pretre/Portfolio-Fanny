import "./styles/ChosenProjects.scss";
import { useState } from "react";

export default function Slider() {
  /*A completer avec les bonnes datas pour le slider*/
  const projects = [
    {
      id: 1,
      name: "Virtu'ART",
      src: "https://picsum.photos/200",
      alt: "Parachute",
    },
    {
      id: 2,
      name: "Globe Guide",
      src: "https://www.goodbro.fr/wp-content/uploads/Toyger-821x1024.jpg.webp",
      alt: "soirée de ouf",
    },
    {
      id: 3,
      name: "SkyHook",
      src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
      alt: "Des jolies chèvres",
    },
    {
      id: 4,
      name: "WhacAMole",
      src: "https://picsum.photos/200",
      alt: "travaux manuel",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleDotClick = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className="project-section">
      <h2>Quelques projets</h2>
      <div className="project-container">
        <div className="project" key={projects[currentProject].id}>
          <div className="project-title">
            <p className="project-name">{projects[currentProject].name}</p>
          </div>
          <div className="project-overlay"></div>
          <img
            src={projects[currentProject].src}
            alt={projects[currentProject].alt}
            className="img-project"
          />
          <button className="button-project">En savoir plus</button>
        </div>
      </div>
      <div className="project-dots">
        {projects.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`dot ${dotIndex === currentProject ? "active" : ""}`}
            onClick={() => handleDotClick(dotIndex)}
            tabIndex={0}
            aria-label={`Project ${dotIndex + 1}`}
            type="button"
          />
        ))}
      </div>
      <div className="project-button-section">
        <button>Accès à la page contenant tous les projets</button>
      </div>
    </div>
  );
}
