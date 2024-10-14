import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import FeaturesAndBenefits from './components/FeaturesAndBenefits';
import KeyFeatures from './components/KeyFeatures';
import SuccessStories from './components/SuccessStories';
import PrimaryCTA from './components/PrimaryCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <FeaturesAndBenefits />
        <KeyFeatures />
        <SuccessStories />
        <PrimaryCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;