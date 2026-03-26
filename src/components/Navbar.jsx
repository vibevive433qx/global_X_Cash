import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Heart, Info, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-secondary tracking-tight">Global X <span className="text-primary text-2xl">Cash</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/exchange" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Redeem</Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Our Mission</Link>
            <Link to="/faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">FAQ</Link>
            <Link to="/exchange" className="btn-primary py-2 px-5 text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
