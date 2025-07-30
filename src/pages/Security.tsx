import React from 'react';
import { SEO } from '../components/SEO';
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
    <>
      <SEO <SEO 
        title="PAYZIO Security - Bank-Level Protection for Your Financial Data"
        description="Learn about PAYZIO's comprehensive security measures: end-to-end encryption, multi-factor authentication, and regular security audits to protect your business data."
        keywords="payzio security, financial data protection, encryption, multi-factor authentication, secure financial software, business data security, privacy protection"
        url="https://payzio.io/security"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "PAYZIO Security",
          "description": "Comprehensive security measures and data protection protocols used by PAYZIO.",
          "url": "https://payzio.io/security",
          "mainEntity": {
            "@type": "SecurityPolicy",
            "name": "PAYZIO Security Measures",
            "securityFeatures": [
              "AES-256 Encryption",
              "Multi-Factor Authentication",
              "Regular Security Audits",
              "Secure Data Storage",
              "One-Time Passwords (OTP)"
            ]
          }
        }}
      />
      <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32 pb-20 text-white">
        {/* Floating Blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/5 w-56 h-56 bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 rounded-full filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 rounded-full filter blur-2xl opacity-25 animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-52 h-52 bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-500 rounded-full filter blur-3xl opacity-15 animate-float-reverse" />
        </div>

        {/* Section 1: Your Security, Our Priority */}
        <section className="relative z-10 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500/10 p-4 rounded-full">
                <Shield className="w-12 h-12 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Security, Our Priority</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At PAYZIO, protecting your sensitive data is paramount. We've implemented industry-leading security measures to ensure your information is safe at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description: "AES‑256 encryption used for all data in transit and at rest."
              },
              {
                icon: Key,
                title: "Secure Authentication",
                description: "Multi-factor authentication ensures only you can access your account."
              },
              {
                icon: CheckCircle,
                title: "Security Audits",
                description: "Our systems are regularly audited and updated for added protection."
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-blue-500/20 glow card-hover">
                <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Extra Layers of Protection */}
        <section className="relative py-32">
          <div className="absolute inset-0 blur-effect bg-[#1a1d25]/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extra Layers of Protection</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We go beyond the basics, offering layered security features to protect your account at every turn.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-6">
              {[
                {
                  icon: Mail,
                  title: "One-Time Passwords (OTPs)",
                  description: "Verification sent to your email for every sign-in attempt."
                },
                {
                  icon: Clock,
                  title: "Automatic Session Timeouts",
                  description: "Inactive sessions expire to prevent unauthorized access."
                },
                {
                  icon: FileCheck,
                  title: "Access Controls",
                  description: "Granular permissions give you control over who sees what."
                }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start space-x-6 p-6 rounded-xl blur-effect bg-[#1a1d25]/30 border border-blue-500/10 glow card-hover">
                  <div className="bg-blue-500/10 p-4 rounded-xl">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Trust & FAQ */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Trust & Compliance</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                PAYZIO adheres to global security standards and updates our systems regularly to keep up with emerging threats.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Is my financial data safe?",
                  answer: "Yes—everything is encrypted and inaccessible to unauthorized users."
                },
                {
                  question: "How is my data handled?",
                  answer: "We ensure only you have access and control over your settings and data."
                },
                {
                  question: "What standards do you follow?",
                  answer: "Our platform complies with industry-leading security protocols."
                },
                {
                  question: "How often is security updated?",
                  answer: "We continuously monitor and update systems to address new vulnerabilities."
                }
              ].map(({ question, answer }) => (
                <div key={question} className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-blue-500/20 glow card-hover">
                  <h3 className="text-xl font-semibold mb-4">{question}</h3>
                  <p className="text-gray-300">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#1a1d25]/30 blur-effect" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions About Security?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our security team is available around the clock to answer any questions and ensure your confidence.
            </p>
            <button
              onClick={handleContact}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Security Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-4">Typically responds within 24 hours</p>
          </div>
        </section>
      </div>
    </>
  );
}
