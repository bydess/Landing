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
      <div className="min-h-screen bg-gradient-to-b from-[#12151a] via-[#0F1116] to-[#0B0C0F] relative overflow-hidden text-gray-300">
        {/* Background Gradient Blurs */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#3a6bdb] to-[#1f3fa3] opacity-30 filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#2961e6] to-[#11307a] opacity-20 filter blur-2xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[370px] h-[370px] rounded-full bg-gradient-to-tl from-[#4170e7] to-[#1e3e90] opacity-25 filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Hero Section */}
        <div className="relative pt-32 pb-24 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Streamline Your Business<br />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe] mt-3">Finances Made Simple</span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-xl sm:text-2xl text-gray-300">
              All-in-one platform for managing estimates, invoices, expenses, and mileage tracking. Perfect for independent contractors and freelancers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-14">
              {[
                { icon: FileText, label: "Estimates" },
                { icon: Receipt, label: "Invoices" },
                { icon: DollarSign, label: "Expenses" },
                { icon: Car, label: "Mileage" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center space-y-3">
                  <div className="bg-gradient-to-br from-[#4facfe]/50 to-[#00f2fe]/40 p-5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-default">
                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <span className="text-base font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-black font-bold rounded-full px-10 py-4 shadow-lg hover:from-[#3aa7ff] hover:to-[#00e0f9] transition duration-300 transform hover:scale-[1.05]"
              >
                Simplify Your Business Now
                <ArrowRight className="w-6 h-6 ml-3 text-black group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <p className="text-gray-400 text-sm max-w-xs text-center sm:text-left">
                No hidden fees &bull; 7 days free trial &bull; Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Common Frustrations Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#12151a]/70 filter blur-xl rounded-xl" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-5">
                Tired of Financial Software That Holds You Back?
              </h2>
              <p className="text-lg text-gray-300">
                We understand your frustrations. That's why we built Payzio differently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                <div key={title} className="bg-[#1a1f2e] rounded-3xl p-10 shadow-lg hover:shadow-[#2f68b4]/70 transition-shadow duration-300 border border-[#2f68b4]/30">
                  <div className="bg-gradient-to-br from-[#4facfe]/20 to-[#00f2fe]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <Icon className="w-10 h-10 text-[#4facfe]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>
                  <ul className="space-y-3 text-gray-300">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="w-3 h-3 mt-1 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => (window.location.href = 'https://app.payzio.io/auth')}
                className="inline-flex items-center bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-black font-bold rounded-full px-12 py-4 shadow-xl hover:from-[#3aa7ff] hover:to-[#00e0f9] transition duration-300 transform hover:scale-105"
              >
                Try a Better Way
                <ArrowRight className="w-6 h-6 ml-4 text-black group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <p className="mt-4 text-sm text-gray-400 max-w-xs mx-auto">
                Join thousands of satisfied users who made the switch
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#12151a]/60 filter blur-xl rounded-xl" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-5">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-gray-300">
                Powerful features designed to help you manage your business finances with ease
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                <div key={title} className="bg-[#1a1f2e] rounded-3xl p-10 shadow-lg hover:shadow-[#2f68b4]/70 transition-shadow duration-300 border border-[#2f68b4]/30">
                  <div className="bg-gradient-to-br from-[#4facfe]/20 to-[#00f2fe]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <Icon className="w-10 h-10 text-[#4facfe]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Roles Section */}
        <section className="relative py-24 bg-[#0f1116]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-5">
                Built for Every Professional
              </h2>
              <p className="text-lg text-gray-300">
                Tailored solutions for every type of self-employed professional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
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
                <div key={role} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-[#2f68b4]/60 transition-shadow duration-300 border border-[#2f68b4]/30">
                  <img src={image} alt={role} className="w-full h-64 object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-[#0f1116]/90 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold text-white mb-2">{role}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
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
                <div key={role} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-[#2f68b4]/60 transition-shadow duration-300 border border-[#2f68b4]/30">
                  <img src={image} alt={role} className="w-full h-64 object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-[#0f1116]/90 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold text-white mb-2">{role}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-10">
              Why Choose PAYZIO?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
              Built with self-employed professionals in mind, our platform combines simplicity with powerful features.
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
                <div key={title} className="bg-[#1a1f2e] rounded-3xl p-10 shadow-lg hover:shadow-[#2f68b4]/70 transition-shadow duration-300 border border-[#2f68b4]/30 cursor-default">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center shadow-md">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-[#0f1116]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map(({ question, answer }, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-3xl border border-indigo-700/30 bg-[#1a1f2e]/80 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex justify-between items-center px-8 py-5 text-left text-lg font-semibold text-white hover:bg-indigo-700/20 transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      {question}
                      <ChevronDown
                        className={`w-6 h-6 text-indigo-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-8 pb-8 text-gray-300 text-base transition-max-height duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 pt-0' : 'max-h-0 pt-0'
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
