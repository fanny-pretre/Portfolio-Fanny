import "./styles/About.scss";

function About() {
  return (
    <div className="about-line">
      <div className="about-container">
        <h2> A propos</h2>
        <img
          src="https://picsum.photos/seed/picsum/200"
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
          JavaScript auprès de la @Wild Code School. Si mon profil vous plait,
          si vous souhaitez échanger ou simplement m'envoyer une petite blague
          de dev n'hésitez pas à me contacter !
        </p>
        <div className="button-section">
          <button className="button-about">
            {" "}
            EN SAVOIR PLUS SUR MON PARCOURS{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
