import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <Helmet>
        <title>Terms and Conditions | Renovation Leads Global</title>
        <meta name="description" content="Read our terms and conditions regarding the use of our lead generation services." />
        <link rel="canonical" href="https://renovationleads.com/terms-and-conditions" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Renovation Leads Global ("we," "us," or "our"), concerning your access to and use of the renovationleads.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. User Representations</h2>
            <p className="mb-4">By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Lead Generation Services</h2>
            <p className="mb-4">
              We provide lead generation services for contractors. While we strive to verify the quality of every lead, we cannot guarantee that every lead will result in a successful job or contract.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lead Quality:</strong> We use AI and manual verification processes to ensure lead quality, but we are not responsible for the final decision of the homeowner.</li>
              <li><strong>Payments:</strong> Payments for leads or subscriptions are non-refundable unless otherwise stated in a specific agreement or if a lead is proven to be invalid (e.g., wrong number, out of service area).</li>
              <li><strong>Exclusivity:</strong> "Exclusive" leads are sold to only one contractor. "Shared" leads may be sold to a limited number of contractors (maximum 3).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
