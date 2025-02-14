import { useState, useEffect } from "react";
import { Music, Facebook, Twitter, Instagram, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArtistProfile } from "@/components/artistProfile/ArtistProfile";
import { SocialLinks } from "@/components/artistProfile/SocialLinks";
import Navigationbar from "@/components/Navigationbar";
import Latestest from "@/components/Latest";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import CTASection from "@/components/CTA Section";
import { ShopLanding } from "@/components/shop/ShopLanding";
import { Footer } from "@/components/footer/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos';

const SLIDES = [
  {
    title: "1 Lift artists 'N' empower",
    subtitle: "Zichy",
    description: "Zichy is a gifted artist whose music embodies love, struggle, and bliss. His deeply personal storytelling and melodic mastery captivate listeners across the globe.",
    image: "/images/Zichy.JPG",
    dimage: "/images/Zichy-d.JPG",
    fansLink: "https://music.apple.com/ng/artist/zichy/1524217237"
  },
  {
    title: "1 Lift artists 'N' empower",
    subtitle: "Kaey",
    description: "Kaey is a dynamic artist known for her genre-blending sound, powerful vocals, and authentic storytelling, capturing raw emotion through every lyric and melody she creates",
    image: "/images/Kaey.JPG",
    dimage: "/images/Kaey-d.jpeg",
    fansLink: "https://music.apple.com/ng/artist/kaey/1573794665"
  },
  {
    title: "1 Lift artists 'N' empower",
    subtitle: "Joe C",
    description: "Court Joseph, professionally known as Joe C, is a Nigerian-born artist, singer, and songwriter renowned for his distinctive fusion of Afrobeats and Afrosoul. His sound is both refreshing and captivating, characterized by powerful vocals, melodious ad-libs, and choir-inspired backup harmonies.",
    image: "/images/Joe C.JPG",
    dimage: "/images/Joe C-d.jpeg",
    fansLink: "https://music.apple.com/ng/artist/joe-c/1609279957"
  },
  {
    title: "1 Lift artists 'N' empower",
    subtitle: "Stovia",
    description: "Stovia is a rising star blending Afro-soul, R&B, and Afrobeats with irresistible charm. Inspired by legends like Nina Simone, she crafts timeless sounds that captivate and inspire.",
    image: "/images/Stovia.svg",
    dimage: "/images/Stovia-d.jpeg",
    fansLink: "https://music.apple.com/ng/artist/stovia/1650194850"
  },
  {
    title: "1 Lift artists 'N' empower",
    subtitle: "PrayzzZ",
    description: "PrayzzZ is a versatile artist with a soul-stirring sound, blending Afrobeat, R&B, Jazz and Hip-Hop influences to create music that resonates deeply with diverse audiences.",
    image: "/images/PrayzzZ .jpg",
    dimage: "/images/PrayzzZ-d.jpeg",
    fansLink: "https://music.apple.com/ng/artist/prayzzz/1415098559"
  }
];
const ARTISTS = [
  // {
  //   id: 1,
  //   name: "Artist 1",
  //   image: "/images/at-1.svg",
  //   description: "Description for artist 1"
  // },
  // {
  //   id: 2,
  //   name: "Artist 2",
  //   image: "/images/at-2.svg",
  //   description: "Description for artist 2"
  // },
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
  }, 
];
const AUTO_SLIDE_INTERVAL = 5000;

