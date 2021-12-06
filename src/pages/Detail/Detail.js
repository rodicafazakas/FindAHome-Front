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
    <div className="row main-container">
      <div className="col detail d-flex flex-column align-items-center">
        <div className="detail__image img-fluid">
          <img
            src={announcement.images}
            alt="apartment"
            width="290"
            height="125"
          />
        </div>
        <div className="detail__neighbourhood">
          <p> Piso en {announcement.neighbourhood} </p>
        </div>
        <div className="detail__price">
          {" "}
          <button className="button__price"> {announcement.price} € </button>
        </div>
        <div className="detail__description text-center align-self-center">
          <p> {announcement.description} </p>
        </div>
        <div className="detail__container">
          <div className="detail__item d-flex flex-row">
            <div className="icon ml-1">
              <FontAwesomeIcon icon={faBed} color="#ef8b42" />
            </div>
            <div className="detail__info d-flex flex-row">
              <span> {announcement.bedrooms} </span>
              <span> HABITACIONES </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faChartArea} color="#ef8b42" />
            </div>
            <div className="detail__info d-flex flex-row">
              <span> {announcement.area} </span>
              <span> SUPERFICIE </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faBath} color="#ef8b42" />
            </div>
            <div className="detail__info">
              <span> {announcement.bathrooms} </span>
              <span> BANOS </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faTree} color="#ef8b42" />
            </div>
            <div className="detail__info d-flex flex-row">
              <span> {announcement.terrace} </span>
              <span> TERRACE </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faArrowsAltV} color="#ef8b42" />
            </div>
            <div className="detail__info d-flex flex-row">
              <span> {announcement.elevator} </span>
              <span> ELEVATOR </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faParking} color="#ef8b42" />
            </div>
            <div className="detail__info d-flex flex-row">
              <span> {announcement.parking} </span>
              <span> APARCAMIENTO </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
