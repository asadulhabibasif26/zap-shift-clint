import React from "react";
import Banner from "../Banner/Banner";
import { CiDeliveryTruck } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-11/12 mx-auto mb-10">
        <h2 className="text-3xl font-bold py-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-5">
          <div className="bg-gray-100 p-4">
            <h1 className="text-3xl">
              <CiDeliveryTruck />
            </h1>
            <h2 className="text-xl font-bold py-3">Booking Pick & Drop</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="text-3xl">
              <CiDeliveryTruck />
            </h1>
            <h2 className="text-xl font-bold py-3">Cash On Delivery</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="text-3xl">
              <CiDeliveryTruck />
            </h1>
            <h2 className="text-xl font-bold py-3">Delivery Hub</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="text-3xl">
              <CiDeliveryTruck />
            </h1>
            <h2 className="text-xl font-bold py-3">Booking SME & Corporate</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
