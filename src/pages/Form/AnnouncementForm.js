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
      parking: "",
      terrace: "",
      elevator: "",
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
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (announcement && announcement.address) {
      setAnnouncementData(announcement);
      setAddressData(announcement.address);
      setTextButton("Modificar anuncio");
    } else {
      setTextButton("Añadir anuncio");
    }
  }, [announcement]);

  useEffect(() => {
    if (announcementData && addressData) {
      setButtonDisabled(
        announcementData.price === "" ||
          announcementData.images === "" ||
          announcementData.area === "" ||
          announcementData.bedrooms === "" ||
          announcementData.bathrooms === "" ||
          announcementData.description === "" ||
          announcementData.parking === "" ||
          announcementData.elevator === "" ||
          announcementData.terrace === "" ||
          announcementData.elevator === "" ||
          announcementData.city === "" ||
          announcementData.neighbourhood === "" ||
          announcementData.dwellingType === "" ||
          announcementData.address.street === "" ||
          announcementData.address.floor === ""
      );
    }
  }, [announcementData, addressData]);

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

  const handleAddressChange = (event) => {
    setAddressData({
      ...addressData,
      [event.target.id]: event.target.value,
    });
    setAnnouncementData({
      ...announcementData,
      address: { ...addressData },
    });
  };

  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    if (announcement && announcement.id) {
      updateAnnouncement({
        ...announcementData,
        id: announcement["id"],
      });
      navigate(-1);
    } else {
      setAnnouncementData({
        ...announcementData,
      });
      createAnnouncement(announcementData);
      navigate(-1);
    }
  };

  const [state, setState] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });

  return (
    <div className="form">
      <div className="container">
        <h4>{announcement.id ? "Modificar anuncio" : "Crear anuncio"}</h4>
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
              <input
                type="text"
                className="form-control"
                id="terrace"
                value={announcementData.terrace}
                onChange={handleChange}
                placeholder="Terraza"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="elevator"
                value={announcementData.elevator}
                onChange={handleChange}
                placeholder="Ascensor"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="parking"
                value={announcementData.parking}
                onChange={handleChange}
                placeholder="Aparcamiento"
              />
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
            <div className="form-group">
              <p>{state.latitude}</p>
            </div>
            <div className="form-group">
              <p>{state.longitude}</p>
            </div>
            <button
              type="submit"
              className="add-update"
              disabled={buttonDisabled}
            >
              {textButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
