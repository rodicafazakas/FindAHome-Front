import { faHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnnouncementCard = ({ announcement, actiononclick, addToFav }) => {
  return (
    <li className="card" onClick={actiononclick}>
      <div className="card__image">
        <img
          src={announcement.images}
          alt="apartment"
          weight="290"
          height="125"
        />
      </div>
      <div className="card__info">
        <div className="card__info1">
          <span> Piso en {announcement.neighbourhood} </span>
          <p className="card__price"> {announcement.price} € </p>
        </div>
        <div className="card__info2">
          <span> {announcement.bedrooms} hab. </span>
          <span> {announcement.area} m2 </span>
        </div>
      </div>
      <div className="card__contact">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span> LLamar </span>
        <FontAwesomeIcon
          icon={faHeart}
          actionOnClick={(event) => addToFav(announcement, event)}
        />
      </div>
    </li>
  );
};

export default AnnouncementCard;
