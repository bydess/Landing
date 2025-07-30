import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, DollarSign, FileText, Receipt, Car, 
  BarChart, Clock, Calculator, Shield, Zap, Users, 
  Sparkles, Heart, Lock, Laptop, Menu, X, Frown,
  Smile, ArrowUpRight, ChevronDown, MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Payzio, and who is it for?",
      answer: "Payzio is a simple, affordable financial management app designed for self-employed individuals, freelancers, and small business owners. It helps you track income, expenses, and vehicle mileage effortlessly."
    },
    {
      question: "What features does Payzio offer?",
      answer: "Payzio includes income tracking with invoicing, expense tracking, easy exportation for accountants, vehicle mileage tracking, and more — all for one flat price."
    },
    {
      question: "How much does Payzio cost?",
      answer: "Payzio is $15/month or $150/year. There are no tiered plans or hidden fees, and you get full access to all features during your 7-day free trial."
    },
    {
      question: "Do I need any technical expertise to use Payzio?",
      answer: "Not at all! Payzio is designed to be user-friendly and intuitive, even for those who aren't tech-savvy."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. Payzio encrypts your data during transit and at rest. Additionally, we use OTP (one-time password) authentication for every login to ensure your information is protected."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime. If you cancel, you'll still have access to your account until the end of your billing period."
    },
    {
      question: "Does Payzio handle tax calculations for me?",
      answer: "While Payzio helps you track taxes spent on expenses and manage other financial data, it doesn't automatically calculate your taxes. However, it makes exporting data to your accountant incredibly simple."
    },
    {
      question: "What happens after my 7-day trial ends?",
      answer: "After your trial, you can continue using Payzio by subscribing to our monthly or annual plan. If you decide not to subscribe, your data will remain stored securely for a limited time in case you wish to return."
    },
    {
      question: "Can I use Payzio for personal finances?",
      answer: "While Payzio is optimized for business use, it can certainly help track personal expenses and mileage as well."
    }
  ];

  return (
    <>
      <SEO 
        title="PAYZIO - Simple Financial Management for Self-Employed Professionals"
        description="Streamline your business finances with PAYZIO. Track income, expenses, and mileage in one intuitive platform. Perfect for freelancers, contractors, and small business owners. Start your 7-day trial for $1.99."
        keywords="financial management, expense tracking, invoice creation, mileage tracking, freelancer tools, small business accounting, self-employed, contractor finances, business expenses, income tracking, financial software, business finance app"
        url="https://payzio.io"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "PAYZIO",
          "description": "All-in-one financial management platform for self-employed professionals, freelancers, and small business owners.",
          "url": "https://payzio.io",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "15",
            "priceCurrency": "USD",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "description": "Monthly subscription to PAYZIO financial management platform"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "creator": {
            "@type": "Organization",
            "name": "PAYZIO",
            "url": "https://payzio.io"
          }
        }}
      />
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden">
     {/* Background Blobs */}
<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse" />
  <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-500 rounded-full filter blur-2xl opacity-25 animate-pulse delay-200" />
  <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500 rounded-full filter blur-2xl opacity-20 animate-pulse delay-300" />
  <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-500 rounded-full filter blur-2xl opacity-20 animate-pulse delay-500" />
  <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-500 rounded-full filter blur-3xl opacity-25 animate-pulse delay-700" />
</div>


      {/* Hero Section */}
