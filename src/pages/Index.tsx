import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import LatestNews from "@/components/sections/LatestNews";
import ArtistSpotlight from "@/components/sections/ArtistSpotlight";
import ShopSection from "@/components/sections/ShopSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <LatestNews />
        <ArtistSpotlight />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;