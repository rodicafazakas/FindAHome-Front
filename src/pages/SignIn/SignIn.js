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
      <div className="container h-100">
        <div className="row h-100">
          <h2> Accede a tu cuenta </h2>
          <form className="login-form form-group" onSubmit={onSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              className="username form-control"
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              className="password form-control"
              type="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <button type="submit"> Iniciar Session </button>
          </form>
          <p> No tengo cuenta y quiero registrarme </p>
          <a href="/register"> Registrar </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
