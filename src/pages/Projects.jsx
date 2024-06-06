import React from "react";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
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
          <ProjectList />
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <ProjectList />
        </div>
      )}
    </>
  );
}

export default Projects;
