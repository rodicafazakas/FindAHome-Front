import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import useAnnouncements from "../../hooks/useAnnouncements";
import Markers from "../Markers/Markers";

const MapView = () => {
  const urlSearchParams = useMemo(() => {
    // eslint-disable-next-line no-restricted-globals
    return new URLSearchParams(location.search);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    currentLocation: { lat: "41.3902", lng: "2.1540" }, //coordinates de Barcelona
  });

  const { announcements, loadAnnouncements } = useAnnouncements();

  useEffect(() => {
    loadAnnouncements(urlSearchParams.toString());
  }, [loadAnnouncements, urlSearchParams]);

  return (
    <MapContainer
      className="map"
      center={state.currentLocation}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers announcements={announcements} />
    </MapContainer>
  );
};

export default MapView;
