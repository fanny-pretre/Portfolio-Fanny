import { useParams } from "react-router-dom";
import projects from "../components/data/ProjectData";
import { useState } from "react";

function ProjectDetail() {
  const { id } = useParams();

  const [project, setProject] = useState(() => {
    return projects.find((p) => p.id === parseInt(id));
  });

  return (
    <div>
      <p>{project.name}</p>
      <div></div>
    </div>
  );
}

export default ProjectDetail;
