import * as React from "react";
import { ShopImageContainer } from "./ShopImageContainer";

export const ShopLanding: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/f6705a07c3a7405dc9fa88f5ce9be565f380e5aa9fdfd63d6e8569094f495e4c?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Shop merchandise display image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12c76e932a1ec577afe0d20f96a1d0fc19668df9b56352e580d21e1dab6526ef?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Shop merchandise display image 2",
    },
  ];

  return (
    <div className="rounded-none px-20 md:px-0  bg-black pb-10 h-screen md:h-fit ">
      <div className="flex gap-20 md:flex-col items-center justify-center h-full">
        <div className="flex flex-col w-4/12 md:ml-0 md:w-full">
          <div className="flex flex-col mt-11 w-full text-white md:mt-10 md:max-w-full">
            <div  data-aos="fade-up" data-aos-delay="300" className="leading-[162px] text-[171px]  md:max-w-full md:text-4xl md:leading-10 md:hidden">
              Shop <br />
              1Lane
            </div>
            <div  data-aos="fade-up" data-aos-delay="300" className="leading-[162px] text-center  md:w-full md:text-2xl md:leading-10 hidden md:block">
              Shop 
              1Lane
            </div>
            <div  data-aos="fade-left" data-aos-delay="500" className="mr-8 text-6xl text-center leading-none tracking-[5.7px] md:mr-2.5 md:w-full md:text-2xl">
              MERCHANDISE
            </div>
            <button
              data-aos="fade-down" data-aos-delay="800"
              className="gap-2 self-start py-2 pr-2.5 pl-4 mt-10 text-xs border border-solid border-neutral-500 rounded-[33px] md:hidden flex flex-row items-center"
              aria-label="Visit Our Page"
              tabIndex={0}
            >
              Visit Our Page <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="13" fill="#4D61FC"/>
<path d="M19.9916 8.12934C20.063 7.58169 19.677 7.07983 19.1293 7.0084L10.2049 5.84435C9.65729 5.77291 9.15543 6.15896 9.084 6.70661C9.01256 7.25425 9.39861 7.75612 9.94626 7.82755L17.8791 8.86226L16.8443 16.7951C16.7729 17.3427 17.159 17.8446 17.7066 17.916C18.2543 17.9874 18.7561 17.6014 18.8275 17.0537L19.9916 8.12934ZM6.60971 18.7926L19.6097 8.79262L18.3903 7.20738L5.39029 17.2074L6.60971 18.7926Z" fill="white"/>
</svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-4/12 md:ml-0 md:w-full">
          <div className="md:mt-10 md:w-full md:px-4">
          <img
    data-aos="fade-zoomIn" data-aos-delay="800"
    loading="lazy"
    src={'images/1LaNe merchandise.jpg'}
    alt={'shoping'}
    className={`object-contain w-[495px] h-[495px] md:w-full `}
  />
          </div>
        </div>
        <button
              className="gap-2 self-center py-2 pr-2.5 pl-4 mb-4 text-xs border border-solid border-neutral-500 rounded-[33px] hidden md:flex items-center"
              aria-label="Visit Our Page"
              tabIndex={0}
            >
              Visit Our Page <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="13" fill="#4D61FC"/>
<path d="M19.9916 8.12934C20.063 7.58169 19.677 7.07983 19.1293 7.0084L10.2049 5.84435C9.65729 5.77291 9.15543 6.15896 9.084 6.70661C9.01256 7.25425 9.39861 7.75612 9.94626 7.82755L17.8791 8.86226L16.8443 16.7951C16.7729 17.3427 17.159 17.8446 17.7066 17.916C18.2543 17.9874 18.7561 17.6014 18.8275 17.0537L19.9916 8.12934ZM6.60971 18.7926L19.6097 8.79262L18.3903 7.20738L5.39029 17.2074L6.60971 18.7926Z" fill="white"/>
</svg>
            </button>
      </div>
    </div>
  );
};
