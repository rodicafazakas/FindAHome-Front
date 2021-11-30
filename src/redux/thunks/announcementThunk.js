import {
  loadAnnouncementsAction,
  loadAnnouncementAction,
} from "../actions/actionCreators";

const apiUrl = "https://proyecto-final-rodica-back.herokuapp.com";

export const loadAnnouncementsThunk = (searchInput) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/announcements?city=${searchInput}`);
  const announcements = await response.json();
  dispatch(loadAnnouncementsAction(announcements));
};

export const loadAnnouncementThunk = (announcementId) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/announcements/${announcementId}`);
  const announcement = await response.json();
  dispatch(loadAnnouncementAction(announcement));
};
