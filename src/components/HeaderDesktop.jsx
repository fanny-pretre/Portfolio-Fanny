import "./styles/HeaderDesktop.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <img src="https://media.istockphoto.com/id/1180155588/fr/vectoriel/mod%C3%A8le-de-conception-vectorielle-pour-les-entreprises-ic%C3%B4ne-abstraite-de-travail-d%C3%A9quipe.jpg?s=612x612&w=0&k=20&c=gIVv1IBFaZmSQjUPtXP8ShnyauHkGUkmHKWvkSAE2H0=" />
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
            <li className="hover">Expérience</li>
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
