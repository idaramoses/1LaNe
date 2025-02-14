import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { link } from 'fs';

interface Artist {
  id: number;
  name: string;
  image: string;
  description?: string;
}

interface ArtistSpotlightProps {
  artists: Artist[];
  title?: string;
  autoPlayInterval?: number;
}
interface HoverCircleProps {
  name: string;
  image?: string;
  size?: string;
  link?: string;
}

interface CircleData {
  name: string;
  image?: string;
}

class HoverCircle extends React.Component<HoverCircleProps> {
  static defaultProps = {
    size: 'w-[422px] h-[422px]',
    image: '/api/placeholder/400/400'
  };

  render() {
    const { name, image, size,link } = this.props;
    
    return (
      <div className={`relative ${size} group  font-poppins`}>
        {/* Normal State */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ease-in-out "        >
          <img
            src={image}
            alt={`${name} normal state`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-125"          />

          
        </div>
        <div 
         className="hidden absolute inset-0 rounded-full bg-black bg-opacity-60 overflow-hidden  md:flex items-center justify-center"

        >
          <div className=" flex flex-col items-center justify-center text-[#BBBBBB] ">
            <h2 className="text-3xl md:text-2xl font-normal mb-4 ">{name}</h2>
            <div className="h-[1px] w-[200px] bg-[#5E5E5E]"></div>
            <p className="text-sm md:text-xs mb-2 pt-10 ">Listen on</p>
            <p className="text-sm  md:text-xs mb-4">apple music</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <svg width="40" height="40" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5279 12.4691C13.2859 13.0281 12.9995 13.5427 12.6677 14.0157C12.2153 14.6606 11.845 15.1071 11.5596 15.3549C11.1171 15.7618 10.643 15.9702 10.1354 15.9821C9.77098 15.9821 9.33148 15.8784 8.81989 15.668C8.30663 15.4586 7.83494 15.3549 7.40364 15.3549C6.95131 15.3549 6.46619 15.4586 5.9473 15.668C5.42761 15.8784 5.00895 15.988 4.68887 15.9989C4.20207 16.0196 3.71685 15.8053 3.23252 15.3549C2.92339 15.0853 2.53674 14.6231 2.07354 13.9683C1.57657 13.2691 1.16799 12.4582 0.847902 11.5338C0.505098 10.5353 0.333252 9.56845 0.333252 8.63238C0.333252 7.56012 0.564948 6.63531 1.02903 5.86032C1.39376 5.23782 1.87898 4.74677 2.48627 4.38629C3.09356 4.0258 3.74974 3.84211 4.45638 3.83035C4.84303 3.83035 5.35008 3.94995 5.98018 4.18501C6.60851 4.42085 7.01195 4.54046 7.18884 4.54046C7.32108 4.54046 7.76926 4.40061 8.52904 4.1218C9.24753 3.86324 9.85393 3.75618 10.3507 3.79835C11.6968 3.90699 12.7082 4.43764 13.3807 5.39366C12.1768 6.12312 11.5813 7.14482 11.5931 8.4555C11.604 9.4764 11.9744 10.326 12.7022 11.0005C13.0321 11.3136 13.4005 11.5556 13.8104 11.7274C13.7215 11.9852 13.6276 12.2321 13.5279 12.4691V12.4691ZM10.4406 0.320335C10.4406 1.12052 10.1482 1.86765 9.56555 2.55918C8.86236 3.38128 8.01182 3.85633 7.08948 3.78137C7.07773 3.68537 7.07091 3.58434 7.07091 3.47817C7.07091 2.70999 7.40532 1.88789 7.99918 1.21572C8.29566 0.87538 8.67274 0.592396 9.13001 0.366654C9.58629 0.144281 10.0179 0.0213035 10.4238 0.000244141C10.4356 0.107216 10.4406 0.214195 10.4406 0.320325V0.320335Z" fill="white"/>
            </svg>
            </a>
            
          </div>
        </div>
        {/* Hover State */}
        <div 
          className="absolute inset-0 rounded-full bg-black bg-opacity-80 overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:hidden"
        >
          <div className="w-full h-full  flex flex-col items-center justify-center text-[#BBBBBB]">
            <h2 className="text-3xl font-normal mb-4 ">{name}</h2>
            <div className="h-[1px] w-[250px] bg-[#5E5E5E]"></div>
            <p className="text-sm mb-2 pt-10 ">Listen on</p>
            <p className="text-sm mb-4">apple music</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <svg width="58" height="58" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5279 12.4691C13.2859 13.0281 12.9995 13.5427 12.6677 14.0157C12.2153 14.6606 11.845 15.1071 11.5596 15.3549C11.1171 15.7618 10.643 15.9702 10.1354 15.9821C9.77098 15.9821 9.33148 15.8784 8.81989 15.668C8.30663 15.4586 7.83494 15.3549 7.40364 15.3549C6.95131 15.3549 6.46619 15.4586 5.9473 15.668C5.42761 15.8784 5.00895 15.988 4.68887 15.9989C4.20207 16.0196 3.71685 15.8053 3.23252 15.3549C2.92339 15.0853 2.53674 14.6231 2.07354 13.9683C1.57657 13.2691 1.16799 12.4582 0.847902 11.5338C0.505098 10.5353 0.333252 9.56845 0.333252 8.63238C0.333252 7.56012 0.564948 6.63531 1.02903 5.86032C1.39376 5.23782 1.87898 4.74677 2.48627 4.38629C3.09356 4.0258 3.74974 3.84211 4.45638 3.83035C4.84303 3.83035 5.35008 3.94995 5.98018 4.18501C6.60851 4.42085 7.01195 4.54046 7.18884 4.54046C7.32108 4.54046 7.76926 4.40061 8.52904 4.1218C9.24753 3.86324 9.85393 3.75618 10.3507 3.79835C11.6968 3.90699 12.7082 4.43764 13.3807 5.39366C12.1768 6.12312 11.5813 7.14482 11.5931 8.4555C11.604 9.4764 11.9744 10.326 12.7022 11.0005C13.0321 11.3136 13.4005 11.5556 13.8104 11.7274C13.7215 11.9852 13.6276 12.2321 13.5279 12.4691V12.4691ZM10.4406 0.320335C10.4406 1.12052 10.1482 1.86765 9.56555 2.55918C8.86236 3.38128 8.01182 3.85633 7.08948 3.78137C7.07773 3.68537 7.07091 3.58434 7.07091 3.47817C7.07091 2.70999 7.40532 1.88789 7.99918 1.21572C8.29566 0.87538 8.67274 0.592396 9.13001 0.366654C9.58629 0.144281 10.0179 0.0213035 10.4238 0.000244141C10.4356 0.107216 10.4406 0.214195 10.4406 0.320325V0.320335Z" fill="white"/>
</svg>
      </a>
            
          </div>
        </div>
      </div>
    );
  }
}

const ArtistSpotlight: React.FC<ArtistSpotlightProps> = ({
  artists,
  title = "Artist Spotlight",
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === circles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? circles.length - 1 : prevIndex - 1
    );
  };
  const circles = [
    { name: 'Wonu', image: '/images/Artist Spotlight 2.jpg',link:'https://music.apple.com/ng/artist/wonu/1453561198' },
    { name: 'Wahab', image: '/images/Artist Spotlight 1.JPG',link:'https://music.apple.com/ng/artist/wahab/1524152508' },
  ];
  return (
    <section id="artist" className="relative  overflow-hidden bg-black py-10 flex flex-col md:items-center ">
      {/* Title with purple gradient */}
     <h2 className="text-4xl md:text-xl mx-20  md:mt-4 mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
      Artist Spotlight
      </h2>
      {/* Desktop Layout */}

      
      <div className=" md:hidden  flex justify-center items-center gap-8  bg-black font-poppins my-10">
      {circles.map((circle, index) => (
        <HoverCircle 
          key={index}
          name={circle.name}
          image={circle.image}
          link={circle.link}
        />
      ))}
  
    </div>
    <div className="hidden w-full md:flex flex-col items-center justify-center p-4">
        <div className="relative w-full flex justify-center items-center">
          {/* Navigation Buttons */}
        
          <div className="transition-transform duration-300 ease-in-out">
            <HoverCircle 
              name={circles[currentIndex].name}
              image={circles[currentIndex].image}
              link={circles[currentIndex].link}
              size="w-60 h-60"
            />
          </div>

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {circles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;