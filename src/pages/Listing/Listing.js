/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import {
  faFilter,
  faMap,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { useNavigate } from "react-router";
// import useAnnouncement from "../../hooks/useAnnouncement";

const Listing = () => {
  const city = location.search.split("=")[1];

  const { announcements, loadAnnouncements } = useAnnouncements();

  useEffect(() => {
    loadAnnouncements(city);
  }, [loadAnnouncements, city]);

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/announcements/${id}`);
  };

  // const { addFavourite } = useAnnouncement();

  const addToFav = (id, event) => {
    // addFavourite(id);
    // if (!event.currentTarget.classList.contains("fav")) {
    //   addFavourite(id);
    // }
  };

  return (
    <div className="directory d-flex flex-column">
      <div className="filters d-flex flex-row">
        <div>
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Mapa</span>
        </div>
      </div>
      <div className="row">
        <ul className="announcements-list my-auto card-group d-flex flex-wrap flex-column">
          {announcements && announcements.length
            ? announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  actiononclick={() => {
                    goToDetail(announcement.id);
                  }}
                  addToFav={addToFav(announcement.id)}
                />
              ))
            : "There is no data available from the Heroku API"}
        </ul>
      </div>
    </div>
  );
};

export default Listing;
