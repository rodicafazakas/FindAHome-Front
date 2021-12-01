import { useState } from "react";
import useAnnouncements from "../../hooks/useAnnouncements";

const AnnouncementForm = () => {
  const { createAnnouncement } = useAnnouncements();
  const [announcementData, setAnnouncementData] = useState({});

  const handleChange = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.value,
    });
  };

  const handleAddImage = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.files[0],
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createAnnouncement(announcementData);
  };

  return (
    <div className="form">
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <label> Anade fotos a tu anuncio </label>
          <input
            type="file"
            name="filefield"
            id="images"
            multiple="multiple"
            className="form-control"
            onChange={handleAddImage}
            placeholder="Apload hasta 3 fotos"
          />
        </div>
        <div className="form-group">
          <label> Tipo de vivienda </label>
          <input
            type="text"
            className="form-control"
            id="dwellingType"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="price"
            onChange={handleChange}
            placeholder="Precio de venta"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="city"
            onChange={handleChange}
            placeholder="Localidad"
          />
        </div>
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
            id="phoneNumber"
            onChange={handleChange}
            placeholder="Telefono de contacto"
          />
        </div>
        <div className="form-group">
          <label> Descripcion de tu anuncio </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="bedrooms"
            onChange={handleChange}
            placeholder="Habitaciones"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="bathrooms"
            onChange={handleChange}
            placeholder="Banos"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="area"
            onChange={handleChange}
            placeholder="Superficie"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="terrace"
            onChange={handleChange}
            placeholder="Terraza"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="elevator"
            onChange={handleChange}
            placeholder="Ascensor"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="parking"
            onChange={handleChange}
            placeholder="Aparcamiento"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="street"
            onChange={handleChange}
            placeholder="Street"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="floor"
            onChange={handleChange}
            placeholder="Floor"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Anade anuncio
        </button>
      </form>
    </div>
  );
};

export default AnnouncementForm;
