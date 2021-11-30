import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAnnouncementThunk } from "../redux/thunks/announcementThunk";

const useAnnouncement = () => {
  const announcement = useSelector((store) => store.announcement);
  const dispatch = useDispatch();

  const loadAnnouncement = useCallback(
    (announcementId) => {
      dispatch(loadAnnouncementThunk(announcementId));
    },
    [dispatch]
  );

  return {
    announcement,
    loadAnnouncement,
  };
};

export default useAnnouncement;
