import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAction } from "../redux/actions/actionCreators";
import {
  loadUserThunk,
  loginUserThunk,
  registerUserThunk,
} from "../redux/thunks/userThunk";

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

  const loadUser = useCallback(
    (userId) => {
      dispatch(loadUserThunk(userId));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    dispatch(logoutUserAction());
  }, [dispatch]);

  return {
    user,
    loginUser,
    registerUser,
    loadUser,
    logoutUser,
  };
};

export default useUser;
