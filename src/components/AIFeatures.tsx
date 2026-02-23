import React from 'react';
import { Bot, BrainCircuit, MessageSquareText, BarChart3, ShieldCheck } from 'lucide-react';

export default function AIFeatures() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-bold mb-6 backdrop-blur-sm">
            <Bot className="h-4 w-4" />
            Powered by Artificial Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Smarter Leads. Better Results.</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We use advanced AI technology to ensure you only get leads that are ready to hire, filtering out the noise so you can focus on building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <BrainCircuit className="h-8 w-8" />,
              title: "Smart Matching",
              desc: "Our AI analyzes project details to match homeowners with the contractor best suited for the job based on skills and location."
            },
            {
              icon: <ShieldCheck className="h-8 w-8" />,
              title: "Intent Verification",
              desc: "Automated systems verify phone numbers and project budgets instantly, filtering out spam and low-quality inquiries."
            },
            {
              icon: <MessageSquareText className="h-8 w-8" />,
              title: "Instant Alerts",
              desc: "Get notified via WhatsApp or SMS the second a high-value lead matches your profile. Speed wins deals."
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              title: "Market Insights",
              desc: "Receive data-driven insights on renovation trends in your city to help you price your services competitively."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors group shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
