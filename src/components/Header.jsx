import { Link } from "react-router-dom";

import "./styles/Header.scss";

function Header() {
  return (
    <header className="navbars">
      <div className="navbar-logo">
        <a>
          <img src="https://picsum.photos/100" />
        </a>
      </div>
      <nav className="navbar-boutons">
        <ul>
          <li> Accessibilité</li>
          <li> Mode Nuit </li>
        </ul>
        <ul>
          <li> Français</li>
          <li> Anglais </li>
        </ul>
      </nav>
      <nav className="navbars-liens">
        <ul>
          <Link to="/"> Accueil </Link>
          <Link to="/projects"> Projets </Link>
        </ul>
        <ul>
          <Link to="/csr"> Impact Social et environnemental </Link>
          <Link to="/contact"> Contact </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
