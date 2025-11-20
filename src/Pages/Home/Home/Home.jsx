import React from "react";
import Banner from "../Banner/Banner";
import { CiDeliveryTruck } from "react-icons/ci";
import bookingicon from '../../../assets/bookingIcon.png'
import serviceIcon from '../../../assets/service.png'
import Brands from "../Brands/Brands";

import liveTrack from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'
import Reviews from "../Reviews/Reviews";

const reviewsProimse = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* how it work section */}
      <div className="max-w-11/12 mx-auto mb-10">
        <h2 className="text-3xl font-bold py-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          <div className="bg-gray-100 hover:bg-[#CAEB66] p-4 rounded-2xl">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Booking Pick & Drop</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-gray-100 hover:bg-[#CAEB66] p-4 rounded-2xl">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Cash On Delivery</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 hover:bg-[#CAEB66] p-4 rounded-2xl">
            <h1>
              <img src={bookingicon} alt="" />
            </h1>
            <h2 className="text-xl font-bold py-3">Delivery Hub</h2>
            <p>
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-gray-100 hover:bg-[#CAEB66] p-4 rounded-2xl">
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
      <div className="bg-secondary my-10 p-10 rounded-2xl">
        <h1 className="text-3xl font-bold text-white text-center">Our Services</h1>
        <p className="text-center text-white py-10">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Express  & Standard Delivery</h1>
            <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
          </div>
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Nationwide Delivery</h1>
            <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
          </div>
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Fulfillment Solution</h1>
            <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
          </div>
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Cash on Home Delivery</h1>
            <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
          </div>
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Corporate Service / Contract In Logistics</h1>
            <p>Customized corporate services which includes warehouse and inventory management support.</p>
          </div>
          <div className="bg-white hover:bg-[#CAEB66] text-center space-y-3 p-4 rounded-2xl">
            <img className="mx-auto" src={serviceIcon} alt="" />
            <h1 className="text-xl font-bold">Parcel Return</h1>
            <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold py-5">We've helped thousands of sales teams</h1>
      <Brands></Brands>
      {/* about service section */}
      <div className="py-10 space-y-5">
        <div className="bg-gray-100 rounded-2xl p-5 md:flex items-center gap-5 hover:bg-[#CAEB66]">
          <div className="border-r border-dotted pr-6">
            <img src={liveTrack} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Live Parcel Tracking</h1>
            <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl p-5 md:flex items-center gap-5 hover:bg-[#CAEB66]">
          <div className="border-r border-dotted pr-6">
            <img src={safeDelivery} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">100% Safe Delivery</h1>
            <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl p-5 md:flex items-center gap-5 hover:bg-[#CAEB66]">
          <div className="border-r border-dotted pr-6">
            <img src={safeDelivery} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">24/7 Call Center Support</h1>
            <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
          </div>
        </div>
      </div>
      <Reviews reviewsProimse={reviewsProimse}></Reviews>
    </div>
  );
};

export default Home;
