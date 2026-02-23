import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Check, Search, Filter, Send, Phone, DollarSign, ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';

const MarketingAnimation = () => (
  <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 opacity-[0.03]">
      {[...Array(48)].map((_, i) => (
        <div key={i} className="bg-slate-900 rounded-sm" />
      ))}
    </div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-3/4 h-3/4 bg-white rounded-xl shadow-xl border border-slate-200 p-4 flex flex-col relative z-10"
    >
      <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 flex items-end justify-between gap-3 px-2">
        {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "10%" }}
            whileInView={{ height: `${h * 100}%` }}
            transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            className="w-full bg-blue-500 rounded-t-md opacity-90"
          />
        ))}
      </div>
    </motion.div>
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 right-10 bg-orange-500 p-3 rounded-full shadow-lg z-20"
    >
      <Search className="text-white h-6 w-6" />
    </motion.div>
  </div>
);

const ScreeningAnimation = () => (
  <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
    <div className="w-64 h-full bg-white border-x border-slate-200 shadow-sm flex flex-col relative">
      <div className="h-12 bg-slate-100 border-b border-slate-200 flex items-center justify-center">
        <div className="w-20 h-4 bg-slate-300 rounded-full opacity-50" />
      </div>
      <div className="p-4 space-y-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.8, duration: 0.5 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center">
              <Users className="h-4 w-4 text-slate-400" />
            </div>
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-600 w-48">
              <div className="h-2 bg-slate-300 rounded w-3/4 mb-2 opacity-50" />
              <div className="h-2 bg-slate-300 rounded w-1/2 opacity-50" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.8 + 0.4, type: "spring" }}
              className="absolute right-4 bg-green-500 rounded-full p-1"
            >
              <Check className="h-3 w-3 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-green-500/5 pointer-events-none"
    />
  </div>
);

const DeliveryAnimation = () => (
  <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
    <div className="w-48 h-80 bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl z-20" />
      <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, repeat: Infinity, repeatDelay: 3 }}
          className="w-full bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-500 p-1.5 rounded-lg">
              <Phone className="h-3 w-3 text-white" />
            </div>
            <span className="text-white text-xs font-bold">New Lead</span>
          </div>
          <div className="h-2 bg-white/20 rounded w-full mb-1" />
          <div className="h-2 bg-white/20 rounded w-2/3" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-purple-500/20 rounded-full z-0"
        />
      </div>
    </div>
    <motion.div
      animate={{ x: [100, -100] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
    />
  </div>
);

const DealAnimation = () => (
  <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-80 bg-white shadow-xl border border-slate-200 rounded-lg p-6 flex flex-col items-center relative"
    >
      <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center">
        <Users className="h-8 w-8 text-slate-400" />
      </div>
      <div className="w-full h-4 bg-slate-100 rounded mb-2" />
      <div className="w-full h-4 bg-slate-100 rounded mb-2" />
      <div className="w-2/3 h-4 bg-slate-100 rounded mb-8" />
      
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        className="absolute bottom-8 rotate-[-12deg] border-4 border-green-500 text-green-500 font-black text-2xl px-4 py-2 rounded-lg uppercase tracking-widest opacity-80"
      >
        Sold
      </motion.div>
    </motion.div>
    
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: -100, opacity: [0, 1, 0] }}
        transition={{ delay: 0.8 + i * 0.2, duration: 2, repeat: Infinity }}
        className="absolute text-green-500 font-bold text-xl"
        style={{ left: `${20 + i * 15}%`, top: '60%' }}
      >
        $
      </motion.div>
    ))}
  </div>
);

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>How It Works | Renovation Leads Cameroon</title>
        <meta name="description" content="See how our AI-driven lead generation system works. From targeted marketing to instant delivery, we simplify the process of finding new renovation jobs." />
        <link rel="canonical" href="https://renovationleads.cm/how-it-works" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
           <img
            src="https://picsum.photos/seed/blueprint-planning/1920/1080"
            alt="Blueprint background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-bold mb-6 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              Streamlined Process
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              From Click to <span className="text-orange-500">Contract</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We've built a sophisticated engine that turns homeowner interest into money in your pocket. Here is exactly how it happens.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12 order-2 md:order-1">
                <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Targeted Acquisition</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We run high-performance ad campaigns across Google, Facebook, and local networks in Cameroon. We target homeowners specifically searching for terms like "renovation contractor Douala" or "kitchen remodeling Yaoundé".
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-white shadow-xl z-10 hidden md:flex">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                    <MarketingAnimation />
                 </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="md:pr-12 order-1">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                    <ScreeningAnimation />
                 </div>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-white shadow-xl z-10 hidden md:flex">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="md:pl-12 order-2">
                <div className="inline-block p-3 bg-green-100 rounded-2xl mb-4">
                  <Filter className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. AI Screening & Verification</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Not every click becomes a lead. Our AI bot "BuilderBot" engages with the homeowner to verify:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-green-500" /> Valid Phone Number (OTP)
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-green-500" /> Project Budget & Timeline
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-green-500" /> Property Ownership
                  </li>
                </ul>
              </div>
            </div>

             {/* Step 3 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12 order-2 md:order-1">
                <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4">
                  <Send className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Instant Delivery</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The moment a lead passes our screening, it is routed to the best-matched contractor. You receive a notification via SMS, Email, and WhatsApp within seconds.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg">
                  <Zap className="h-4 w-4" /> Avg. delivery time: 12 seconds
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-white shadow-xl z-10 hidden md:flex">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                    <DeliveryAnimation />
                 </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="md:pr-12 order-1">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                    <DealAnimation />
                 </div>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 border-4 border-white shadow-xl z-10 hidden md:flex">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:pl-12 order-2">
                <div className="inline-block p-3 bg-orange-100 rounded-2xl mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">4. You Close & Keep 100%</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  You contact the homeowner, provide a quote, and win the job. We do not take commissions. You keep 100% of the profit from every job you land.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Specs / Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Powered by Technology</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">Our platform isn't just a list of names. It's a smart engine designed to maximize your ROI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
                 title: "Fraud Detection",
                 desc: "Our algorithms flag suspicious IP addresses and duplicate requests to ensure you never pay for fake leads."
               },
               {
                 icon: <Users className="h-6 w-6 text-orange-600" />,
                 title: "Smart Matching",
                 desc: "We match leads based on your specific trade (e.g. Tiling) and location (e.g. Douala V) to ensure relevance."
               },
               {
                 icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
                 title: "Performance Tracking",
                 desc: "Track your call rates, quote rates, and closing rates in your dashboard to optimize your sales process."
               }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                   {item.icon}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Fill Your Pipeline?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join the network of top-tier contractors in Cameroon. No long-term contracts, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
