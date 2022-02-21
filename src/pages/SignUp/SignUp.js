import { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import "./SignUp.styles.scss";

const SignUp = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const { registerUser } = useUser();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    registerUser(userData);
    navigate("/login");
  };

  return (
    <div className="container center">
      <div className="row text-center">
        <h3> Crea tu cuenta </h3>
        <form
          className="register-form col form-group"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <input
            className="name form-control"
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="Name"
          />
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
          <input
            className="phoneNumber form-control"
            type="text"
            id="phoneNumber"
            onChange={handleChange}
            placeholder="Phone number"
          />
          <input
            className="customerType form-control"
            type="text"
            id="customerType"
            onChange={handleChange}
            placeholder="seller o buyer"
          />
          <button className="signup-button" type="submit">
            {" "}
            Crear mi cuenta{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
