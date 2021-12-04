import actionTypes from "../actions/actionTypes";

const usersReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.registerUser:
      newUser = {
        isAuthenticated: false,
        user: action.user,
      };
      break;
    case actionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    case actionTypes.loadUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    case actionTypes.logoutUser:
      newUser = {
        isAuthenticated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }

  return newUser;
};

export default usersReducer;
