import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Filter, Search } from 'lucide-react';

// Transaction Item Component
const TransactionItem = ({ transaction }) => {
  const isIncome = transaction.type === 'income';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700/30 last:border-b-0 hover:bg-white/5 transition-colors duration-200"
    >
      <div className="flex-1 space-y-1 mb-2 sm:mb-0">
        <div className="flex items-start space-x-2">
          <div className={`mt-1 ${isIncome ? 'text-green-400' : 'text-red-400'}`}>
            {isIncome ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm sm:text-base">
              {transaction.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1">
              <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                {transaction.date}
              </div>
              <span className="text-gray-500 text-xs">
                {transaction.status}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end space-x-2">
        <span className={`font-semibold text-sm sm:text-base ${
          isIncome ? 'text-green-400' : 'text-red-400'
        }`}>
          {isIncome ? '+' : '-'}${transaction.amount}
        </span>
      </div>
    </motion.div>
  );
};

const ExpenseIncome = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock transaction data
  const [transactions] = useState([
    {
      id: 1,
      type: 'expense',
      description: 'Payment to Ananya Singh for React.js Web Development',
      amount: 25,
      date: '2024-01-18',
      status: 'completed',
      category: 'Web Development'
    },
    {
      id: 2,
      type: 'expense',
      description: 'Payment to Rohan Patel for Calculus Tutoring Session',
      amount: 20,
      date: '2024-01-20',
      status: 'completed',
      category: 'Tutoring'
    },
    {
      id: 3,
      type: 'income',
      description: 'Received payment from Sneha Rao for Python Programming Help',
      amount: 22,
      date: '2024-01-19',
      status: 'completed',
      category: 'Programming'
    },
    {
      id: 4,
      type: 'income',
      description: 'Received payment from Devansh Yadav for Video Editing',
      amount: 30,
      date: '2024-01-17',
      status: 'completed',
      category: 'Video Editing'
    },
    {
      id: 5,
      type: 'expense',
      description: 'Payment to Kavya Menon for Logo Design',
      amount: 45,
      date: '2024-01-16',
      status: 'completed',
      category: 'Design'
    },
    {
      id: 6,
      type: 'income',
      description: 'Received payment from Arjun Sharma for Website Development',
      amount: 75,
      date: '2024-01-15',
      status: 'completed',
      category: 'Web Development'
    }
  ]);

  // Filter and search transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const matchesFilter = filterType === 'all' || transaction.type === filterType;
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [transactions, filterType, searchTerm]);

  // Calculate totals
  const totals = useMemo(() => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;
    
    return { income, expenses, balance };
  }, [transactions]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Expense and Income</h2>
          <p className="text-gray-400">Track your earnings and spending</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Income</p>
              <p className="text-2xl font-bold text-green-400">${totals.income}</p>
            </div>
            <div className="p-3 bg-green-500/20 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Expenses</p>
              <p className="text-2xl font-bold text-red-400">${totals.expenses}</p>
            </div>
            <div className="p-3 bg-red-500/20 rounded-full">
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Net Balance</p>
              <p className={`text-2xl font-bold ${totals.balance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${Math.abs(totals.balance)}
              </p>
            </div>
            <div className="p-3 bg-purple-500/20 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white min-w-[120px]"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expenses</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[400px]">
        <div className="p-4 sm:p-6 border-b border-gray-700/30">
          <h3 className="text-lg font-semibold text-white">Transactions</h3>
        </div>
        
        {filteredTransactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No transactions found</h3>
            <p className="text-gray-400 text-center">
              {searchTerm || filterType !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Your transactions will appear here once you start earning or spending'
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-700/30">
            {filteredTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseIncome;