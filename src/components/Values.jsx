import { Link } from "react-router-dom";
import "./styles/Values.scss";

function Values() {
  return (
    <section className="values-line">
      <section className="values-section">
        <div className="values-container">
          <div className="values-title">
            <div className="svg-values">
              <svg
                width="48"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 24c-1.147 0-2.22-.455-3.023-1.281-.378-.39-.674-.845-.876-1.335-1.547.654-3.393.294-4.587-.899-.806-.806-1.243-1.88-1.231-3.021.006-.551.115-1.083.319-1.574-1.543-.626-2.602-2.114-2.602-3.89 0-1.762 1.077-3.274 2.601-3.9-.644-1.532-.342-3.33.913-4.585 1.181-1.18 3.078-1.542 4.591-.908.203-.488.498-.941.875-1.328.801-.825 1.874-1.279 3.02-1.279 1.778 0 3.266 1.061 3.891 2.606 1.528-.634 3.404-.281 4.594.909 1.259 1.257 1.56 3.035.904 4.581 1.53.624 2.611 2.139 2.611 3.904 0 1.778-1.062 3.267-2.606 3.892.65 1.534.348 3.336-.909 4.593-1.183 1.182-3.083 1.541-4.593.908-.625 1.544-2.113 2.607-3.892 2.607zm-5.26-9.792l-1.793 1.722c-.864.83-.902 2.256-.018 3.141.839.84 2.234.852 3.17-.048l1.661-1.692.031 2.443c.001 1.141.927 2.226 2.209 2.226 1.085 0 2.208-.844 2.208-2.255v-2.414l1.707 1.707c.872.869 2.327.862 3.156.033.768-.767.965-2.158-.033-3.156l-1.706-1.707h2.413c1.411 0 2.255-1.123 2.255-2.208 0-1.198-.992-2.21-2.167-2.21h-2.347l1.537-1.69c1.035-1.079.808-2.412.048-3.171-.839-.838-2.335-.821-3.142.019l-1.721 1.793v-2.486c0-1.411-1.123-2.255-2.208-2.255-1.281 0-2.241 1.081-2.209 2.227l-.008 2.514-1.698-1.779c-.87-.869-2.327-.861-3.157-.033-.767.767-.964 2.158.034 3.156l1.779 1.778-2.514-.072h-.002c-1.233 0-2.225 1.012-2.225 2.209 0 1.085.843 2.208 2.255 2.208h2.485zm5.26-5.208c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"
                  fill="#005580"
                />
              </svg>
            </div>
            <h2> Ce site est responsable ! </h2>
            <p>
              Lors du développement de ce portfolio, j'ai tenté de répondre au
              maximum aux normes d’accessibilité et d’éco-conception (polices
              adaptées, utilisation d'éco-couleurs...). L'ensemble de mes outils
              de communication (GitHub, CV, LinkedIn) s'inscrivent dans la même
              démarche.
            </p>
            <div className="button-section-values">
              <Link to="/csr">
                <button className="button-values">
                  EN SAVOIR PLUS SUR LA DÉMARCHE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Values;
