import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
          alt="About World Wise Scholars"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white opacity-0 animate-fadeInUp max-w-4xl mx-auto leading-14">
          Welcome to World Wise Scholars, where ambition meets opportunity and global learning transforms lives.
          </h1>
            
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl opacity-0 animate-fadeInUp delay-400">
            We understand that studying abroad is more than just choosing a new campus; it's an adventure, a leap into unfamiliar cultures, and a pathway toward your biggest dreams. That’s why we are here.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 animate-fadeInUp">
          About World Wise Scholars
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fadeInUp">
            <p>
            <span className="font-bold text-lg">Our mission: </span>To empower students like you from Bangladesh and beyond with honest insights, actionable guidance, and a community that believes in the value of international education. Whether you’re seeking to broaden your worldview, build invaluable networks, stand out in your career, or immerse yourself in a new culture, we’ve got your back.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-6 animate-fadeInUp">
          How we make your journey easier:
        </h3>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fadeInUp">
          <p>
            <strong>Deep Experience, Real Stories:</strong> Our team brings hands-on experience and connects with alumni who’ve walked the journey; starting from navigating visas to balancing cultural adaptation and academic life abroad.
          </p>
          <p>
            <strong>Tailored Guidance:</strong> We know each student has unique goals, concerns, and strengths. We provide personalised advice on selecting countries, universities, programmes, and scholarships that align with YOU.
          </p>
          <p>
            <strong>Comprehensive Support:</strong> From preparing your application documents and understanding admission requirements, to budgeting, arrival logistics and adjusting to life in a new country; we ensure that you’re ready for the full journey.
          </p>
          <p>
            <strong>Global Vision, Local Relevance:</strong> While we embrace the global stage, we speak your language. We understand your context, your aspirations and your challenges so you don’t just survive abroad, in fact you thrive there.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-gray-700 text-lg leading-relaxed animate-fadeInUp">
          <p>
            At World Wise Scholar, we believe that studying abroad is not just a credential; it’s a transformative experience that builds confidence, independence and a lifelong love for learning.
          </p>
          <p>
            Join us. Let’s turn your global ambitions into reality.
          </p>
          <p className="font-semibold">
            Welcome to a world of possibilities.
          </p>
          <p className="font-bold">
            - The World Wise Scholars Team
          </p>
        </div>

      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>

    </div>
  );
};

export default AboutUs;