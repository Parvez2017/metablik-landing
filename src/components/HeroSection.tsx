import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Grant Management Process</h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Empower students, streamline processes, and measure impact with our comprehensive tool</p>
        <div className="flex justify-center space-x-4">
          <button className="btn-primary bg-white text-primary hover:bg-gray-100">
            Book a Demo
          </button>
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;