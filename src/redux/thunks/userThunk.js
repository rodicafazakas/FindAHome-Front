import jwtDecode from "jwt-decode";
import {
  loadUserAction,
  loginUserAction,
  registerUserAction,
} from "../actions/actionCreators";

const apiUrl = "https://proyecto-final-rodica-back.herokuapp.com";

export const loginUserThunk = (user) => async (dispatch) => {
  let result = null;
  const response = await fetch(`${apiUrl}/users/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  result = await response.json();

  if (response.status === 200) {
    const token = result.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem(
      process.env.REACT_APP_LOCAL_STORAGE,
      JSON.stringify({ token: token })
    );
  }
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/users/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newUser = await response.json();
  if (response.status === 201) {
    dispatch(registerUserAction(newUser));
  }
};

export const loadUserThunk = (userId) => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const response = await fetch(`${apiUrl}/users/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const user = await response.json();
  dispatch(loadUserAction(user));
};
