import React from 'react';
import { SEO } from '../components/SEO';
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
    <>
      <SEO 
        title="PAYZIO Pricing - Simple, Transparent Financial Management Plans"
        description="Choose from PAYZIO's simple pricing plans: $15/month or $150/year. No hidden fees, all features included. Start your 7-day free trial today."
        keywords="payzio pricing, financial management pricing, business finance cost, freelancer tools pricing, expense tracking cost, invoice software pricing"
        url="https://payzio.io/pricing"
      />

      <div className="relative pt-32 pb-20 bg-[#0F1116] overflow-hidden text-white min-h-screen">

        {/* Blobs */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 filter blur-3xl opacity-20 animate-float" />
          <div className="fixed top-1/2 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 filter blur-2xl opacity-25 animate-float-slow" />
          <div className="fixed bottom-20 left-1/3 w-52 h-52 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-500 filter blur-3xl opacity-15 animate-float-reverse" />
        </div>

        {/* Pricing Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">One Simple Price, No Hidden Fees</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At Payzio, we believe in keeping things simple. That's why we offer all features for a single price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {/* Monthly Plan */}
            <div className="relative bg-[#1a1d25]/50 backdrop-blur-lg border border-[#2f68b4]/20 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Perfect for flexibility</p>
                <button
                  onClick={() => handleExternalLink('https://app.payzio.io/auth')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:opacity-90 transition-all flex items-center justify-center"
                >
                  Let’s Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="relative bg-[#1a1d25]/50 backdrop-blur-lg border border-[#2f68b4]/20 rounded-2xl p-8 shadow-lg overflow-hidden">
              <div className="absolute -right-10 top-6 rotate-45 bg-gradient-to-r from-blue-500 to-cyan-500 px-12 py-1 text-xs text-white font-semibold">
                Save 17%
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Yearly Plan</h3>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-gray-400 mb-1">/year</span>
                </div>
                <p className="text-gray-300 mb-6">2 months free!</p>
                <button
                  onClick={() => handleExternalLink('https://app.payzio.io/auth')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:opacity-90 transition-all flex items-center justify-center"
                >
                  Let’s Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="relative py-20 z-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Everything You Need, All in One Plan</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                You get the full experience—no extra fees or upgrades needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-[#1a1d25]/40 p-4 rounded-xl border border-[#2f68b4]/10 backdrop-blur-md">
                  <div className="bg-[#2f68b4]/20 p-2 rounded-full">
                    <Check className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="relative py-24">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[600px] h-[400px] gradient-blur opacity-20" />
          </div>
          <div className="max-w-3xl mx-auto px-4 relative text-center">
            <h2 className="text-3xl font-bold mb-6">Try Payzio for 7 Days</h2>
            <p className="text-lg text-gray-300 mb-8">
              Not sure if Payzio is the right fit? Take it for a spin with our 7-day free trial. No credit card required.
            </p>
            <button
              onClick={() => handleExternalLink('https://app.payzio.io/auth')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition-all inline-flex items-center"
            >
              Start My Trial <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <p className="text-sm text-gray-400 mt-5">
              After the trial, continue for just $15/month or save with $150/year. Cancel anytime with no hassle.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
