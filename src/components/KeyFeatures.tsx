import React from 'react';
import { CheckCircle } from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const features = [
    'Streamlined Application Management',
    'Customizable Workflows',
    'Grant Lifecycle Tracking',
    'Advanced Reporting',
    'Seamless Integration'
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Key Features</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-secondary w-6 h-6 mr-4 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="GrantEase Features"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="text-center mt-16">
          <button className="btn-primary">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;