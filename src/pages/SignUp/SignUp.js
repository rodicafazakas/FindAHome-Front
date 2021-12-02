import { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

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
    <div className="register">
      <div class="container h-100">
        <div class="row h-100">
          <h2> Crea tu cuenta </h2>
          <form className="register-form form-group" onSubmit={onSubmit}>
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
            <button type="submit"> Crear mi cuenta </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