const AnimatedText = ({ children, isVisible, delay = 0, className = "" }) => (
  <div
    className={`transform transition-all duration-700 ${
      isVisible 
        ? "translate-y-0 opacity-100" 
        : "translate-y-8 opacity-0"
    } ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const HeroSlide = ({ slide, isActive }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isActive]);

  return (
    <div
    
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <img
        src={slide.image}
        alt={slide.subtitle}
        className="w-full h-full object-cover  hidden md:flex"
      />
       <img
        src={slide.dimage}
        alt={slide.subtitle}
        className="w-full h-full object-cover object-top  md:hidden"
      />
      <div className="absolute inset-0 z-20 flex items-center  md:items-end md:mb-10 px-20 md:px-4 md:mt-10">
        <div className="  md:justify-center md:items-center">
          <AnimatedText 
            isVisible={isAnimating} 
            className="text-3xl mb-4 md:text-center md:text-2xl font-micromrg"
          >
            {slide.title}
          </AnimatedText>
          <div className="flex flex-col w-4/12 md:w-full md:items-center">
          <AnimatedText 
            isVisible={isAnimating} 
            delay={200}
            className="text-3xl mb-4 md:text-center md:text-xl mt-16 md:mt-4"
          >
            {slide.subtitle}
          </AnimatedText>
          
          <AnimatedText 
            isVisible={isAnimating} 
            delay={400}
            className="text-gray-300 mb-6 md:text-center md:text-sm md:mx-10"
          >
            {slide.description}
          </AnimatedText>
          
          <AnimatedText isVisible={isAnimating} delay={600}>
            <SocialLinks />
          </AnimatedText>
          
          <AnimatedText 
            isVisible={isAnimating} 
            delay={800}
            className="mt-10 mb-4"
          >
              <a href={slide.fansLink} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4 items-center bg-black text-white w-fit h-[34px] rounded-full border border-white px-4 text-[12px] font-poppins transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              Listen on Apple Music
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5279 12.4691C13.2859 13.0281 12.9995 13.5427 12.6677 14.0157C12.2153 14.6606 11.845 15.1071 11.5596 15.3549C11.1171 15.7618 10.643 15.9702 10.1354 15.9821C9.77098 15.9821 9.33148 15.8784 8.81989 15.668C8.30663 15.4586 7.83494 15.3549 7.40364 15.3549C6.95131 15.3549 6.46619 15.4586 5.9473 15.668C5.42761 15.8784 5.00895 15.988 4.68887 15.9989C4.20207 16.0196 3.71685 15.8053 3.23252 15.3549C2.92339 15.0853 2.53674 14.6231 2.07354 13.9683C1.57657 13.2691 1.16799 12.4582 0.847902 11.5338C0.505098 10.5353 0.333252 9.56845 0.333252 8.63238C0.333252 7.56012 0.564948 6.63531 1.02903 5.86032C1.39376 5.23782 1.87898 4.74677 2.48627 4.38629C3.09356 4.0258 3.74974 3.84211 4.45638 3.83035C4.84303 3.83035 5.35008 3.94995 5.98018 4.18501C6.60851 4.42085 7.01195 4.54046 7.18884 4.54046C7.32108 4.54046 7.76926 4.40061 8.52904 4.1218C9.24753 3.86324 9.85393 3.75618 10.3507 3.79835C11.6968 3.90699 12.7082 4.43764 13.3807 5.39366C12.1768 6.12312 11.5813 7.14482 11.5931 8.4555C11.604 9.4764 11.9744 10.326 12.7022 11.0005C13.0321 11.3136 13.4005 11.5556 13.8104 11.7274C13.7215 11.9852 13.6276 12.2321 13.5279 12.4691V12.4691ZM10.4406 0.320335C10.4406 1.12052 10.1482 1.86765 9.56555 2.55918C8.86236 3.38128 8.01182 3.85633 7.08948 3.78137C7.07773 3.68537 7.07091 3.58434 7.07091 3.47817C7.07091 2.70999 7.40532 1.88789 7.99918 1.21572C8.29566 0.87538 8.67274 0.592396 9.13001 0.366654C9.58629 0.144281 10.0179 0.0213035 10.4238 0.000244141C10.4356 0.107216 10.4406 0.214195 10.4406 0.320325V0.320335Z" fill="white"/>
</svg>
      </a>
          </AnimatedText>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description }) => (
  <div className="w-3/12 md:w-full rounded-lg" data-aos="fade-up">
    <img 
      src={image} 
      alt={title} 
      className="rounded-lg mb-4 h-32 w-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" 
    />
    <h3 className="text-xl font-normal mb-2">{title}</h3>
    <p className="text-[#B4B4B4] md:text-sm mb-4">
      {description}
    </p>
 
  </div>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex relative flex-col items-center justify-center bg-black text-white font-poppins">
      <div className="bg-black text-white relative">
        <div className="relative z-10">
          <div className="h-screen">
            <section  id="hero" className="relative h-screen mb-4">
              <Navigationbar />
              <div className="absolute inset-0 overflow-hidden">
                {SLIDES.map((slide, index) => (
                  <HeroSlide 
                    key={slide.subtitle} 
                    slide={slide} 
                    isActive={index === currentSlide} 
                  />
                ))}
                
                <div className="absolute bottom-8 left-20 md:hidden">
                  <div className="flex space-x-2">
                    {SLIDES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-12 h-1 transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/30'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-[#0a1d28] bg-opacity-90 font-poppins">
            <section id="about" className="px-20 md:px-4 py-8 w-full items-start md:items-center flex flex-col">
             
              <h2 className="text-4xl md:text-xl  mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            What We Do
          </h2>
              <div className="flex flex-row md:flex-col items-start justify-between md:gap-8">
                <ServiceCard
                  image="/images/Artist Representation.jpg"
                  title="Artist Services"
                  description="We offer comprehensive management services, from career development through holistic artist development to marketing strategies, ensuring our artists shine in the spotlight."
                />
                <ServiceCard
                  image="/images/Athlete representation.JPG"
                  title="Athlete Representation"
                  description="Our team is dedicated to maximizing the potential of athletes, providing guidance, sponsorship negotiation, and brand development."
                />
                <ServiceCard
                  image="/images/1LaNe merchandise.jpg"
                  title="Merchandise Development"
                  description="1LaNe specializes in creating and promoting merchandise that resonates with fans and enhances brand visibility."
                />
              </div>
            </section>

            <CTASection />
            <Latestest />
            <ArtistSpotlight 
              artists={ARTISTS}
              title="Featured Artists"
              autoPlayInterval={AUTO_SLIDE_INTERVAL}
            />
            <ShopLanding />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;