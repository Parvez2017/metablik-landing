import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="text-primary w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-primary">Metablik</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
            <li><a href="#success-stories" className="text-gray-600 hover:text-primary">Success Stories</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-primary">FAQ</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        <button className="btn-primary">
          Book a Demo
        </button>
      </div>
    </header>
  );
};

export default Header;