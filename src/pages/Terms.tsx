import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  FileText, UserCheck, Shield, DollarSign, 
  Scale, Lock, Bell, Mail, ArrowRight 
} from 'lucide-react';
import { Modal } from '../components/Modal';

export default function Terms() {
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

  const fullTermsContent = (
    <div className="space-y-8">
      <div>
        <p className="text-gray-300 mb-4">Effective Date: March 15, 2024</p>
        <p className="text-gray-300">
          Welcome to Payzio! These Terms of Service ("Terms") govern your use of Payzio's platform, 
          services, and tools ("Services"). By accessing or using our Services, you agree to these Terms. 
          If you do not agree, please discontinue use immediately.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">1. Eligibility</h3>
        <p className="text-gray-300 mb-4">To use Payzio, you must:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Be at least 18 years old or the age of majority in your jurisdiction.</li>
          <li>Have the authority to enter into a binding agreement.</li>
          <li>Use Payzio for lawful purposes only.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">2. Account Responsibilities</h3>
        <p className="text-gray-300 mb-4">You are responsible for:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Providing accurate and up-to-date information during account registration.</li>
          <li>Keeping your account credentials confidential.</li>
          <li>Notifying us immediately of unauthorized access or security breaches.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Payzio is not responsible for any losses or damages arising from your failure to secure your account.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">3. Services Provided</h3>
        <p className="text-gray-300 mb-4">Payzio offers tools for financial management, including:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Income tracking with invoice creation.</li>
          <li>Expense tracking with customizable fields.</li>
          <li>Recurring expense management.</li>
          <li>Exportable metrics for tax and accounting purposes.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Payzio does not provide tax preparation or financial advisory services.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">4. Pricing and Payments</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Payzio is available for $15/month or $150/year.</li>
          <li>Payments are billed automatically based on your selected subscription.</li>
          <li>You may cancel your subscription at any time; however, refunds will only be issued in accordance with our Refund Policy.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">5. User Inputs and Liability</h3>
        <p className="text-gray-300 mb-4">While Payzio provides tools to help you manage your finances, it is important to note:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>You are solely responsible for the accuracy of the data you input into the platform.</li>
          <li>Payzio is not liable for any discrepancies, miscalculations, or errors resulting from incorrect or incomplete user inputs.</li>
          <li>Always verify your financial records and consult a professional when needed.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">6. Limitation of Liability</h3>
        <p className="text-gray-300 mb-4">Payzio strives to provide accurate and reliable tools; however:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>We do not guarantee specific financial outcomes or results.</li>
          <li>We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.</li>
          <li>Our liability is limited to the amount you have paid to Payzio in the past 12 months.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">7. Data Security and Privacy</h3>
        <p className="text-gray-300 mb-4">Payzio prioritizes your security:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>All personal and financial data is encrypted during transit and at rest.</li>
          <li>We comply with applicable data protection regulations.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">8. Prohibited Activities</h3>
        <p className="text-gray-300 mb-4">You agree not to:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Use Payzio for illegal purposes or to engage in fraudulent activity.</li>
          <li>Interfere with the operation of the platform.</li>
          <li>Reverse engineer or misuse the Services.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Violation of these Terms may result in account termination.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">9. Changes to the Terms</h3>
        <p className="text-gray-300">
          We may update these Terms to reflect changes in our Services or applicable laws. 
          Significant updates will be communicated via email or in-app notifications.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">10. Governing Law</h3>
        <p className="text-gray-300">
          These Terms are governed by the laws of the State of Delaware. Any disputes arising under 
          these Terms will be resolved exclusively in the courts of Delaware.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">11. Contact Information</h3>
        <p className="text-gray-300">
          If you have questions about these Terms, please contact us at:
        </p>
        <p className="text-gray-300 mt-2">Email: support@payzio.io</p>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-300">
          By using Payzio, you acknowledge that you have read, understood, and agree to these Terms of Service. 
          Thank you for choosing Payzio for your financial management needs!
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title="PAYZIO Terms of Service - Legal Terms and Conditions"
        description="Read PAYZIO's terms of service. Understand your rights and responsibilities when using our financial management platform for your business."
        keywords="payzio terms of service, legal terms, user agreement, service conditions, business software terms, user responsibilities"
        url="https://payzio.io/terms"
        type="article"
        publishedTime="2024-03-15T00:00:00Z"
        modifiedTime="2024-03-15T00:00:00Z"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TermsOfService",
          "name": "PAYZIO Terms of Service",
          "description": "Legal terms and conditions governing the use of PAYZIO financial management platform.",
          "url": "https://payzio.io/terms",
          "datePublished": "2024-03-15",
          "dateModified": "2024-03-15",
          "publisher": {
            "@type": "Organization",
            "name": "PAYZIO"
          }
        }}
      />
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
                <FileText className="w-12 h-12 text-[#2f68b4]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to transparency and fair business practices
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Account Terms",
                description: "Eligibility requirements and account responsibilities",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Account Requirements</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Must be 18 years or older</li>
                      <li>Provide accurate account information</li>
                      <li>Maintain account security</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Shield,
                title: "User Obligations",
                description: "Your responsibilities when using Payzio",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Your Responsibilities</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Use the service lawfully</li>
                      <li>Maintain accurate records</li>
                      <li>Protect account credentials</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: DollarSign,
                title: "Pricing Terms",
                description: "Subscription costs and payment policies",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Pricing Structure</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>$15/month or $150/year</li>
                      <li>Automatic billing</li>
                      <li>Cancellation terms</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Scale,
                title: "Legal Terms",
                description: "Liability and legal responsibilities",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Legal Framework</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Limitation of liability</li>
                      <li>Dispute resolution</li>
                      <li>Governing law</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Lock,
                title: "Data Handling",
                description: "How we protect and manage your data",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Data Protection</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Data encryption standards</li>
                      <li>Privacy protection</li>
                      <li>Data retention policies</li>
                    </ul>
                  </div>
                )
              },
              {
                icon: Bell,
                title: "Updates & Changes",
                description: "How we handle terms updates",
                content: (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Terms Updates</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Notice of changes</li>
                      <li>Update communication</li>
                      <li>User acknowledgment</li>
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

      
      {/* Add View All Terms Button before the Contact CTA Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={() => openModal("Complete Terms of Service", fullTermsContent)}
              className="group bg-[#1a1d25] text-white px-8 py-3 rounded-lg font-semibold text-lg border border-[#2f68b4]/20 hover:bg-[#2f68b4]/10 transition-all duration-300 inline-flex items-center"
            >
              View Complete Terms of Service
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Previous Contact CTA Section remains unchanged */}
      {/* ... */}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.content}
      </Modal>
    </div>
    </>
  );
}