import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const ArtistSpotlight: React.FC<ArtistSpotlightProps> = ({
  artists,
  title = "Artist Spotlight",
  autoPlayInterval = 5000,
}) => {
  // Mobile carousel state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Desktop layout is now divided into specific sections:
  // - Left column: 2 small images
  // - Center: 1 large image
  // - Right column: 2 small images
  const desktopLayout = {
    leftColumn: artists.slice(0, 2),
    centerImage: artists[2],
    centerImage2: artists[3],
    rightColumn: artists.slice(4, 6)
  };

  
  
  // Handle automatic slideshow with cleanup
  useEffect(() => {
    const timer = setInterval(handleNextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentSlide, autoPlayInterval]);

  // Navigation functions for the carousel
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artists.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artists.length) % artists.length);
  };

  // Function to handle manual slide selection from indicators
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate transform value for carousel movement
  const getSlideStyles = () => ({
    transform: `translateX(-${currentSlide * 100}%)`,
  });

  return (
    <section className="relative  overflow-hidden bg-black py-10 md:py-6 ">
      {/* Title with purple gradient */}
      <h2 className="text-4xl md:text-xl mx-20  md:mt-4 mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
      Artist Spotlight
      </h2>

      {/* Desktop Layout */}

      <div className="md:hidden flex justify-center items-center gap-20 mb-16">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {desktopLayout.leftColumn.map((artist, index) => (
            <div 
              key={artist.id}
              className="w-32 h-32 rounded-full overflow-hidden"
              data-aos="fade-right"
              data-aos-delay={200 * (index + 1)}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Center Large Image */}
        <div 
          className="w-96 h-96 rounded-full overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={desktopLayout.centerImage?.image}
            alt={desktopLayout.centerImage?.name}
            className="w-full h-full object-cover"
          />
         
        </div>
        <div 
          className="w-96 h-96 rounded-full overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
         
          <img
            src={desktopLayout.centerImage2?.image}
            alt={desktopLayout.centerImage2?.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {desktopLayout.rightColumn.map((artist, index) => (
            <div 
              key={artist.id}
              className="w-32 h-32 rounded-full overflow-hidden"
              data-aos="fade-left"
              data-aos-delay={200 * (index + 3)}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
            style={getSlideStyles()}
          >
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        {/* <button
          onClick={handlePrevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full z-10"
          aria-label="Previous artist"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full z-10"
          aria-label="Next artist"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button> */}

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {artists.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-1 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;