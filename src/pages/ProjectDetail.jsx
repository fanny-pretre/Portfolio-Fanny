import React from "react";
import { useMediaQuery } from "react-responsive";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import projects from "../components/data/ProjectData";
import HeaderBis from "../components/HeaderBis";
import HeaderDesktop from "../components/HeaderDesktop";

import "./styles/ProjectDetails.scss";

function ProjectDetail() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { id } = useParams();

  const [project, setProject] = useState(() => {
    return projects.find((p) => p.id === parseInt(id));
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <HeaderBis />
          <div className="projectdetails-container">
            <img src={project.imagedetail} alt={project.imagedetailalt} />
            <h2>{project.name}</h2>
            <h3> {project.labels} </h3>
            <div className="small-line"></div>
            <p> {project.desc} </p>
            <ul>
              <li>
                <a href={project.github} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                      fill="#005580"
                    />
                  </svg>
                </a>
                <a href={project.github} target="_blank">
                  {" "}
                  Le GitHub{" "}
                </a>
              </li>
              <li>
                <a href={project.prod} target="_blank">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"
                      fill={project.prod ? "#005580" : "grey"}
                    />
                  </svg>
                </a>
                <a href={project.prod} target="_blank">
                  {" "}
                  Le site{" "}
                </a>
              </li>
            </ul>
            <div className="projectdetail-button-section">
              <button onClick={handleNavigate} className="projectdetail-button">
                {" "}
                Revenir à la page projet
              </button>
            </div>
          </div>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <div className="projectdetails-container">
            <img src={project.imagedetail} alt={project.imagedetailalt} />
            <div className="projectdetails-text">
              <h2>{project.name}</h2>
              <h3> {project.labels} </h3>
              <div className="small-line"></div>
              <p> {project.desc} </p>
              <ul>
                <li>
                  <a href={project.github} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                        fill="#005580"
                      />
                    </svg>
                  </a>
                  <a href={project.github} target="_blank">
                    {" "}
                    Le GitHub{" "}
                  </a>
                </li>
                <li>
                  <a href={project.prod} target="_blank">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"
                        fill={project.prod ? "#005580" : "grey"}
                      />
                    </svg>
                  </a>
                  <a href={project.prod} target="_blank">
                    {" "}
                    Le site{" "}
                  </a>
                </li>
              </ul>
              <div className="projectdetail-button-section">
                <button
                  onClick={handleNavigate}
                  className="projectdetail-button"
                >
                  {" "}
                  Revenir à la page projet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetail;
