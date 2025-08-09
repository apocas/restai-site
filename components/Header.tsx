'use client';

import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Image
                src="/restai-logo.png"
                alt="RESTai"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold text-gray-700">RESTai</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#docs" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Documentation
              </a>
              <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                Get Started
              </a>
            </div>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#features" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#docs" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Documentation
            </a>
            <a href="#contact" className="bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 mx-3">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
