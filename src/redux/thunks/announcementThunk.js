import { loadAnnouncementsAction } from "../actions/actionCreators";

const apiUrl = "https://proyecto-final-rodica-back.herokuapp.com";

export const loadAnnouncementsThunk = () => async (dispatch) => {
  const token = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );

  const response = await fetch(apiUrl, {
    headers: { Authentication: "Bearer" + token },
  });

  const announcements = await response.json();
  dispatch(loadAnnouncementsAction(announcements));
};
