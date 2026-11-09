
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Privacy = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-left">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: June 1, 2024</p>
          </div>
        </div>
      </section>
      <div className="site-container">
        <div className="policy-sections prose prose-lg max-w-4xl mx-auto text-left">
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At Primitive AI ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our website and services, including:
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
              <p>
                Personal information is information that identifies you as an individual. We may collect the following personal information:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name and address</li>
                <li>Job title</li>
                <li>Payment information</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Usage Information</h3>
              <p>
                We may automatically collect certain information about your device and how you interact with our website or services, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Time and date of access</li>
                <li>Pages viewed</li>
                <li>Actions taken on our website</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>
                We may use the information we collect from you for various purposes, including:
              </p>
              <ul>
                <li>Providing and maintaining our services</li>
                <li>Processing transactions</li>
                <li>Sending administrative information</li>
                <li>Responding to inquiries and customer service requests</li>
                <li>Sending marketing and promotional communications</li>
                <li>Improving our website and services</li>
                <li>Protecting our rights and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
              <p>
                We may disclose your personal information in the following circumstances:
              </p>
              <ul>
                <li>To our subsidiaries and affiliates</li>
                <li>To contractors, service providers, and other third parties we use to support our business</li>
                <li>To fulfill the purpose for which you provide it</li>
                <li>For any other purpose disclosed by us when you provide the information</li>
                <li>To comply with any court order, law, or legal process</li>
                <li>To enforce our terms of service</li>
                <li>If we believe disclosure is necessary to protect our rights, property, or safety, or that of our customers or others</li>
              </ul>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational measures to secure your personal information from accidental loss and unauthorized access, use, alteration, and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section className="policy-clause">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
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

export default Privacy;
