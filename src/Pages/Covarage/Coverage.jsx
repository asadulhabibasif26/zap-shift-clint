import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const warHouse = useLoaderData();
  console.log(warHouse);
  return (
    <div>
      <h2 className="text-5xl py-20">We are available in 64 districts</h2>
      <div></div>
      <div className="w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warHouse.map((center , index) => (
            <Marker key={index} position={[center.latitude , center.longitude]}>
              <Popup>
                <strong>{center.city} <br /> Service Area: {center.covered_area.join(', ')}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
