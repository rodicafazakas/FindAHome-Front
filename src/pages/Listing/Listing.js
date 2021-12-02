/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import { faFilter, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { useNavigate } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";
import "./Listing.styles.scss";

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

  const { addFavourite } = useAnnouncement();

  const addToFav = (id, event) => {
    event.stopPropagation();
    addFavourite(id);
  };

  return (
    <div className="directory container-fluid d-flex flex-column">
      <div className="filters pt-3 pb-3 d-flex flex-row">
        <div className="dropdown">
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Mapa</span>
        </div>
      </div>

      <div className="row">
        <ul className="announcements-list">
          {announcements && announcements.length
            ? announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  actiononclick={() => {
                    goToDetail(announcement.id);
                  }}
                  addToFav={(event) => addToFav(announcement.id, event)}
                />
              ))
            : "There is no data available from the Heroku API"}
        </ul>
      </div>
    </div>
  );
};

export default Listing;
