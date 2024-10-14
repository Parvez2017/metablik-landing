import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does GrantEase streamline the application process?",
    answer: "GrantEase provides a user-friendly interface for applicants to submit their proposals, automates the review process, and allows for easy communication between applicants and reviewers."
  },
  {
    question: "Can GrantEase integrate with our existing systems?",
    answer: "Yes, GrantEase offers seamless integration capabilities with various university management systems, financial software, and other third-party tools commonly used in grant management."
  },
  {
    question: "How secure is the data stored in GrantEase?",
    answer: "GrantEase employs industry-standard encryption and security measures to protect your data. We also offer role-based access control to ensure that sensitive information is only accessible to authorized personnel."
  },
  {
    question: "Does GrantEase offer customizable reporting features?",
    answer: "Absolutely! GrantEase provides a robust reporting engine that allows you to create custom reports tailored to your specific needs, helping you gain valuable insights into your grant management process."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
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

export default FAQ;