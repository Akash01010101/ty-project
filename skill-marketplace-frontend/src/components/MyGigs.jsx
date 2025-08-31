import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Star, Edit, Trash2, Eye } from 'lucide-react';

const MyGigs = () => {
  const [userGigs, setUserGigs] = useState([]);

  // Load gigs from localStorage on component mount
  useEffect(() => {
    const loadGigs = () => {
      const savedGigs = JSON.parse(localStorage.getItem('userGigs') || '[]');
      setUserGigs(savedGigs);
    };
    
    loadGigs();
    
    // Listen for storage changes (when new gigs are created)
    const handleStorageChange = () => {
      loadGigs();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Mock user profile data
  const userProfile = {
    rating: 4.8,
    totalGigs: 23,
    skills: ['React Development', 'Math Tutoring']
  };

  const handleDeleteGig = (gigId) => {
    const updatedGigs = userGigs.filter(gig => gig.id !== gigId);
    setUserGigs(updatedGigs);
    localStorage.setItem('userGigs', JSON.stringify(updatedGigs));
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
        <Plus className="w-12 h-12 text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">You haven't created any gigs yet.</h3>
      <p className="text-gray-400 text-center mb-8">Start by creating your first gig to begin earning!</p>
      <Link to="/create-gig">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
        >
          Create Your First Gig
        </motion.button>
      </Link>
    </div>
  );

  const GigCard = ({ gig }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-200"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{gig.title}</h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{gig.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {gig.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:items-end space-y-2">
          <div className="text-2xl font-bold text-pink-400">${gig.price}</div>
          <div className="flex items-center text-sm text-gray-400">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{gig.rating} ({gig.reviews} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
          <span>Status: <span className={`${gig.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>{gig.status}</span></span>
          <span>Orders: {gig.orders}</span>
          <span>Created: {gig.createdAt}</span>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded transition-all duration-200">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded transition-all duration-200">
            <Edit className="w-4 h-4" />
          </button>
          <button 
            onClick={() => handleDeleteGig(gig.id)}
            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">My Gigs</h2>
          <p className="text-gray-400">Manage your gigs and track performance</p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-200 text-sm border border-purple-500/30">
            <span className="flex items-center justify-center">
              <span className="mr-2">✨</span>
              AI Optimize
            </span>
          </button>
          
          <Link to="/create-gig" className="w-full sm:w-auto">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium">
              <span className="flex items-center justify-center">
                <Plus className="w-4 h-4 mr-2" />
                Create New Gig
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      {userGigs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-white">{userGigs.length}</div>
            <div className="text-gray-400 text-sm">Active Gigs</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-pink-400">
              {userGigs.reduce((total, gig) => total + gig.orders, 0)}
            </div>
            <div className="text-gray-400 text-sm">Total Orders</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-green-400">
              ${userGigs.reduce((total, gig) => total + (gig.price * gig.orders), 0)}
            </div>
            <div className="text-gray-400 text-sm">Total Earnings</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-yellow-400">{userProfile.rating}</div>
            <div className="text-gray-400 text-sm">Avg Rating</div>
          </div>
        </div>
      )}

      {/* Gigs Content */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[400px]">
        {userGigs.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="p-6 space-y-4">
            {userGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGigs;