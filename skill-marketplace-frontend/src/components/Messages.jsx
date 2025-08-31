import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Search, MoreVertical, Paperclip, Smile } from 'lucide-react';

// Message Item Component
const MessageItem = ({ message, isSelected, onClick }) => (
  <motion.div
    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
    onClick={() => onClick(message)}
    className={`p-4 border-b border-gray-700/50 cursor-pointer transition-all duration-200 ${
      isSelected ? 'bg-purple-500/20 border-purple-400/50' : 'hover:bg-white/5'
    }`}
  >
    <div className="flex items-start space-x-3">
      <div className="relative">
        <img
          src={message.avatar}
          alt={message.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {message.isOnline && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-white font-medium truncate">{message.name}</h3>
          <span className="text-gray-400 text-xs">{message.time}</span>
        </div>
        
        <p className="text-gray-300 text-sm truncate mb-1">{message.lastMessage}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{message.project}</span>
          {message.unreadCount > 0 && (
            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
              {message.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// Chat Message Component
const ChatMessage = ({ message, isOwnMessage }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex mb-4 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
  >
    <div className={`max-w-[70%] ${isOwnMessage ? 'order-2' : 'order-1'}`}>
      <div
        className={`px-4 py-2 rounded-2xl ${
          isOwnMessage
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            : 'bg-gray-700/50 text-gray-200'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
      <div className={`flex items-center mt-1 space-x-2 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
        <span className="text-xs text-gray-500">{message.time}</span>
        {isOwnMessage && message.status && (
          <span className="text-xs text-gray-400">{message.status}</span>
        )}
      </div>
    </div>
    
    {!isOwnMessage && (
      <img
        src={message.avatar}
        alt={message.senderName}
        className="w-8 h-8 rounded-full object-cover order-1 mr-2"
      />
    )}
  </motion.div>
);

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Mock messages data
  const [messages] = useState([
    {
      id: 1,
      name: 'Ananya Singh',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Thank you for the quick delivery! The website looks amazing.',
      time: '2m ago',
      project: 'React.js Web Development',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      name: 'Rohan Patel',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Can we schedule the next tutoring session for tomorrow?',
      time: '15m ago',
      project: 'Calculus Tutoring',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 3,
      name: 'Kavya Menon',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'I have uploaded the final video. Please review it.',
      time: '1h ago',
      project: 'Video Editing',
      unreadCount: 1,
      isOnline: true
    },
    {
      id: 4,
      name: 'Ishaan Gupta',
      avatar: 'https://i.pravatar.cc/150?img=4',
      lastMessage: 'The logo designs are ready for your feedback.',
      time: '2h ago',
      project: 'Graphic Design',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 5,
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMessage: 'When can we start the data analysis project?',
      time: '1d ago',
      project: 'Data Science',
      unreadCount: 3,
      isOnline: true
    }
  ]);

  // Mock chat data for selected message
  const getMockChatMessages = useCallback((messageId) => {
    const mockChats = {
      1: [
        {
          id: 1,
          text: "Hi! I'm interested in your React.js development service.",
          time: "10:30 AM",
          isOwnMessage: false,
          senderName: "Ananya Singh",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
          id: 2,
          text: "Hello! I'd be happy to help you with your React project. Can you tell me more about what you need?",
          time: "10:32 AM",
          isOwnMessage: true,
          status: "Read"
        },
        {
          id: 3,
          text: "I need a responsive e-commerce website with user authentication and payment integration.",
          time: "10:35 AM",
          isOwnMessage: false,
          senderName: "Ananya Singh",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
          id: 4,
          text: "That sounds like a great project! I can definitely help you with that. The estimated timeline would be 2-3 weeks for a complete solution.",
          time: "10:37 AM",
          isOwnMessage: true,
          status: "Read"
        },
        {
          id: 5,
          text: "Perfect! What would be the cost for this project?",
          time: "10:40 AM",
          isOwnMessage: false,
          senderName: "Ananya Singh",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
          id: 6,
          text: "For a complete e-commerce solution with all the features you mentioned, it would be $800-1200 depending on the complexity. Should we discuss this further?",
          time: "10:42 AM",
          isOwnMessage: true,
          status: "Read"
        },
        {
          id: 7,
          text: "Thank you for the quick delivery! The website looks amazing.",
          time: "2:15 PM",
          isOwnMessage: false,
          senderName: "Ananya Singh",
          avatar: "https://i.pravatar.cc/150?img=1"
        }
      ],
      2: [
        {
          id: 1,
          text: "Hello! I saw your calculus tutoring gig. Are you available this week?",
          time: "Yesterday",
          isOwnMessage: false,
          senderName: "Rohan Patel",
          avatar: "https://i.pravatar.cc/150?img=2"
        },
        {
          id: 2,
          text: "Hi! Yes, I'm available. What topics do you need help with?",
          time: "Yesterday",
          isOwnMessage: true,
          status: "Read"
        }
      ]
    };
    return mockChats[messageId] || [];
  }, []);

  const handleMessageSelect = useCallback((message) => {
    setSelectedMessage(message);
    setChatMessages(getMockChatMessages(message.id));
  }, [getMockChatMessages]);

  const handleSendMessage = useCallback((e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedMessage) return;

    const newChatMessage = {
      id: Date.now(),
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwnMessage: true,
      status: "Sent"
    };

    setChatMessages(prev => [...prev, newChatMessage]);
    setNewMessage('');
  }, [newMessage, selectedMessage]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleMessageInputChange = useCallback((e) => {
    setNewMessage(e.target.value);
  }, []);

  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedMessage) {
    return (
      <div className="space-y-6">
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSelectedMessage(null)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="relative">
              <img
                src={selectedMessage.avatar}
                alt={selectedMessage.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {selectedMessage.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
              )}
            </div>
            
            <div>
              <h3 className="text-white font-medium">{selectedMessage.name}</h3>
              <p className="text-gray-400 text-sm">{selectedMessage.project}</p>
            </div>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[400px] max-h-[500px] overflow-y-auto p-4">
          {chatMessages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">No messages yet. Start the conversation!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {chatMessages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isOwnMessage={message.isOwnMessage}
                />
              ))}
            </div>
          )}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-end space-x-3">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={handleMessageInputChange}
                placeholder="Type your message..."
                rows={2}
                autoComplete="off"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
            </div>
            
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>
            
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Messages</h2>
          <p className="text-gray-400">Connect with clients and manage conversations</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={handleSearchChange}
          autoComplete="off"
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
        />
      </div>

      {/* Messages List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[500px]">
        {filteredMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No messages found</h3>
            <p className="text-gray-400 text-center">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-700/50">
            {filteredMessages.map((message) => (
              <MessageItem
                key={message.id}
                message={message}
                isSelected={selectedMessage?.id === message.id}
                onClick={handleMessageSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
