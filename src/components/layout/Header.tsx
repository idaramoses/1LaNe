import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-white">1LaNe</Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/music" className="text-white hover:text-gray-300 transition-colors">Music</Link>
            <Link to="/sport" className="text-white hover:text-gray-300 transition-colors">Sport</Link>
            <Link to="/merch" className="text-white hover:text-gray-300 transition-colors">Merch</Link>
            <Link to="/new-release" className="text-white hover:text-gray-300 transition-colors">New Release</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </div>
        
        <Link 
          to="/submit-songs" 
          className="bg-[#6366F1] text-white px-6 py-2 rounded-full hover:bg-[#6366F1]/90 transition-colors"
        >
          Submit Songs
        </Link>
      </nav>
    </header>
  );
};

export default Header;