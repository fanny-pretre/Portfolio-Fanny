function Project({ project }) {
  return (
    <div className="project">
      <img src={project.Image} alt={project.Alt} className="project-Image" />
      <h3> {project.Name}</h3>
      <p>
        {project.Label1} | {project.Label2} | {project.Label3}
      </p>
      <p> {project.Desc}</p>
      <button> Learn more </button>
    </div>
  );
}

export default Project;
