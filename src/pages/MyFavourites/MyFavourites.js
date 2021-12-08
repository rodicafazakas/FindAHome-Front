import jwtDecode from "jwt-decode";
import { useEffect } from "react";

import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import useUser from "../../hooks/useUser";
import useAnnouncement from "../../hooks/useAnnouncement";
import "./MyFavourites.styles.scss";

const MyFavourites = () => {
  const { user, loadUser } = useUser();
  const { deleteFavourite } = useAnnouncement();

  const deleteFromFav = (userId, announcementId, event) => {
    event.stopPropagation();
    deleteFavourite(userId, announcementId);
  };

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
  }, [loadUser, user]);

  return (
    <div className="myfavourites col">
      <h2> Mis favoritos </h2>
      {user.isAuthenticated && user.user.customerType && user.user.favourites
        ? user.user.favourites.map((fav) => (
            <AnnouncementCard
              key={fav.id}
              isListingPage={false}
              announcement={fav}
              user={user}
              isFavourite={true}
              deleteFromFav={(event) =>
                deleteFromFav(user.user.id, fav.id, event)
              }
            />
          ))
        : "User data is loading"}
    </div>
  );
};

export default MyFavourites;
