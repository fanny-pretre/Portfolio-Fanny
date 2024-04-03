function Home() {
  return (
    <div>
      <div className="home-Flex">
        <div className="home-Image-Div">
          <img
            className="home-Image"
            src="src/assets/Avatar.png"
            alt="Avatar"
          />
        </div>
        <div className="home-Left">
          <div className="nav-Div">
            <img
              src="src/assets/Logo-Test.png"
              alt="Logo"
              className="nav-Logo"
            />
          </div>
        </div>
        <div className="home-Right">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <button> Nuit</button>
              <button> Accessibilité</button>
            </ul>
          </nav>
          <div className="home-Text">
            <h1> Hello, je suis Fanny ! </h1>
            <p>
              Je suis actuellement en reconversion dans le domaine du
              Développement Web. Je m'intéresse particulièrement aux questions
              relatives au numérique responsable : Green IT, accessibilité &
              inclusivité. Je suis aussi une grande fan d'entrepreneuriat, de
              café et de voyages. Alors si vous souhaitez discuter, n’hésitez
              pas à m’envoyer un petit message ou à scroller vers le bas pour en
              savoir plus ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
