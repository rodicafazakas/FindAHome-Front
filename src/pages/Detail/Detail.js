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

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const { announcement, loadAnnouncement } = useAnnouncement();

  useEffect(() => {
    loadAnnouncement(id);
  }, [loadAnnouncement, id]);

  return (
    <div className="row detail-main-container">
      <div className="detail col d-flex flex-column align-items-center">
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
          <button>{announcement.price} € </button>
        </div>
        <div className="detail__description text-center align-self-center">
          <p> {announcement.description} </p>
        </div>

        <div className="detail__container">
          <div className="detail__item d-flex flex-row">
            <div className="icon ml-1">
              <FontAwesomeIcon icon={faBed} />
            </div>
            <div className="detail__info">
              <span> {announcement.bedrooms} </span>
              <span> HABITACIONES </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="detail__info">
              <span> {announcement.area} </span>
              <span> SUPERFICIE </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faBath} />
            </div>
            <div className="detail__info">
              <span> {announcement.bathrooms} </span>
              <span> BANOS </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faTree} />
            </div>
            <div className="detail__info">
              <span> {announcement.terrace} </span>
              <span> TERRACE </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faArrowsAltV} />
            </div>
            <div className="detail__info">
              <span> {announcement.elevator} </span>
              <span> ELEVATOR </span>
            </div>
          </div>

          <div className="detail__item d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faParking} />
            </div>
            <div className="detail__info">
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
