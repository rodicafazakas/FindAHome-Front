/* eslint-disable no-restricted-globals */
import { useEffect, useMemo } from "react";
import { faFilter, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { useNavigate } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";

import "./Listing.styles.scss";
import useUser from "../../hooks/useUser";
import jwtDecode from "jwt-decode";

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
    navigate(`/announcements/mapa${location.search}`);
  };

  const { addFavourite, deleteFavourite } = useAnnouncement();

  const addToFav = (userId, announcementId, event) => {
    event.stopPropagation();
    addFavourite(userId, announcementId);
  };

  const deleteFromFav = (userId, announcementId, event) => {
    event.stopPropagation();
    deleteFavourite(userId, announcementId);
  };

  const { user, loadUser } = useUser();

  useEffect(() => {
      let loggedInUser;
      if (localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)) {
        const { token } = JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
        );
        loggedInUser = jwtDecode(token);
      }
      if (loggedInUser) {
        loadUser(loggedInUser.id);
      }
  }, [loadUser]);

  return (
    <div className="directory container-fluid d-flex flex-column">
      <div className="filters-icons pt-3 pb-3">
        <div
          className="dropdown"
          data-testid="filters"
          onClick={() => {
            seeFilters(urlSearchParams.get("city"));
          }}
        >
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </div>
        <div
          data-testid="mapa"
          onClick={() => {
            seeMapa(urlSearchParams.get("city"));
          }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Mapa</span>
        </div>
      </div>

      <div className="row">
        <ul className="announcements-list col">
          {announcements &&
          announcements.length &&
          ((user.isAuthenticated && user.user.favourites) ||
            !user.isAuthenticated)
            ? announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  isListingPage={true}
                  announcement={announcement}
                  actiononclick={() => {
                    goToDetail(announcement.id);
                  }}
                  addToFav={
                    user.isAuthenticated
                      ? (event) =>
                          addToFav(user.user.id, announcement.id, event)
                      : (event) => {}
                  }
                  deleteFromFav={
                    user.isAuthenticated
                      ? (event) =>
                          deleteFromFav(user.user.id, announcement.id, event)
                      : (event) => {}
                  }
                  isFavourite={
                    user.isAuthenticated
                      ? user.user.favourites
                          .map((fav) => fav.id)
                          .includes(announcement.id)
                      : false
                  }
                  user={user}
                />
              ))
            : "The data from the Heroku API is loading"}
        </ul>
      </div>
    </div>
  );
};

export default Listing;
