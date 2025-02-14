import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigationbar = () => {

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const navigationLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Artist', href: '#artist' },
  { name: 'Contact Us', href: '#contact' },
];
const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMobileMenuOpen(false);
};
const navigate = useNavigate();
  return (
    <nav className="relative z-50 font-poppins">
    {/* Main Navigation Bar */}
    <div className="flex items-center justify-between py-4 md:py-4 b px-16 md:px-4 bg-black bg-opacity-70">
      <div onClick={() => navigate('/')}  className="flex items-center cursor-pointer">
      <svg   width="74" height="14" viewBox="0 0 74 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.37 14H3.54V3.74C3.54 3.63 3.495 3.575 3.405 3.575C3.335 3.575 3.265 3.61 3.195 3.68C3.145 3.73 3.08 3.79 3 3.86C2.92 3.92 2.835 3.99 2.745 4.07C2.625 4.16 2.485 4.27 2.325 4.4C2.175 4.53 2.025 4.66 1.875 4.79C1.725 4.91 1.58 5.025 1.44 5.135C1.31 5.245 1.21 5.33 1.14 5.39L0.015 3.995C0.155 3.885 0.355 3.72 0.615 3.5C0.885 3.28 1.135 3.07 1.365 2.87C1.555 2.71 1.755 2.54 1.965 2.36C2.175 2.18 2.385 2 2.595 1.82C2.805 1.64 3.01 1.475 3.21 1.325C3.41 1.165 3.585 1.025 3.735 0.905H5.37V14ZM24.4063 10.73L24.7063 11.075C24.5563 11.965 24.1363 12.68 23.4463 13.22C22.7763 13.74 21.9663 14 21.0163 14H11.9413C10.9213 14 10.0563 13.72 9.34629 13.16C8.59629 12.58 8.22129 11.865 8.22129 11.015V0.905H10.0963V11.015C10.0963 11.315 10.2613 11.575 10.5913 11.795L10.5763 11.78C10.9463 12.03 11.4013 12.155 11.9413 12.155H21.0163C21.4763 12.155 21.8763 12.055 22.2163 11.855H22.2013C22.5613 11.635 22.8063 11.26 22.9363 10.73H24.4063ZM39.3472 11.18C39.3472 12.07 38.9322 12.785 38.1022 13.325C37.3922 13.775 36.5722 14 35.6422 14H31.2772C30.3372 14 29.5172 13.78 28.8172 13.34C27.9772 12.82 27.5572 12.105 27.5572 11.195C27.5572 10.315 27.9872 9.605 28.8472 9.065C29.5572 8.605 30.3672 8.375 31.2772 8.375H35.6422C35.9222 8.375 36.1972 8.4 36.4672 8.45C36.7372 8.5 37.0772 8.595 37.4872 8.735V7.46C37.4472 7.19 37.2122 6.95 36.7822 6.74C36.3922 6.54 36.0122 6.44 35.6422 6.44H31.2772C31.0872 6.44 30.9022 6.455 30.7222 6.485C30.5522 6.515 30.3872 6.57 30.2272 6.65C29.8072 6.84 29.5222 7.195 29.3722 7.715H27.5272C27.6972 6.575 28.1822 5.75 28.9822 5.24C29.6522 4.81 30.4122 4.595 31.2622 4.595H35.6422C36.5022 4.595 37.2872 4.81 37.9972 5.24C38.8972 5.78 39.3472 6.505 39.3472 7.415V11.18ZM37.4872 11.195C37.4872 10.915 37.2722 10.68 36.8422 10.49C36.4522 10.31 36.0522 10.22 35.6422 10.22H31.2772C30.7672 10.22 30.3122 10.33 29.9122 10.55C29.5822 10.73 29.4172 10.94 29.4172 11.18C29.4172 11.43 29.5772 11.645 29.8972 11.825C30.2772 12.045 30.7322 12.155 31.2622 12.155H35.6422C36.0722 12.155 36.4672 12.075 36.8272 11.915C37.2672 11.715 37.4872 11.475 37.4872 11.195ZM58.676 14H57.026C56.516 13.59 55.916 13.105 55.226 12.545C54.536 11.985 53.806 11.395 53.036 10.775C52.266 10.145 51.471 9.5 50.651 8.84C49.841 8.17 49.051 7.525 48.281 6.905C47.521 6.275 46.801 5.685 46.121 5.135C45.441 4.575 44.851 4.09 44.351 3.68C44.271 3.6 44.201 3.56 44.141 3.56C44.081 3.56 44.051 3.635 44.051 3.785V14H42.191V0.89H43.841L56.486 11.21C56.566 11.29 56.641 11.33 56.711 11.33C56.801 11.33 56.846 11.25 56.846 11.09V0.89H58.676V14ZM73.317 7.385C73.317 8.255 72.887 8.97 72.027 9.53C71.317 9.99 70.512 10.22 69.612 10.22H65.247C64.957 10.22 64.677 10.195 64.407 10.145C64.137 10.095 63.797 10 63.387 9.86V11.12V11.15C63.417 11.41 63.657 11.645 64.107 11.855C64.307 11.965 64.502 12.045 64.692 12.095C64.882 12.135 65.067 12.155 65.247 12.155H69.612C69.792 12.155 69.967 12.14 70.137 12.11C70.317 12.08 70.487 12.025 70.647 11.945C71.067 11.755 71.352 11.4 71.502 10.88H73.347C73.187 12.02 72.697 12.845 71.877 13.355C71.207 13.785 70.452 14 69.612 14H65.247C64.407 14 63.622 13.78 62.892 13.34C61.982 12.79 61.527 12.065 61.527 11.165V7.4C61.527 6.51 61.942 5.8 62.772 5.27C63.472 4.82 64.297 4.595 65.247 4.595H69.612C70.532 4.595 71.342 4.81 72.042 5.24C72.892 5.77 73.317 6.485 73.317 7.385ZM71.457 7.415C71.457 7.175 71.292 6.965 70.962 6.785C70.592 6.555 70.137 6.44 69.597 6.44H65.247C64.867 6.44 64.467 6.525 64.047 6.695C63.607 6.875 63.387 7.11 63.387 7.4C63.387 7.68 63.602 7.915 64.032 8.105C64.422 8.285 64.827 8.375 65.247 8.375H69.612C70.132 8.375 70.582 8.265 70.962 8.045C71.292 7.865 71.457 7.655 71.457 7.415Z" fill="white"/>
</svg>
      </div>
      
  
      <div className="md:hidden flex items-center space-x-14 cursor-pointer">
      
      {navigationLinks.map((link) => (
          <p
            key={link.name}
             onClick={() => scrollToSection(link.href.substring(1))}
            className="hover:text-orange text-[#A3A3A3] transition-colors hover:text-[#4D61FC]"
          >
            {link.name}
          </p>
          
        ))}
     
              <a 
              href="mailto:nfo@1laneco.com"
              className="text-white  hover:text-[#4D61FC]"
            >
                info@1laneco.com
            </a>
            <a href='https://form.typeform.com/to/QFdpRg3u' target="_blank" rel="noopener noreferrer" className="bg-[#4D61FC] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors ">
        Submit Songs
        </a>
       
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
          <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H31.004" stroke="white" stroke-width="2"/>
          <path d="M6.00195 8L31.002 8" stroke="white" stroke-width="2"/>
          <path d="M14.002 15L31.002 15" stroke="white" stroke-width="2"/>
          </svg>
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
               onClick={() => scrollToSection(link.href.substring(1))}
            >
              {link.name}
            </a>
          ))}
        </div>

       
        <a href='https://form.typeform.com/to/QFdpRg3u' target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#4D61FC] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors mt-10">
        Submit Songs
        </a>
    

       
      </div>
    </div>
        </nav>
  );
};

export default Navigationbar;