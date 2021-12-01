import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavouriteThunk,
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
    (announcementId) => {
      dispatch(addFavouriteThunk("619ccdd9adede94481d5c2aa", announcementId));
    },
    [dispatch]
  );

  const deleteFavourite = useCallback(
    (userId, announcementId) => {
      dispatch(addFavouriteThunk(userId, announcementId));
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
