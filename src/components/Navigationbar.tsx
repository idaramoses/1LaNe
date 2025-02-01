import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navigationbar = () => {

 // State to control mobile menu visibility
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const navigationLinks = [
   { name: 'Home', href: '#' },
   { name: 'Music', href: '#' },
   { name: 'Sport', href: '#' },
   { name: 'Merch', href: '#' },
   { name: 'New Release', href: '#' },
   { name: 'Contact Us', href: '#' },


 ];
  return (
    <nav className="relative z-50 font-poppins">
    {/* Main Navigation Bar */}
    <div className="flex items-center justify-between py-4 md:py-2 border-b border-[#333333] px-16 md:px-4">
      <div className="flex items-center">
        <img  src="/images/1LaNe.svg" alt="Mezyn Logo" className="" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="md:hidden flex items-center space-x-8 cursor-pointer">
        {navigationLinks.map((link) => (
          <p
            key={link.name}
            // href={link.href} 
            className="hover:text-orange text-white transition-colors"
          >
            {link.name}
          </p>
        ))}
        
      </div>
      <div className="md:hidden flex items-center space-x-8 cursor-pointer">
       
        <button className="bg-[#4D61FC] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors ">
        Submit Songs
        </button>
      </div>
      {/* Mobile Menu Button */}
      <button 
        className="hidden md:flex z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>
    </div>

    {/* Mobile Navigation Menu */}
    <div 
      className={`
        fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out hidden md:flex
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="flex flex-col h-full pt-20 px-6">
        {/* Navigation Links */}
        <div className="space-y-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-semibold hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

       
        <button  onClick={() => setIsMobileMenuOpen(false)} className="bg-[#4D61FC] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
        Submit Songs
        </button>
        {/* <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-4 text-gray-400">
            <p>Email: hello@mezyn.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div> */}

       
      </div>
    </div>
        </nav>
  );
};

export default Navigationbar;