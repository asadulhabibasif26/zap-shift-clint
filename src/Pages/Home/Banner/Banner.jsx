import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    
    >
      <div className="relative">
        <button className="btn btn-primary absolute  text-black font-bold rounded-full bottom-12 left-5">Track Your Parcel <FaArrowCircleRight className="-rotate-30 text-xl " /></button>
        <button className="btn btn-secondary absolute  text-white font-bold rounded-full bottom-12 left-50">Be A Rider </button>
        <img src={bannerImg1} />
      </div>
      <div>
        <button className="btn btn-primary absolute  text-black font-bold rounded-full bottom-12 left-5">Track Your Parcel <FaArrowCircleRight className="-rotate-30 text-xl " /></button>
        <button className="btn btn-secondary absolute  text-white font-bold rounded-full bottom-12 left-50">Be A Rider </button>
        <img src={bannerImg2} />
      </div>
      <div>
        <button className="btn btn-primary absolute  text-black font-bold rounded-full bottom-12 left-5">Track Your Parcel <FaArrowCircleRight className="-rotate-30 text-xl " /></button>
        <button className="btn btn-secondary absolute  text-white font-bold rounded-full bottom-12 left-50">Be A Rider </button>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
