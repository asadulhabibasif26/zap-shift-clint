import React from "react";
import Banner from "../Banner/Banner";
import { CiDeliveryTruck } from "react-icons/ci";
import bookingicon from '../../../assets/bookingIcon.png'
import serviceIcon from '../../../assets/service.png'


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* how it work section */}
      <div className="max-w-11/12 mx-auto mb-10">
        <h2 className="text-3xl font-bold py-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          <div className="bg-gray-100 p-4">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Booking Pick & Drop</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Cash On Delivery</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Delivery Hub</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Booking SME & Corporate</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
      </div>
      {/* Our services section */}
      <div className="bg-secondary my-10 p-10">
        <h1 className="text-3xl font-bold text-white text-center">Our Services</h1>
        <p className="text-center text-white py-10">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Express  & Standard Delivery</h1>
            <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
          </div>
          <div className="bg-[#CAEB66] text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Nationwide Delivery</h1>
            <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
          </div>
          <div className="bg-white text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Fulfillment Solution</h1>
            <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
          </div>
          <div className="bg-white text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Cash on Home Delivery</h1>
            <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
          </div>
          <div className="bg-white text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Corporate Service / Contract In Logistics</h1>
            <p>Customized corporate services which includes warehouse and inventory management support.</p>
          </div>
          <div className="bg-white text-center space-y-3 p-4">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Parcel Return</h1>
            <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
