import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">SkillMarketplace</h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" onClick={handleHomeClick} className="text-gray-300 hover:text-white">Home</Link>
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a>
          <Link to="/login" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transform transition-colors duration-300">Sign Up</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg">
          <nav className="px-6 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={handleHomeClick} className="block text-gray-300 hover:text-white">Home</Link>
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-white">How It Works</a>
            <a href="#testimonials" className="block text-gray-300 hover:text-white">Testimonials</a>
            <Link to="/login" className="block text-gray-300 hover:text-white">Login</Link>
            <Link to="/signup" className="block text-gray-300 hover:text-white">Sign Up</Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
