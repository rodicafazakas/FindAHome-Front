import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import useUser from "../../hooks/useUser";

const Header = () => {
  const { user, logoutUser } = useUser();

  return (
    <nav className="header navbar container-fluid d-flex flex-row p-1 justify-content-around">
      <ul className="header__logotitle d-flex flex-row">
        <li className="header__logo d-flex nav-item">
          <FontAwesomeIcon icon={faHome} />
        </li>
        <li className="header__title d-flex nav-item">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            FindAHome{" "}
          </Link>
        </li>
      </ul>

      <ul className="header__list d-flex align-items-center">
        {user.isAuthenticated ? (
          user.user.customerType === "buyer" ? (
            <li className="header__item">
              <Link to="myfavourites">
                <button> Mis favoritos </button>
              </Link>
            </li>
          ) : (
            <li className="header__item">
              <Link to="myadverts">
                <button> Mis anuncios </button>
              </Link>
            </li>
          )
        ) : (
          ""
        )}
        <li className="header__item">
          <Link to="login">
            {" "}
            <button onClick={() => logoutUser()}>
              {user.isAuthenticated ? "Salir" : "Acceder"}
            </button>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
