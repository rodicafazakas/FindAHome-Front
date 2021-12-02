import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk, registerUserThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  const registerUser = useCallback(
    (user) => {
      dispatch(registerUserThunk(user));
    },
    [dispatch]
  );

  return {
    user,
    loginUser,
    registerUser,
  };
};

export default useUser;
