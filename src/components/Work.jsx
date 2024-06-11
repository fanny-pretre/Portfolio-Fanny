import React, { useState, useEffect } from "react";
import WCS from "./assets/WCS.webp";
import Sellsy from "./assets/Sellsy.webp";
import Wiztopic from "./assets/wizto.webp";
import Noz from "./assets/noz.webp";
import Noz2 from "./assets/noz2.webp";
import SWA from "./assets/SWA-1.webp";
import UBL from "./assets/UBL.webp";
import UA1 from "./assets/UA.webp";
import UA2 from "./assets/UA2.webp";
import BU from "./assets/bu.webp";

import "./styles/Work.scss";

const items = [
  {
    place: "Wild Code School",
    date: "2024",
    src: WCS,
    alt: "Image représentant 3 développeurs web",
    title: "Formation développeur Full Stack JavaScript",
    text: `Titre professionnel "Développeur Web et Web Mobile" (équivalent Bac+2)`,
    category: "éducation",
  },
  {
    place: "Sellsy",
    date: "2021- 2023",
    src: Sellsy,
    alt: "Photo représentant plusieurs personnes en train de travailler dans un open space",
    title: "CSM et Formatrice",
    text: `Support et accompagnement des clients Sellsy dans la prise en main du logiciel. Sellsy est une plateforme saas qui permet aux TPE et PME de gérer leur facturation et leur prospection. `,
    category: "expérience pro",
  },
  {
    place: "Wiztopic",
    date: "2021",
    src: Wiztopic,
    alt: "Photo représentant 4 personnes devant une présentation",
    title: "Customer Sucess Manager",
    text: `Accompagnement et formation des directeurs des services communication d'entreprises du CAC 40 et du secteur de la banque et assurance dans leur utilisation de l'outil Wiztopic.`,
    category: "expérience pro",
  },
  {
    place: "iNEO (Univers Noz)",
    date: "2020 - 2021",
    src: Noz2,
    alt: "Photo représentant deux opérateurs de production",
    title: "Gérante",
    text: `Coordinatrice de la stratégie d'entrepreneuriat en logistique et en charge de la relation avec les sociétés clientes. Accompagnement et animation d'environ 200 gérants.`,
    category: "expérience pro",
  },
  {
    place: "Univers Noz",
    date: "2020",
    src: Noz,
    alt: "Photo représentant une vendeuse en magasin",
    title: "Responsable Innovation",
    text: `Accompagnement des collaborateurs de l'entreprise dans leur démarche d'innovation. Mise en place d'outils de management des idées et de l'innovation (physiques et digitaux).`,
    category: "expérience pro",
  },
  {
    place: "Traveler Sphere",
    date: "2019",
    src: SWA,
    alt: "Photo représentant une femme blonde devant un Business Model Canva",
    title: "Entrepreneure",
    text: `Accompagnement des collaborateurs de l'entreprise dans leur démarche d'innovation. Mise en place d'outils de management des idées et de l'innovation (physiques et digitaux).`,
    category: "expérience pro",
  },
  {
    place: "Université Bretagne Loire",
    date: "2019",
    src: UBL,
    alt: "Photo représentant des étudiants de dos",
    title: "Statut national étudiant entrepreneur",
    category: "éducation",
  },
  {
    place: "Université Angers",
    date: "2017 - 2019",
    src: UA1,
    alt: "Photo représentant des étudiants et un professeur regardant un ordinateur",
    title: "Master négociateur trilingue en commerce international (NTCI)",
    category: "éducation",
  },
  {
    place: "Université Angers",
    date: "2014 - 2017",
    src: UA2,
    alt: "Photo de l'Université d'Angers",
    title:
      "Licences Langues Etrangères Appliquées et Langues, Littératures et Civilisations étrangères Anglais",
    category: "éducation",
  },
  {
    place: "Bishop's University",
    date: "2016-2017",
    src: BU,
    alt: "Photo de Bishop's University",
    title: "Etudiante d'échange pour la CREPUQ-BCI",
    category: "éducation",
  },
];

function Work() {
  const [currentItem, setCurrentItem] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setCurrentItem(0);
  }, [selectedCategory]);

  const handleImageClick = (index) => {
    setCurrentItem(index);
  };

  const handleDotClick = (index) => {
    setCurrentItem(index);
  };

  const prevImage = () => {
    setCurrentItem((prevIndex) => (prevIndex - 4 >= 0 ? prevIndex - 4 : 0));
  };

  const nextImage = () => {
    setCurrentItem((prevIndex) =>
      prevIndex + 4 < filteredItems.length ? prevIndex + 4 : prevIndex
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const startIndex = Math.floor(currentItem / 4) * 4;
  const limitedItems = filteredItems.slice(startIndex, startIndex + 4); // Limiter à 4 éléments

  const numberOfDots = Math.ceil(filteredItems.length / 4); // Nombre de groupes de 4 éléments

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="experience-container">
      <div className="title-flex">
        <div className="line"></div>
        <h2> Mon parcours </h2>
        <div className="line"></div>
      </div>
      <div className="filter-work">
        <p>Filtrer par </p>
        <div className="button-section-work">
          <button
            onClick={() => handleCategoryChange("all")}
            className={
              selectedCategory === "all" ? "button-active" : "button-work"
            }
          >
            Tout
          </button>
          <button
            onClick={() => handleCategoryChange("expérience pro")}
            className={
              selectedCategory === "expérience pro"
                ? "button-active"
                : "button-work"
            }
          >
            Expérience
          </button>
          <button
            onClick={() => handleCategoryChange("éducation")}
            className={
              selectedCategory === "éducation" ? "button-active" : "button-work"
            }
          >
            Formation
          </button>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-images-primary">
          <div className="overlay-work"></div>
          {limitedItems.length > 0 && (
            <>
              <div className="date-work">
                <h2>{limitedItems[currentItem % 4]?.date}</h2>
              </div>
              <img
                src={limitedItems[currentItem % 4]?.src}
                alt={limitedItems[currentItem % 4]?.alt}
              />
            </>
          )}
        </div>
        <div className="gallery-flex">
          {limitedItems.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              onClick={() => handleImageClick(startIndex + index)}
              style={{ cursor: "pointer" }}
              className={currentItem % 4 === index ? "active-img" : ""}
            />
          ))}
        </div>
        <div className="experience-buttons">
          <button onClick={prevImage}>Précédent</button>
          <div className="experience-dots">
            {Array.from({ length: numberOfDots }).map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  Math.floor(currentItem / 4) === index ? "active" : ""
                }`}
                onClick={() => handleDotClick(index * 4)}
                tabIndex={0}
                type="button"
              />
            ))}
          </div>
          <button onClick={nextImage}>Suivant</button>
        </div>
        {limitedItems.length > 0 && (
          <div className="work-bottom-text">
            <h3>{limitedItems[currentItem % 4]?.title}</h3>
            <h4>
              {limitedItems[currentItem % 4]?.place} -{" "}
              {limitedItems[currentItem % 4]?.date}
            </h4>
            <p>{limitedItems[currentItem % 4]?.text}</p>
          </div>
        )}
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        &#8679;
      </button>
    </div>
  );
}

export default Work;
