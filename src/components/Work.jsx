import React, { useState, useEffect } from "react";
import WCS from "./assets/WCS.webp";
import Sellsy from "./assets/Sellsy.webp";

import "./styles/Work.scss";

const items = [
  {
    place: "Wild Code School",
    date: "2024",
    src: WCS,
    alt: "Image représentant une main qui tape sur un clavier d'ordinateur portable",
    title: "Formation développeur Full Stack JavaScript",
    text: `Titre professionnel "Développeur Web et Web Mobile" (équivalent Bac+2)`,
    category: "éducation",
  },
  {
    place: "Sellsy",
    date: "2021- 2023",
    src: Sellsy,
    alt: "",
    title: "CSM et Formatrice",
    text: `Support et accompagnement des clients Sellsy dans la prise en main du logiciel. Sellsy est une plateforme saas qui permet aux TPE et PME de gérer leur facturation et leur prospection. `,
    category: "expérience pro",
  },
  {
    place: "Wiztopic",
    date: "2021",
    src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
    alt: "",
    title: "Customer Sucess Manager",
    text: `Accompagnement et formation des directeurs des services communication d'entreprises du CAC 40 et du secteur de la banque et assurance dans leur utilisation de l'outil Wiztopic.`,
    category: "expérience pro",
  },
  {
    place: "iNEO (Univers Noz)",
    date: "2020 - 2021",
    src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
    alt: "",
    title: "Gérante",
    text: `Coordinatrice de la stratégie d'entrepreneuriat en logistique et en charge de la relation avec les sociétés clientes. Accompagnement et animation d'environ 200 gérants.`,
    category: "expérience pro",
  },
  {
    place: "Univers Noz",
    date: "2020",
    src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
    alt: "",
    title: "Responsable Innovation",
    text: `Accompagnement des collaborateurs de l'entreprise dans leur démarche d'innovation. Mise en place d'outils de management des idées et de l'innovation (physiques et digitaux).`,
    category: "expérience pro",
  },
  {
    place: "Traveler Sphere",
    date: "2019",
    src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
    alt: "",
    title: "Entrepreneure",
    text: `Accompagnement des collaborateurs de l'entreprise dans leur démarche d'innovation. Mise en place d'outils de management des idées et de l'innovation (physiques et digitaux).`,
    category: "expérience pro",
  },
  {
    place: "Université Bretagne Loire",
    date: "2019",
    src: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    alt: "",
    title: "Statut national étudiant entrepreneur",
    category: "éducation",
  },
  {
    place: "Université Angers",
    date: "2017 - 2019",
    src: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    alt: "",
    title: "Master négociateur trilingue en commerce international (NTCI)",
    category: "éducation",
  },
  {
    place: "Université Angers",
    date: "2014 - 2017",
    src: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    alt: "",
    title:
      "Licences Langues Etrangères Appliquées et Langues, Littératures et Civilisations étrangères Anglais",
    category: "éducation",
  },
  {
    place: "Bishop's University",
    date: "2016-2017",
    src: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    alt: "",
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

  return (
    <div className="experience-container">
      <p>Filtrer par </p>
      <div className="button-section-work">
        <button
          onClick={() => handleCategoryChange("all")}
          className="button-work"
        >
          Tout
        </button>
        <button
          onClick={() => handleCategoryChange("expérience pro")}
          className="button-work"
        >
          Expérience
        </button>
        <button
          onClick={() => handleCategoryChange("éducation")}
          className="button-work"
        >
          Formation
        </button>
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
          <button onClick={prevImage}>Previous</button>
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
          <button onClick={nextImage}>Next</button>
        </div>
        {limitedItems.length > 0 && (
          <div className="work-bottom-text">
            <h3>{limitedItems[currentItem % 4]?.title}</h3>
            <h4>
              {limitedItems[currentItem % 4]?.place} -{" "}
              {limitedItems[currentItem % 4]?.date}
            </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: limitedItems[currentItem % 4]?.text,
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
