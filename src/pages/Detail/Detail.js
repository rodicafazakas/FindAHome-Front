import { useEffect } from "react";
import { useParams } from "react-router";
import useAnnouncement from "../../hooks/useAnnouncement";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const { announcement, loadAnnouncement } = useAnnouncement();

  useEffect(() => {
    loadAnnouncement(id);
  }, [loadAnnouncement, id]);

  return (
    <div className="detail">
      <p> {announcement.price} </p>
    </div>
  );
};

export default Detail;
