import actionTypes from "../actions/actionTypes";

const announcementReducer = (announcement = {}, action) => {
  let newAnnouncement;

  switch (action.type) {
    case actionTypes.loadAnnouncement:
      newAnnouncement = { ...action.announcement };
      break;
    default:
      newAnnouncement = { ...announcement };
  }

  return newAnnouncement;
};

export default announcementReducer;
