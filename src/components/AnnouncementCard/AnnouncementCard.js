import { faHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnnouncementCard = ({ announcement, actiononclick, addToFav }) => {
  return (
    <li className="card" onClick={actiononclick}>
      <div className="card__image card-img-top">
        <img
          src={announcement.images[0]}
          alt="apartment"
          width="290"
          height="125"
        />
      </div>
      <div className="card__info card-body d-flex flex-column">
        <div className="card__info1 d-flex flex-row justify-content-between">
          <span> Piso en {announcement.neighbourhood} </span>
          <p className="card__price"> {announcement.price} € </p>
        </div>
        <div className="card__info2">
          <span> {announcement.bedrooms} hab. </span>
          <span> {announcement.area} m2 </span>
        </div>
      </div>
      <div className="card__contact d-flex justify-content-end">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span> LLamar </span>
        <div className="fav">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={(event) => addToFav(announcement.id, event)}
          />
        </div>
      </div>
    </li>
  );
};

export default AnnouncementCard;
