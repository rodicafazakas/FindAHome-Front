import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
        <li className="header__item">
          <Link to="login">
            {" "}
            <button> Acceder </button>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
