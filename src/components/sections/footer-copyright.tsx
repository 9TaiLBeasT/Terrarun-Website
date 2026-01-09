import React from 'react';

const FooterCopyright = () => {
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4 lg:px-[300px]">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#cccccc] text-[16px] font-sans">
          {/* Copyright Text */}
          <div className="mb-4 md:mb-0">
            Copyright © All Right Reserved
          </div>

          {/* Auxiliary Links */}
          <div className="flex items-center">
            <ul className="flex list-none p-0 m-0 space-x-6">
              <li>
                <a 
                  href="#" 
                  className="text-[#cccccc] hover:text-white transition-colors duration-200 no-underline"
                >
                  Help & Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#cccccc] hover:text-white transition-colors duration-200 no-underline"
                >
                  Refund Request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;