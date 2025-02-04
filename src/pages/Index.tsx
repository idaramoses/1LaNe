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
      description: "Zichy is a gifted artist whose music embodies love, struggle, and bliss. His deeply personal storytelling and melodic mastery captivate listeners across the globe.",
      image: "/images/Zichy.JPG"
    },
    {
      title: "1 Lift artists 'N' empower",
      subtitle: "Kaey",
      description: "Kaey is a dynamic artist known for her genre-blending sound, powerful vocals, and authentic storytelling, capturing raw emotion through every lyric and melody she creates",
      image: "/images/Kaey.JPG"
    },
    {
      title: "1 Lift artists 'N' empower",
      subtitle: "Joce C",
      description: "Court Joseph, professionally known as Joe C, is a Nigerian-born artist, singer, and songwriter renowned for his distinctive fusion of Afrobeats and Afrosoul. His sound is both refreshing and captivating, characterized by powerful vocals, melodious ad-libs, and choir-inspired backup harmonies.",
      image: "/images/Joe C.JPG"
    },
    {
      title: "1 Lift artists 'N' empower",
      subtitle: "Stovia",
      description: "Stovia is a rising star blending Afro-soul, R&B, and Afrobeats with irresistible charm. Inspired by legends like Nina Simone, she crafts timeless sounds that captivate and inspire.",
      image: "/images/Stovia.svg"
    },
    {
      title: "1 Lift artists 'N' empower",
      subtitle: "PrayzzZ",
      description: "PrayzzZ is a versatile artist with a soul-stirring sound, blending Afrobeat, R&B, Jazz and Hip-Hop influences to create music that resonates deeply with diverse audiences.",
      image: "/images/PrayzzZ .jpg"
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
      image: "/images/Artist Spotlight 1.JPG",
      description: "Description for artist 3"
    },
    {
      id: 4,
      name: "Artist 4",
      image: "/images/Artist Spotlight 2.jpg",
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
   

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="h-screen  ">
  
        
        <section className="relative h-screen mb-4 ">
        <Navigationbar/>
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
              <div className="absolute inset-0 z-20 flex items-center w-5/12 md:w-full md:items-end md:mb-10 px-20 md:px-4 md:mt-10">
              <div className="w-full flex flex-col md:justify-center md:items-center ">
            <h1 className="text-4xl mb-4 md:text-center md:text-2xl font-semibold" data-aos="fade-down" data-aos-delay="300">{slides[current].title} </h1>
            <h2 className="text-3xl mb-4 md:text-center md:text-xl mt-16 md:mt-4 " data-aos="fade-up" data-aos-delay="600">{slides[current].subtitle}</h2>
            <p className="text-gray-300 mb-6 md:text-center md:text-sm md:mx-10"  data-aos="fade-left" data-aos-delay="900">{slides[current].description}</p>
             <SocialLinks />
             <div className="mt-4 mb-4 flex flex-row gap-4">
             <div
          className="gap-3 self-stretch px-6 py-2 rounded-2xl bg-black/50 text-white flex items-center border"
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
             <div className="md:hidden mt-10">
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
          
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* Hero Content */}
     
        </div>
       

        <div className="bg-[#0a1d28] bg-opacity-90 font-poppins ">
      <section className="px-20 md:px-4 py-8  w-full items-start md:items-center flex flex-col ">
        <h2 className="text-4xl md:text-xl  font-s mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          What we do
        </h2>
        <div className="flex flex-row md:flex-col items-start justify-between md:gap-8">
          <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-left" data-aos-delay="800">
            <img src="/images/Artist Representation.jpg" alt="Recording studio" className="rounded-lg mb-4 h-[130px] w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">Artist Services:</h3>
            <p className="text-[#B4B4B4] md:text-sm mb-4">
              "We offer comprehensive management services, from career development through holistic artist 
              development to marketing strategies, ensuring our artists shine in the spotlight."
            </p>
            <button className="md:text-sm bg-transparent border border-[#787878] px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Join Community
            </button>
          </div>
          
          <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-down" data-aos-delay="1000">
          <img src="/images/Athlete representation.JPG" alt="Recording studio" className="rounded-lg mb-4 h-[130px] w-full object-cover" />
          <h3 className="text-xl font-semibold mb-2">Athlete Representation:</h3>
            <p className="text-[#B4B4B4] mb-4 md:text-sm">
              "Our team is dedicated to maximizing the potential of athletes, providing guidance, 
              sponsorship negotiation, and brand development."
            </p>
            <button className="md:text-sm bg-transparent border border-[#787878] px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Join Community
            </button>
          </div>
          
          <div className="w-3/12 md:w-full rounded-lg font-poppins"  data-aos="fade-right" data-aos-delay="1200">
          <img src="/images/1LaNe merchandise.jpg" alt="Recording studio" className="rounded-lg mb-4 h-[130px] w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">Merchandise Development:</h3>
            <p className="text-[#B4B4B4] mb-4 md:text-sm">
              "1LaMe specializes in creating and promoting merchandise that resonates with fans 
              and enhances brand visibility."
            </p>
            <button className="md:text-sm bg-transparent border border-[#787878] px-4 py-2 rounded-full hover:bg-white hover:text-black">
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