import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const { user, loginUser } = useUser();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    }
  }, [navigate, user]);

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
  };

  return (
    <div className="signin-form center">
      <div className="row text-center">
        <h1> Accede a tu cuenta </h1>
        <form className="login-form col form-group" onSubmit={onSubmit}>
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
          <button className="login-button" type="submit">
            {" "}
            Iniciar Session{" "}
          </button>
        </form>
        <div className="registrar">
          <p> No tengo cuenta y quiero registrarme. </p>
          <a href="/register"> Registrar </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
