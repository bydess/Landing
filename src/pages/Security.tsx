import React from 'react';
import { 
  Shield, Lock, Key, CheckCircle, 
  Mail, Clock, FileCheck, ArrowRight 
} from 'lucide-react';

export default function Security() {
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:privacy@payzio.io';
  };

  return (
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32">
      {/* Background Gradient Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-blur opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] gradient-blur opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] gradient-blur opacity-25" />
      </div>

      {/* Section 1: Your Security, Our Priority */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-[#2f68b4]/10 p-4 rounded-full">
                <Shield className="w-12 h-12 text-[#2f68b4]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Security, Our Priority
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At Payzio, we understand the importance of protecting your sensitive data. 
              That's why we've implemented high level security measures to keep your information safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description: "Your data is encrypted using AES-256 both in transit and at rest."
              },
              {
                icon: Key,
                title: "Secure Authentication",
                description: "Multi-factor authentication ensures only you can access your account."
              },
              {
                icon: CheckCircle,
                title: "Regular Security Audits",
                description: "We continuously monitor and update our security protocols."
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

      {/* Section 2: Extra Layers of Protection */}
      <section className="relative py-32">
        <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Extra Layers of Protection
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We've implemented multiple security features to ensure your account remains protected at all times.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  icon: Mail,
                  title: "One-Time Passwords (OTPs)",
                  description: "Every sign-in attempt requires verification through a secure OTP delivered to your email."
                },
                {
                  icon: Clock,
                  title: "Automatic Session Timeouts",
                  description: "Inactive sessions are automatically terminated to prevent unauthorized access."
                },
                {
                  icon: Shield,
                  title: "Advanced Access Controls",
                  description: "Granular permissions ensure you have complete control over who can access your data."
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

      {/* Section 3: Built for Trust and Compliance */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Trust and Compliance
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our commitment to security goes beyond basic protection. We adhere to global security 
              standards and regularly update our systems to address potential vulnerabilities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Is my financial data safe?",
                  answer: "Yes, all sensitive information is encrypted and inaccessible to unauthorized parties."
                },
                {
                  question: "How does Payzio handle my settings?",
                  answer: "We encrypt everything, ensuring only you have control over your data."
                },
                {
                  question: "What security standards do you follow?",
                  answer: "We adhere to industry-leading security protocols and regularly undergo security audits."
                },
                {
                  question: "How often do you update security?",
                  answer: "Our security measures are continuously monitored and updated to address new challenges."
                }
              ].map(({ question, answer }) => (
                <div 
                  key={question}
                  className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{question}</h3>
                  <p className="text-gray-300">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#1a1d25]/30 blur-effect" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Have Questions About Security?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our security team is available 24/7 to address any concerns and ensure your peace of mind.
            </p>
            <button
              onClick={handleContact}
              className="group bg-[#2f68b4] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3578c4] transition-all duration-300 glow inline-flex items-center"
            >
              Contact Security Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}