import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const warHouse = useLoaderData();
  // console.log(warHouse);
  const mapRef = useRef(null);

  const handelSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = warHouse.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <div>
      <h2 className="text-5xl py-20">We are available in 64 districts</h2>
      <div>
        <form className="pb-10" onSubmit={handelSearch}>
          <label className="input rounded-l-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search Your Area"
            />
          </label>
          <button type="submit" className="btn bg-green-300 rounded-r-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M15.5 10.5A5 5 0 1 1 5.5 10.5a5 5 0 0 1 10 0Z"
              />
            </svg>
            Search
          </button>
        </form>
      </div>
      <div className="w-full h-[400px] mb-10">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[400px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warHouse.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>
                  {center.city} <br /> Service Area:{" "}
                  {center.covered_area.join(", ")}
                </strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
