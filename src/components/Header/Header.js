import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Listing from "../../pages/Listing/Listing";

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
          <p> FindAHome </p>{" "}
        </li>
      </ul>

      <ul className="header__list">
        <li className="header__item">
          <Link to="login">
            {" "}
            <button> Acceder </button>{" "}
          </Link>
        </li>
        <li className="header__item">
          <Link to="announcements">
            <Listing />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
