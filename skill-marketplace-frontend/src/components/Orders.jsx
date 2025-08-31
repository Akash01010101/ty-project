import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, User, CheckCircle, Clock, AlertCircle, X } from 'lucide-react';

// Order Card Component
const OrderCard = ({ order, onApproveOrder, onRejectOrder }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-blue-400';
      case 'pending':
        return 'text-yellow-400';
      case 'approved':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-200"
    >
      <div className="space-y-4">
        {/* Order Title and Client */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{order.title}</h3>
          <div className="flex items-center text-gray-300">
            <User className="w-4 h-4 mr-2" />
            <span className="text-sm">Current User - {order.clientName}</span>
          </div>
        </div>

        {/* Order Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              <DollarSign className="w-4 h-4 mr-2" />
              <span className="text-sm">Amount:</span>
            </div>
            <span className="text-pink-400 font-semibold">${order.amount}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              {getStatusIcon(order.status)}
              <span className="text-sm ml-2">Status:</span>
            </div>
            <span className={`text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
              {order.status.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">Order Date:</span>
            </div>
            <span className="text-gray-300 text-sm">{order.orderDate}</span>
          </div>
        </div>

        {/* Action Buttons */}
        {order.status === 'pending' && (
          <div className="pt-4 border-t border-gray-700/50">
            {order.isApproved ? (
              <div className="flex items-center justify-center py-2">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Order Approved</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => onApproveOrder(order.id)}
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm"
                >
                  Approve Order
                </button>
                <button
                  onClick={() => onRejectOrder(order.id)}
                  className="flex-1 py-2 px-4 bg-red-500/20 text-red-400 border border-red-500/50 font-medium rounded-lg hover:bg-red-500/30 hover:border-red-400 transition-all duration-200 text-sm flex items-center justify-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Reject Order
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'React.js Web Development',
      clientName: 'Ananya Singh',
      amount: 25,
      status: 'completed',
      orderDate: '2024-01-15',
      isApproved: false
    },
    {
      id: 2,
      title: 'Calculus Tutoring Session',
      clientName: 'Rohan Patel',
      amount: 20,
      status: 'in-progress',
      orderDate: '2024-01-20',
      isApproved: false
    },
    {
      id: 3,
      title: 'Logo Design Package',
      clientName: 'Ishaan Gupta',
      amount: 45,
      status: 'pending',
      orderDate: '2024-01-22',
      isApproved: false
    },
    {
      id: 4,
      title: 'Video Editing Project',
      clientName: 'Kavya Menon',
      amount: 35,
      status: 'pending',
      orderDate: '2024-01-25',
      isApproved: false
    },
    {
      id: 5,
      title: 'Data Analysis Report',
      clientName: 'Priya Sharma',
      amount: 60,
      status: 'completed',
      orderDate: '2024-01-18',
      isApproved: false
    }
  ]);

  const handleApproveOrder = useCallback((orderId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, isApproved: true }
          : order
      )
    );
  }, []);

  const handleRejectOrder = useCallback((orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  }, []);

  const getOrderStats = () => {
    const completed = orders.filter(order => order.status === 'completed').length;
    const inProgress = orders.filter(order => order.status === 'in-progress').length;
    const pending = orders.filter(order => order.status === 'pending').length;
    const totalEarnings = orders
      .filter(order => order.status === 'completed')
      .reduce((sum, order) => sum + order.amount, 0);

    return { completed, inProgress, pending, totalEarnings };
  };

  const stats = getOrderStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Orders</h2>
          <p className="text-gray-400">Manage your client orders and track progress</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="text-2xl font-bold text-blue-400">{stats.inProgress}</div>
          <div className="text-gray-400 text-sm">In Progress</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
          <div className="text-gray-400 text-sm">Pending</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="text-2xl font-bold text-pink-400">${stats.totalEarnings}</div>
          <div className="text-gray-400 text-sm">Earned</div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[400px]">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No orders yet</h3>
            <p className="text-gray-400 text-center">Your client orders will appear here once you start receiving them</p>
          </div>
        ) : (
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onApproveOrder={handleApproveOrder}
                  onRejectOrder={handleRejectOrder}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;