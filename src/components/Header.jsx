import CV from "./assets/CV Fanny Prêtre 2024.pdf";
import SWA1 from "./assets/SWA-1.webp";

import "./styles/Slider.scss";

export default function Header() {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV Fanny Prêtre";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider-overlay"></div>
        <div className="slider-title">
          <h1> Fanny Prêtre</h1>
          <p> Bienvenue sur mon portfolio</p>
        </div>
        <div className="slider">
          <img
            src={SWA1}
            alt="Photo représentant une femme blonde portant un t-shirt orange et un jean, un micro à la main en train de faire une présentation "
            className="img-slider"
          />
          <button onClick={onButtonClick} className="button-slider">
            {" "}
            Téléchargez mon CV{" "}
          </button>
        </div>
      </div>
    </>
  );
}
