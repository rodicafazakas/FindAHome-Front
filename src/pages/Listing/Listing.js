import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

const Listing = (list) => {
  let announcements = list;
  return (
    <div className="directory">
      <ul className="announcements-list">
        {announcements && announcements.length
          ? announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))
          : "There is no data available from the Heroku API"}
      </ul>
    </div>
  );
};

export default Listing;
