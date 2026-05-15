
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  solution: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Which Primitive AI products can be deployed quickly?',
      a: 'SupportHub, KnowledgeHub, and FamilyHub are our SaaS, which can be used out-of-the-box. VisionHub (Camera AI) requires on-site hardware setup and takes 4–6 weeks. LegalHub can be configured and running in 1–2 weeks for standard use cases.',
    },
    {
      q: 'How does SupportHub handle escalation to human agents?',
      a: 'SupportHub detects when a conversation exceeds the AI\'s confidence threshold or when a customer explicitly requests a human. It transfers the full conversation history and context to your human agent in real time — ensuring zero repetition for the customer.',
    },
    {
      q: 'Can VisionHub integrate with our existing CCTV cameras?',
      a: 'Yes. VisionHub is designed to work with most standard IP cameras and RTSP-compatible feeds. Our team performs a compatibility assessment during onboarding and can install edge AI hardware where needed for real-time processing.',
    },
    {
      q: 'How does KnowledgeHub stay accurate as our knowledge changes?',
      a: 'KnowledgeHub continuously indexes connected sources — documents, wikis, and internal systems — and flags outdated content for review. Admins can update knowledge bases directly, and changes propagate instantly across all AI responses.',
    },
    {
      q: 'Is LegalHub compliant with e-signature regulations?',
      a: 'Yes. LegalHub\'s e-signature module complies with eIDAS (EU), ESIGN Act (US), and UETA standards. All signatures include a full audit trail with timestamps, IP records, and identity verification for legal enforceability.',
    },
    {
      q: 'Can your AI solutions integrate with our existing systems?',
      a: 'All our products expose REST APIs and support webhook integrations. We have pre-built connectors for common CRMs (Salesforce, HubSpot), helpdesks (Zendesk, Freshdesk), and document systems (Google Drive, SharePoint). Custom integrations are handled by our engineering team.',
    },
    {
      q: 'Do you build fully custom AI solutions?',
      a: 'Yes — beyond our product suite, we offer end-to-end custom AI development through our services arm. This includes AI agent development, model fine-tuning on your proprietary data, custom API development, and workflow automation tailored to your specific processes.',
    },
    {
      q: 'How is our data protected across your platforms?',
      a: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We follow SOC 2 security practices, enforce role-based access controls, and conduct regular third-party security audits. Your data is never used to train shared models without explicit written consent.',
    },
    {
      q: 'What ongoing support is included after deployment?',
      a: 'All plans include access to our support portal, documentation, and email support. Business and Enterprise plans add dedicated account management, 24/7 technical assistance, and scheduled quarterly reviews to ensure your AI solutions keep delivering value.',
    },
    {
      q: 'How do you price your products and services?',
      a: 'Our products are offered on monthly subscription tiers based on usage volume and features — see individual product pages for pricing. Custom AI development services are quoted per project after a scoping call. Contact us to get a tailored proposal.',
    },
  ];
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      solution: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Contact request from ${data.firstName} ${data.lastName}`);
      const body = encodeURIComponent(
        `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nInterested in: ${data.solution || 'N/A'}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:doannt@prai.tech?subject=${subject}&body=${body}`;

      if (typeof window !== 'undefined') {
        window.location.href = mailtoLink;
      }

      form.reset();
      toast.success('Your email client should open shortly.');
    } catch (error) {
      console.error('Error opening email client:', error);
      toast.error('Failed to open email client. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section min-h-screen flex items-center" data-theme="dark">
        <div className="section-container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">Get in Touch</h1>
            <p className="text-base md:text-xl text-purple-200/80">
              Have questions about our AI solutions? We're here to help you find the right technology for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="snap-section" data-theme="light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below, and one of our AI specialists will get back to you within 24 hours.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="solution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I'm interested in</FormLabel>
                        <FormControl>
                          <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                            {...field}
                          >
                            <option value="">Select a solution</option>
                            <option value="camera-ai">Camera AI Platform</option>
                            <option value="supportHub">SupportHub</option>
                            <option value="legalhub">LegalHub Platform</option>
                            <option value="document-processing">Intelligent Document Processing</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or requirements..." 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">doannt@prai.tech</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (917) 508-5261</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">2261 Market Street STE 22919</p>
                      <p className="text-muted-foreground">San Francisco, CA 94114</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM PST</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="flex justify-center items-center space-x-4">
                    {/* <a href="#" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a> */}
                    <a href="https://www.linkedin.com/company/primitiveai" target="_blank" rel="noreferrer noopener" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="PrimitiveAI LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.5 0h-4.5v16h4.5v-8.25c0-4.5 6-4.86 6 0v8.25h4.5v-10.5c0-6.33-6-6.12-10.5-2.99v-2.76z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576290153158" target="_blank" rel="noreferrer noopener" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="PrimitiveAI Facebook">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.49v-9.294H9.692V11.31h3.122V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.396h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576564019410" target="_blank" rel="noreferrer noopener" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="PrimitiveAI Việt Nam Facebook">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.49v-9.294H9.692V11.31h3.122V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.396h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                      </svg>
                    </a>
                    {/* <a href="#" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors" aria-label="GitHub">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="snap-section bg-gradient-to-b from-purple-50/40 to-transparent" data-theme="light">
        <div className="section-container py-16 md:pb-16">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our products, services, and how we work"
            centered
          />

          <div className="mt-10 max-w-3xl mx-auto divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-base font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground text-left">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="mailto:nguyentrongdoan.0@gmail.com?subject=Contact%20from%20FAQ%20section"
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5"
            >
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
