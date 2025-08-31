import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [myGigs, setMyGigs] = useState([]);
  const [myTeams, setMyTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's gigs (assuming backend filters by authenticated user)
        const gigsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/gigs/my-gigs`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        const gigsData = await gigsResponse.json();
        if (gigsResponse.ok) {
          setMyGigs(gigsData);
        }

        // Fetch user's teams
        const teamsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/teams`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        const teamsData = await teamsResponse.json();
        if (teamsResponse.ok) {
          setMyTeams(teamsData);
        }
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Gigs</h3>
          <Link to="/create-gig">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full"
            >
              Create New Gig
            </motion.button>
          </Link>
          <div className="space-y-4">
            {myGigs.map((gig) => (
              <div key={gig._id} className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white">{gig.title}</h4>
                <p className="text-gray-300">${gig.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Teams</h3>
           <Link to="/gigs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-full"
            >
              Browse Gigs & Hire
            </motion.button>
          </Link>
          <div className="space-y-4">
            {myTeams.map((team) => (
              <Link key={team._id} to={`/team/${team._id}`}>
                <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <h4 className="font-bold text-white">{team.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Manage Offers</h3>
          <Link to="/manage-offers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full"
            >
              View & Manage Offers
            </motion.button>
          </Link>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Wallet</h3>
          <Link to="/wallet">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-full"
            >
              View Wallet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
