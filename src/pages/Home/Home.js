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

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`announcements?city=${searchInput}`);
  };

  return (
    <div className="homepage">
      <div className="homepage__image">
        <h3> Bienvenid@ a FindAHome! </h3>
      </div>
      <form className="search" onSubmit={onSubmit}>
        <div className="search-text">
          <p> Encuentra tu casa aqui </p>
        </div>
        <div className="search-box">
          <input
            className="search-box__input"
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search in Barcelona or Madrid"
          />
          <div className="search-box_button">
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
