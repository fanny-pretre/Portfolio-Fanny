import "./styles/Slider.scss";
import { useState, useEffect } from "react";

export default function Slider() {
  /*A completer avec les bonnes datas pour le slider*/
  const slides = [
    { src: "https://picsum.photos/200", alt: "Parachute" },
    {
      src: "https://www.goodbro.fr/wp-content/uploads/Toyger-821x1024.jpg.webp",
      alt: "soirée de ouf",
    },
    {
      src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
      alt: "Des jolies chèvres",
    },
    { src: "https://picsum.photos/200", alt: "travaux manuel" },
    {
      src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
      alt: "jetski",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  /*Pour passer à la slide suivante automatiquement*/
  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  /*useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });*/

  /*Pour mettre à jour les points en bas*/

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider-title">
          <h1> Fanny Prêtre</h1>
          <p> Bienvenue sur mon portfolio</p>
        </div>
        <div className="slider">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="img-slider"
          />
          <button className="button-slider"> Je veux en savoir plus </button>
          <img
            className="slider-logo"
            src="https://media.istockphoto.com/id/1180155588/fr/vectoriel/mod%C3%A8le-de-conception-vectorielle-pour-les-entreprises-ic%C3%B4ne-abstraite-de-travail-d%C3%A9quipe.jpg?s=612x612&w=0&k=20&c=gIVv1IBFaZmSQjUPtXP8ShnyauHkGUkmHKWvkSAE2H0="
          />
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={[]}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
