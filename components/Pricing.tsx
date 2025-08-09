'use client';

import { Check, X } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started with AI',
      features: [
        '10,000 API calls/month',
        '2 workgroups',
        '5 projects per workgroup',
        'Text inference & RAG',
        'Email support',
        'Basic analytics'
      ],
      notIncluded: [
        'Image generation',
        'Audio transcription',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with diverse AI needs',
      features: [
        '100,000 API calls/month',
        '10 workgroups',
        'Unlimited projects',
        'All AI features included',
        'Priority support',
        'Advanced analytics',
        'Custom model fine-tuning',
        'API rate limiting controls'
      ],
      notIncluded: [
        'On-premise deployment'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific requirements',
      features: [
        'Custom API limits',
        'Unlimited workgroups',
        'Unlimited projects',
        'All AI features included',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantees',
        'Advanced security features',
        'Custom model training'
      ],
      notIncluded: [],
      popular: false
    }
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features and OpenAI compatibility.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-primary-600' : ''}`}>
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-500">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-base font-medium text-gray-500">{plan.period}</span>
                  </div>
                  <a
                    href="#contact"
                    className={`mt-6 block w-full text-center px-6 py-3 border border-transparent rounded-md text-base font-medium ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    } transition-colors`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
                <div className="px-6 pb-8">
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                    What's included
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                        <span className="ml-3 text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <X className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                        <span className="ml-3 text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer flexible pricing for high-volume usage, special integrations, and custom deployments. 
              Contact our sales team to discuss your specific requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
