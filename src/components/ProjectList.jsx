import "./styles/ProjectList.scss";
import { Link } from "react-router-dom";
import projects from "./data/ProjectData";

function ProjectList() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="projectlist-section">
      <div className="title-flex">
        <div className="line"></div>
        <h2> Mes projets </h2>
        <div className="line"></div>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <Link className="project-link" to={`/project/${project.id}`}></Link>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
          </div>
        ))}
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        &#8679;
      </button>
    </div>
  );
}

export default ProjectList;
