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
    navigate(`announcements?city=${searchInput}`);
  };

  return (
    <div className="homepage">
      <div className="homepage__image">
        <h3> Bienvenid@ a FindAHome! </h3>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search-text">
          <p> Encuentra tu casa aqui </p>
        </div>
        <div className="search-box">
          <label htmlFor="searchcity" className="visuallyhidden">
            {" "}
          </label>
          <input
            className="search-box__input"
            type="text"
            id="searchcity"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search in Barcelona or Madrid"
          />

          <button type="submit" className="search-box_button" id="searchbutton">
            <FontAwesomeIcon icon={faSearch} />
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
