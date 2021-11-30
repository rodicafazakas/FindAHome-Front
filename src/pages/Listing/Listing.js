/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncement from "../../hooks/useAnnouncement";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

const Listing = () => {
  const city = location.search.split("=")[1];

  const { announcements, loadAnnouncements } = useAnnouncement();

  useEffect(() => {
    loadAnnouncements(city);
  }, [loadAnnouncements, city]);

  return (
    <div className="directory">
      <div className="filters">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filter</span>
        <FontAwesomeIcon icon={faMap} />
        <span>Mapa</span>
      </div>
      <ul className="announcements-list">
        {announcements && announcements.length
          ? announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))
          : "There is no data available from the Heroku API"}
      </ul>
    </div>
  );
};

export default Listing;
