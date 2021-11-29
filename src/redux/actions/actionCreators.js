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

export const deleteAnnouncementAction = (id) => ({
  type: actionTypes.deleteAnnouncement,
  id,
});
