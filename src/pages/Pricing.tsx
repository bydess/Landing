import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    "Income tracking with invoicing tools",
    "Expense tracking with tax-friendly categorization",
    "Easy exportation of metrics for your accountant",
    "Self-employed payment tracking",
    "Optional vehicle mileage and depreciation management",
    "Gain insight into your financial health with clear and concise metrics"
  ];

  return (
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32">
      {/* Background Gradient Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-blur opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] gradient-blur opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] gradient-blur opacity-25" />
      </div>

      {/* Straightforward Pricing Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One Simple Price, No Hidden Fees
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At Payzio, we believe in keeping things simple. That's why we offer all features for a single price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {/* Monthly Plan */}
            <div className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Monthly Plan</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">$15</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Perfect for flexibility</p>
                <button
                  onClick={() => handleExternalLink('https://app.payzio.io/signup')}
                  className="w-full bg-[#2f68b4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3578c4] transition-all duration-300 glow flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover relative overflow-hidden">
              <div className="absolute -right-12 top-6 rotate-45 bg-[#2f68b4] px-12 py-1 text-sm text-white">
                Save 17%
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Yearly Plan</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">$150</span>
                  <span className="text-gray-400 mb-1">/year</span>
                </div>
                <p className="text-gray-300 mb-6">2 months free!</p>
                <button
                  onClick={() => handleExternalLink('https://app.payzio.io/signup')}
                  className="w-full bg-[#2f68b4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3578c4] transition-all duration-300 glow flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything You Need, All in One Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              You get the full experience—no extra fees or upgrades needed.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg blur-effect bg-[#1a1d25]/30 border border-[#2f68b4]/10"
                >
                  <div className="bg-[#2f68b4]/10 p-2 rounded-full">
                    <Check className="w-5 h-5 text-[#2f68b4]" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Try Payzio Risk-Free for 7 Days
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Not sure if Payzio is the right fit? Take it for a spin with our 7-day free trial. 
              Experience all the features before you commit—no credit card required.
            </p>
            <button
              onClick={() => handleExternalLink('https://app.payzio.io/signup')}
              className="group bg-[#2f68b4] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3578c4] transition-all duration-300 glow inline-flex items-center"
            >
              Start My Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              After the trial, continue for just $15/month or save with $150/year. Cancel anytime with no hassle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}