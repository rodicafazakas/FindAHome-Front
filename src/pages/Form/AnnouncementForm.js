import { useState } from "react";

const AnnouncementForm = () => {
  const [announcementData, setAnnouncementData] = useState({});

  const handleChange = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <label> Anade fotos a tu anuncio </label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label> Tipo de vivienda </label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Precio de venta"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Localidad"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Distrito"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Telefono de contacto"
          />
        </div>
        <div className="form-group">
          <label> Descripcion de tu anuncio </label>
          <textarea
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Habitaciones"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Banos"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Superficie"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Terraza"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Terraza"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Ascensor"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Aparcamiento"
          />
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
