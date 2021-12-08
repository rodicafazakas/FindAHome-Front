import { announcementExample } from "../../factories/announcementFactory";
import { announcementsListExample } from "../../factories/announcementsListFactory";
import actionTypes from "../actions/actionTypes";
import announcementsReducer from "./announcementsReducer";

describe("Given an announcementsReducer function", () => {
  describe("When it receives an empty list of annoucements and a load action with a number of announcements", () => {
    test("Then it should return a new list with the announcements received", () => {
      const initialList = [];
      const announcementsList = announcementsListExample;
      const action = {
        type: actionTypes.loadAnnouncements,
        announcements: announcementsList,
      };

      const newList = announcementsReducer(initialList, action);

      expect(newList).toEqual(announcementsList);
    });
  });

  describe("When a new announcement is added to an existing list", () => {
    test("Then it should return a new list including the new announcement", () => {
      const initialList = announcementsListExample;
      const newAnnouncement = announcementExample;
      const action = {
        type: actionTypes.createAnnouncement,
        announcement: newAnnouncement,
      };
      const newAnnouncementsList = announcementsReducer(initialList, action);

      expect(newAnnouncementsList.length).toBe(3);
    });
  });

  describe("When an announcement is deleted from an existing list", () => {
    test("Then it should return a new list without that announcement", () => {
      const initialList = announcementsListExample;
      const announcementToDelete = announcementExample;
      const action = {
        type: actionTypes.deleteAnnouncement,
        id: announcementToDelete.id,
      };
      const newAnnouncementsList = announcementsReducer(initialList, action);

      expect(newAnnouncementsList.length).toBe(1);
    });
  });

  describe("When an announcement is updated", () => {
    test("Then it should return the list with the new announcement", () => {
      const initialList = announcementsListExample;
      const announcementToUpdate = announcementExample;
      const action = {
        type: actionTypes.updateAnnouncement,
        id: announcementToUpdate.id,
      };
      const newAnnouncementsList = announcementsReducer(initialList, action);

      expect(newAnnouncementsList.length).toBe(2);
    });
  });
});
