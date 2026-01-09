import React from 'react';

const Counters = () => {
  const stats = [
    {
      value: "50K",
      label: "Install",
    },
    {
      value: "20K",
      label: "Likes",
    },
    {
      value: "45K",
      label: "User Pro",
    },
    {
      value: "5K",
      label: "User Free",
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-tight mb-1">
                {stat.value}
              </h1>
              <p className="text-[16px] text-[#666666] font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;