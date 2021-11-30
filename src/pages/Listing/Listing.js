/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncement from "../../hooks/useAnnouncement";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { useNavigate } from "react-router";

const Listing = () => {
  const city = location.search.split("=")[1];

  const { announcements, loadAnnouncements } = useAnnouncement();

  useEffect(() => {
    loadAnnouncements(city);
  }, [loadAnnouncements, city]);

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/announcements/:${id}`);
  };

  const addToFav = (event) => {};

  return (
    <div className="directory">
      <div className="filters">
        <div>
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMap} />
          <span>Mapa</span>
        </div>
      </div>
      <ul className="announcements-list">
        {announcements && announcements.length
          ? announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                actiononclick={() => {
                  goToDetail(announcement.id);
                }}
                addToFav={addToFav}
              />
            ))
          : "There is no data available from the Heroku API"}
      </ul>
    </div>
  );
};

export default Listing;