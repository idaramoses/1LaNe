import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const CTASection = () => {

 // State to control mobile menu visibility

  return (
    <div className="font-poppins">
          {/* Latest Section */}
          <section className="mx-20 md:mx-0 mt-20 md:my-4 py-10 md:h-[269px]  border-t border-[#124C63]  md:rounded-none px-8 flex justify-between md:justify-center items-center flex-col gap-6">
        <h2 className="text-2xl md:text-sm font-normal text-center">Take your music to the next level with 1Lane</h2>
        <button className="text-sm md:text-sm bg-[#4D61FC] px-6 py-3 rounded-full hover:bg-purple-700">
          Submit Songs
        </button>
      </section>
   </div>
  );
};

export default CTASection;