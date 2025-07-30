import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Cookie, Shield, Settings, BarChart, 
  Clock, Globe, ArrowRight 
} from 'lucide-react';
import { Modal } from '../components/Modal';

export default function Cookies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({ title: '', content: null });

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:support@payzio.io';
  };

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const fullCookiePolicyContent = (
    <div className="space-y-8">
      <div>
        <p className="text-gray-300 mb-4">Effective Date: March 15, 2024</p>
        <p className="text-gray-300">
          At Payzio, we use cookies and similar technologies to enhance your experience on our platform. 
          This Cookie Policy explains what cookies are, how we use them, and the choices available to you.
        </p>
        <p className="text-gray-300 mt-4">
          By using Payzio's website or services, you agree to the use of cookies as described in this policy.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">1. What Are Cookies?</h3>
        <p className="text-gray-300 mb-4">
          Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They serve various purposes, including:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Enabling website functionality.</li>
          <li>Remembering your preferences.</li>
          <li>Improving performance and user experience.</li>
          <li>Analyzing site usage to improve services.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">2. Types of Cookies We Use</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-2">a) Essential Cookies</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>These cookies are necessary for the website to function properly.</li>
              <li>They enable features like user authentication and security.</li>
              <li>Without these cookies, certain parts of the website may not work.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">b) Performance Cookies</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>These cookies collect anonymous information about how users interact with the site.</li>
              <li>We use this data to improve our platform's performance and functionality.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">c) Functional Cookies</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Functional cookies remember your preferences (e.g., language settings).</li>
              <li>They help provide a personalized user experience.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">d) Analytics Cookies</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Analytics cookies help us understand user behavior through aggregated data.</li>
              <li>We may use tools like Google Analytics to analyze traffic patterns and improve services.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">3. Third-Party Cookies</h3>
        <p className="text-gray-300 mb-4">We may use third-party cookies to:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Support marketing campaigns.</li>
          <li>Integrate with social media platforms for sharing content.</li>
          <li>Analyze website performance through external tools.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Third-party cookies are subject to the policies of their respective providers.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">4. Why We Use Cookies</h3>
        <p className="text-gray-300 mb-4">Cookies allow us to:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Maintain secure login sessions.</li>
          <li>Remember your settings and preferences.</li>
          <li>Enhance website performance and usability.</li>
          <li>Deliver a better and more personalized experience.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">5. Your Cookie Choices</h3>
        <p className="text-gray-300 mb-4">
          You can control or disable cookies through your browser settings. Please note:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Disabling cookies may affect the functionality of our website.</li>
          <li>Essential cookies cannot be turned off, as they are necessary for basic site operations.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Steps to manage cookies vary depending on your browser. Refer to your browser's help section for specific instructions:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2 mt-2">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Safari</li>
          <li>Microsoft Edge</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">6. Cookie Retention Periods</h3>
        <p className="text-gray-300 mb-4">
          We retain cookies for varying periods depending on their purpose:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Session cookies expire when you close your browser.</li>
          <li>Persistent cookies remain on your device until deleted or until they reach their expiration date.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">7. Updates to This Cookie Policy</h3>
        <p className="text-gray-300">
          We may update this Cookie Policy to reflect changes in our use of cookies or applicable regulations. 
          Updates will be communicated on our website, and the "Effective Date" will be revised accordingly.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">8. Contact Us</h3>
        <p className="text-gray-300">
          If you have any questions about our Cookie Policy or how we use cookies, you can contact us at:
        </p>
        <p className="text-gray-300 mt-2">Email: support@payzio.io</p>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-300">
          By continuing to use Payzio, you consent to the use of cookies as described in this policy.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title="PAYZIO Cookie Policy - How We Use Cookies"
        description="Learn about PAYZIO's cookie usage, including essential, functional, and analytics cookies. Understand your choices and how to manage cookie preferences."
        keywords="payzio cookie policy, cookies, website tracking, privacy settings, cookie preferences, web analytics, user experience"
        url="https://payzio.io/cookies"
        type="article"
        publishedTime="2024-03-15T00:00:00Z"
        modifiedTime="2024-03-15T00:00:00Z"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "PAYZIO Cookie Policy",
          "description": "Detailed information about how PAYZIO uses cookies and similar technologies.",
          "url": "https://payzio.io/cookies",
          "datePublished": "2024-03-15",
          "dateModified": "2024-03-15",
          "publisher": {
            "@type": "Organization",
            "name": "PAYZIO"
          }
        }}
      />
<div className="relative pt-32 pb-20 bg-[#0F1116] overflow-hidden text-white">
  {/* Blobs */}
  <div className="absolute inset-0 pointer-events-none -z-10">
    <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-400 filter blur-3xl opacity-20 animate-float" />
    <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 filter blur-2xl opacity-25 animate-float-slow" />
    <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-500 filter blur-3xl opacity-15 animate-float-reverse" />
  </div>

  {/* Cookie Policy Header */}
  <section className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
    <div className="flex justify-center mb-6">
      <div className="bg-[#2f68b4]/10 p-4 rounded-full">
        <Cookie className="w-12 h-12 text-[#2f68b4]" />
      </div>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Cookie Policy
    </h1>
    <p className="text-xl text-gray-300">
      Understanding how we use cookies to improve your experience
    </p>
  </section>

  {/* Cards Section */}
  <section className="relative z-10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: 'Essential Cookies', description: 'Necessary for basic website functionality' },
          { icon: Settings, title: 'Functional Cookies', description: 'Remember your preferences and settings' },
          { icon: BarChart, title: 'Analytics Cookies', description: 'Help us improve our services' },
          { icon: Clock, title: 'Cookie Duration', description: 'How long cookies stay on your device' },
          { icon: Globe, title: 'Third-Party Cookies', description: 'Cookies from our trusted partners' },
          { icon: Settings, title: 'Cookie Management', description: 'Control your cookie preferences' }
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-[#1a1d25]/50 border border-[#2f68b4]/20 rounded-xl p-8 blur-effect glow hover:shadow-xl transition-all cursor-pointer"
            onClick={() => openModal(title, fullCookiePolicyContent)}
          >
            <div className="bg-[#2f68b4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-[#2f68b4]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Pill CTA Button */}
  <section className="relative z-10 py-12 text-center">
    <button
      onClick={() => openModal('Complete Cookie Policy', fullCookiePolicyContent)}
      className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300 inline-flex items-center"
    >
      View Complete Cookie Policy
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
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
