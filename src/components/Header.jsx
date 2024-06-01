import "./styles/Slider.scss";

export default function Header() {
  return (
    <>
      <div className="slider-container">
        <div className="slider-title">
          <h1> Fanny Prêtre</h1>
          <p> Bienvenue sur mon portfolio</p>
        </div>
        <div className="slider">
          <img src="https://picsum.photos/200" alt="" className="img-slider" />
          <button className="button-slider"> Téléchargez mon CV </button>
          <img
            className="slider-logo"
            src="https://media.istockphoto.com/id/1180155588/fr/vectoriel/mod%C3%A8le-de-conception-vectorielle-pour-les-entreprises-ic%C3%B4ne-abstraite-de-travail-d%C3%A9quipe.jpg?s=612x612&w=0&k=20&c=gIVv1IBFaZmSQjUPtXP8ShnyauHkGUkmHKWvkSAE2H0="
          />
        </div>
      </div>
    </>
  );
}
