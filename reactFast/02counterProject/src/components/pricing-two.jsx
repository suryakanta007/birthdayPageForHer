import React, { useState } from 'react';

const PricingTwo = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingPlans = [
    {
      name: 'Hobby',
      description: 'The essentials to provide your best work for clients.',
      price: isAnnual ? '$15' : '$19',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics'
      ],
      isPopular: false
    },
    {
      name: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      price: isAnnual ? '$23' : '$29',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time'
      ],
      isPopular: true
    },
    {
      name: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      price: isAnnual ? '$47' : '$59',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations'
      ],
      isPopular: false
    },
    {
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      price: isAnnual ? '$79' : '$99',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Pricing Plans</h1>
          <h2 className="text-xl text-indigo-600 mb-4">Simple, transparent pricing that grows with you</h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Choose an affordable plan that's packed with the best features for engaging your audience, 
            creating customer loyalty, and driving sales.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-indigo-100">
            <button 
              className={`px-6 py-2 rounded-full font-medium ${!isAnnual ? 'text-white bg-indigo-600' : 'text-indigo-700 hover:bg-indigo-50'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full font-medium ${isAnnual ? 'text-white bg-indigo-600' : 'text-indigo-700 hover:bg-indigo-50'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually <span className="text-indigo-300">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.isPopular ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  </div>
                  {plan.isPopular && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                  {isAnnual && (
                    <p className="text-sm text-gray-500 mt-1">billed annually</p>
                  )}
                </div>
                <button 
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 mb-6 ${
                    plan.isPopular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  }`}
                >
                  Get started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <svg 
                        className="flex-shrink-0 w-5 h-5 mr-2 text-indigo-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTwo;