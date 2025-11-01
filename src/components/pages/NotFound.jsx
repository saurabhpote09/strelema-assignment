import React from "react";
import { Link } from "react-router-dom"; // remove if using Next.js

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-center px-6">
      {/* Big 404 Heading */}
      <h1 className="text-[120px] md:text-[160px] font-extrabold text-[#FFF1DA] drop-shadow-[0_5px_20px_rgba(255,241,218,0.4)] leading-none">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-3 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 inline-block bg-[#FFF1DA] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ffe7b5] hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
