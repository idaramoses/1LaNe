import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Latestest = () => {

 // State to control mobile menu visibility

  return (
    <div className="relative z-50 font-poppins">
          {/* Latest Section */}
          <section className="py-8 relative mb-16 mx-20 md:mx-4 items-center flex flex-col ">
          <h2 className="text-4xl md:text-xl  mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            The Latest
          </h2>
          
          {/* Decorative CD */}
          {/* <img src="/images/lastest-bg.svg" alt="Music Artist" className="absolute  top-1/2 right-auto translate-x-1/2 -translate-y-1/2  w-[600px] h-[600px]" /> */}
          
          {/* Grid */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-8 md:gap-0 relative z-10">
            <div className="group relative overflow-hidden rounded-lg md:rounded-none cursor-pointer h-[359px] " data-aos="fade-left" data-aos-delay="300">
              <img src="/images/music.svg" alt="Music Artist" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xl font-bold">Music</span>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg md:rounded-none cursor-pointer h-[359px]" data-aos="fade-down" data-aos-delay="500">
              <img src="/images/sport.svg" alt="Sports Athlete" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xl font-bold">Sports</span>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg md:rounded-none cursor-pointer h-[359px]" data-aos="fade-right" data-aos-delay="800">
              <img src="/images/fashion.svg" alt="Fashion Model" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xl font-bold">Fashion</span>
            </div>
          </div>
        </section>
   </div>
  );
};

export default Latestest;