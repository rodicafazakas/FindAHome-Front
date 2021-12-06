import {
  faEdit,
  faHeart,
  faPhoneAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtDecode from "jwt-decode";
import "./AnnouncementCard.styles.scss";

const AnnouncementCard = ({
  announcement,
  actiononclick,
  addToFav,
  updateClick,
  deleteClick,
}) => {
  let loggedInUser;
  if (localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)) {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    loggedInUser = jwtDecode(token);
  }

  return (
    <li className="card col" onClick={actiononclick}>
      <div className="card__image card-img-top">
        <img
          className="card-image"
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
        {loggedInUser.customerType === "buyer" ? (
          <>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span> LLamar </span>
            <div className="fav">
              <FontAwesomeIcon icon={faHeart} onClick={addToFav} />
            </div>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faEdit} onClick={updateClick} />
            <div className="thrash">
              <FontAwesomeIcon icon={faTrash} onClick={deleteClick} />
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default AnnouncementCard;
