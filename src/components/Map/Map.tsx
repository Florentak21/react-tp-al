import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px", 
  };

  const center = {
    lat: 51.5033, 
    lng: -0.1195, 
  };

  return (
    <LoadScript googleMapsApiKey="https://storage.googleapis.com/carto-tnt-gcp-us-east1-thumbnails-storage/thumbnails/ac_dp1glsh/0d777e5d-1fb8-4ecd-a0ed-11b64ae8e45e.png?cache=2024-04-17T16:47:59.686Z">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15} 
      >
        <Marker position={center} title="cotonou" />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
