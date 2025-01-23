import React, { useState } from 'react';
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
    <div className="min-h-screen bg-[#0F1116] relative overflow-hidden pt-32">
      {/* Background Gradient Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-blur opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] gradient-blur opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] gradient-blur opacity-25" />
      </div>

      {/* Introduction Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-[#2f68b4]/10 p-4 rounded-full">
                <Cookie className="w-12 h-12 text-[#2f68b4]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understanding how we use cookies to improve your experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Cookie Policy Sections */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Essential Cookies",
                description: "Necessary for basic website functionality",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Authentication and security</li>
                      <li>Session management</li>
                      <li>Core functionality</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Settings,
                title: "Functional Cookies",
                description: "Remember your preferences and settings",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Language preferences</li>
                      <li>User interface customization</li>
                      <li>Saved settings</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: BarChart,
                title: "Analytics Cookies",
                description: "Help us improve our services",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Usage patterns</li>
                      <li>Performance metrics</li>
                      <li>User behavior analysis</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Clock,
                title: "Cookie Duration",
                description: "How long cookies stay on your device",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Cookie Lifespan</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Session cookies</li>
                      <li>Persistent cookies</li>
                      <li>Expiration periods</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Globe,
                title: "Third-Party Cookies",
                description: "Cookies from our trusted partners",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Third-Party Usage</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Analytics providers</li>
                      <li>Marketing services</li>
                      <li>Social media integration</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Settings,
                title: "Cookie Management",
                description: "Control your cookie preferences",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Managing Cookies</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Browser settings</li>
                      <li>Opt-out options</li>
                      <li>Privacy controls</li>
                    </ul>
                  </div>
                )
              }
            ].map(({ icon: Icon, title, description, content }) => (
              <div 
                key={title}
                className="blur-effect bg-[#1a1d25]/50 rounded-xl p-8 border border-[#2f68b4]/20 glow card-hover cursor-pointer"
                onClick={() => openModal(title, content)}
              >
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

      {/* View Complete Cookie Policy Button */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={() => openModal("Complete Cookie Policy", fullCookiePolicyContent)}
             className="group bg-[#1a1d25] text-white px-8 py-3 rounded-lg font-semibold text-lg border border-[#2f68b4]/20 hover:bg-[#2f68b4]/10 transition-all duration-300 inline-flex items-center"
            >
              View Complete Cookie Policy
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
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