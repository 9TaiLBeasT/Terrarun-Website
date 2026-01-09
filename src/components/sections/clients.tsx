"use client";

import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/clients1-7.png",
      alt: "Genuine"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/clients2-8.png",
      alt: "Vintage"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/clients3-9.png",
      alt: "Anchorhead"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e638708-7b5c-42f2-ae57-9360b8e0b380-ngetemplates-com/assets/images/clients4-10.png",
      alt: "Cuban"
    }
  ];

  return (
    <section id="clients" className="bg-white py-[100px]">
      <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
        <div className="flex flex-col lg:flex-row gap-[50px] items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[36px] font-bold leading-[1.3] text-black mb-6">
              Our clients are spread all over the world
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#666666]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non similique eaque eum. Saepe nam
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-[30px]">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-8 bg-white border border-[#eeeeee] rounded-[5px] h-[130px] hover:shadow-lg transition-shadow"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-w-full max-h-[60px] object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;