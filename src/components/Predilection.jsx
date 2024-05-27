import "./styles/Predilection.scss";

function Predilection() {
  return (
    <div className="predilection-container">
      <h2> 6 - Mes sujets de prédilection</h2>
      <div>
        <ol>
          <li className="predilection-li">
            <p className="predilection-number"> 1</p>
            <div className="predilection-text">
              {" "}
              <h3> Le numérique responsable </h3>{" "}
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img src="https://picsum.photos/seed/picsum/200" />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Predilection;
