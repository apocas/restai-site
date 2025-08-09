'use client';

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/restai-logo.png"
                  alt="RESTai"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
                <h2 className="text-2xl font-bold text-white">RESTai</h2>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                AI as a Service for SMBs
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#contact" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-base text-gray-400">
              &copy; 2025 RESTai. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              Built by the same team that created{' '}
              <a 
                href="https://github.com/apocas/dockerode" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                dockerode
              </a>
              {' '}with 5k+ stars on GitHub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
