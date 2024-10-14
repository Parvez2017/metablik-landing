import React from 'react';
import { Workflow, Users, Lock } from 'lucide-react';

const FeaturesAndBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Features & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <Workflow className="text-accent w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
            <p className="text-gray-600">Streamline your processes and save time with intelligent automation.</p>
          </div>
          <div className="text-center">
            <Users className="text-accent w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Centralized Collaboration</h3>
            <p className="text-gray-600">Bring your team together in one place for seamless communication.</p>
          </div>
          <div className="text-center">
            <Lock className="text-accent w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Role-Based Access Control</h3>
            <p className="text-gray-600">Ensure data security with granular permissions and user roles.</p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn-primary">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;