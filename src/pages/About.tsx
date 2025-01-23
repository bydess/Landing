import React from 'react';
import { 
  ArrowRight, Users, DollarSign, Sparkles, 
  Target, Scale, Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function About() {
  const navigate = useNavigate();

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

      {/* Mission Section */}
      <section className="relative py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  A Better Way to Manage Your Business Finances
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We understand the frustration of dealing with overly complex financial tools. That's why we built Payzio - a simple, intuitive platform that makes tracking income, expenses, and mileage effortless for freelancers and small business owners.
                </p>
                <div className="space-y-4">
                  {[
                    "No more spreadsheet chaos",
                    "Track everything in one place",
                    "Built for real people, not accountants"
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2f68b4]" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2f68b4]/20 to-transparent rounded-2xl blur-[100px]" />
                <div className="relative blur-effect bg-[#1a1d25]/50 rounded-2xl p-8 border border-[#2f68b4]/20 glow">
                  {/* Quote Box */}
                  <div className="relative rounded-lg bg-gradient-to-br from-[#1a1d25] to-[#2f68b4]/10 p-8 border border-[#2f68b4]/20">
                    <div className="text-center space-y-6">
                      <h2 className="text-3xl font-bold text-white">
                        One price, all features
                      </h2>
                      <div className="w-16 h-0.5 bg-[#2f68b4]/30 mx-auto" />
                      <p className="text-2xl text-[#2f68b4] font-medium">
                        Financial simplicity for all
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fair and Transparent Pricing You Can Trust
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We believe in simple, honest pricing that gives everyone access to the tools they need to succeed.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollAnimation>
                <div className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-gray-800 relative">
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gray-800 text-gray-400 px-4 py-1 rounded-full text-sm">
                      Other Apps
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Complex tiered pricing",
                      "Feature limitations",
                      "Constant upselling",
                      "Hidden fees"
                    ].map((item) => (
                      <li key={item} className="flex items-center text-gray-400">
                        <Scale className="w-5 h-5 mr-3 text-gray-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow relative">
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-[#2f68b4] text-white px-4 py-1 rounded-full text-sm">
                      Payzio
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "One simple price - $15/month",
                      "All features included",
                      "No feature restrictions",
                      "No surprise fees"
                    ].map((item) => (
                      <li key={item} className="flex items-center text-white">
                        <Sparkles className="w-5 h-5 mr-3 text-[#2f68b4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Built for People Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Designed with You in Mind
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Created after listening to the needs of real users who want efficiency without the complexity.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "For the Freelancer",
                description: "Simplify invoicing and expense tracking to focus on your craft."
              },
              {
                icon: Users,
                title: "For the Small Business",
                description: "Manage all your finances in one place with ease and clarity."
              },
              {
                icon: Heart,
                title: "For the Self-Employed",
                description: "Take control of your finances without the accounting degree."
              }
            ].map(({ icon: Icon, title, description }) => (
              <ScrollAnimation key={title}>
                <div className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 glow card-hover border border-[#2f68b4]/20">
                  <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-[#2f68b4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
                  <p className="text-gray-300 text-center">{description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#1a1d25]/30 blur-effect" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the Payzio Community
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Experience the simplicity of modern financial management designed for real people.
              </p>
              <button
                onClick={() => handleExternalLink('https://app.payzio.io/signup')}
                className="group bg-[#2f68b4] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3578c4] transition-all duration-300 glow inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required • 7-day free trial • Cancel anytime
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}