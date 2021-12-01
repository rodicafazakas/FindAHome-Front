import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAnnouncementsThunk, createAnnouncementThunk } from "../redux/thunks/announcementThunk";

const useAnnouncements = () => {
  const announcements = useSelector((store) => store.announcements);
  const dispatch = useDispatch();

  const loadAnnouncements = useCallback(
    (city) => {
      dispatch(loadAnnouncementsThunk(city));
    },
    [dispatch]
  );

  const createAnnouncement = (announcement) => {
    dispatch(createAnnouncementThunk(announcement));      
  };

  return {
    announcements,
    loadAnnouncements,
    createAnnouncement,
  };
};

export default useAnnouncements;
