import React from 'react';
import Image from 'next/image';

const DownloadCTA = () => {
  return (
    <section 
      id="download" 
      className="bg-brand-blue relative overflow-hidden" 
      style={{ 
        paddingTop: '100px', 
        paddingBottom: '100px',
        backgroundColor: '#0921fb' 
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 
              className="text-white font-bold mb-6" 
              style={{ 
                fontSize: '36px', 
                lineHeight: '1.3' 
              }}
            >
              Download App
            </h2>
            <p 
              className="text-white opacity-80 mb-8 max-w-lg" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non similique eaque eum. Saepe nam
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-[3px] font-semibold text-sm transition hover:bg-opacity-90"
                style={{ height: '49px' }}
              >
                <div className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 17.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm13.1-6.1c.3.3.4.7.2 1.1l-1.3 3.5c-.2.6-.8 1-1.5 1H7c-.7 0-1.3-.4-1.5-1L4.2 12.5c-.2-.4-.1-.8.2-1.1s.7-.4 1.1-.2l1.3 3.5h9.4l1.3-3.5c.2-.2.6-.3 1.1-.1zM18.7 8.7c.3.3.3.7.1 1l-1.5 2c-.2.3-.5.4-.8.4h-.2c-.3 0-.6-.1-.8-.4l-1.5-2c-.2-.3-.2-.7.1-1 .3-.3.7-.3 1 0l.9 1.2.9-1.2c.3-.3.7-.3 1 0zm-13.4 0c.3-.3.7-.3 1 0l.9 1.2.9-1.2c.3-.3.7-.3 1 0 .3.3.3.7.1 1l-1.5 2c-.2.3-.5.4-.8.4h-.2c-.3 0-.6-.1-.8-.4l-1.5-2c-.2-.3-.2-.7.1-1z" />
                    <path d="M18.71 19.5c-.83 0-1.58-.34-2.13-.88-.55.54-1.3.88-2.13.88s-1.58-.34-2.13-.88c-.55.54-1.3.88-2.13.88s-1.58-.34-2.13-.88c-.55.54-1.3.88-2.13.88-1.55 0-2.81-1.26-2.81-2.81V5.25c0-1.55 1.26-2.81 2.81-2.81h10.5c1.55 0 2.81 1.26 2.81 2.81v11.44c0 1.55-1.26 2.81-2.81 2.81zM5.94 4.44c-.45 0-.81.36-.81.81v11.44c0 .45.36.81.81.81.31 0 .58-.17.72-.43.14-.26.41-.43.72-.43s.58.17.72.43c.14.26.41.43.72.43s.58-.17.72-.43c.14.26.41.43.72.43s.58.17.72.43c.14.26.41.43.72.43s.58-.17.72-.43c.14.26.41.43.72.43.45 0 .81-.36.81-.81V5.25c0-.45-.36-.81-.81-.81H5.94z" />
                  </svg>
                </div>
                App Store
              </button>
              
              <button 
                className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-[3px] font-semibold text-sm transition hover:bg-opacity-90"
                style={{ height: '49px' }}
              >
                <div className="mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.183.183-.34.156-.474.053-.133-.102-.2-.26-.2-.474V2.235c0-.214.067-.372.2-.474.134-.103.29-.13.474.053zm11.233 9.141l3.35 1.934c.447.258.447.682 0 .94l-3.35 1.934-2.137-2.137 2.137-2.671zm-1.055-1.055L4.852 3.235c-.328-.189-.604-.158-.828.094l9.761 6.571zm0 4.2l-9.761 6.571c.224.252.5.283.828.094l8.933-6.665z" />
                  </svg>
                </div>
                Google Play
              </button>
            </div>
          </div>

          {/* Overlapping Mockups */}
          <div className="w-full lg:w-1/2 relative lg:static h-[300px] lg:h-auto">
            <div className="relative w-full h-full lg:absolute lg:right-0 lg:top-[-100px] lg:bottom-[-100px] lg:w-1/2 flex justify-center items-center gap-6 pointer-events-none">
              <div className="relative transform lg:-translate-y-24">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/ss1-2.png" 
                  alt="App Mockup 1" 
                  width={320} 
                  height={650} 
                  className="rounded-[30px] shadow-2xl w-[220px] sm:w-[280px] lg:w-[320px] object-contain"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="relative transform lg:translate-y-24 hidden sm:block">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/ss3-4.png" 
                  alt="App Mockup 2" 
                  width={320} 
                  height={650} 
                  className="rounded-[30px] shadow-2xl w-[220px] sm:w-[280px] lg:w-[320px] object-contain"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div 
        className="absolute top-0 right-[-10%] w-[40%] h-full bg-blue-600/20 skew-x-[-15deg] pointer-events-none"
        style={{ zIndex: 0 }}
      />
    </section>
  );
};

export default DownloadCTA;