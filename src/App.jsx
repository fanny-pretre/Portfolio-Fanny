import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Home className="card" />
      <About className="card" />
      <Skills className="card" />
      <Portfolio className="card" />
      <Contact className="card" />
    </div>
  );
}

export default App;
