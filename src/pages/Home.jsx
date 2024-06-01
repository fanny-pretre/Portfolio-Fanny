import Header from "../components/Header";
import About from "../components/About";
import Currently from "../components/Currently";
import Skills from "../components/Skills";
import Predilection from "../components/Predilection";
import Values from "../components/Values";
import Slider from "../components/ChosenProjects";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Currently />
      <Skills />
      <Predilection />
      <Slider />
      <Values />
    </div>
  );
}

export default Home;
