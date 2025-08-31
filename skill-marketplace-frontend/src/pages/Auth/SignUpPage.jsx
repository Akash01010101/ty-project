import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    classYear: '',
    course: '',
    skills: '',
  });

  const { name, email, password, college, classYear, course, skills } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          college,
          classYear,
          course,
          skills: skills.split(',').map(s => s.trim()), // Split skills by comma
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful', data);
        localStorage.setItem('token', data.token); // Store token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        console.error('Registration failed', data);
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sign Up
          </span>
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="college">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={college}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="classYear">
              Class Year
            </label>
            <select
              id="classYear"
              name="classYear"
              value={classYear}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            >
              <option value="">Select Class Year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="fourth">Fourth Year</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="course">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={course}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="skills">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={skills}
              onChange={onChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;

