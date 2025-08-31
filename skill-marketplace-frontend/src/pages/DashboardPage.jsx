import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Star, MapPin, Clock, Filter } from 'lucide-react';
import MyGigs from '../components/MyGigs';
import Portfolio from '../components/Portfolio';
import Messages from '../components/Messages';
import Orders from '../components/Orders';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Browse Gigs');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab === 'my-gigs') {
      setActiveTab('My Gigs');
    } else if (tab === 'portfolio') {
      setActiveTab('Portfolio');
    } else if (tab === 'messages') {
      setActiveTab('Messages');
    } else if (tab === 'orders') {
      setActiveTab('Orders');
    }
  }, [location.search]);
  
  // Mock data that matches the screenshot
  const gigs = [
    {
      id: 1,
      title: 'React.js Web Development',
      user: {
        name: 'Ananya Singh',
        location: 'IIT Delhi',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 4.9,
        reviews: 47
      },
      description: "I'll build responsive web applications using React, Next.js, and modern JavaScript. Perfect for student projects, portfolios, or small business...",
      price: 25,
      duration: '2-3 days',
      skills: ['React', 'JavaScript', 'Next.js', '+1']
    },
    {
      id: 2,
      title: 'Calculus & Statistics Tutoring',
      user: {
        name: 'Rohan Patel',
        location: 'IIT Bombay',
        avatar: 'https://i.pravatar.cc/150?img=2',
        rating: 4.8,
        reviews: 89
      },
      description: "One-on-one tutoring sessions for Calculus I, II, III and Statistics. I'm a Math major with 3+ years of tutoring experience.",
      price: 20,
      duration: '1 hour',
      skills: ['Math', 'Calculus', 'Statistics', '+1']
    },
    {
      id: 3,
      title: 'Professional Video Editing',
      user: {
        name: 'Kavya Menon',
        location: 'NIT Trichy',
        avatar: 'https://i.pravatar.cc/150?img=3',
        rating: 4.7,
        reviews: 34
      },
      description: "High-quality video editing for YouTube, social media, or academic projects. I use Adobe Premiere Pro and After Effects.",
      price: 30,
      duration: '1-2 days',
      skills: ['Video Editing', 'Adobe Premiere', 'After Effects']
    },
    {
      id: 4,
      title: 'Graphic Design & Branding',
      user: {
        name: 'Ishaan Gupta',
        location: 'BITS Pilani',
        avatar: 'https://i.pravatar.cc/150?img=4',
        rating: 4.9,
        reviews: 56
      },
      description: "Custom logos, business cards, and brand identity design. I specialize in modern, clean designs that make your brand stand out.",
      price: 35,
      duration: '2-4 days',
      skills: ['Logo Design', 'Branding', 'Photoshop', '+1']
    }
  ];

  const tabs = ['Browse Gigs', 'AI Picks', 'My Gigs', 'Portfolio', 'Messages', 'Orders', 'Earnings'];
  const categories = ['All Categories', 'React Development', 'Math Tutoring', 'Video Editing', 'Graphic Design', 'Data Science', 'Writing'];

  const profileStats = {
    rating: 4.8,
    totalGigs: 23,
    skills: ['React Development', 'Math Tutoring'],
    profileStrength: 96,
    marketDemand: 81,
    activeOrders: 2,
    portfolioItems: 3,
    thisMonth: 240,
    responseRate: 98
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="aurora-background"></div>
      <div className="relative z-10">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white">SkillMarketPlace</h1>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-medium">AI-Powered</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-300 text-sm">Userwhenlogin</span>
              <span className="text-gray-300 text-sm">State University</span>
              <button className="px-3 py-1 sm:px-4 sm:py-2 text-pink-400 border border-pink-400 rounded hover:bg-pink-400/10 text-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-80 space-y-4 lg:space-y-6">
            {/* Profile Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-sm border border-white/10">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white">Your Profile</h3>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-semibold text-white">{profileStats.rating}/5.0</span>
                <span className="text-gray-400 ml-1">({profileStats.totalGigs} gigs)</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Your Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {profileStats.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600">
                Edit Profile
              </button>
            </div>

            {/* AI Insights */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-sm border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Profile Strength</span>
                    <span className="text-white">{profileStats.profileStrength}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${profileStats.profileStrength}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Market Demand</span>
                    <span className="text-white">{profileStats.marketDemand}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: `${profileStats.marketDemand}%`}}></div>
                  </div>
                </div>
                <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-2">💡</span>
                    <div>
                      <p className="font-medium text-sm text-yellow-300">Top Suggestion:</p>
                      <p className="text-sm text-gray-300">Add 2-3 more portfolio projects to increase credibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-sm border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Active Orders</span>
                  <span className="font-semibold text-white">{profileStats.activeOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Portfolio Items</span>
                  <span className="font-semibold text-white">{profileStats.portfolioItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">This Month</span>
                  <span className="font-semibold text-pink-400">${profileStats.thisMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Response Rate</span>
                  <span className="font-semibold text-white">{profileStats.responseRate}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 mt-6 lg:mt-0">
            {/* Navigation Tabs */}
            <div className="flex space-x-2 sm:space-x-6 mb-4 sm:mb-6 border-b border-gray-700 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 text-sm font-medium relative whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-pink-400 border-b-2 border-pink-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                  {(tab === 'Messages' || tab === 'Orders') && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-pink-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Content based on active tab */}
            {activeTab === 'My Gigs' ? (
              <MyGigs />
            ) : activeTab === 'Portfolio' ? (
              <Portfolio />
            ) : activeTab === 'Messages' ? (
              <Messages />
            ) : activeTab === 'Orders' ? (
              <Orders />
            ) : (
              <>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search gigs, skills, or keywords..."
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="flex-1 sm:flex-none px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
    
                {/* Gigs Grid */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {gigs.map((gig) => (
                    <motion.div
                      key={gig.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-sm border border-white/10 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={gig.user.avatar}
                          alt={gig.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{gig.title}</h3>
                          <div className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-sm text-gray-300">
                            <span>{gig.user.name}</span>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              <span className="text-xs sm:text-sm">{gig.user.location}</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 mr-1" />
                              <span className="text-xs sm:text-sm">{gig.user.rating} ({gig.user.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{gig.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {gig.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-4">
                          <div className="text-left sm:text-right">
                            <div className="text-xl sm:text-2xl font-bold text-pink-400">${gig.price}</div>
                            <div className="text-xs text-gray-400 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {gig.duration}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                          <button className="px-3 sm:px-4 py-2 text-gray-300 border border-gray-600 rounded hover:bg-gray-700/50 text-sm">
                            Contact
                          </button>
                          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:from-purple-600 hover:to-pink-600 text-sm">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardPage;
