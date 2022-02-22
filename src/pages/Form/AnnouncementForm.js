import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";
import useAnnouncements from "../../hooks/useAnnouncements";
import "./AnnouncementForm.styles.scss";

const AnnouncementForm = () => {
  const urlSearchParams = useMemo(() => {
    // eslint-disable-next-line no-restricted-globals
    return new URLSearchParams(location.search);
  }, []);

  const { announcement, loadAnnouncement } = useAnnouncement();

  const { createAnnouncement, updateAnnouncement } = useAnnouncements();

  useEffect(() => {
    if (urlSearchParams.get("id")) {
      loadAnnouncement(urlSearchParams.get("id"));
    }
  }, [loadAnnouncement, urlSearchParams]);

  const initialAnnouncement = useMemo(() => {
    return {
      price: "",
      images: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      description: "",
      parking: false,
      terrace: false,
      elevator: false,
      city: "",
      neighbourhood: "",
      dwellingType: "",
      address: {
        street: "",
        floor: "",
      },
    };
  }, []);

  const [announcementData, setAnnouncementData] = useState(initialAnnouncement);
  const [addressData, setAddressData] = useState(initialAnnouncement.address);
  const [textButton, setTextButton] = useState("");

  useEffect(() => {
    if (announcement && announcement.address && urlSearchParams.get("id")) {
      setAnnouncementData(announcement);
      setAddressData(announcement.address);
      setTextButton("Modificar anuncio");
    } else {
      setTextButton("Añadir anuncio");
    }
  }, [announcement, urlSearchParams]);

  const handleChange = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.checked,
    });
  };

  const handleAddImage = (event) => {
    setAnnouncementData({
      ...announcementData,
      [event.target.id]: event.target.files[0],
    });
  };

  const handleAddressChange = (event) => {
    const newAddressData = {
      ...addressData,
      [event.target.id]: event.target.value,
    };
    setAddressData(newAddressData);
    setAnnouncementData({
      ...announcementData,
      address: { ...newAddressData },
    });
  };

  const getCoordinates = async (address) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&${address}`
    );
    const coordinates = await response.json();
    return coordinates[0];
  };

  const handleCheckAddress = (event) => {
    event.preventDefault();
    getCoordinates(
      `city=${announcementData.city}&street=${announcementData.address.street}`
    ).then((location) => {
      const newAddressData = {
        ...addressData,
        coordinates: {
          latitude: location.lat,
          longitude: location.lon,
        },
      };
      setAddressData(newAddressData);

      setAnnouncementData({
        ...announcementData,
        address: { ...newAddressData },
      });
    });
  };

  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    if (announcement && announcement.id && urlSearchParams.get("id")) {
      updateAnnouncement({
        ...announcementData,
        id: announcement["id"],
      });
      setAnnouncementData(initialAnnouncement);
      navigate(-1);
    } else {
      setAnnouncementData({
        ...announcementData,
      });
      createAnnouncement(announcementData);
      setAnnouncementData(initialAnnouncement);
      navigate(-1);
    }
  };

  return (
    <div className="form">
      <div className="container">
        <h5 className="form-title">
          {announcement.id && urlSearchParams.get("id")
            ? "Modificar anuncio"
            : "Crear anuncio"}
        </h5>
        <div className="row">
          <form autoComplete="off" noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="images"> Añade fotos a tu anuncio </label>
              <input
                type="file"
                name="filefield"
                id="images"
                multiple="multiple"
                className="form-control"
                onChange={handleAddImage}
                placeholder="Upload hasta 3 fotos"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="dwellingType"
                value={announcementData.dwellingType}
                onChange={handleChange}
                placeholder="Tipo de vivienda"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="price"
                value={announcementData.price}
                onChange={handleChange}
                placeholder="Precio de venta"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="city"
                value={announcementData.city}
                onChange={handleChange}
                placeholder="Localidad"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="neighbourhood"
                value={announcementData.neighbourhood}
                onChange={handleChange}
                name="Distrito"
                placeholder="Distrito"
              />
            </div>
            <div className="form-group">
              <label> Descripcion de tu anuncio </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={announcementData.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="bedrooms"
                value={announcementData.bedrooms}
                onChange={handleChange}
                placeholder="Habitaciones"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="bathrooms"
                value={announcementData.bathrooms}
                onChange={handleChange}
                placeholder="Banos"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="area"
                value={announcementData.area}
                onChange={handleChange}
                placeholder="Superficie"
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  id="terrace"
                  checked={announcementData.terrace}
                  onChange={handleCheckboxChange}
                />{" "}
                Terraza
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  id="elevator"
                  checked={announcementData.elevator}
                  onChange={handleCheckboxChange}
                />{" "}
                Ascensor
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  id="parking"
                  checked={announcementData.parking}
                  onChange={handleCheckboxChange}
                />{" "}
                Aparcamiento
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="street"
                value={announcementData.address.street}
                onChange={handleAddressChange}
                placeholder="Street"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="floor"
                value={announcementData.address.floor}
                onChange={handleAddressChange}
                placeholder="Floor"
              />
            </div>
            <button type="submit" className="add-update">
              {textButton}
            </button>

            <button onClick={handleCheckAddress}>{`Check address`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
