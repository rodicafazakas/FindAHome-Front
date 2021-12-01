import {
  loadAnnouncementsAction,
  loadAnnouncementAction,
  createAnnouncementAction,
  deleteAnnouncementAction,
  updateAnnouncementAction,
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

export const createAnnouncementThunk = (announcement) => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const response = await fetch(`${apiUrl}/announcements/new`, {
    method: "POST",
    body: JSON.stringify(announcement),
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });

  const newAnnouncement = await response.json();
  dispatch(createAnnouncementAction(newAnnouncement));
};

export const deleteAnnouncementThunk = (id) => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const response = await fetch(`${apiUrl}/announcements/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
  if (response.ok) {
    delete deleteAnnouncementAction(id);
  }
};

export const updateAnnouncementThunk = (announcement) => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );

  const response = await fetch(`${apiUrl}/announcements/${announcement.id}`, {
    method: "PUT",
    body: JSON.stringify(announcement),
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });

  announcement = await response.json();
  dispatch(updateAnnouncementAction(announcement));
};
