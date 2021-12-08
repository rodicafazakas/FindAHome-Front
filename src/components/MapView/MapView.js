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

  const [state, setState] = useState({});
  const { announcements, loadAnnouncements } = useAnnouncements();

  useEffect(() => {
    if (
      state &&
      Object.keys(state).length === 0 &&
      Object.getPrototypeOf(state) === Object.prototype
    ) {
      if (urlSearchParams.get("city") === "Madrid") {
        setState({
          currentLocation: { lat: "40.4166", lng: "-3.7038" }, //coordinates de Madrid
        });
      } else if (urlSearchParams.get("city") === "Barcelona") {
        setState({
          currentLocation: { lat: "41.3902", lng: "2.1540" }, //coordinates de Barcelona
        });
      }
    }
  }, [setState, state, urlSearchParams]);

  useEffect(() => {
    loadAnnouncements(urlSearchParams.toString());
  }, [loadAnnouncements, urlSearchParams]);

  return (
    <>
      {state &&
      Object.keys(state).length === 0 &&
      Object.getPrototypeOf(state) === Object.prototype ? (
        "The data is loading"
      ) : (
        <MapContainer
          className="map"
          center={state.currentLocation}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers announcements={announcements} />
        </MapContainer>
      )}
    </>
  );
};

export default MapView;
