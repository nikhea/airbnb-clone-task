"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <MapContainer
        style={{
          height: "100vh",
          //   position: "fixed",
          //   top: "0",
          //   left: "0",
          //   right: "0",
          //   bottom: "0",
        }}
        center={[51.505, -0.09]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
{
  /* <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/> */
}

// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
