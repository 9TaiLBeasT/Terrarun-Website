import React from 'react';
import Image from 'next/image';

const IntroScreens = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0921fb]">
      {/* Intro Text Content Section */}
      <div 
        id="home" 
        className="pt-[175px] pb-[310px] text-center"
        style={{
          backgroundColor: 'rgb(9, 33, 251)',
          color: 'rgb(146, 148, 154)',
        }}
      >
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col items-center">
            <h1 
              className="text-white font-bold leading-[1.2] mb-0"
              style={{
                fontSize: '52px',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '-0.02em',
                position: 'relative',
              }}
            >
              Powerfull & Usefull Apps
            </h1>
            <h1 
              className="text-white font-bold leading-[1.2] mt-0"
              style={{
                fontSize: '52px',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '-0.02em',
                position: 'relative',
              }}
            >
              For Your Business
            </h1>
            <p 
              className="text-white max-w-[650px] mt-[25px] mb-[15px] leading-[1.6]"
              style={{
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita mollitia sed magni quaerat.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Mobile Mockups Section */}
      <div 
        className="relative z-10 -mt-[215px]"
        style={{
          width: '100%',
        }}
      >
        <div className="container mx-auto px-6 max-w-[1305.62px]">
          <div className="flex flex-row items-center justify-center gap-0 md:gap-4 lg:gap-6">
            {/* Left Phone */}
            <div className="w-1/3 flex justify-center">
              <div 
                className="relative transition-transform duration-500 hover:-translate-y-2"
                style={{ width: '100%', maxWidth: '411.203px' }}
              >
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/ss1-2.png" 
                  alt="App Screen 1" 
                  className="w-full h-auto object-contain"
                  style={{
                    padding: '0 5px',
                  }}
                />
              </div>
            </div>

            {/* Middle Phone (Main Focus) */}
            <div className="w-1/3 flex justify-center">
              <div 
                className="relative z-20 transition-transform duration-500 hover:-translate-y-2"
                style={{ width: '100%', maxWidth: '411.203px' }}
              >
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/ss2-3.png" 
                  alt="App Screen 2" 
                  className="w-full h-auto object-contain"
                  style={{
                    padding: '0 5px',
                  }}
                />
              </div>
            </div>

            {/* Right Phone */}
            <div className="w-1/3 flex justify-center">
              <div 
                className="relative transition-transform duration-500 hover:-translate-y-2"
                style={{ width: '100%', maxWidth: '411.203px' }}
              >
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/ss3-4.png" 
                  alt="App Screen 3" 
                  className="w-full h-auto object-contain"
                  style={{
                    padding: '0 5px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background White Gradient Filler at the Bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[150px] bg-white pointer-events-none"
        style={{
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default IntroScreens;