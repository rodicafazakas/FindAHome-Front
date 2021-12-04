import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";

import announcementsReducer from "./announcementsReducer";
import items from "./items";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  announcement: announcementReducer,
  user: usersReducer,
  items: items,
});

export default rootReducer;
