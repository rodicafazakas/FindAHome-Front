/* eslint-disable no-restricted-globals */
import { useEffect, useMemo } from "react";
import { faFilter, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { useNavigate } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";

import "./Listing.styles.scss";

const Listing = () => {
  const urlSearchParams = useMemo(() => {
    return new URLSearchParams(location.search);
  }, []);

  const { announcements, loadAnnouncements } = useAnnouncements();

  useEffect(() => {
    loadAnnouncements(urlSearchParams.toString());
  }, [loadAnnouncements, urlSearchParams]);

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/announcements/${id}`);
  };

  const seeFilters = (city) => {
    navigate(`/announcements/${city}/filters`);
  };

  const seeMapa = (city) => {
    navigate(`/announcements/${city}/mapa`);
  };

  const { addFavourite } = useAnnouncement();

  const addToFav = (id, event) => {
    event.stopPropagation();
    addFavourite(id);
  };

  return (
    <div className="directory container-fluid d-flex flex-column">
      <div className="filters-icons pt-3 pb-3">
        <div className="dropdown">
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => {
              seeFilters(urlSearchParams.get("city"));
            }}
          />
          <span>Filter</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            onClick={() => {
              seeMapa(urlSearchParams.get("city"));
            }}
          />
          <span>Mapa</span>
        </div>
      </div>

      <div className="row">
        <ul className="announcements-list col">
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