<div className="relative pt-32 pb-20 bg-[#0F1116] overflow-hidden text-white">
  {/* Blobs */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-10 left-1/3 w-40 h-40 bg-blue-500 rounded-full filter blur-2xl opacity-30 animate-float" />
    <div className="absolute top-[30%] right-1/4 w-28 h-28 bg-cyan-500 rounded-full filter blur-xl opacity-20 animate-float-slow" />
    <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-500 rounded-full filter blur-2xl opacity-25 animate-float-reverse" />
    <div className="absolute bottom-[20%] right-[20%] w-24 h-24 bg-blue-500 rounded-full filter blur-2xl opacity-20 animate-float" />
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
      Manage Your Business with Ease
      <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mt-2">
        Finances Made Simple
      </span>
    </h1>

    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
      Everything you need to run your business — from quotes and invoices to tracking expenses and mileage — in one place.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
      {[
        { icon: FileText, label: "Estimates" },
        { icon: Receipt, label: "Invoices" },
        { icon: DollarSign, label: "Expenses" },
        { icon: Car, label: "Mileage" }
      ].map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center text-gray-300">
          <div className="bg-blue-900/30 p-4 rounded-xl mb-3 glow card-hover">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-sm font-medium">{label}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
        className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300 flex items-center"
      >
        Simplify Your Business Now
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-gray-500 text-sm mt-2 sm:mt-0">
        No hidden fees • 7-day free trial • Cancel anytime
      </p>
    </div>
  </div>
</div>


    {/* Common Frustrations Section */}
<div className="relative py-24 overflow-hidden bg-[#0F1116]">
  {/* Decorative Blobs */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-10 left-[10%] w-[180px] h-[180px] bg-blue-500 rounded-full filter blur-3xl opacity-30" />
    <div className="absolute top-[30%] right-[15%] w-[140px] h-[140px] bg-blue-500 rounded-full filter blur-2xl opacity-25" />
    <div className="absolute bottom-[20%] left-[40%] w-[120px] h-[120px] bg-cyan-500 rounded-full filter blur-2xl opacity-20" />
    <div className="absolute bottom-[10%] right-[5%] w-[160px] h-[160px] bg-blue-500 rounded-full filter blur-3xl opacity-30" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Tired of Financial Software That Holds You Back?
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        We understand your frustrations. That's why we built Payzio differently.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        {
          icon: Frown,
          title: "The Old Way",
          points: [
            "Overwhelming features you never use",
            "Hidden costs and expensive tiers",
            "Confusing, cluttered interfaces",
            "Complex data sharing with accountants",
            "Time wasted on unnecessary complexity"
          ]
        },
        {
          icon: ArrowUpRight,
          title: "Make the Switch",
          points: [
            "Focus on essential tools that matter",
            "One simple, transparent price",
            "Clean, intuitive design",
            "Easy data exports for tax time",
            "Save hours every month"
          ]
        },
        {
          icon: Smile,
          title: "The Payzio Way",
          points: [
            "Just the features you need",
            "Everything included for $15/month",
            "Simple, beautiful interface",
            "Accountant-friendly exports",
            "Get more done in less time"
          ]
        }
      ].map(({ icon: Icon, title, points }) => (
        <div key={title} className="bg-[#1a1d25]/50 rounded-xl p-8 backdrop-blur-md border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="text-center">
      <button
        onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
        className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:brightness-110 transition-all duration-300 inline-flex items-center"
      >
        Try a Better Way
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="text-sm text-gray-400 mt-4">
        Join thousands of satisfied users who made the switch
      </p>
    </div>
  </div>
</div>


{/* Features Section */}
<div className="relative py-24 overflow-hidden bg-[#0F1116]">
  {/* Decorative Blobs */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-10 left-[10%] w-[180px] h-[180px] bg-blue-500 rounded-full filter blur-3xl opacity-30" />
    <div className="absolute top-[30%] right-[15%] w-[140px] h-[140px] bg-blue-500 rounded-full filter blur-2xl opacity-25" />
    <div className="absolute bottom-[20%] left-[40%] w-[120px] h-[120px] bg-cyan-500 rounded-full filter blur-2xl opacity-20" />
    <div className="absolute bottom-[10%] right-[5%] w-[160px] h-[160px] bg-blue-500 rounded-full filter blur-3xl opacity-30" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Everything You Need to Succeed
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Powerful features designed to help you manage your business finances with ease
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Receipt,
          title: "Smart Invoice Creation",
          description: "Create professional invoices in seconds and track payments."
        },
        {
          icon: Calculator,
          title: "Expense Management",
          description: "Log and categorize expenses for easy budgeting and tax preparation."
        },
        {
          icon: FileText,
          title: "Accountant-Ready Exports",
          description: "Export financial data in CSV for your accountant easily."
        },
        {
          icon: DollarSign,
          title: "Self-Payment Tracking",
          description: "Record and monitor your business income withdrawals accurately."
        },
        {
          icon: Car,
          title: "Vehicle & Mileage Tracking",
          description: "Track business mileage and calculate vehicle depreciation for tax deductions."
        },
        {
          icon: Clock,
          title: "Time Savings",
          description: "Save time with entries and focus on what matters most, growing your business."
        }
      ].map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="bg-[#1a1d25]/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


     {/* Job Roles Section */}
<div className="relative py-24 overflow-hidden bg-[#0F1116]">
  {/* Multiple Soft Blue Glows */}
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-10 left-[15%] w-40 h-40 rounded-full bg-blue-500 opacity-20 blur-3xl" />
    <div className="absolute top-1/2 right-[20%] w-32 h-32 rounded-full bg-blue-500 opacity-25 blur-2xl" />
    <div className="absolute bottom-1/4 left-[30%] w-28 h-28 rounded-full bg-blue-500 opacity-30 blur-2xl" />
    <div className="absolute bottom-[10%] right-[15%] w-36 h-36 rounded-full bg-blue-500 opacity-15 blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Built for Every Professional
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Tailored solutions for every type of self-employed professional
      </p>
    </div>

    {/* Top 3 roles */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {[
        {
          image: "https://i.postimg.cc/gcRjhyV2/okay3.png",
          role: "Freelancer",
          description: "Streamline invoicing and expense tracking to focus on what you do best."
        },
        {
          image: "https://i.postimg.cc/xCNCtMBg/okay2.png",
          role: "Consultant",
          description: "Generate a clear financial report and simplify tax preparation."
        },
        {
          image: "https://i.postimg.cc/qq87d0J3/okay5.png",
          role: "Small Business Owner",
          description: "Manage expenses and monitor business growth efficiently."
        }
      ].map(({ image, role, description }) => (
        <div key={role} className="group relative rounded-xl overflow-hidden border border-blue-500/10 bg-[#1a1d25]/50 backdrop-blur-lg transition-all hover:scale-[1.01]">
          <img src={image} alt={role} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1116] via-[#0F1116]/80 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col justify-end h-64">
            <h3 className="text-xl font-semibold text-white mb-2">{role}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom 2 roles */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        {
          image: "https://i.postimg.cc/PfMsW531/okay.png",
          role: "Contractor",
          description: "Track multiple income streams and maximize tax deductions."
        },
        {
          image: "https://i.postimg.cc/Gt0pN9CR/okay4.png",
          role: "Remote Worker",
          description: "Monitor expenses and cash flow for your personal projects."
        }
      ].map(({ image, role, description }) => (
        <div key={role} className="group relative rounded-xl overflow-hidden border border-blue-500/10 bg-[#1a1d25]/50 backdrop-blur-lg transition-all hover:scale-[1.01]">
          <img src={image} alt={role} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1116] via-[#0F1116]/80 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col justify-end h-64">
            <h3 className="text-xl font-semibold text-white mb-2">{role}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-16 text-center">
      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:brightness-110 transition">
        Start Your Free Trial
      </button>
    </div>
  </div>
</div>


      {/* Why Choose Us Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose PAYZIO?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built with self-employed professionals in mind, our platform combines simplicity with powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Built for Speed",
                description: "Streamlined workflows and intuitive design help you manage finances in minutes, not hours."
              },
              {
                icon: Users,
                title: "Self-Employed First",
                description: "Every feature is tailored for independent professionals, because we understand your unique needs."
              },
              {
                icon: Sparkles,
                title: "Grows With You",
                description: "From solo freelancer to small business owner, our platform scales seamlessly as your business expands."
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 glow card-hover border border-[#2f68b4]/20">
                <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-[#2f68b4]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Find answers to common questions about Payzio
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="blur-effect bg-[#1a1d25]/50 rounded-xl border border-[#2f68b4]/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#2f68b4]/10 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2f68b4] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    openFaq === index ? 'py-4' : 'h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <button
                onClick={() => handleExternalLink('mailto:support@payzio.io')}
                className="group bg-[#1a1d25] text-white px-8 py-3 rounded-lg font-semibold border border-[#2f68b4]/20 hover:bg-[#2f68b4]/10 transition-all duration-300 inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1d25]/30 blur-effect" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join other self-employed professionals who have simplified their business finances with PAYZIO.
            </p>
            <button
              onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
              className="group bg-[#2f68b4] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3578c4] transition-all duration-300 glow inline-flex items-center"
            >
              Unlock Your Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
            No hidden fees • 7 days for free • Cancel anytime

            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
 