import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-slate-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Contact Us | Renovation Leads Global</title>
        <meta name="description" content="Ready to grow your business? Contact us today to join our network of trusted contractors. Phone: +1 343 634 8743." />
        <link rel="canonical" href="https://renovationleads.com/contact" />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Start Getting Leads Today</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Fill out the form below to join our network. We'll review your application and get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Info & Benefits */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Phone & WhatsApp</p>
                    <p className="text-lg font-medium text-slate-900 mb-1">
                      <span className="text-sm text-slate-500 block">Global (WhatsApp):</span> +1 343 634 8743
                    </p>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-sm text-slate-500 block">Cameroon:</span> +237 657 960 690
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Email</p>
                    <p className="text-lg font-medium text-slate-900 break-all">renovationleads37@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Locations</p>
                    <div className="mb-3">
                      <p className="text-sm font-bold text-slate-900">Global Operations:</p>
                      <p className="text-slate-600">Worldwide Coverage</p>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-bold text-slate-900">Head Office:</p>
                      <p className="text-slate-600">Canada</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Cameroon Branch:</p>
                      <p className="text-slate-600">Douala & Yaoundé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Join Card */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Why Join Us?</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">No setup fees or hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Cancel anytime, no long-term contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Exclusive leads available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-8 md:p-10">
                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for your interest. Our team will review your details and contact you shortly to verify your business.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-orange-600 font-bold hover:text-orange-700"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="business" className="text-sm font-bold text-slate-700">Business Name</label>
                        <input 
                          type="text" 
                          id="business" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="Doe Construction Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-slate-700">Primary Service</label>
                        <select 
                          id="service" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                        >
                          <option>Home Renovation</option>
                          <option>Kitchen & Bath</option>
                          <option>Roofing</option>
                          <option>Painting</option>
                          <option>Electrical</option>
                          <option>Plumbing</option>
                          <option>Tiling/Flooring</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-bold text-slate-700">Main City</label>
                        <select 
                          id="city" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                        >
                          <option>Douala</option>
                          <option>Yaoundé</option>
                          <option>Buea</option>
                          <option>Limbe</option>
                          <option>Bamenda</option>
                          <option>Kribi</option>
                          <option>Bafoussam</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="details" className="text-sm font-bold text-slate-700">Additional Details</label>
                      <textarea 
                        id="details" 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="Tell us about your team size, experience, and what kind of leads you are looking for..."
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                      <p className="text-xs text-blue-700">
                        Your information is secure. We verify all contractors to maintain the quality of our network.
                      </p>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <>Processing...</>
                      ) : (
                        <>Get My Free Leads <Send className="h-5 w-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our lead generation service.</p>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="How much do the leads cost?" 
              answer="Lead prices vary depending on the service type (e.g., roofing leads cost more than painting leads) and the location. We offer competitive pricing starting as low as 5,000 CFA per lead. Contact us for a full price list." 
            />
            <FAQItem 
              question="Are the leads exclusive?" 
              answer="We offer both exclusive and shared leads. Exclusive leads are sent only to you, while shared leads are sent to a maximum of 3 contractors. Exclusive leads have a higher conversion rate but cost slightly more." 
            />
            <FAQItem 
              question="Do you guarantee jobs?" 
              answer="We guarantee high-quality, verified leads with valid contact information. However, we cannot guarantee that you will win every job, as that depends on your sales skills, pricing, and availability. We do provide sales training to help you close more deals." 
            />
            <FAQItem 
              question="Which cities do you cover?" 
              answer="We currently cover Douala, Yaoundé, Buea, Limbe, Bamenda, Kribi, and Bafoussam. We are expanding to other cities soon." 
            />
            <FAQItem 
              question="Is there a long-term contract?" 
              answer="No. You can pay-as-you-go or subscribe to a monthly package. You can cancel or pause your account at any time without penalty." 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
