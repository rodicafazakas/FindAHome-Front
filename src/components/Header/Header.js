import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import jwtDecode from "jwt-decode";

const Header = () => {
  let loggedInUser;
  if (localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)) {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    loggedInUser = jwtDecode(token);
  }

  return (
    <nav className="header navbar container-fluid d-flex flex-row p-1 justify-content-around">
      <ul className="header__logotitle d-flex flex-row">
        <li className="header__logo d-flex nav-item">
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </li>
        <li className="header__title d-flex nav-item">
          {" "}
          <p> FindAHome </p>{" "}
        </li>
      </ul>

      <ul className="header__list d-flex align-items-center">
        {loggedInUser ? (
          <li className="header__item">
            <Link to="profile">
              {" "}
              <button>
                {" "}
                {loggedInUser.customerType === "buyer"
                  ? "Mis favoritos"
                  : "Mis anuncios"}{" "}
              </button>{" "}
            </Link>
          </li>
        ) : (
          ""
        )}
        <li className="header__item">
          <Link to="login">
            {" "}
            <button>
              {loggedInUser ? loggedInUser.username : "Acceder"}
            </button>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
