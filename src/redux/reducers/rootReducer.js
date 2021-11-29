import { combineReducers } from "redux";

import announcementsReducer from "./announcementsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  user: usersReducer,
});

export default rootReducer;
