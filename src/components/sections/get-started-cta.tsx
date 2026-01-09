import React from 'react';

/**
 * GetStartedCTA component
 * 
 * A pixel-perfect clone of the secondary CTA section.
 * Features:
 * - Electric Blue background (#0921FB)
 * - White bold text ("Interested in our application get it now")
 * - Left-aligned heading and paragraph description
 * - Right-aligned white pill button ("Get Started")
 * - Responsive layout (stacked on mobile, horizontal on desktop)
 */
export default function GetStartedCTA() {
  return (
    <section className="bg-white py-[50px] md:py-[80px]">
      <div className="container mx-auto px-4 lg:max-w-[1320px]">
        <div className="bg-[#0921FB] rounded-[8px] p-8 md:p-12 lg:p-[60px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-[750px]">
              <h2 
                className="text-white text-[28px] md:text-[36px] font-bold leading-[1.2] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Interested in our application get it now
              </h2>
              <p 
                className="text-white opacity-90 text-[16px] leading-[1.6]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non similique eaque eum. Saepe nam
              </p>
            </div>

            <div className="flex-shrink-0">
              <button 
                className="bg-white text-[#0a0a10] text-[14px] md:text-[15px] font-semibold py-[16px] px-[35px] rounded-[3px] hover:bg-gray-100 transition-colors duration-200"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)'
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}