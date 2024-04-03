import Project from "./Project";
import { useState } from "react";

const projects = [
  {
    ID: "1",
    Name: "Virtu'ART - Votre galerie d'art interractive et virtuelle",
    Label1: "HTML",
    Label2: "CSS",
    Label3: "JavaScript",
    Image: "src/assets/Virtuart.png",
    Alt: "Image représentant le concept de Virtu'Art, une galerie d'art virtuelle. ",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sapiente error sunt quae earum fuga sequi iste magni. Nisi asperiores id reprehenderit aliquam sit fugit sint nam provident! Eaque, voluptates?",
  },
  {
    ID: "2",
    Name: "Projet 2",
    Label1: "HTML",
    Label2: "CSS",
    Label3: "JavaScript",
    Image: "https://picsum.photos/seed/picsum/200/300",
    Alt: "Image représentant le concept de Virtu'Art, une galerie d'art virtuelle. ",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sapiente error sunt quae earum fuga sequi iste magni. Nisi asperiores id reprehenderit aliquam sit fugit sint nam provident! Eaque, voluptates?",
  },
  {
    ID: "3",
    Name: "Projet 3",
    Label1: "HTML",
    Label2: "CSS",
    Label3: "JavaScript",
    Image: "https://picsum.photos/seed/picsum/200/300",
    Alt: "Image représentant le concept de Virtu'Art, une galerie d'art virtuelle. ",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sapiente error sunt quae earum fuga sequi iste magni. Nisi asperiores id reprehenderit aliquam sit fugit sint nam provident! Eaque, voluptates?",
  },
];

function Portfolio() {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleClickNext = () => {
    setProjectIndex(projectIndex + 1);
  };

  const handleClickPrevious = () => {
    setProjectIndex(projectIndex - 1);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-Top">
        <h2>Mon portfolio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          assumenda adipisci repudiandae neque voluptatibus mollitia delectus
          nisi excepturi amet corrupti. Dolore laborum possimus odio itaque
          voluptates commodi exercitationem voluptatem rerum.
        </p>
      </div>
      <div className="portfolio-Content">
        <div>
          <Project project={projects[projectIndex]} />
        </div>
        {projectIndex > 0 ? (
          <button onClick={handleClickPrevious}> Précédent </button>
        ) : (
          ""
        )}
        {projectIndex < projects.length - 1 ? (
          <button onClick={handleClickNext}> Suivant </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Portfolio;
