import { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

const SignIn = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const { loginUser } = useUser();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
    navigate("/profile");
  };

  return (
    <div className="login">
      <h2> Accede a tu cuenta </h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          className="username"
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          className="password"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit"> Iniciar Session </button>
      </form>
      <p> No tengo cuenta y quiero registrarme </p>
    </div>
  );
};

export default SignIn;
