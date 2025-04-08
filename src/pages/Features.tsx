import React from 'react';
import { 
  FileText, DollarSign, Receipt, Calculator, 
  Car, Clock, ArrowRight, Check
} from 'lucide-react';

export default function Features() {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32">
      {/* Background Gradient Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-blur opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] gradient-blur opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] gradient-blur opacity-25" />
      </div>

      {/* Section 1: Simplify Your Business Finances */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your All-In-One Financial Solution
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Say goodbye to the complexity of juggling multiple tools. With PAYZIO, you get everything 
              you need to manage your business finances in one intuitive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Stay Ahead of Tax Season */}
      <section className="relative py-32">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Effortless Tax Preparation Starts Here
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Never stress about tax time again. PAYZIO equips you with the tools to stay prepared all year.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  icon: Calculator,
                  title: "Detailed Reports",
                  description: "Export income and expense summaries in seconds, making it easy for your accountant."
                },
                {
                  icon: Check,
                  title: "Custom Tax Fields",
                  description: "Enter tax details for every expense based on your location's tax laws."
                },
                {
                  icon: Car,
                  title: "Vehicle Expense Management",
                  description: "Track mileage and depreciation for your business-related travel."
                }
              ].map(({ icon: Icon, title, description }) => (
                <div 
                  key={title}
                  className="flex items-start space-x-6 p-6 rounded-xl blur-effect bg-[#1a1d25]/30 border border-[#2f68b4]/10 glow card-hover"
                >
                  <div className="bg-[#2f68b4]/10 p-4 rounded-xl">
                    <Icon className="w-6 h-6 text-[#2f68b4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Freelancers and Small Businesses */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Designed with Your Needs in Mind
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              PAYZIO was created to simplify the unique challenges faced by freelancers, 
              contractors, and small business owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Expense Management",
                description: "Track ongoing expenses like subscriptions with ease."
              },
              {
                icon: DollarSign,
                title: "Self-Payment Tracking",
                description: "Log and manage payments to yourself with precision."
              },
              {
                icon: FileText,
                title: "User-Friendly Interface",
                description: "Navigate effortlessly with our clean, modern design."
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover">
                <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#2f68b4]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Take control of your business finances today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join PAYZIO and experience the smarter way to manage your money.
            </p>
            <button
              onClick={() => handleExternalLink('https://app.payzio.io/signup')}
              className="group bg-[#2f68b4] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3578c4] transition-all duration-300 glow inline-flex items-center"
            >
              See It in Action
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
            No hidden fees • 7 days for $1.99 • Cancel anytime

            </p>
          </div>
        </div>
      </section>
    </div>
  );
}