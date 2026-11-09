
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="policy-page animate-fade-in">
      <section className="policy-title-panel">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-left">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: June 1, 2024</p>
          </div>
        </div>
      </section>
      <div className="site-container">
        <div className="policy-sections prose prose-lg max-w-4xl mx-auto text-left">
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by Primitive AI ("we", "our", or "us"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p>
                Primitive AI provides various AI-powered solutions, including but not limited to: Camera AI Platform, AI Chatbot & Voice Bot, LegalHub Platform, and Intelligent Document Processing. These services are designed to help businesses improve efficiency, safety, and customer experience through artificial intelligence technologies.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p>
                Some of our services require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information when creating your account</li>
                <li>Update your information to keep it current</li>
                <li>Notify us immediately of any unauthorized access to or use of your account</li>
                <li>Ensure that you log out of your account at the end of each session</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">4. Fees and Payment</h2>
              <p>
                Certain services may require payment of fees. All fees are specified on our website or in a separate agreement. You agree to pay all fees in accordance with the payment terms. We may modify our fees at any time with advance notice. Continued use of our services after a fee change constitutes acceptance of the new fees.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, and software, are the exclusive property of Primitive AI or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may use our services only as expressly permitted in these Terms. You may not:
              </p>
              <ul>
                <li>Modify, copy, or create derivative works based on our services</li>
                <li>Frame or mirror any part of our services without our express written consent</li>
                <li>Use any data mining, robots, or similar data gathering and extraction methods</li>
                <li>Decompile, reverse engineer, or disassemble our software</li>
                <li>Access our services to build a competitive product or service</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              <p>
                You retain ownership of any content you submit, post, or display on or through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute such User Content for the purpose of providing and improving our services.
              </p>
              <p className="mt-4">
                You represent and warrant that:
              </p>
              <ul>
                <li>You own or have the necessary rights to use and authorize us to use your User Content</li>
                <li>Your User Content does not violate the rights of any third party</li>
                <li>Your User Content complies with all applicable laws and regulations</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">7. Prohibited Uses</h2>
              <p>
                You agree not to use our services:
              </p>
              <ul>
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit or facilitate the transmission of unsolicited or unauthorized advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate Primitive AI, our employees, or other users</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
                <li>To attempt to gain unauthorized access to our systems or user accounts</li>
                <li>To use our services for any harmful, fraudulent, or illegal purpose</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Primitive AI and our affiliates, directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of our services.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Primitive AI and our affiliates, directors, officers, employees, and agents from and against all claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable attorneys' fees) arising from or relating to your use of our services or your violation of these Terms.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to your breach of these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved exclusively in the state or federal courts located in San Francisco, California.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                Primitive AI<br />
                Email: doannt@primitive-ai.com<br />

              </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
