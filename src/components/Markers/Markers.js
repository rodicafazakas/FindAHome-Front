import { Marker } from "react-leaflet";

const Markers = (props) => {
  const { announcements } = props;
  const markers = announcements.map((announcement, i) => (
    <Marker
      key={i}
      position={{
        lat: `${announcement.address.coordinates.latitude}`,
        lng: `${announcement.address.coordinates.longitude}`,
      }}
    >
      {" "}
    </Marker>
  ));
  return markers;
};

export default Markers;
