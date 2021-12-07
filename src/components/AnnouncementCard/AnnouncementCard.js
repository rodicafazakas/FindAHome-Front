import {
  faEdit,
  faHeart,
  faPhoneAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AnnouncementCard.styles.scss";

const AnnouncementCard = ({
  isListingPage,
  user,
  announcement,
  actiononclick,
  addToFav,
  deleteFromFav,
  updateClick,
  deleteClick,
  isFavourite,
}) => {
  const [favoriteColor, setFavoriteColor] = React.useState(isFavourite);

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
        {user.user.customerType === "seller" && !isListingPage ? (
          <>
            <FontAwesomeIcon icon={faEdit} onClick={updateClick} />
            <div className="thrash">
              <FontAwesomeIcon icon={faTrash} onClick={deleteClick} />
            </div>
          </>
        ) : user.user.customerType === "seller" && isListingPage ? (
          <>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span> LLamar </span>
            <div
              className="fav"
            >
              <FontAwesomeIcon
                icon={faHeart}
                data-testid="heart-icon"
                color={`black`}
              />
            </div>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span> LLamar </span>
            <div
              className="fav"
              onClick={isFavourite ? deleteFromFav : addToFav}
            >
              <FontAwesomeIcon
                icon={faHeart}
                data-testid="heart-icon"
                onClick={() => setFavoriteColor(!favoriteColor)}
                color={favoriteColor ? `#ef8b42` : `black`}
              />
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default AnnouncementCard;
