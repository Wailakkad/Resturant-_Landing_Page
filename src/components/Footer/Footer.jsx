import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Main Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Contact</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Stay Updated</h3>
        <p className="text-sm">Subscribe to our newsletter for the latest updates.</p>
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-t-md sm:rounded-t-none sm:rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button className="bg-[#fca311] px-4 py-2 rounded-b-md sm:rounded-b-none sm:rounded-r-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Social Links & Copyright */}
    <div className="pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-2 text-center">
          <span>Made with</span>
          <Heart size={16} className="text-red-500" />
          <span>© {currentYear} Your Company. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;