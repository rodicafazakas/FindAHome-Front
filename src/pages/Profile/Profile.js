import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <button
        type="text"
        className="addButton"
        actiononclick={() => navigate("/form")}
      >
        Anade un anuncio
      </button>

      <p> Listado de anuncios o favoritos </p>
    </div>
  );
};

export default Profile;
