import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none text-white">Renovation</span>
                <span className="text-xs font-sans font-medium tracking-widest text-orange-500 uppercase">Leads</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Helping contractors and renovation companies worldwide grow their business with high-quality, ready-to-hire leads.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-orange-400 transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-orange-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/testimonials" className="text-sm hover:text-orange-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/about" className="text-sm hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">Home Renovation Leads</li>
              <li className="text-sm text-slate-400">Kitchen & Bath Remodeling</li>
              <li className="text-sm text-slate-400">Roofing & Flooring</li>
              <li className="text-sm text-slate-400">Plumbing & Electrical</li>
              <li className="text-sm text-slate-400">Painting Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-slate-400">
                    <strong className="text-white">Global Operations:</strong><br/>
                    Serving contractors worldwide.
                  </span>
                  <span className="text-sm text-slate-400">
                    <strong className="text-white">Head Office (Canada):</strong><br/>
                    Canadian based industry.
                  </span>
                  <span className="text-sm text-slate-400">
                    <strong className="text-white">Cameroon Branch:</strong><br/>
                    Serving Douala, Yaoundé, and all of Cameroon.
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-400">Global (WhatsApp): +1 343 634 8743</span>
                  <span className="text-sm text-slate-400">Cameroon: +237 657 960 690</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="text-sm text-slate-400">renovationleads37@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Renovation Leads. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-xs text-slate-500 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
