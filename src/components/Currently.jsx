import "./styles/Currently.scss";

function Currently() {
  return (
    <div className="currently-section">
      <div className="currently-container">
        <div className="currently-title">
          <h2> Actuellement </h2>
          <p>A la recherche d'une alternance pour septembre 2024</p>
        </div>
        <div className="currently">
          <img
            src="https://picsum.photos/seed/picsum/200"
            alt=""
            className="img-currently"
          />
          <button className="button-currently"> Je veux en savoir plus </button>
        </div>
      </div>
    </div>
  );
}

export default Currently;
