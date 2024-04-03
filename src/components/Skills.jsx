function Skills() {
  const onButtonClick = () => {
    const pdfUrl = "src/assets/Fanny.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV Fanny Prêtre";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="skills">
      <div className="skills-Top">
        <h2>Mes compétences</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          assumenda adipisci repudiandae neque voluptatibus mollitia delectus
          nisi excepturi amet corrupti. Dolore laborum possimus odio itaque
          voluptates commodi exercitationem voluptatem rerum.
        </p>
      </div>
      <div className="skills-Flex">
        <div className="skills-Left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
            numquam quasi aperiam consequatur doloribus dicta veniam, rerum
            aliquam voluptatum. Necessitatibus cumque sunt aliquam quas unde.
            Nam nostrum sunt nisi?
          </p>
        </div>
        <div className="skills-Right">
          <img src="src/assets/CV.png" className="skills-CV" />
          <button onClick={onButtonClick}> Bouton téléchargement CV</button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
