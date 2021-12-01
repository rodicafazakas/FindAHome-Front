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
    <div className="row h-100">
      <div className="detail d-flex flex-column align-items-center">
        <div className="detail__image">
          <img
            src={announcement.images}
            alt="apartment"
            width="290"
            height="125"
          />
        </div>
        <div className="detail__neighbourhood">
          <span> Piso en {announcement.neighbourhood} </span>
        </div>
        <div className="detail__price">
          {" "}
          <button>{announcement.price} € </button>
        </div>
        <div className="detail__description align-self-center">
          <p> {announcement.description} </p>
        </div>
        <div className="detail__container">
          <div className="detail__bedroom d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faBed} />
            </div>
            <span> {announcement.bedrooms} </span>
          </div>
          <div className="detail__area d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <span> {announcement.area} </span>
          </div>
          <div className="detail__bathroom d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faBath} />
            </div>
            <span> {announcement.bathrooms} </span>
          </div>
          <div className="detail__terrace d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faTree} />
            </div>
            <span> {announcement.terrace} </span>
          </div>
          <div className="detail__elevator d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faArrowsAltV} />
            </div>
            <span> {announcement.elevator} </span>
          </div>
          <div className="detail__parking d-flex flex-row">
            <div className="icon">
              <FontAwesomeIcon icon={faParking} />
            </div>
            <span> {announcement.parking} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
