import React from "react";
import banner from "../assets/Banner22.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[500px] flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Begin Your Study Abroad Journey?
        </h2>

        {/* Sub Heading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Let’s plan your global future together with expert guidance and
          complete support.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block bg-[#11AD00] hover:bg-[#0e8f00] text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default Service;