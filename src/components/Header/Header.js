import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__logotitle">
        <li className="header__logo">
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </li>
        <li className="header__title">
          {" "}
          <h1> FindAHome </h1>{" "}
        </li>
      </ul>

      <ul className="header__list">
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
