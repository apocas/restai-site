'use client';

import { 
  Brain, 
  MessageSquare, 
  Image, 
  Mic, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Settings,
  BarChart3
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Text Inference',
      description: 'Advanced natural language processing with support for multiple models and custom fine-tuning capabilities.'
    },
    {
      icon: Brain,
      title: 'RAG (Retrieval-Augmented Generation)',
      description: 'Combine your knowledge base with AI to provide contextually accurate and up-to-date responses.'
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals with state-of-the-art image generation models integrated into your workflow.'
    },
    {
      icon: Mic,
      title: 'Audio Transcription',
      description: 'Convert speech to text with high accuracy across multiple languages and audio formats.'
    },
    {
      icon: Globe,
      title: 'Multimodal AI',
      description: 'Process and understand content across text, images, audio, and video in a unified platform.'
    },
    {
      icon: Users,
      title: 'Multi-Tenancy',
      description: 'Complete workgroup isolation with project-level permissions and resource management.'
    },
    {
      icon: Shield,
      title: 'AI Agents with MCP Support',
      description: 'Deploy intelligent agents with Model Context Protocol support for seamless integration and enhanced workflow automation.'
    },
    {
      icon: Zap,
      title: 'OpenAI Compatible',
      description: 'Drop-in replacement for OpenAI APIs with seamless integration and familiar endpoints.'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Organize AI features into projects with custom configurations and team collaboration tools.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive usage analytics, performance monitoring, and cost optimization insights.'
    }
  ];

  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for AI integration
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            RESTai provides a comprehensive suite of AI capabilities designed specifically for small and medium businesses.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">OpenAI API Compatible</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Seamlessly migrate from OpenAI or integrate RESTai into your existing applications. 
              Our API maintains full compatibility with OpenAI's interface while providing enhanced features and better cost control.
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm text-left max-w-2xl mx-auto">
              <div className="text-gray-500"># Simply change your endpoint</div>
              <div>curl https://api.restai.com/v1/chat/completions \</div>
              <div className="ml-4">-H "Authorization: Bearer $RESTAI_API_KEY" \</div>
              <div className="ml-4">-H "Content-Type: application/json" \</div>
              <div className="ml-4">-d '{`{"model": "gpt-4", "messages": [...]}`}'</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
