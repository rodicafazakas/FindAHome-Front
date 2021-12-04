import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

// import useAnnouncements from "../../hooks/useAnnouncements";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import useUser from "../../hooks/useUser";

const Profile = () => {
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

  // console.log(user);

  const navigate = useNavigate();
  const actiononclick = () => {
    navigate("/announcements/new");
  };

  return (
    <div className="profile">
      {/* {(() => {
        if (!user.user.customerType) return "User data is loading";
        if (user.user.customerType === "buyer")
          return user.user.favourites.map((fav) => (
            <AnnouncementCard key={fav.id} announcement={fav} />
          ));
        else
          return user.user.adverts.map((advert) => (
            <AnnouncementCard key={advert.id} announcement={advert} />
          ));
      })()} */}

      {/* {user.user.customerType
        ? // user.user.favourites.map((fav) => (
          //   <AnnouncementCard key={fav.id} announcement={fav} />
          //    ))

          user.user.cutomerType !== "buyer"
          ? (console.log(
              `${JSON.stringify(user.user.customerType)}  ${
                user.user.customerType !== "buyer"
              }  ${user.user.customerType instanceof String} ${
                user.user.customerType.constructor.name
              }`
            ),
            user.user.favourites.map((fav) => (
              <AnnouncementCard key={fav.id} announcement={fav} />
            )))
          : //  <button type="text" className="addButton" onClick={actiononclick}>
            //     Anade un anuncio
            //   </button>

            user.user.adverts.map((advert) => (
              <AnnouncementCard key={advert.id} announcement={advert} />
            ))
        : "User data is loading"} */}
    </div>
  );
};

export default Profile;
