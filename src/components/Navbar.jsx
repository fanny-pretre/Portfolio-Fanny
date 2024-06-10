import { Link } from "react-router-dom";

import "./styles/Navbar.scss";

function Navbar() {
  return (
    <header className="navbars">
      <nav className="navbars-liens">
        <div className="ul">
          <Link to="/">
            <div className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
              </svg>
              Accueil
            </div>
          </Link>

          <Link to="/projects">
            {" "}
            <div className="li">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M14.911 10c-.308 3.325-1.397 5.712-2.948 8h-4.926c-1.373-2.009-2.613-4.372-2.948-8h10.822zm2.089-2h-15c0 5.716 1.826 8.996 4 12h7c2.12-2.911 4-6.333 4-12zm1.119 2c-.057.701-.141 1.367-.252 2h1.549c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.275-1.143 5.847-4.509 6.143-7.766h-3.881zm-1.119 12h-15v2h15v-2zm-3.06-19.614c-.416 1.702-3.07 2.477-3.983 4.614-.088-1.846 1.107-3.031 1.75-3.93 1.045-1.465-.537-2.267-1.633-1.171-.188.187-.38.435-.573.756-.193-.322-.386-.57-.573-.757-1.089-1.09-2.664-.294-1.658 1.137.635.903 1.863 2.095 1.775 3.965-.914-2.137-3.567-2.912-3.984-4.614-.355-1.445.928-2.386 2.29-2.386.793 0 1.613.32 2.15 1.045.537-.725 1.357-1.045 2.15-1.045 1.362 0 2.644.941 2.289 2.386z" />
              </svg>
              Projets{" "}
            </div>
          </Link>
          <Link to="/experience">
            <div className="li">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M22 9v1.528c-.476.69-3.815 1.971-9.77 1.971-6.239 0-9.736-1.358-10.23-2.088v-1.411h20zm2-2h-24v3.491c0 2.657 6.154 4.009 12.23 4.009 5.922 0 11.77-1.284 11.77-3.895v-3.605zm-2 8.074v4.926h-20v-5.001c-.823-.337-1.478-.711-2-1.096v8.097h24v-7.949c-.583.402-1.262.741-2 1.023zm-8 1.958c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-5-15.032c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" />
              </svg>
              Expériences{" "}
            </div>
          </Link>
          <Link to="/csr">
            <div className="li">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M18.918 10.003h-1.828l3.318 5h-2.684l3.316 5h-8.018l.001 4h-2l-.001-4h-8.022l3.332-5h-2.672l3.295-5h-1.838l6.907-10.003 6.894 10.003zm-9.99-2h1.739l-3.294 5h2.694l-3.331 5h10.578l-3.315-5h2.682l-3.319-5h1.749l-3.089-4.481-3.094 4.481z" />
              </svg>
              RSE
            </div>{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
