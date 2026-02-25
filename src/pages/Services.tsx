import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Hammer, PaintBucket, Wrench, Zap, Home, Ruler, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "Home Renovations",
    desc: "Full house remodeling leads, from living rooms to bedrooms. High-ticket projects for general contractors.",
    features: ["Whole House Remodels", "Room Additions", "Structural Changes", "Basement Finishing"],
    image: "https://images.unsplash.com/photo-1484154218962-a1c00474a42b?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Kitchen & Bath",
    desc: "Targeted leads for kitchen upgrades and bathroom remodeling. Homeowners looking for modern finishes.",
    features: ["Cabinet Installation", "Countertop Replacement", "Shower/Tub Install", "Full Redesign"],
    image: "https://images.unsplash.com/photo-1556911220-e67041ee942d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: "Roofing & Flooring",
    desc: "Specific requests for roof repairs, new installations, tiling, and parquet flooring projects.",
    features: ["Leak Repairs", "New Roof Install", "Tile & Grout", "Hardwood/Laminate"],
    image: "https://images.unsplash.com/photo-1632759160855-0c9205c46056?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <PaintBucket className="h-8 w-8" />,
    title: "Painting Services",
    desc: "Interior and exterior painting jobs for residential and commercial properties.",
    features: ["Interior Walls", "Exterior Facades", "Commercial Painting", "Wallpapering"],
    image: "https://images.unsplash.com/photo-1589939705319-9299154fccc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Electrical Works",
    desc: "Rewiring, installations, and electrical repairs for homes and offices.",
    features: ["System Rewiring", "Lighting Install", "Panel Upgrades", "Emergency Repair"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Plumbing",
    desc: "Emergency repairs, pipe installations, and sanitary fitting jobs.",
    features: ["Pipe Repair", "Fixture Install", "Water Heater", "Drain Cleaning"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Our Services | Renovation Leads Global</title>
        <meta name="description" content="Explore our lead categories: Home Renovation, Kitchen & Bath, Roofing, Painting, Electrical, and Plumbing. High-value leads for every trade." />
        <link rel="canonical" href="https://renovationleads.com/services" />
      </Helmet>
      {/* Header */}
      <div className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
            alt="Contractors working on a modern building" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-6 backdrop-blur-sm">
              Specialized Lead Generation
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Leads That Match <br/> <span className="text-orange-500">Your Expertise</span>
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Stop wasting time on general inquiries. We categorize every lead so you only receive projects that fit your skills and schedule.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "h-5 w-5 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-3 rounded-xl border border-orange-200 text-orange-600 font-bold hover:bg-orange-50 transition-colors flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 mb-3"
                >
                  Get {service.title} Leads
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center shadow-md"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coverage Area */}
      <div className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Serving Major Cities Worldwide</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our marketing campaigns are geo-targeted to ensure you get leads in your specific area of operation. We verify the location of every lead before sending it to you.
              </p>
              <div className="flex flex-wrap gap-3">
                {['New York', 'London', 'Toronto', 'Paris', 'Berlin', 'Dubai', 'Sydney'].map((city) => (
                  <span key={city} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-2 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
                alt="Map of global coverage" 
                referrerPolicy="no-referrer"
                className="rounded-xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
