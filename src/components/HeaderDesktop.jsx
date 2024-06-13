import "./styles/HeaderDesktop.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "./assets/logo.webp";

function HeaderDesktop() {
  const [isSticky, setIsSticky] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`headerdesktop-container ${
        isSticky ? "sticky" : "not-sticky"
      }`}
    >
      <img
        src={Logo}
        alt="Logo du site de Fanny Prêtre composé de pictogrammes"
      />
      <div className="headerdesktop-grey"></div>
      <div className="headerdesktop-white">
        <ul>
          <Link to="/">
            <li>
              <div className="hover">Accueil</div>
            </li>
          </Link>
          <div class="dot"></div>
          <Link to="/projects">
            <li className="hover">Projets</li>
          </Link>
        </ul>
        <ul>
          <Link to="/experience">
            <li className="hover">Expériences</li>
          </Link>
          <div class="dot"></div>
          <Link to="/csr">
            <li className="hover"> Démarche RNE</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDesktop;
