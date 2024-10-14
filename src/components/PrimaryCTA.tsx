import React from 'react';

const PrimaryCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Grant Process?</h2>
        <div className="space-x-4">
          <button className="btn-primary bg-white text-primary hover:bg-gray-100">
            Book a Demo
          </button>
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;