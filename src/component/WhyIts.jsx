import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Experienced Counselors',
    body: 'Our expert advisors guide you through every step.',
    // cta: { label: 'Learn More', to: '/experienced-counselors' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0120 17.5M12 14L5.84 10.578A12.083 12.083 0 004 17.5" />
      </svg>
    )
  },
  {
    title: 'Global University Network',
    body: 'We partner with leading institutions worldwide.',
    // cta: { label: 'Learn More', to: '/global-universities' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15 15 0 010 20" />
      </svg>
    )
  },
  {
    title: 'Transparent Process',
    body: 'No hidden fees, just honest guidance.',
    // cta: { label: 'Learn More', to: '/transparent-process' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'End-to-End Support',
    body: 'From IELTS prep to visa success, we’ve got you covered.',
    // cta: { label: 'Learn More', to: '/end-to-end-support' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3v18" />
      </svg>
    )
  },
  {
    title: 'Personalized Guidance',
    body: 'Every student’s dream is unique. We provide one-on-one counseling tailored to your goals and preferences.',
    // cta: { label: 'Learn More', to: '/personalized-guidance' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <circle cx="12" cy="8" r="4" strokeWidth="2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      </svg>
    )
  },
  {
    title: 'Student-Centered Approach',
    body: 'Your success comes first. We ensure you feel supported, informed, and confident at every step.',
    // cta: { label: 'Learn More', to: '/student-centered' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-8-6V9l8-6 8 6v6l-8 6z" />
      </svg>
    )
  }
]
const WhyIts = () => {
  return (
    <section className="bg-white mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
  What Makes Us Different
</h2>
        <div className="mt-2 h-1 w-10 rounded bg-purple-600" />
        <p className="mt-2 text-[#7A828E] text-lg">We fuse creativity and technology to shape ideas into innovative realities. <br /> Fueled by passion, we deliver excellence that stands out and makes an impact.

        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-lg hover:shadow-gray-100"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full text-white bg-[#11AD00] hover:bg-[#4CADFF] transition-colors duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base leading-6 text-[#7A828E]">{card.body}</p>
              {card.cta ? (
                <Link
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
                  to={card.cta.to}
                >
                  {card.cta.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyIts