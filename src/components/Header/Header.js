import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="header navbar d-flex flex-row justify-content-around">
      <ul className="header__logotitle navbar-nav mr-auto p-2 d-flex flex-row justify-content-start align-items-center">
        <li className="header__logo nav-item p-2 align-items-center">
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </li>
        <li className="header__title nav-item p-2 align-items-center">
          {" "}
          <h2> FindAHome </h2>{" "}
        </li>
      </ul>

      <ul className="header__list p-2 d-flex align-items-center">
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
