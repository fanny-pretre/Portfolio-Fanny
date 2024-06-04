import React from "react";
import { useMediaQuery } from "react-responsive";

import HeaderBis from "../components/HeaderBis";
import ProjectList from "../components/ProjectList";
import HeaderDesktop from "../components/HeaderDesktop";

function Projects() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px) ",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <HeaderBis />
          <h2> Mes projets</h2>
          <ProjectList />
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <h2> Mes projets</h2>
          <ProjectList />
        </div>
      )}
    </>
  );
}

export default Projects;
