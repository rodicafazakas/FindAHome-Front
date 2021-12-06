import { Marker } from "react-leaflet";
import IconLocation from "../IconLocation/IconLocation";

const Markers = (props) => {
  const { announcements } = props;
  console.log(announcements);
  const markers = announcements.map((announcement, i) => (
    <Marker
      key={i}
      position={{
        lat: `${announcement.address.coordinates.latitude}`,
        lng: `${announcement.address.coordinates.longitude}`,
      }}
      icon={IconLocation}
    >
      {" "}
    </Marker>
  ));
  return markers;
};

export default Markers;
