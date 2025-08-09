import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Method 1: Using max-width container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Brokerage />
      </div>
    </div>
  );
};

export default PricingPage;
