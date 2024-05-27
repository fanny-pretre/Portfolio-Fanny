import "./styles/Values.scss";

function Values() {
  return (
    <div className="values-section">
      <div className="values-container">
        <div className="values-title">
          <h2> 7 - Mes valeurs </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            commodi aspernatur.
          </p>
        </div>
        <div className="values">
          <img
            src="https://picsum.photos/seed/picsum/200"
            alt=""
            className="img-values"
          />
          <button className="button-values"> Je veux en savoir plus </button>
        </div>
      </div>
    </div>
  );
}

export default Values;
