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

  // const getCoordinates = async (address) => {

  //   const response = await fetch(
  //     `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${address}`
  //   );
  //   const coordinates = await response.json();
  //   return coordinates[0];
  // }

  const [state, setState] = useState({
    currentLocation: { lat: "41.3902", lng: "2.1540" }, //coordinates de Barcelona
    // currentLocation:{}
  });

  const { announcements, loadAnnouncements } = useAnnouncements();

  useEffect(() => {
    // const foundCity = getCoordinates(urlSearchParams.get("city"));
    // const cityCoord = {
    //   currentLocation: {
    //     lat: foundCity.lat,
    //     lng: foundCity.lon
    //   }
    // }
    // setState(cityCoord);
    loadAnnouncements(urlSearchParams.toString());
    // setState({
    //   currentLocation: { lat: "39.466667", lng: "-0.375000" },
    // });
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
