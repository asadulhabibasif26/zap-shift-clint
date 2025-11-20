import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsProimse }) => {
  const reviews = use(reviewsProimse);
  console.log(reviews);
  return (
    <div className="my-24">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-center">Reviews</h3>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga,
          voluptate libero quis cumque fugiat sunt quaerat similique in, unde
          molestias laboriosam explicabo nobis error? Maiores praesentium
          necessitatibus ex dolorum?
        </p>
      </div>
      <div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "40%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination ,Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
