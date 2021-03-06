import jwtDecode from "jwt-decode";
import { useEffect } from "react";

import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import useUser from "../../hooks/useUser";
import useAnnouncement from "../../hooks/useAnnouncement";
import "./MyFavourites.styles.scss";

const MyFavourites = () => {
  const { user, loadUser } = useUser();
  const { deleteFavourite } = useAnnouncement();

  const deleteFromFav = async (userId, announcementId, event) => {
    event.stopPropagation();
    await deleteFavourite(userId, announcementId);
    loadUser(user.user.id);
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
  }, [loadUser]);

  return (
    <div className="myfavourites col">
      <h1> Mis favoritos </h1>
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
