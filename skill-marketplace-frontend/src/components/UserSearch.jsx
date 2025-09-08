import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, User, MapPin, Star, MessageCircle, UserPlus, Filter } from 'lucide-react';

// User Item Component
const UserItem = ({ user, onMessage, onFollow }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col p-4 sm:p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-200"
    >
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-purple-400/20 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                @{user.username}
              </h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">{user.name}</p>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 mr-1" />
                <span className="text-sm">{user.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">({user.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{user.location}</span>
          </div>
          
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {user.bio}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <button
          onClick={() => onMessage(user)}
          className="flex-1 sm:flex-none px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Message</span>
        </button>
        <button
          onClick={() => onFollow(user)}
          className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>Follow</span>
        </button>
      </div>
    </motion.div>
  );
};

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('all');

  // Mock user data for demonstration
  const [users] = useState([
    {
      id: 1,
      username: 'ananya_dev',
      name: 'Ananya Singh',
      avatar: 'https://i.pravatar.cc/150?img=1',
      location: 'IIT Delhi',
      rating: 4.9,
      reviewCount: 47,
      bio: 'Full-stack developer specializing in React and Node.js. I love building innovative web applications and teaching others.',
      skills: ['React', 'Node.js', 'JavaScript', 'Python'],
      isOnline: true,
      joinedDate: '2023-08-15'
    },
    {
      id: 2,
      username: 'rohan_math',
      name: 'Rohan Patel',
      avatar: 'https://i.pravatar.cc/150?img=2',
      location: 'IIT Bombay',
      rating: 4.8,
      reviewCount: 89,
      bio: 'Mathematics tutor with 3+ years of experience. Specialized in Calculus, Statistics, and Linear Algebra.',
      skills: ['Mathematics', 'Calculus', 'Statistics', 'Tutoring'],
      isOnline: false,
      joinedDate: '2023-06-10'
    },
    {
      id: 3,
      username: 'kavya_creative',
      name: 'Kavya Menon',
      avatar: 'https://i.pravatar.cc/150?img=3',
      location: 'NIT Trichy',
      rating: 4.7,
      reviewCount: 34,
      bio: 'Creative video editor and motion graphics designer. Bringing stories to life through visual storytelling.',
      skills: ['Video Editing', 'After Effects', 'Premiere Pro', 'Motion Graphics'],
      isOnline: true,
      joinedDate: '2023-09-20'
    },
    {
      id: 4,
      username: 'ishaan_design',
      name: 'Ishaan Gupta',
      avatar: 'https://i.pravatar.cc/150?img=4',
      location: 'BITS Pilani',
      rating: 4.9,
      reviewCount: 56,
      bio: 'UI/UX Designer and Brand Specialist. Creating modern, user-friendly designs that make an impact.',
      skills: ['UI/UX Design', 'Figma', 'Branding', 'Photoshop'],
      isOnline: true,
      joinedDate: '2023-07-03'
    },
    {
      id: 5,
      username: 'priya_writer',
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?img=5',
      location: 'DU Delhi',
      rating: 4.6,
      reviewCount: 28,
      bio: 'Content writer and copywriter with expertise in technical writing, blogs, and marketing copy.',
      skills: ['Content Writing', 'Copywriting', 'SEO', 'Marketing'],
      isOnline: false,
      joinedDate: '2023-10-12'
    },
    {
      id: 6,
      username: 'arjun_data',
      name: 'Arjun Kumar',
      avatar: 'https://i.pravatar.cc/150?img=6',
      location: 'IIT Kharagpur',
      rating: 4.8,
      reviewCount: 42,
      bio: 'Data scientist and machine learning engineer. Passionate about turning data into actionable insights.',
      skills: ['Data Science', 'Python', 'Machine Learning', 'SQL'],
      isOnline: true,
      joinedDate: '2023-05-28'
    }
  ]);

  // Get unique skills for filters
  const skillOptions = useMemo(() => {
    const allSkills = users.flatMap(user => user.skills);
    return ['all', ...new Set(allSkills)];
  }, [users]);

  // Filter users based on search criteria
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSkill = selectedSkill === 'all' || 
        user.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()));
      
      return matchesSearch && matchesSkill;
    });
  }, [users, searchTerm, selectedSkill]);

  // Event handlers
  const handleMessage = useCallback((user) => {
    // TODO: Implement messaging functionality
    console.log('Message user:', user.username);
    alert(`Messaging feature will be implemented soon. Selected user: @${user.username}`);
  }, []);

  const handleFollow = useCallback((user) => {
    // TODO: Implement follow functionality
    console.log('Follow user:', user.username);
    alert(`Follow feature will be implemented soon. Selected user: @${user.username}`);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Search Users</h2>
          <p className="text-gray-400">Find and connect with talented people</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div className="md:col-span-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by username, name, or bio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Skill Filter */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full px-3 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            >
              <option value="all">All Skills</option>
              {skillOptions.slice(1).map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-gray-400">
          <span className="text-white font-semibold">{filteredUsers.length}</span> 
          {filteredUsers.length === 1 ? ' user' : ' users'} found
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Online</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Offline</span>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
            <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
              <User className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No users found</h3>
            <p className="text-gray-400 text-center">
              {searchTerm || selectedSkill !== 'all'
                ? 'Try adjusting your search criteria or filters'
                : 'Start searching to find talented people to connect with'
              }
            </p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              onMessage={handleMessage}
              onFollow={handleFollow}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserSearch;