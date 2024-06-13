import "./styles/HeaderBis.scss";

import Logo from "./assets/logo.webp";

function HeaderBis() {
  return (
    <header className="headerbis-container">
      <div className="headerbis-grey">
        <img
          src={Logo}
          alt="Logo du site de Fanny Prêtre composé de pictogrammes"
        />
      </div>
    </header>
  );
}

export default HeaderBis;
