import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Home.styles.scss";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/announcements?city=${searchInput}`);
  };

  return (
    <div className="homepage">
      <div className="homepage__image">
        <header>
          <h4 className="bienvenida">
            <strong> Bienvenid@ a FindAHome! </strong>
          </h4>
          <h4 className="bienvenida-text">
            <strong>
              Te acompañamos en una de las decisiones mas emocionantes e
              importantes de tu vida: comprar un piso.
            </strong>
          </h4>
        </header>
      </div>
      <div className="homepage__search">
        <form className="search" onSubmit={handleSubmit}>
          <div className="search-box">
            <input
              className="search-box__input"
              type="text"
              id="searchcity"
              value={searchInput}
              onChange={handleChange}
              placeholder="Buscar en Barcelona o Madrid"
            />
            <button
              type="submit"
              className="search-box_button"
              id="searchbutton"
            >
              <FontAwesomeIcon icon={faSearch} />
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
