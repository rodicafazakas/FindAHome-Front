import { Marker } from "react-leaflet";
import IconLocation from "../IconLocation/IconLocation";

const Markers = (props) => {
  const { announcements } = props;
  console.log(announcements);
  // eslint-disable-next-line array-callback-return
  const markers = announcements.map((announcement, i) => {
    console.log(announcement);
    <Marker
      key={i}
      position={`${announcement?.address?.coordinates?.latitude}`}
      icon={IconLocation}
    >
      {" "}
    </Marker>;
  });
  return markers;
};

export default Markers;
