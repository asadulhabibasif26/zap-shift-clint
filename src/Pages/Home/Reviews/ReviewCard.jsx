import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {userName , review: testimonial ,user_photoURL} = review;

  return (
    <div>
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md border border-gray-100">
        {/* Quote icon */}
        <FaQuoteLeft className="text-teal-300 text-3xl mb-4" />

        {/* Text */}
        <p className=" mb-6">
          {testimonial}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-teal-700 mb-6"></div>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-teal-800 rounded-full"><img src={user_photoURL} alt="" /></div>

          <div>
            <h3 className="font-semibold text-teal-800 text-lg">
             {userName}
            </h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
