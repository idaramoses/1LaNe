import { ArtistProfile } from "@/components/artistProfile/ArtistProfile";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Music, Facebook, Twitter, Instagram, Youtube,  ChevronRight } from 'lucide-react';
import { SocialLinks } from "@/components/artistProfile/SocialLinks";
import Navigationbar from "@/components/Navigationbar";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Latestest from "@/components/Latest";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import CTASection from "@/components/CTA Section";
import { ShopLanding } from "@/components/shop/ShopLanding";
import { Footer } from "@/components/footer/Footer";
const Index = () => {
  const slides = [
    {
      title: "1 Lift artists 'N' empower",
      subtitle: "Zichy",
      description: "After careful consideration and review of all applications, we regret to inform you that we have decided to move forward with other candidates whose qualifications more closely align with our current needs for the role.",
      image: "/images/Zichy.svg"
    },
    {
      title: "Empowering Artists",
      subtitle: "Music Production",
      description: "State-of-the-art facilities and expert guidance to bring your vision to life.",
      image: "/images/Zichy.svg"
    },
    {
      title: "Global Reach",
      subtitle: "Distribution",
      description: "Connect with audiences worldwide through our extensive network.",
      image: "/images/Zichy.svg"
    }
  ];
  const artists = [
    {
      id: 1,
      name: "Artist 1",
      image: "/images/at-1.svg",
      description: "Description for artist 1"
    },
    {
      id: 2,
      name: "Artist 2",
      image: "/images/at-2.svg",
      description: "Description for artist 2"
    },
    {
      id: 3,
      name: "Artist 3",
      image: "/images/at-3.svg",
      description: "Description for artist 3"
    },
    {
      id: 4,
      name: "Artist 4",
      image: "/images/at-4.svg",
      description: "Description for artist 4"
    }, {
      id: 5,
      name: "Artist 5",
      image: "/images/at-5.svg",
      description: "Description for artist 3"
    },
    {
      id: 6,
      name: "Artist 6",
      image: "/images/at-6.svg",
      description: "Description for artist 4"
    }
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className=" flex relative flex-col items-center justify-center bg-black text-white font-poppins">
 <div className=" bg-black text-white relative">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-no-repeat md:h-[770px] object-fit md:hidden ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center'
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" /> */}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="h-screen  ">
  
        <Navigationbar/>
        <section className="relative h-screen mb-4 hidden md:flex">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center md:items-end md:mb-10">
              <div className="w-full flex flex-col md:justify-center md:items-center ">
            <h1 className="text-4xl mb-4 md:text-center md:text-2xl" data-aos="fade-down" data-aos-delay="300">{slides[current].title} </h1>
            <h2 className="text-3xl mb-4 md:text-center md:text-xl " data-aos="fade-up" data-aos-delay="600">{slides[current].subtitle}</h2>
            <p className="text-gray-300 mb-6 md:text-center md:text-sm md:mx-10"  data-aos="fade-left" data-aos-delay="900">{slides[current].description}</p>
             <SocialLinks />
             <div className="mt-4 mb-4 flex flex-row gap-4">
             <div
          className="gap-3 self-stretch px-6 py-2 rounded-2xl border border-solid border-neutral-500"
          role="button"
          tabIndex={0}
        >
          Fan Link
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/9f25834d3a8ab098a4e0e9df8aef21f24d8c27f2eab9be50e77de4fd9c8d5103?apiKey=924a520d2ecd4a249b6d608543649168&"
          alt="Fan link icon"
          className="object-contain shrink-0 aspect-square w-[34px]"
        />
             </div>
            
          </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* Hero Content */}
        <div className="h-[70vh] md:h-full flex items-center px-20 md:px-4 md:mt-10 md:justify-end md:hidden">
          <div className="max-w-2xl md:w-full flex flex-col md:justify-center md:items-center ">
            <h1 className="text-4xl mb-4 md:text-center md:text-2xl" data-aos="fade-down" data-aos-delay="300">{slides[current].title} </h1>
            <h2 className="text-3xl mb-4 md:text-center md:text-xl" data-aos="fade-up" data-aos-delay="600">{slides[current].subtitle}</h2>
            <p className="text-gray-300 mb-6 md:text-center md:text-base"  data-aos="fade-left" data-aos-delay="900">{slides[current].description}</p>
             <SocialLinks />
             <div className="mt-4 mb-4 flex flex-row gap-4">
             <div
          className="gap-3 self-stretch px-6 py-2 rounded-2xl border border-solid border-neutral-500"
          role="button"
          tabIndex={0}
        >
          Fan Link
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/9f25834d3a8ab098a4e0e9df8aef21f24d8c27f2eab9be50e77de4fd9c8d5103?apiKey=924a520d2ecd4a249b6d608543649168&"
          alt="Fan link icon"
          className="object-contain shrink-0 aspect-square w-[34px]"
        />
             </div>
            
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="px-20 md:px-4  md:hidden">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-12 h-1 transition-colors ${
                  index === current ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
        </div>
       

        <div className="bg-[#121214] bg-opacity-90 font-poppins ">
      <section className="px-20 md:px-4 py-8  w-full items-center flex flex-col ">
        <h2 className="text-4xl md:text-xl  font-s mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          What we do
        </h2>
        <div className="flex flex-row md:flex-col items-center justify-between md:gap-8">
          <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-left" data-aos-delay="800">
            <img src="/images/wat-1.svg" alt="Recording studio" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artist Services:</h3>
            <p className="text-[#B4B4B4] md:text-sm mb-4">
              "We offer comprehensive management services, from career development through holistic artist 
              development to marketing strategies, ensuring our artists shine in the spotlight."
            </p>
            <button className="md:text-sm bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Join Community
            </button>
          </div>
          
          <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-down" data-aos-delay="1000">
            <img src="/images/wat-2.svg" alt="Sports" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Athlete Representation:</h3>
            <p className="text-[#B4B4B4] mb-4 md:text-sm">
              "Our team is dedicated to maximizing the potential of athletes, providing guidance, 
              sponsorship negotiation, and brand development."
            </p>
            <button className="md:text-sm bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Join Community
            </button>
          </div>
          
          <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-right" data-aos-delay="1200">
            <img src="/images/wat-3.svg" alt="Merchandise" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Merchandise Development:</h3>
            <p className="text-[#B4B4B4] mb-4 md:text-sm">
              "1LaMe specializes in creating and promoting merchandise that resonates with fans 
              and enhances brand visibility."
            </p>
            <button className="md:text-sm bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Join Community
            </button>
          </div>
        </div>
      </section>

      <CTASection/>
      <Latestest/>
      <ArtistSpotlight 
       artists={artists}
      title="Featured Artists"
       autoPlayInterval={5000}
       />
       <ShopLanding/>
       <Footer/>
     
         </div>
   
      </div>
    </div>
    </div>
  );
};

export default Index;