import { Button } from "@/components/ui/button";

const ServiceCard = ({ image, title, description }: { 
  image: string; 
  title: string; 
  description: string;
}) => (
  <div className="bg-transparent text-white">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-6 rounded-lg" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <Button 
      variant="outline" 
      className="text-white border-white hover:bg-white hover:text-black transition-colors"
    >
      Join Community
    </Button>
  </div>
);

const WhatWeDo = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Artist Services:",
      description: "We offer comprehensive management services, from career development through holistic artist development to marketing strategies, ensuring our artists shine in the spotlight."
    },
    {
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      title: "Athlete Representation:",
      description: "Our team is dedicated to maximizing the potential of athletes, providing guidance, sponsorship negotiation, and brand development."
    },
    {
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      title: "Merchandise Development:",
      description: "1LaNe specializes in creating and promoting merchandise that resonates with fans and enhances brand visibility."
    }
  ];

  return (
    <section className="py-20 bg-[#222222]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          What we do
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;