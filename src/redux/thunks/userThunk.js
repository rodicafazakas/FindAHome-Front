import jwtDecode from "jwt-decode";
import { loginUserAction, registerUserAction } from "../actions/actionCreators";

const apiUrl = "https://proyecto-final-rodica-back.herokuapp.com";

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    let result = null;
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
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
  } catch (e) {
    console.log(e);
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
