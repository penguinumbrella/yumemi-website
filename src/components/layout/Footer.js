import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, QUICK_LINKS, CONTACT_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Yumemi</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A dreamy mobile world for collaborative roleplay and storytelling. 
              Join our community of creative storytellers and roleplayers.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📱</span>
              <span className="text-gray-300">iOS Only • Android Coming Soon</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                Built with ❤️ by <span className="text-white font-medium">{CONTACT_INFO.developer}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>{CONTACT_INFO.copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 