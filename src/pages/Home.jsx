import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../components/Header";
import HeaderDesktop from "../components/HeaderDesktop";
import About from "../components/About";
import Currently from "../components/Currently";
import Skills from "../components/Skills";
import Predilection from "../components/Predilection";
import Values from "../components/Values";
import Slider from "../components/ChosenProjects";
import Contact from "../components/Contact";

import "./styles/Home.scss";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px) and (max-width: 1600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

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
          <h2> Mon profil </h2>
          <div className="home-secondsection">
            <Skills />
            <Slider />
          </div>
          <Predilection />
          <div></div>
          <Values />
          <Contact />
        </div>
      )}
    </>
  );
}

export default Home;
