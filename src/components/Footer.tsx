import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Metablik</h3>
            <p className="mb-6">Revolutionizing university grant management</p>
            <button className="btn-primary">
              Book a Demo Today
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary" />
                <a href="mailto:info@metablik.com" className="hover:text-secondary transition duration-300">info@metablik.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <a href="tel:+1234567890" className="hover:text-secondary transition duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-secondary" />
                <a href="https://www.metablik.com" className="hover:text-secondary transition duration-300">www.metablik.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Metablik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;