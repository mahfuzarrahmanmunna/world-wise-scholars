import React from 'react'
import { Link } from 'react-router-dom'

const Getready = () => {
  return (
    <section className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Your Ideal Study Destination is Calling
        </h2>

        {/* Sub Heading */}
        <p className="text-white text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Discover Your Next Academic Home: Vibrant, Welcoming, Unforgettable!
        </p>

        {/* CTA Button */}
        <Link
          to={"/contact"}
          className="bg-green-600 hover:bg-[#4CADFF] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors"
        >
          Book a Free Consultation
        </Link>

      </div>
    </section>
  )
}

export default Getready