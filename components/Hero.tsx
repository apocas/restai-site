'use client';

import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-2 sm:pb-4 md:pb-6 lg:pb-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:min-h-[600px]">
            <main className="mt-10 sm:mt-12 md:mt-16 lg:mt-0 flex items-center">
              <div className="sm:text-center lg:text-left w-full">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AI as a Service</span>{' '}
                  <span className="block text-primary-600 xl:inline">for SMBs</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Enterprise-grade AI platform with multi-tenancy, workgroups, and OpenAI-compatible APIs. 
                  Deploy text inference, RAG, image generation, audio transcription, and multimodal AI features for your business.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
            
            <div className="mt-12 lg:mt-0 flex items-center justify-center">
              <Image
                src="/restai-platform.png"
                alt="RESTai Platform Dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl object-contain w-full h-auto max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
