import "./styles/HeaderBis.scss";

import Logo from "./assets/logo.webp";

function HeaderBis() {
  return (
    <div className="headerbis-container">
      <div className="headerbis-grey">
        <img src={Logo} />
      </div>
    </div>
  );
}

export default HeaderBis;
