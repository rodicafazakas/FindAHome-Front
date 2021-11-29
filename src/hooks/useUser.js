import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  return {
    user,
    loginUser,
  };
};

export default useUser;
