import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnnouncementCard = () => {
  return (
    <li className="card">
      <div className="card__image">
        <img
          src="https://www.storia.ro/ro/oferta/apartament-suprafata-generoasa-sanpetru-residence-IDnCjW.html#41243ee27f"
          alt="apartment"
          weight="290"
          height="125"
        />
      </div>
      <div className="card__info">
        <span> Piso en Sants-Montjuic </span>
        <span> 3 hab. </span>
        <span> 100 m2 </span>
        <p className="card__price"> 350000 € </p>
      </div>
      <div className="card__contact">
        <span> LLamar </span>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </li>
  );
};

export default AnnouncementCard;
