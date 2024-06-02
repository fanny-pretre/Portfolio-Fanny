import "./styles/ProjectList.scss";
import { Link } from "react-router-dom";
import projects from "./data/ProjectData";

function ProjectList() {
  return (
    <div className="projectlist-section">
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <Link className="project-link" to={`/project/${project.id}`}></Link>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
