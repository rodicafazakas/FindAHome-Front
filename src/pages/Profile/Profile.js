import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

const Profile = () => {
  let loggedInUser;
  if (localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)) {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    loggedInUser = jwtDecode(token);
  }

  const { announcements, loadAnnouncements } = useAnnouncements();

  let favourites = announcements.filter(
    (announcement) => announcement?.seller?.id === loggedInUser?.id
  );

  let adverts = announcements.filter(
    (announcement) => announcement?.id === loggedInUser?.adverts?.id
  );

  useEffect(() => {
    loadAnnouncements();
  }, [loadAnnouncements]);

  const navigate = useNavigate();

  const actiononclick = () => {
    navigate("/announcements/new");
  };

  return (
    <div className="profile">
      <button type="text" className="addButton" onClick={actiononclick}>
        Anade un anuncio
      </button>

      {loggedInUser.cutomerType === "buyer"
        ? favourites.map((fav) => (
            <AnnouncementCard key={fav.id} announcement={fav} />
          ))
        : adverts.map((advert) => (
            <AnnouncementCard key={advert.id} announcement={advert} />
          ))}
    </div>
  );
};

export default Profile;
