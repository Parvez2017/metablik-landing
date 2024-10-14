import React from 'react';
import { CheckCircle } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose GrantEase?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <CheckCircle className="text-secondary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eliminate Manual Processes</h3>
            <p className="text-gray-600">Say goodbye to paperwork and hello to efficient, automated workflows.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <CheckCircle className="text-secondary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enhance Transparency</h3>
            <p className="text-gray-600">Gain full visibility into your grant management process from start to finish.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <CheckCircle className="text-secondary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Long-Term Success</h3>
            <p className="text-gray-600">Measure the impact of your grants with comprehensive reporting tools.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;