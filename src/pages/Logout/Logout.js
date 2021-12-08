import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

const Logout = () => {
  const { user, logoutUser } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      logoutUser();
      localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
      navigate("/login");
    }
  }, [logoutUser, navigate, user.isAuthenticated]);

  return <></>;
};

export default Logout;
