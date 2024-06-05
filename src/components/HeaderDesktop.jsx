import "./styles/HeaderDesktop.scss";
import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <div className="headerdesktop-container">
      <img src="https://media.istockphoto.com/id/1180155588/fr/vectoriel/mod%C3%A8le-de-conception-vectorielle-pour-les-entreprises-ic%C3%B4ne-abstraite-de-travail-d%C3%A9quipe.jpg?s=612x612&w=0&k=20&c=gIVv1IBFaZmSQjUPtXP8ShnyauHkGUkmHKWvkSAE2H0=" />
      <div className="headerdesktop-grey"></div>
      <div className="headerdesktop-white">
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <div class="dot"></div>
          <Link to="/projects">
            <li>Projets</li>
          </Link>
        </ul>
        <ul>
          <Link to="/experience">
            <li>Expérience</li>
          </Link>
          <div class="dot"></div>
          <Link to="/csr">
            <li> Démarche RNE</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDesktop;
