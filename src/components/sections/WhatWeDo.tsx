import { Button } from "@/components/ui/button";

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <img src={image} alt="" className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button variant="outline">Join Community</Button>
  </div>
);

const WhatWeDo = () => {
  const services = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/12e71d0990c8cd81726a76a55d93637953ea302f9846bdafa4bdd1af50508c50?placeholderIfAbsent=true",
      title: "Artist Services",
      description: "We offer comprehensive management services, from career development through holistic artist development to marketing strategies, ensuring our artists shine in the spotlight."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/0af8b5b0d2b26da054374ce0e7b4c780e4f3b2b05bd0fef5d5ea31558488e0de?placeholderIfAbsent=true",
      title: "Athlete Representation",
      description: "Our team is dedicated to maximizing the potential of athletes, providing guidance, sponsorship negotiation, and brand development."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/239b7422998b1bf38fcae7ee36da86d8f968423550b2945c0d5d5868ec8a2fdb?placeholderIfAbsent=true",
      title: "Merchandise Development",
      description: "1LaNe specializes in creating and promoting merchandise that resonates with fans and enhances brand visibility."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">What we do</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Take your music to the next level with 1Lane
          </h3>
          <Button size="lg">Submit Songs</Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;