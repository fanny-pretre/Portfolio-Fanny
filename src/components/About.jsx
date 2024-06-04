import { Link } from "react-router-dom";
import "./styles/About.scss";
import Profil from "./assets/Profil.webp";

function About() {
  return (
    <div className="about-line">
      <div className="about-container">
        <div className="about-title">
          <div className="about-title-line"></div>
          <h2> A propos</h2>
          <div className="about-title-line"></div>
        </div>
        <img
          src={Profil}
          alt="photo en noir et blanc en représentant une femme blonde à lunettes"
          className="about-image"
        />
        <h3>
          Vu mon nom, est-ce qu'on peut dire que je suis une pro des "display :
          nonne" ?
        </h3>
        <p>
          Après plusieurs années dans le secteur de la relation client, je suis
          actuellement en reconversion dans le domaine du Développement Web. Je
          suis passionnée par les technologies et le numérique responsable,
          c'est pourquoi j'ai décidé de me lancer dans une formation en
          JavaScript auprès de la{" "}
          <a href="https://www.wildcodeschool.com/fr-fr/">
            {" "}
            Wild Code School.{" "}
          </a>
          Si mon profil vous plait, si vous souhaitez échanger ou simplement
          m'envoyer une petite blague de dev n'hésitez pas à me contacter !
        </p>
        <div className="button-section">
          <Link to="/experience">
            <button className="button-about">
              {" "}
              EN SAVOIR PLUS SUR MON PARCOURS{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
