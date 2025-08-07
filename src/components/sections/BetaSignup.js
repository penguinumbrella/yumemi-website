import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BetaSignup = () => {
  const benefits = [
    "Early access to all features and updates",
    "Direct communication with the development team",
    "Influence the future direction of Yumemi",
    "Recognition as a founding community member",
    "Weekly updates on development progress"
  ];

  const formFields = [
    "Email address",
    "Preferred roleplay style",
    "iOS device type",
    "Previous gaming experience",
    "Availability for testing"
  ];

  return (
    <SectionWrapper background="bg-gradient-to-br from-gray-800 to-gray-900" containerClass="max-w-4xl mx-auto px-6">
      <SectionHeader
        title="Join the Beta"
        description="Be among the first to experience Yumemi's immersive collaborative roleplay world"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Info Section */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-2xl font-semibold text-white mb-4">
              🎮 What You'll Get
            </h3>
            <ul className="space-y-4 text-gray-300">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold text-white mb-4">
              📱 TestFlight Access
            </h3>
            <p className="text-gray-300 mb-4">
              Once approved, you'll receive an email with TestFlight invitation 
              and detailed instructions for downloading and testing the app.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="text-2xl">🍎</span>
              <span>iOS Only • Requires TestFlight App</span>
            </div>
          </Card>
        </div>

        {/* Form Section */}
        <Card>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Sign Up for Beta Access
          </h3>
          
          {/* Google Form Placeholder */}
          <div className="bg-gray-700/50 rounded-xl p-8 text-center border border-gray-600">
            <div className="text-6xl mb-4">📝</div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Beta Signup Form
            </h4>
            <p className="text-gray-300 mb-6">
              We'll embed a Google Form here to collect:
            </p>
            <ul className="text-left space-y-2 text-gray-300 mb-8">
              {formFields.map((field, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>{field}</span>
                </li>
              ))}
            </ul>
            
            <Button>Join Beta Waitlist</Button>
          </div>

          <p className="text-sm text-gray-400 mt-6 text-center">
            We'll review applications and send TestFlight invites within 48 hours
          </p>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg">
          <span className="text-2xl">💬</span>
          <span className="font-semibold">Questions? Join our Discord community</span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BetaSignup; 