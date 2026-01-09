import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

/**
 * FeaturesPrimary component
 * Closes the first features section with a left column containing three bullet points with check icons 
 * and a right column featuring a large mobile dashboard screenshot with a decorative blue square background.
 */
const FeaturesPrimary: React.FC = () => {
  return (
    <section 
      id="features" 
      className="features bg-white"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container mx-auto max-w-[1240px] px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-[30px]">
          
          {/* Left Column: Text Content & Bullet Points */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-10">
              {/* Feature Item 1 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-[20px] h-20px mt-1.5"
                  style={{ color: '#0033ff' }}
                >
                  <Check size={24} strokeWidth={3} />
                </div>
                <div>
                  <h5 className="text-[20px] font-semibold text-black leading-[1.4] mb-2 font-sans">
                    Increase Your Business
                  </h5>
                  <p className="text-[16px] text-[#666666] leading-[1.6] font-normal font-sans">
                    Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequatur
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-[20px] h-20px mt-1.5"
                  style={{ color: '#0033ff' }}
                >
                  <Check size={24} strokeWidth={3} />
                </div>
                <div>
                  <h5 className="text-[20px] font-semibold text-black leading-[1.4] mb-2 font-sans">
                    Easy To Use
                  </h5>
                  <p className="text-[16px] text-[#666666] leading-[1.6] font-normal font-sans">
                    Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequatur
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-[20px] h-20px mt-1.5"
                  style={{ color: '#0033ff' }}
                >
                  <Check size={24} strokeWidth={3} />
                </div>
                <div>
                  <h5 className="text-[20px] font-semibold text-black leading-[1.4] mb-2 font-sans">
                    Working All Mobile
                  </h5>
                  <p className="text-[16px] text-[#666666] leading-[1.6] font-normal font-sans">
                    Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequatur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Dashboard & Decorative Square */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-12 md:mt-0">
            {/* Decorative Blue Square - positioned behind the image top right */}
            <div 
              className="absolute -top-10 -right-4 w-[120px] h-[120px] bg-[#0033ff] z-0 hidden md:block"
              style={{ width: '120px', height: '120px' }}
            ></div>
            
            <div className="relative z-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/features1-5.png"
                alt="Mobile App Features"
                width={411}
                height={828}
                className="max-w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesPrimary;