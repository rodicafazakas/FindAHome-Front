import {
  faArrowsAltV,
  faBath,
  faBed,
  faChartArea,
  faParking,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useParams } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";
import "./Detail.styles.scss";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const { announcement, loadAnnouncement } = useAnnouncement();

  useEffect(() => {
    loadAnnouncement(id);
  }, [loadAnnouncement, id]);

  return (
    <div className="detail">
      <div className="detail__image">
        <img
          src={announcement.images}
          alt="apartment"
          width="290"
          height="125"
        />
      </div>
      <div className="detail__price">
        {" "}
        <button className="button-price"> {announcement.price} € </button>
      </div>
      <div className="detail__district-description">
        <div className="detail__neighbourhood">
          <p className="neighbourhood">
            {" "}
            Piso en {announcement.neighbourhood}{" "}
          </p>
        </div>
        <div className="detail__description">
          <p> {announcement.description} </p>
        </div>
      </div>
      <div className="detail__container">
        <p className="info-price">
          <strong>{announcement.price} €</strong>
        </p>
        <div className="detail__item">
          <div className="icon">
            <FontAwesomeIcon icon={faBed} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.bedrooms} </span>
            <span className="detail__info__item"> habitaciones </span>
          </div>
        </div>

        <div className="detail__item">
          <div className="icon">
            <FontAwesomeIcon icon={faChartArea} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.area} </span>
            <span className="detail__info__item"> m2 </span>
          </div>
        </div>

        <div className="detail__item">
          <div className="icon">
            <FontAwesomeIcon icon={faBath} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.bathrooms} </span>
            <span className="detail__info__item"> baños </span>
          </div>
        </div>

        <div className="detail__item d-flex flex-row">
          <div className="icon">
            <FontAwesomeIcon icon={faTree} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.terrace} </span>
            <span className="detail__info__item"> terraza </span>
          </div>
        </div>

        <div className="detail__item">
          <div className="icon">
            <FontAwesomeIcon icon={faArrowsAltV} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.elevator} </span>
            <span className="detail__info__item"> ascensor </span>
          </div>
        </div>

        <div className="detail__item">
          <div className="icon">
            <FontAwesomeIcon icon={faParking} color="#ef8b42" />
          </div>
          <div className="detail__info">
            <span> {announcement.parking} </span>
            <span className="detail__info__item"> aparcamiento </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
