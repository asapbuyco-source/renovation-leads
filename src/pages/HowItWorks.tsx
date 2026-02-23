import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Search, Filter, Send } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>How It Works | Renovation Leads Cameroon</title>
        <meta name="description" content="Learn how our lead generation system works. 1. Create Profile. 2. Receive Verified Leads. 3. Close the Deal. Simple, transparent, and effective." />
        <link rel="canonical" href="https://renovationleads.cm/how-it-works" />
      </Helmet>
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">How Our System Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A simple, transparent process designed to fill your pipeline with quality jobs.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Targeted Marketing</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We run high-performance ad campaigns across Google, Facebook, and local networks in Cameroon. We target homeowners specifically searching for terms like "renovation contractor Douala" or "kitchen remodeling Yaoundé".
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">Screening & Qualification</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Not every click becomes a lead. We use a multi-step form to capture project details, budget, and timeline. We filter out spam and low-quality inquiries so you don't waste your time.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-green-500" /> Verified Phone Numbers
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-green-500" /> Specific Project Descriptions
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-green-500" /> Location Confirmation
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Send className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-slate-900">Instant Delivery</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                The moment a homeowner submits a request, you get a notification via Email or WhatsApp. Speed is key to closing deals, so we ensure you get the lead instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12 text-center border border-slate-200">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Ready to try it out?</h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join our network of contractors today. No long-term contracts, just results.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
