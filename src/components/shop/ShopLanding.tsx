import * as React from "react";
import { ShopImageContainer } from "./ShopImageContainer";
import { motion, AnimatePresence } from "framer-motion";
export const ShopLanding: React.FC = () => {
  const images = [
    {
      src: "/images/Merch slider.jpeg",
      alt: "Shop merchandise display image 1",
    },
    {
      src: "/images/Merch slider2.jpg",
      alt: "Shop merchandise display image 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-slide effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="rounded-none px-20 md:px-0  bg-black pb-10 h-screen md:h-fit ">
      <div className="flex gap-20 md:flex-col items-center justify-center h-full">
        <div className="flex flex-col w-4/12 md:ml-0 md:w-full">
          <div className="flex flex-col mt-11 w-full text-white md:mt-10 md:max-w-full">
            <div  data-aos="fade-up" data-aos-delay="300" className="leading-[162px] text-[171px]  md:max-w-full md:text-4xl md:leading-10 md:hidden">
              Shop <br />
              1LANE
            </div>
            <div  data-aos="fade-up" data-aos-delay="300" className="leading-[162px] text-center  md:w-full md:text-2xl md:leading-10 hidden md:block">
              Shop 
              1LANE
            </div>
            <div  data-aos="fade-left" data-aos-delay="500" className="mr-8 text-6xl text-center leading-none tracking-[5.7px] md:mr-2.5 md:w-full md:text-2xl">
              MERCHANDISE
            </div>
            <a  data-aos="fade-down" data-aos-delay="800" href='https://www.instagram.com/1laneoriginals?igsh=MXV6ajZkdDFjdjhrMg==' target="_blank" rel="noopener noreferrer"  className="gap-2 self-start py-2 pr-2.5 pl-4 mt-10 text-xs border border-solid border-neutral-500 rounded-[33px] md:hidden flex flex-row items-center"
            >
     Visit Our Page <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="13" fill="#4D61FC"/>
<path d="M19.9916 8.12934C20.063 7.58169 19.677 7.07983 19.1293 7.0084L10.2049 5.84435C9.65729 5.77291 9.15543 6.15896 9.084 6.70661C9.01256 7.25425 9.39861 7.75612 9.94626 7.82755L17.8791 8.86226L16.8443 16.7951C16.7729 17.3427 17.159 17.8446 17.7066 17.916C18.2543 17.9874 18.7561 17.6014 18.8275 17.0537L19.9916 8.12934ZM6.60971 18.7926L19.6097 8.79262L18.3903 7.20738L5.39029 17.2074L6.60971 18.7926Z" fill="white"/>
</svg>
        </a>
           
          </div>
        </div>
        <div className="flex flex-col ml-5 w-4/12 md:ml-0 md:w-full">
        <div className="relative w-[450px] h-[495px] md:w-full overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        </div>
        <a  data-aos="fade-down" data-aos-delay="800" href='https://www.instagram.com/1laneoriginals?igsh=MXV6ajZkdDFjdjhrMg==' target="_blank" rel="noopener noreferrer" 
                      className="gap-2 self-center py-2 pr-2.5 pl-4 mb-4 text-xs border border-solid border-neutral-500 rounded-[33px] hidden md:flex items-center"

            >
     Visit Our Page <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="13" fill="#4D61FC"/>
<path d="M19.9916 8.12934C20.063 7.58169 19.677 7.07983 19.1293 7.0084L10.2049 5.84435C9.65729 5.77291 9.15543 6.15896 9.084 6.70661C9.01256 7.25425 9.39861 7.75612 9.94626 7.82755L17.8791 8.86226L16.8443 16.7951C16.7729 17.3427 17.159 17.8446 17.7066 17.916C18.2543 17.9874 18.7561 17.6014 18.8275 17.0537L19.9916 8.12934ZM6.60971 18.7926L19.6097 8.79262L18.3903 7.20738L5.39029 17.2074L6.60971 18.7926Z" fill="white"/>
</svg>
        </a>
       
      </div>
    </div>
  );
};
