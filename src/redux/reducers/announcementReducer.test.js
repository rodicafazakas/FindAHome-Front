import { announcementExample } from "../../factories/announcementFactory";
import actionTypes from "../actions/actionTypes";
import announcementReducer from "./announcementReducer";

describe("Given an announcementReducer", () => {
  describe("When it receives a load action with a new announcement", () => {
    test("Then it should render the new announcement", () => {
      const initialState = {};
      const newAnnouncement = announcementExample;
      const action = {
        type: actionTypes.loadAnnouncement,
        announcement: newAnnouncement,
      };

      const expectedAnnouncement = announcementReducer(initialState, action);

      expect(newAnnouncement).toEqual(expectedAnnouncement);
    });
  });
});
