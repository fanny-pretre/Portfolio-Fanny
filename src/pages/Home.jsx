import Slider from "../components/Slider";
import About from "../components/About";
import Currently from "../components/Currently";
import Skills from "../components/Skills";
import Predilection from "../components/Predilection";
import Values from "../components/Values";
import Experience from "../components/Experience";

function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Currently />
      <Skills />
      <Experience />

      <Predilection />
      <Values />
    </div>
  );
}

export default Home;
