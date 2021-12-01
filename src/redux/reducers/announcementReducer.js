import actionTypes from "../actions/actionTypes";

const announcementReducer = (announcement = {}, action) => {
  let newAnnouncement;

  switch (action.type) {
    case actionTypes.loadAnnouncement:
      newAnnouncement = { ...action.announcement };
      break;
    case actionTypes.addFavourite:
      newAnnouncement = { ...action.id };
      break;
    case actionTypes.deleteFavourite:
      newAnnouncement = { ...action.id };
      break;
    default:
      newAnnouncement = { ...announcement };
  }

  return newAnnouncement;
};

export default announcementReducer;
