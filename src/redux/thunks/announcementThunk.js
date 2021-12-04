import {
  loadAnnouncementsAction,
  loadAnnouncementAction,
  createAnnouncementAction,
  deleteAnnouncementAction,
  updateAnnouncementAction,
  addFavouriteAction,
  deleteFavouriteAction,
} from "../actions/actionCreators";

import FormData from "form-data";

const apiUrl = "https://proyecto-final-rodica-back.herokuapp.com";

export const loadAnnouncementsThunk = (filters) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/announcements?${filters}`);
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

  const announcementFormData = new FormData();
  Object.entries(announcement)
    .filter(([key, value]) => key !== "street" && key !== "floor")
    .forEach(([key, value]) => announcementFormData.append(key, value));

  announcementFormData.append("address[street]", announcement.street);
  announcementFormData.append("address[floor]", announcement.floor);

  const response = await fetch(`${apiUrl}/announcements/new`, {
    method: "POST",
    body: announcementFormData,
    headers: {
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
    dispatch(deleteAnnouncementAction(id));
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

export const addFavouriteThunk =
  (userId, announcementId) => async (dispatch) => {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    const response = await fetch(
      `${apiUrl}/users/${userId}/favourites/${announcementId}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const favourite = await response.json();
    dispatch(addFavouriteAction(favourite));
  };

export const deleteFavouriteThunk =
  (userId, announcementId) => async (dispatch) => {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );

    const response = await fetch(
      `${apiUrl}/users/${userId}/announcements/${announcementId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );

    if (response.ok) {
      dispatch(deleteFavouriteAction(userId, announcementId));
    }
  };
