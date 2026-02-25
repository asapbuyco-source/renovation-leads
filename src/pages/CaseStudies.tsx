import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Calendar, CheckCircle2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Scaling a Roofing Business from $20k to $150k/Month",
    client: "Apex Roofing Solutions",
    location: "Toronto, Canada",
    category: "Roofing",
    image: "https://images.unsplash.com/photo-1632759160855-0c9205c46056?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Monthly Revenue", value: "+650%" },
      { label: "Lead Volume", value: "45/mo" },
      { label: "Closing Rate", value: "32%" }
    ],
    challenge: "Apex Roofing was relying on door-knocking and seasonal referrals. Their revenue was inconsistent, and they couldn't keep their crew busy year-round.",
    solution: "We implemented a targeted Google Ads campaign focusing on 'emergency roof repair' and 'roof replacement' keywords in their specific service area. We also built a high-converting landing page that pre-qualified leads based on roof age and material.",
    result: "Within 3 months, they went from struggling to find work to booking jobs 6 weeks in advance. They hired 2 additional crews to handle the demand."
  },
  {
    id: 2,
    title: "High-End Kitchen Remodels: Quality Over Quantity",
    client: "Modern Living Renovations",
    location: "London, UK",
    category: "Kitchen & Bath",
    image: "https://images.unsplash.com/photo-1556911220-e67041ee942d?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Avg. Project Value", value: "$45k" },
      { label: "ROI", value: "12x" },
      { label: "Qualified Leads", value: "15/mo" }
    ],
    challenge: "The client was getting plenty of leads, but most were low-budget tire kickers looking for minor repairs. They wanted full kitchen overhauls.",
    solution: "We adjusted their targeting to affluent neighborhoods and used negative keywords to filter out 'repair' and 'cheap' searches. We also implemented a budget-screening step in the lead form.",
    result: "Lead volume dropped by 40%, but lead quality skyrocketed. They closed 4 major kitchen renovations in the first month, generating over $180k in revenue."
  },
  {
    id: 3,
    title: "Dominating the Local Painting Market",
    client: "Fresh Coat Painters",
    location: "Sydney, Australia",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1589939705319-9299154fccc3?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Cost Per Lead", value: "$28" },
      { label: "Jobs Booked", value: "120+" },
      { label: "Team Growth", value: "3x" }
    ],
    challenge: "A new painting company entering a competitive market. They needed to build a reputation and client base quickly.",
    solution: "We launched a multi-channel strategy using Facebook Ads for visual appeal (before/after photos) and Google Local Services Ads for trust. We also automated their follow-up process with SMS and email.",
    result: "They became the #1 rated painter in their suburb within 6 months. The automated follow-up system helped them convert 25% more leads than their competitors."
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Case Studies | Renovation Leads Global</title>
        <meta name="description" content="See real results from contractors who have scaled their businesses with our lead generation system. Revenue growth, ROI, and success stories." />
        <link rel="canonical" href="https://renovationleads.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" 
            alt="Construction planning" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-bold mb-6 backdrop-blur-sm">
              <BarChart3 className="h-4 w-4" />
              Real Results, Real Growth
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Success Stories <br/> <span className="text-orange-500">From Our Partners</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. See how contractors worldwide are transforming their businesses with our high-quality leads.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" /> Verified Partner
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    {study.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Users className="h-4 w-4" /> {study.client}
                  </span>
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{study.title}</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 border-y border-slate-200 py-6">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">{stat.value}</p>
                      <p className="text-xs text-slate-500 uppercase font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 text-slate-600 mb-8">
                  <div>
                    <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-red-500" /> The Challenge
                    </h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" /> The Solution
                    </h4>
                    <p>{study.solution}</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-xl border-l-4 border-orange-500 italic text-slate-700">
                    "{study.result}"
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group"
                >
                  Get Similar Results <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of contractors who have transformed their business with our lead generation system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-orange-600 bg-white hover:bg-orange-50 transition-all shadow-xl"
            >
              Start Getting Leads
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white border-2 border-white hover:bg-white/10 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
