import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loggedUserAction,
  logoutUserAction,
} from "../redux/actions/actionCreators";
import {
  loadUserThunk,
  loginUserThunk,
  registerUserThunk,
} from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (signedInUser) => {
      dispatch(loginUserThunk(signedInUser));
    },
    [dispatch]
  );

  const registerUser = useCallback(
    (registeredUser) => {
      dispatch(registerUserThunk(registeredUser));
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

  const loggedUser = useCallback(
    (user) => {
      dispatch(loggedUserAction(user));
    },
    [dispatch]
  );

  return {
    user,
    loginUser,
    registerUser,
    loadUser,
    logoutUser,
    loggedUser,
  };
};

export default useUser;
