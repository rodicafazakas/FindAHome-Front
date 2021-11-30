import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAnnouncementsThunk } from "../redux/thunks/announcementThunk";

const useAnnouncements = () => {
  const announcements = useSelector((store) => store.announcements);
  const dispatch = useDispatch();

  const loadAnnouncements = useCallback(
    (city) => {
      dispatch(loadAnnouncementsThunk(city));
    },
    [dispatch]
  );

  return {
    announcements,
    loadAnnouncements,
  };
};

export default useAnnouncements;
