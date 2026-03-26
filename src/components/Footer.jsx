import React from 'react';
import { Heart, Mail, ShieldCheck, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-1 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Global X <span className="text-primary">Cash</span></span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              Global X Cash is a community-driven platform trusted by millions of users worldwide. Sponsored by an anonymous charitable organization to provide immediate cash assistance through gift card exchanges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/exchange" className="hover:text-primary transition-colors">Redeem Now</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">How it Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Trust & Security</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>SSL Secured</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>256-bit Encryption</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Verified Transfers</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Global X Cash Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
