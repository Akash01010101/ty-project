import React from 'react';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl w-full max-w-md text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to Your Dashboard!
          </span>
        </h2>
        <p className="text-gray-300 text-lg">
          This is a dummy dashboard. You have successfully logged in.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300"
        >
          Explore Features
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
