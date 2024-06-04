import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../components/Header";
import HeaderDesktop from "../components/HeaderDesktop";
import About from "../components/About";
import Currently from "../components/Currently";
import Skills from "../components/Skills";
import SkillsDesktop from "../components/SkillsDesktop";
import Predilection from "../components/Predilection";
import PredilectionDesktop from "../components/PredilectionDesktop";
import Values from "../components/Values";
import Slider from "../components/ChosenProjects";
import Contact from "../components/Contact";
import Numbers from "../components/Numbers";

import "./styles/Home.scss";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <Header />
          <About />
          <Currently />
          <Skills />
          <Predilection />
          <Slider />
          <Values />
          <Contact />
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <div className="home-firstsection">
            <Header />
            <div className="home-firstsection-right">
              <About />
              <Currently />
            </div>
          </div>
          <div className="title-flex">
            <div className="line"></div>
            <h2> Mon profil </h2>
            <div className="line"></div>
          </div>
          <div className="home-secondsection">
            <SkillsDesktop />
            <Slider />
          </div>
          <div className="home-thirdsection">
            <div className="title-flex">
              <div className="line"></div>
              <h2> Mes centres d'intérêt</h2>
              <div className="line"></div>
            </div>
            <PredilectionDesktop />
          </div>
          <div className="home-fourthsection">
            <div className="title-flex">
              <div className="line"></div>
              <h2> Contact </h2>
              <div className="line"></div>
            </div>
            <Contact />
          </div>
          <div className="home-fifthsection">
            <Numbers />
            <Values />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
