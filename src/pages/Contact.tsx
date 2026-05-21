
import React, { useState, useMemo } from 'react';
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
import { useTranslation } from 'react-i18next';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  solution?: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation('contact');

  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

  const formSchema = useMemo(() => z.object({
    firstName: z.string().min(2, { message: t('form.validation.first_name_min') }),
    lastName: z.string().min(2, { message: t('form.validation.last_name_min') }),
    email: z.string().email({ message: t('form.validation.email_invalid') }),
    company: z.string().optional(),
    solution: z.string().optional(),
    message: z.string().min(10, { message: t('form.validation.message_min') }),
  }), [t]);

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
      toast.success(t('form.toast_success'));
    } catch (error) {
      console.error('Error opening email client:', error);
      toast.error(t('form.toast_error'));
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
            <h1 className="hero-heading mb-6">{t('hero.title')}</h1>
            <p className="text-base md:text-xl text-purple-200/80">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="snap-section" data-theme="light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('form.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('form.subtitle')}
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('form.first_name')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.placeholder_first')} {...field} />
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
                          <FormLabel>{t('form.last_name')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.placeholder_last')} {...field} />
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
                        <FormLabel>{t('form.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('form.placeholder_email')} type="email" {...field} />
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
                        <FormLabel>{t('form.company')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('form.placeholder_company')} {...field} />
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
                        <FormLabel>{t('form.interested_in')}</FormLabel>
                        <FormControl>
                          <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                            {...field}
                          >
                            <option value="">{t('form.select_solution')}</option>
                            <option value="camera-ai">{t('form.option_camera_ai')}</option>
                            <option value="supportHub">{t('form.option_support_hub')}</option>
                            <option value="legalhub">{t('form.option_legal_hub')}</option>
                            <option value="document-processing">{t('form.option_doc_processing')}</option>
                            <option value="other">{t('form.option_other')}</option>
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
                        <FormLabel>{t('form.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('form.placeholder_message')}
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
                      <>{t('form.sending')}</>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" /> {t('form.send')}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h2 className="text-3xl font-bold mb-6">{t('info.title')}</h2>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{t('info.email_label')}</h3>
                      <p className="text-muted-foreground">{t('info.email_value')}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{t('info.phone_label')}</h3>
                      <p className="text-muted-foreground">{t('info.phone_value')}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{t('info.location_label')}</h3>
                      <p className="text-muted-foreground">{t('info.location_line1')}</p>
                      <p className="text-muted-foreground">{t('info.location_line2')}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{t('info.hours_label')}</h3>
                      <p className="text-muted-foreground">{t('info.hours_weekday')}</p>
                      <p className="text-muted-foreground">{t('info.hours_weekend')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">{t('info.connect')}</h3>
                  <div className="flex justify-center items-center space-x-4">
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
            badge={t('faq.badge')}
            title={t('faq.title')}
            subtitle={t('faq.subtitle')}
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
            <p className="text-muted-foreground mb-4">{t('faq.still_questions')}</p>
            <a
              href="mailto:nguyentrongdoan.0@gmail.com?subject=Contact%20from%20FAQ%20section"
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-5"
            >
              <Mail className="mr-2 h-4 w-4" /> {t('faq.email_us')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
