import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Filter } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Browse Gigs');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-bold text-orange-500">SkillMarketPlace</h1>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">AI-Powered</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-600 text-sm">Userwhenlogin</span>
              <span className="text-gray-600 text-sm">State University</span>
              <button className="px-3 py-1 sm:px-4 sm:py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-50 text-sm">
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
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Your Profile</h3>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-semibold">{profileStats.rating}/5.0</span>
                <span className="text-gray-500 ml-1">({profileStats.totalGigs} gigs)</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Your Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {profileStats.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
                Edit Profile
              </button>
            </div>

            {/* AI Insights */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile Strength</span>
                    <span>{profileStats.profileStrength}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${profileStats.profileStrength}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Market Demand</span>
                    <span>{profileStats.marketDemand}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: `${profileStats.marketDemand}%`}}></div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-yellow-500 mr-2">💡</span>
                    <div>
                      <p className="font-medium text-sm">Top Suggestion:</p>
                      <p className="text-sm text-gray-600">Add 2-3 more portfolio projects to increase credibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Orders</span>
                  <span className="font-semibold">{profileStats.activeOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio Items</span>
                  <span className="font-semibold">{profileStats.portfolioItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold text-orange-500">${profileStats.thisMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="font-semibold">{profileStats.responseRate}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 mt-6 lg:mt-0">
            {/* Navigation Tabs */}
            <div className="flex space-x-2 sm:space-x-6 mb-4 sm:mb-6 border-b overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 text-sm font-medium relative whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {(tab === 'Messages' || tab === 'Orders') && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search gigs, skills, or keywords..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 sm:flex-none px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={gig.user.avatar}
                      alt={gig.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{gig.title}</h3>
                      <div className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-sm text-gray-600">
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
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {gig.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="text-left sm:text-right">
                        <div className="text-xl sm:text-2xl font-bold text-orange-500">${gig.price}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {gig.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                      <button className="px-3 sm:px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                        Contact
                      </button>
                      <button className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm">
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
