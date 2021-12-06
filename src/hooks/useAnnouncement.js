import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavouriteThunk,
  deleteFavouriteThunk,
  loadAnnouncementThunk,
} from "../redux/thunks/announcementThunk";

const useAnnouncement = () => {
  const announcement = useSelector((store) => store.announcement);
  const dispatch = useDispatch();

  const loadAnnouncement = useCallback(
    (announcementId) => {
      dispatch(loadAnnouncementThunk(announcementId));
    },
    [dispatch]
  );

  const addFavourite = useCallback(
    (userId, announcementId) => {
      dispatch(addFavouriteThunk(userId, announcementId));
    },
    [dispatch]
  );

  const deleteFavourite = useCallback(
    (userId, announcementId) => {
      dispatch(deleteFavouriteThunk(userId, announcementId));
    },
    [dispatch]
  );

  return {
    announcement,
    loadAnnouncement,
    addFavourite,
    deleteFavourite,
  };
};

export default useAnnouncement;
