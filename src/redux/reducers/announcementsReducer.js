import actionTypes from "../actions/actionTypes";

const announcementsReducer = (announcements = [], action) => {
  let newAnnouncements;

  switch (action.type) {
    case actionTypes.loadAnnouncements:
      newAnnouncements = [...action.announcements];
      break;
    case actionTypes.createAnnouncement:
      newAnnouncements = [...announcements, action.announcements];
      break;
    case actionTypes.deleteAnnouncement:
      newAnnouncements = announcements.filter(
        (announcement) => announcement.id !== action.id
      );
      break;
    case actionTypes.updateAnnouncement:
      newAnnouncements = [
        ...announcements.filter(
          (announcement) => announcement.id !== action.id
        ),
        action.announcement,
      ];
      break;
    default:
      newAnnouncements = announcements;
  }

  return newAnnouncements;
};

export default announcementsReducer;
