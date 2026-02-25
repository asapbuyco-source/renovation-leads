import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Phone, Star, Target, ArrowUpRight, Hammer, PaintBucket, Wrench, Home as HomeIcon, Clock, MapPin, Zap } from 'lucide-react';
import AIFeatures from '../components/AIFeatures';

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Helmet>
        <title>Renovation Leads Global | #1 Lead Generation for Contractors</title>
        <meta name="description" content="Connect with homeowners worldwide. Get exclusive, verified renovation leads sent directly to your phone." />
        <link rel="canonical" href="https://renovationleads.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 lg:w-96 lg:h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 lg:w-96 lg:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-orange-600 text-xs lg:text-sm font-bold mb-8 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                #1 Lead Generation Platform Worldwide
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                Stop Chasing Jobs. <br/>
                Let the <span className="text-orange-600 relative inline-block">
                  Clients
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> Come to You.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We connect renovation contractors with homeowners who are ready to hire. <b>Exclusive leads, verified phone numbers, real results.</b>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/30 transform hover:-translate-y-1"
                >
                  Get 3 Free Leads + Free Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-6 justify-center lg:justify-start border-t border-slate-200 pt-8">
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Contractors</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">$20M+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Project Value Generated</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                  alt="Construction Site" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                    <p className="text-xs font-bold uppercase tracking-wider text-green-400">Live Activity</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">New Lead: Kitchen Remodel</p>
                        <p className="text-xs text-slate-300">New York, USA • 2 mins ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Verified */}
              <div className="absolute top-12 -left-6 lg:-left-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow max-w-[240px]">
                <div className="bg-green-100 p-3 rounded-xl">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Verified Leads</p>
                  <p className="text-xs text-slate-500">We screen every homeowner before sending to you.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold mb-4 border border-orange-500/30">
                <span className="animate-pulse">🔥</span> Limited Time Offer
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
                Need a Professional Website? <span className="text-orange-500">Get It 100% FREE.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-xl">
                Partner with us for your leads, and we'll build you a high-converting, SEO-optimized website at no cost. No hidden fees. Just results.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-orange-50 transition-all shadow-lg transform hover:scale-105"
              >
                Claim My Free Website
                <ArrowRight className="ml-2 h-5 w-5 text-orange-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <AIFeatures />

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The Old Way vs. The Renovation Leads Way</h2>
            <p className="text-slate-600 text-lg">Stop wasting money on billboards and radio ads that don't track results. Switch to a system that pays for itself.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* The Old Way */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                <span className="text-red-500 text-2xl">✕</span> The Old Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  Waiting for word-of-mouth referrals
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  Competing with 20 other contractors on Facebook groups
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  Chasing clients who just want "the cheapest price"
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  No professional website or online presence
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  Unpredictable income month-to-month
                </li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-orange-600 h-6 w-6" /> The Renovation Leads Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  Consistent stream of job requests every week
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  Exclusive leads sent ONLY to you (Premium plan)
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  High-value projects (Kitchens, Full Renovations)
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  100% Free Professional Website
                </li>
                <li className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  Scale your team with confidence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">High-Value Leads for Every Trade</h2>
              <p className="text-slate-400 text-lg">
                We don't just send "general inquiries". We categorize every lead so you only pay for the jobs you actually want to do.
              </p>
            </div>
            <Link to="/services" className="text-orange-500 font-bold hover:text-orange-400 flex items-center gap-2">
              View All Categories <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Full Home Renovation", 
                desc: "Complete house makeovers, extensions, and structural changes.",
                price: "High Ticket",
                icon: <HomeIcon className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1484154218962-a1c00474a42b?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Kitchen & Bath", 
                desc: "Cabinetry, tiling, plumbing fixtures, and modern upgrades.",
                price: "Most Popular",
                icon: <Wrench className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1556911220-e67041ee942d?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Roofing & Waterproofing", 
                desc: "Leak repairs, new roof installations, and gutter systems.",
                price: "Urgent Demand",
                icon: <Hammer className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1632759160855-0c9205c46056?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Painting & Finishing", 
                desc: "Interior/exterior painting, stucco, and decorative finishes.",
                price: "High Volume",
                icon: <PaintBucket className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1589939705319-9299154fccc3?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Electrical & Plumbing", 
                desc: "Rewiring, pipe replacement, and system installations.",
                price: "Steady Work",
                icon: <Zap className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80" 
              },
              { 
                title: "Tiling & Flooring", 
                desc: "Ceramic, porcelain, hardwood, and laminate flooring.",
                price: "Specialized",
                icon: <Target className="h-6 w-6" />, 
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" 
              },
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-400 border border-orange-500/20">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-orange-600 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                  <div className="flex items-center text-orange-500 text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Get Leads <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">3 Simple Steps to More Revenue</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We handle the marketing, the website, the ads, and the screening. You just handle the calls.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Create Your Profile",
                  desc: "Tell us which services you offer and which cities you cover.",
                  icon: <MapPin className="h-6 w-6" />
                },
                {
                  step: "02",
                  title: "Receive Verified Leads",
                  desc: "We send you project details via SMS & Email instantly when a homeowner applies.",
                  icon: <Phone className="h-6 w-6" />
                },
                {
                  step: "03",
                  title: "Close the Deal",
                  desc: "Call the client, offer a quote, and win the job. You keep 100% of your profits.",
                  icon: <TrendingUp className="h-6 w-6" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center group hover:border-orange-200 transition-colors">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Success Stories from Our Partners</h2>
            <p className="text-slate-600">Join hundreds of contractors who have scaled their business with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I used to rely on flyers. Now I get 5-10 kitchen renovation requests every week directly to my phone. My team has grown from 3 to 12 people.",
                author: "Emmanuel T.",
                role: "General Contractor, Toronto",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
              },
              {
                quote: "The leads are actually real. I've tried other services where the numbers were fake. Renovation Leads verifies everything first.",
                author: "Marie-Claire A.",
                role: "Interior Designer, Paris",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
              },
              {
                quote: "Best investment for my roofing business. I closed a $50k project in my first week. Highly recommended.",
                author: "Samuel K.",
                role: "Roofing Specialist, London",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-orange-400 fill-orange-400" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.author} 
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Fill Your Schedule?</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Don't let another month go by with unpredictable income. Start getting high-quality leads today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/25"
                >
                  Get Started Now
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
                >
                  Talk to Sales
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500">No credit card required for consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
