import { useState } from "react";

import "./styles/Experience.scss";

const items = [
  {
    src: "https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg",
    alt: "Parachute",
    title: "Title 1",
    text: "lorem 1",
    category: "expérience pro",
  },
  {
    src: "https://www.goodbro.fr/wp-content/uploads/Toyger-821x1024.jpg.webp",
    alt: "soirée de ouf",
    title: "Title 2",
    text: "lorem 2",
    category: "éducation",
  },
  {
    src: "https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=900",
    alt: "Des jolies chèvres",
    title: "Title 3",
    text: "lorem 3",
    category: "éducation",
  },
  {
    src: "https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg",
    alt: "travaux manuel",
    title: "Title 4",
    text: "lorem 4",
    category: "expérience pro",
  },
];

function Experience() {
  const [currentItem, setCurrentItem] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleImageClick = (index) => {
    setCurrentItem(index);
  };

  const handleDotClick = (index) => {
    setCurrentItem(index);
  };

  const prevImage = () => {
    setCurrentItem((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextImage = () => {
    setCurrentItem((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : items.length - 1
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentItem(0);
  };

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="experience-container">
      <h2> 4 - Mon Parcours </h2>
      <div>
        <p> Filter by </p>
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("expérience pro")}>
          Expérience Pro
        </button>
        <button onClick={() => handleCategoryChange("éducation")}>
          Éducation
        </button>
      </div>
      <div className="gallery-container">
        <div className="gallery-images-primary">
          <img src={filteredItems[currentItem].src} />
        </div>
        <div className="gallery-flex">
          {filteredItems.map((image, index) => (
            <img
              src={image.src}
              key={image.src}
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="experience-buttons">
          <button onClick={prevImage}>Previous</button>
          <div className="experience-dots">
            {filteredItems.map((image, index) => (
              <button
                key={index}
                className={`dot ${index === currentItem ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                tabIndex={0}
                type="button"
              />
            ))}
          </div>
          <button onClick={nextImage}> Next</button>
        </div>
        <div>
          <h3> {filteredItems[currentItem].title} </h3>
          <p> {filteredItems[currentItem].text}</p>
        </div>
      </div>
    </div>
  );
}
export default Experience;
