import { faHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnnouncementCard = ({ announcement, actiononclick, addToFav }) => {
  return (
    <li className="card p-2" onClick={actiononclick}>
      <div className="card__image p-2 card-img-top">
        <img
          src={announcement.images[0]}
          alt="apartment"
          weight="290"
          height="125"
        />
      </div>
      <div className="card__info p-2 card-body d-flex flex-column">
        <div className="card__info1 d-flex flex-row justify-content-between">
          <span className="p-2"> Piso en {announcement.neighbourhood} </span>
          <p className="card__price p-2"> {announcement.price} € </p>
        </div>
        <div className="card__info2 p-2">
          <span> {announcement.bedrooms} hab. </span>
          <span> {announcement.area} m2 </span>
        </div>
      </div>
      <div className="card__contact d-flex justify-content-end">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span> LLamar </span>
        <FontAwesomeIcon
          icon={faHeart}
          actiononclick={(event) => addToFav(announcement, event)}
        />
      </div>
    </li>
  );
};

export default AnnouncementCard;
