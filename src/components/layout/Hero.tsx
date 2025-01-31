import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Music2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#222222] min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gray-400">1 Lift</span>{" "}
            <span className="text-white">artists</span> 'N' empower
          </h1>
          
          <h2 className="text-5xl font-bold text-white mb-4">Zichy</h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            After careful consideration and review of all applications, we regret to inform 
            you that we have decided to move forward with other candidates whose 
            qualifications more closely align with our current needs for the role.
          </p>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Music2 size={24} />
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Fan Link
            </Button>
            <img 
              src="/lovable-uploads/e244178e-b7aa-4d01-b99e-43d283d1d998.png" 
              alt="Spotify" 
              className="h-10 w-10"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full flex gap-2 p-4">
        <div className="h-1 w-16 bg-white rounded"></div>
        <div className="h-1 w-4 bg-gray-600 rounded"></div>
        <div className="h-1 w-4 bg-gray-600 rounded"></div>
        <div className="h-1 w-4 bg-gray-600 rounded"></div>
      </div>
    </section>
  );
};

export default Hero;