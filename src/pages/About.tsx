import React from 'react';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, Users, DollarSign, Sparkles, 
  Target, Scale, Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <>
      <SEO 
        title="About PAYZIO - Simple Financial Management for Self-Employed"
        description="Learn about PAYZIO's mission to simplify business finances for freelancers and small business owners. Discover our story, values, and commitment to transparent pricing."
        keywords="about payzio, financial management company, freelancer tools, small business finance, transparent pricing, business finance software"
        url="https://payzio.io/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About PAYZIO",
          "description": "Learn about PAYZIO's mission to simplify business finances for self-employed professionals.",
          "url": "https://payzio.io/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "PAYZIO",
            "description": "Financial management platform for self-employed professionals",
            "url": "https://payzio.io",
            "foundingDate": "2024",
            "mission": "To simplify financial management for self-employed professionals with transparent, affordable tools."
          }
        }}
      />

      <div className="relative pt-32 pb-20 bg-[#0F1116] overflow-hidden text-white min-h-screen">
        {/* Blobs Background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 filter blur-3xl opacity-25 animate-float" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 filter blur-2xl opacity-20 animate-float-slow" />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-500 filter blur-3xl opacity-15 animate-float-reverse" />
        </div>

        {/* Mission Section */}
        <section className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              A Better Way to Manage Your Business Finances
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              We understand the frustration of dealing with overly complex financial tools. That's why we built Payzio - a simple, intuitive platform that makes tracking income, expenses, and mileage effortless for freelancers and small business owners.
            </p>
            <ul className="space-y-4 max-w-md">
              {[
                "No more spreadsheet chaos",
                "Track everything in one place",
                "Built for real people, not accountants"
              ].map(item => (
                <li key={item} className="flex items-center space-x-3 text-gray-300 text-base">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2f68b4]/20 bg-[#1a1d25]/60 backdrop-blur-md p-10">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-white tracking-wide">
                One price, all features
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded" />
              <p className="text-2xl text-gradient-blue-cyan font-semibold">
                Financial simplicity for all
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Philosophy Section */}
        <section className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Fair and Transparent Pricing You Can Trust
            </h2>
            <p className="text-gray-300 text-lg">
              We believe in simple, honest pricing that gives everyone access to the tools they need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Other Apps */}
            <div className="bg-[#1a1d25]/60 rounded-2xl p-10 border border-gray-800 shadow-lg relative'>
              <div className="absolute -top-3 -right-3 bg-gray-800 text-gray-400 px-4 py-1 rounded-full text-sm select-none pointer-events-none">
                Other Apps
              </div>
              <ul className="space-y-5 mt-6">
                {[
                  "Complex tiered pricing",
                  "Feature limitations",
                  "Constant upselling",
                  "Hidden fees"
                ].map(item => (
                  <li key={item} className="flex items-center text-gray-400 text-lg">
                    <Scale className="w-6 h-6 mr-4 text-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payzio */}
            <div className="bg-[#1a1d25]/60 rounded-2xl p-10 border border-[#2f68b4]/30 shadow-[0_0_20px_rgba(47,104,180,0.5)] relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-tr from-blue-500 to-cyan-500 text-white px-5 py-1 rounded-full text-sm select-none pointer-events-none">
                Payzio
              </div>
              <ul className="space-y-5 mt-6">
                {[
                  "One simple price - $15/month",
                  "All features included",
                  "No feature restrictions",
                  "No surprise fees"
                ].map(item => (
                  <li key={item} className="flex items-center text-white text-lg">
                    <Sparkles className="w-6 h-6 mr-4 text-gradient-blue-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Built for People Section */}
        <section className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Designed with You in Mind
            </h2>
            <p className="text-gray-300 text-lg">
              Created after listening to the needs of real users who want efficiency without the complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
              <div key={title} className="bg-[#1a1d25]/60 rounded-2xl p-8 border border-[#2f68b4]/30 shadow-lg hover:shadow-[0_0_25px_rgba(47,104,180,0.7)] transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-gradient-to-tr from-blue-500 to-cyan-500 p-4 rounded-full mb-6 inline-flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-300 max-w-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative max-w-3xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          {/* Blobs behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 filter blur-3xl opacity-20 animate-float pointer-events-none -z-10" />
          
          <h2 className="text-4xl font-extrabold mb-6">
            Join the Payzio Community
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
            Experience the simplicity of modern financial management designed for real people.
          </p>
          <button
            onClick={() => window.location.href = 'https://app.payzio.io/auth'}
            className="inline-flex items-center px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:brightness-110 transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2"
          >
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
          <p className="text-sm text-gray-400 mt-5 select-none">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </section>

        {/* Floating animations CSS */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 8s ease-in-out infinite;
          }
          .text-gradient-blue-cyan {
            background: linear-gradient(90deg, #3b82f6, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>
    </>
  );
}
