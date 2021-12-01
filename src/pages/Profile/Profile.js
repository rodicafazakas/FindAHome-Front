import { useNavigate } from "react-router";
import FavouriteAnnouncements from "../../components/FavouriteAnnouncements/FavouriteAnnouncements";

const Profile = () => {
  const navigate = useNavigate();

  const actiononclick = () => {
    navigate("/announcements/new");
  };

  return (
    <div className="profile">
      <button type="text" className="addButton" onClick={actiononclick}>
        Anade un anuncio
      </button>

      <FavouriteAnnouncements />
    </div>
  );
};

export default Profile;
