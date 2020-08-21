import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { parksData } from "./map.data";

const MapBase = () => {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
      {parksData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0],
          }}
        />
      ))}
      {selectedPark && <InfoWindow />}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapBase));
