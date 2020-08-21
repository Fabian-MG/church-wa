import React from "react";
import MapBase from "./map-base.component";
import { API_KEY } from "./map.credentials";

import './map.styles.scss'

const Map = () => {
  return (
    <div className="map-container">
      <MapBase
        className="map"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
