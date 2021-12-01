import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadAnnouncementsThunk,
  createAnnouncementThunk,
  deleteAnnouncementThunk,
  updateAnnouncementThunk,
} from "../redux/thunks/announcementThunk";

const useAnnouncements = () => {
  const announcements = useSelector((store) => store.announcements);
  const dispatch = useDispatch();

  const loadAnnouncements = useCallback(
    (city) => {
      dispatch(loadAnnouncementsThunk(city));
    },
    [dispatch]
  );

  const createAnnouncement = useCallback(
    (announcement) => {
      dispatch(createAnnouncementThunk(announcement));
    },
    [dispatch]
  );

  const deleteAnnouncement = useCallback(
    (id) => {
      dispatch(deleteAnnouncementThunk(id));
    },
    [dispatch]
  );

  const updateAnnouncement = useCallback(
    (announcement) => {
      dispatch(updateAnnouncementThunk(announcement));
    },
    [dispatch]
  );

  return {
    announcements,
    loadAnnouncements,
    createAnnouncement,
    deleteAnnouncement,
    updateAnnouncement,
  };
};

export default useAnnouncements;
