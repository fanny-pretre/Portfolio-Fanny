import { useState } from "react";
import "./styles/Skills.scss";

function Skills() {
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

  const handleToggle = () => {
    setShowTechnicalSkills(!showTechnicalSkills);
  };

  return (
    <div className="skills-container">
      <h2> 3 - Compétences </h2>
      <div className="skills-complete">
        <a onClick={handleToggle}>
          <div className="skills-flexbox">
            <img src="https://picsum.photos/seed/picsum/200" />{" "}
            <h3> Techniques</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          {showTechnicalSkills && (
            <div>
              <p>
                Voici des informations détaillées sur les compétences
                techniques...
              </p>
              {/* Ajoutez ici plus de détails sur les compétences techniques */}
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default Skills;
