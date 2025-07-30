import React from 'react';
import { SEO } from '../components/SEO';
import {
  FileText, Receipt, DollarSign, Calculator, Car, Clock,
  Check, ArrowRight
} from 'lucide-react';

export default function Features() {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO /* ... */ />
      <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32 pb-20 text-white">
        {/* Floating Blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/5 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 filter blur-2xl opacity-25 animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-52 h-52 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-500 filter blur-3xl opacity-15 animate-float-reverse" />
        </div>

        {/* Section 1: All‑In‑One Solution */}
        <section className="relative z-10 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your All‑In‑One Financial Solution</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Say goodbye to juggling multiple tools. With PAYZIO, everything you need to manage your business finances is in one modern, intuitive platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                icon: FileText,
                title: "Professional Invoice Creation",
                description: "Generate and send polished invoices in just a few clicks."
              },
              {
                icon: Receipt,
                title: "Expense Tracking Made Easy",
                description: "Log, categorize, and manage your expenses seamlessly."
              },
              {
                icon: DollarSign,
                title: "Income Management at a Glance",
                description: "Track your revenue streams with clear, organized records."
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover">
                <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#2f68b4]" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Tax Prep */}
        <section className="relative py-24">
          <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Effortless Tax Preparation Starts Here</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Never stress about tax time again. PAYZIO equips you with tools to stay prepared year-round.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-6">
              {[
                {
                  icon: Calculator,
                  title: "Detailed Reports",
                  description: "Export income and expense summaries in seconds."
                },
                {
                  icon: Check,
                  title: "Custom Tax Fields",
                  description: "Enter tax-relevant details based on your location."
                },
                {
                  icon: Car,
                  title: "Vehicle Expense Management",
                  description: "Track mileage and depreciation for business travel."
                }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start space-x-6 p-6 rounded-xl blur-effect bg-[#1a1d25]/30 border border-[#2f68b4]/10 glow card-hover">
                  <div className="bg-[#2f68b4]/10 p-4 rounded-xl">
                    <Icon className="w-6 h-6 text-[#2f68b4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Built for You */}
        <section className="relative pb-8 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed with Your Needs in Mind</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                PAYZIO is built to simplify the challenges freelancers, contractors, and small business owners face.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Expense Management",
                  description: "Track ongoing expenses like subscriptions effortlessly."
                },
                {
                  icon: DollarSign,
                  title: "Self‑Payment Tracking",
                  description: "Log payments to yourself with clarity and precision."
                },
                {
                  icon: FileText,
                  title: "User‑Friendly Interface",
                  description: "Navigate easily with a clean, modern design."
                }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover">
                  <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#2f68b4]" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Take control of your business finances today</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Join PAYZIO and experience the smarter way to manage your money.
              </p>
              <button
                onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center"
              >
                See It in Action
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No hidden fees • 7 day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
