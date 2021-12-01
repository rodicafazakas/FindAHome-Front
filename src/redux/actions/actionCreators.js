import actionTypes from "./actionTypes";

export const loadAnnouncementsAction = (announcements) => ({
  type: actionTypes.loadAnnouncements,
  announcements,
});

export const loadAnnouncementAction = (announcement) => ({
  type: actionTypes.loadAnnouncement,
  announcement,
});

export const createAnnouncementAction = (announcement) => ({
  type: actionTypes.createAnnouncement,
  announcement,
});

export const updateAnnouncementAction = (announcement) => ({
  type: actionTypes.updateAnnouncement,
  announcement,
});

export const deleteAnnouncementAction = (id) => ({
  type: actionTypes.deleteAnnouncement,
  id,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const registerUserAction = (user) => ({
  type: actionTypes.registerUser,
  user,
});

export const addFavouriteAction = (userId, announcementId) => ({
  type: actionTypes.addFavourite,
  userId,
  announcementId,
});

export const deleteFavouriteAction = (userId, announcementId) => ({
  type: actionTypes.deleteFavourite,
  userId,
  announcementId,
});
