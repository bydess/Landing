import React, { useState } from 'react';
import { 
  Shield, Lock, Eye, FileText, 
  Cookie, Bell, Mail, ArrowRight 
} from 'lucide-react';
import { Modal } from '../components/Modal';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function Privacy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({ title: '', content: null });

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:privacy@payzio.io';
  };

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const fullPrivacyPolicyContent = (
    <div className="space-y-8">
      <div>
        <p className="text-gray-300 mb-4">Effective Date: March 15, 2024</p>
        <p className="text-gray-300">
          At Payzio, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you use our platform and services.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">1. Information We Collect</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-2">Personal Information</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Business details</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Usage Data</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Log data and device information</li>
              <li>Analytics and performance data</li>
              <li>User preferences and settings</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To process your transactions</li>
          <li>To improve our platform and user experience</li>
          <li>To communicate with you about service updates</li>
          <li>To ensure platform security and prevent fraud</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">3. Information Sharing</h3>
        <p className="text-gray-300 mb-4">We may share your information with:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Service providers who assist in operating our platform</li>
          <li>Legal authorities when required by law</li>
          <li>Business partners with your explicit consent</li>
        </ul>
        <p className="text-gray-300 mt-4 font-semibold">
          We never sell your personal information to third parties.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">4. Data Security</h3>
        <p className="text-gray-300 mb-4">We implement robust security measures including:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>End-to-end encryption for sensitive data</li>
          <li>Regular security audits and monitoring</li>
          <li>Strict access controls and authentication</li>
          <li>Secure data storage and transmission</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">5. Your Privacy Rights</h3>
        <p className="text-gray-300 mb-4">You have the right to:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Export your data</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">6. Data Retention</h3>
        <p className="text-gray-300">
          We retain your information for as long as necessary to provide our services and comply with 
          legal obligations. When no longer required, we securely delete or anonymize your data.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">7. International Data Transfers</h3>
        <p className="text-gray-300">
          Your information may be transferred and processed in countries other than your own. 
          We ensure appropriate safeguards are in place to protect your data during such transfers.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">8. Children's Privacy</h3>
        <p className="text-gray-300">
          Our services are not intended for users under 18 years of age. We do not knowingly collect 
          or maintain information from children.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">9. Changes to This Policy</h3>
        <p className="text-gray-300">
          We may update this Privacy Policy periodically. We will notify you of any material changes 
          via email or through our platform.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">10. Contact Us</h3>
        <p className="text-gray-300">
          For any privacy-related questions or concerns, please contact us at:
        </p>
        <p className="text-gray-300 mt-2">Email: privacy@payzio.io</p>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-300">
          By using Payzio, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32">
      {/* Background Gradient Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-blur opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] gradient-blur opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] gradient-blur opacity-25" />
      </div>

      {/* Section 1: Introduction to Your Privacy */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-[#2f68b4]/10 p-4 rounded-full">
                  <Shield className="w-12 h-12 text-[#2f68b4]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                At Payzio, your trust is our top priority. We're committed to ensuring your personal 
                and business data is kept secure and used only to enhance your experience.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Privacy Sections */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Data Collection",
                description: "Learn about what data we collect and why we need it",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Types of Data We Collect</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Personal Information (name, email, contact details)</li>
                      <li>Business Data (income, expenses, invoices)</li>
                      <li>Technical Data (device type, IP address, analytics)</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Lock,
                title: "Data Protection",
                description: "Discover how we keep your information secure",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Our Security Measures</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>TLS encryption for data in transit</li>
                      <li>AES-256 encryption for stored data</li>
                      <li>Strict access controls and monitoring</li>
                      <li>Regular security audits and updates</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: FileText,
                title: "Data Sharing",
                description: "Understand how and when we share your data",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Data Sharing Policies</h3>
                    <p className="text-gray-300">We share data only in these circumstances:</p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>With essential service providers</li>
                      <li>When required by law</li>
                      <li>To protect our legal rights</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Bell,
                title: "Your Rights",
                description: "Know your privacy rights and how to exercise them",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Your Privacy Rights</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Access your personal data</li>
                      <li>Request data correction or deletion</li>
                      <li>Opt out of marketing communications</li>
                      <li>Export your data</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Cookie,
                title: "Cookies",
                description: "Learn about our use of cookies and tracking",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Cookie Usage</h3>
                    <p className="text-gray-300">
                      We use cookies to enhance your experience and provide essential functionality:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Essential cookies for site functionality</li>
                      <li>Analytics cookies to improve our service</li>
                      <li>Preference cookies to remember your settings</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Mail,
                title: "Contact Us",
                description: "Get in touch about privacy concerns",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                    <p className="text-gray-300">
                      For any privacy-related questions or concerns:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Email: privacy@payzio.io</li>
                      <li>Response time: Within 24 hours</li>
                    </ul>
                  </div>
                )
              }
            ].map(({ icon: Icon, title, description, content }) => (
              <ScrollAnimation key={title}>
                <div 
                  className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover cursor-pointer"
                  onClick={() => openModal(title, content)}
                >
                  <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#2f68b4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* View Full Privacy Policy Button */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <button
                onClick={() => openModal("Complete Privacy Policy", fullPrivacyPolicyContent)}
                className="group bg-[#1a1d25] text-white px-8 py-3 rounded-lg font-semibold text-lg border border-[#2f68b4]/20 hover:bg-[#2f68b4]/10 transition-all duration-300 inline-flex items-center"
              >
                View Complete Privacy Policy
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.content}
      </Modal>
    </div>
  );
}