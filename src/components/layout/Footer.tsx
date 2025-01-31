import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sidebar text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>Artistic Services</li>
                <li>Athlete Representation</li>
                <li>Merchandise Development</li>
                <li>Sync Licensing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Information</h3>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Career</li>
                <li>Contact us</li>
                <li>1Lane</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Subscribe</h3>
            <div className="flex gap-4 mb-6">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border-white/20"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-gray-300">
              Hello, we are 1Lane. We provide strategic distribution solutions for music 
              and other content, ensuring that our artists' work reaches the widest 
              audience possible across all major platforms.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">1Lane</div>
          
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
          
          <div className="text-sm text-gray-300">
            © 2024 1lane LTD. Elevating Talent, Building Future
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;