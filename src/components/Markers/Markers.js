import { Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Markers = (props) => {
  const { announcements } = props;
  return announcements.map((announcement, i) => {
    const position = [
      `${announcement?.address?.coordinates?.latitude}`,
      `${announcement?.address?.coordinates?.longitude}`,
    ];

    return (
      <Marker
        key={i}
        position={position}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      />
    );
  });
};

export default Markers;
