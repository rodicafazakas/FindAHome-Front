import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import useUser from "../../hooks/useUser";
import useAnnouncements from "../../hooks/useAnnouncements";
import "./MyAdverts.styles.scss";

const MyAdverts = () => {
  const { user, loadUser } = useUser();
  const { deleteAnnouncement } = useAnnouncements();

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

  const navigate = useNavigate();
  const actiononclick = () => {
    navigate("/announcements/new");
  };

  return (
    <div className="myadverts">
      <h1> Mis anuncios </h1>

      <button type="text" className="addButton" onClick={actiononclick}>
        Añade un anuncio
      </button>

      {user.user.customerType && user.user.adverts
        ? user.user.adverts.map((advert) => (
            <AnnouncementCard
              key={advert.id}
              isListingPage={false}
              user={user}
              announcement={advert}
              updateClick={() => {
                navigate(`/announcements/new?id=${advert.id}`);
              }}
              deleteClick={() => {
                deleteAnnouncement(advert.id);
              }}
            />
          ))
        : "User data is loading"}
    </div>
  );
};

export default MyAdverts;
