import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";
import announcementsReducer from "./announcementsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  announcement: announcementReducer,
  user: usersReducer,
});

export default rootReducer;
