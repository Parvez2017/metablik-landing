import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "GrantEase has revolutionized our grant management process. We've seen a 40% reduction in administrative workload and a 50% increase in student engagement.",
    author: "Dr. Sarah Johnson",
    role: "Grant Committee Chair, University of Innovation"
  },
  {
    quote: "The customizable workflows in GrantEase have allowed us to tailor the system to our unique needs. It's been a game-changer for our incubator.",
    author: "Michael Chen",
    role: "Director, TechStart Incubator"
  },
  {
    quote: "With GrantEase, we've improved our grant allocation efficiency by 60%. The reporting features provide invaluable insights for our decision-making process.",
    author: "Emily Rodriguez",
    role: "Grants Manager, Future Scholars Foundation"
  }
];

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white" id="success-stories">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Success Stories</h2>
        <div className="relative bg-background p-12 rounded-lg shadow-lg">
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
            <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </div>
          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
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

export default SuccessStories;