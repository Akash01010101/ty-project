import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

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
      className="sticky top-0 z-50 backdrop-blur-lg shadow-lg"
      style={{
        backgroundColor: 'var(--bg-accent)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>SkillMarketplace</h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" onClick={handleHomeClick} className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</Link>
          <a href="#features" className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Features</a>
          <a href="#how-it-works" className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>How It Works</a>
          <a href="#testimonials" className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Testimonials</a>
          <ThemeToggle />
          <Link to="/login" className="px-4 py-2 font-bold rounded-full hover:scale-105 transform transition-all duration-300" style={{ backgroundColor: 'var(--button-primary)', color: 'var(--bg-primary)' }}>Login</Link>
          <Link to="/signup" className="px-4 py-2 font-bold rounded-full border transform transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--button-secondary)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}>Sign Up</Link>
        </nav>
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg" style={{ backgroundColor: 'var(--bg-accent)', borderTop: '1px solid var(--border-color)' }}>
          <nav className="px-6 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={handleHomeClick} className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</Link>
            <a href="#features" className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Features</a>
            <a href="#how-it-works" className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>How It Works</a>
            <a href="#testimonials" className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Testimonials</a>
            <Link to="/login" className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Login</Link>
            <Link to="/signup" className="block transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Sign Up</Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
