import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sidebar py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-white">1LaNe</Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/music" className="text-white hover:text-gray-300">Music</Link>
            <Link to="/sport" className="text-white hover:text-gray-300">Sport</Link>
            <Link to="/merch" className="text-white hover:text-gray-300">Merch</Link>
            <Link to="/new-release" className="text-white hover:text-gray-300">New Release</Link>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
          </div>
        </div>
        
        <Link 
          to="/submit-songs" 
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Submit Songs
        </Link>
      </nav>
    </header>
  );
};

export default Header;