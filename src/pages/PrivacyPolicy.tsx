import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <Helmet>
        <title>Privacy Policy | Renovation Leads Global</title>
        <meta name="description" content="Our privacy policy outlines how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://renovationleads.com/privacy-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Renovation Leads Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our lead generation services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Use of Your Information</h2>
            <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your subscription and lead purchases.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-bold text-slate-900">Renovation Leads Global</p>
              <p>Email: renovationleads37@gmail.com</p>
              <p>Phone: +1 343 634 8743</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
