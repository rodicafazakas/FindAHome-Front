import { useState } from "react";
import { useNavigate } from "react-router";

const FiltersList = () => {
  // eslint-disable-next-line no-restricted-globals
  const city = location.href.split("/")[4];

  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let queryParams = "";
    for (const filter in filters) {
      queryParams += `&${filter}=${filters[filter]}`;
    }
    navigate(`/announcements?city=${city}${queryParams}`);
  };

  return (
    <div className="filters-list pt-3 pb-3">
      <h4> Additional filters </h4>
      <form className="search" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="neighbourhood"
            onChange={handleChange}
            placeholder="Distrito"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="price_max"
            onChange={handleChange}
            placeholder="Precio maximo de venta"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="price_min"
            onChange={handleChange}
            placeholder="Precio minimo de venta"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="area_max"
            onChange={handleChange}
            placeholder="Superficie maxima"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="area_min"
            onChange={handleChange}
            placeholder="Superficie minima"
          />
        </div>
        <button type="submit" className="search-box_button" id="searchbutton">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default FiltersList;
