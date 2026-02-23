import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Target, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/african-city-skyline/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Bridging the Gap in <br/> <span className="text-orange-500">Cameroon's Construction Industry</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are on a mission to professionalize the renovation market by connecting skilled contractors with homeowners who value quality.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
              <img 
                src="https://picsum.photos/seed/african-city-construction/600/700" 
                alt="Construction in Douala" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block z-20 border border-slate-100">
                <p className="font-serif text-4xl font-bold text-orange-600 mb-2">3+</p>
                <p className="text-slate-600 font-medium">Years of dedicated service in the Cameroonian market.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Canadian Standards, Cameroonian Heart</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Renovation Leads is a Canadian-based industry with a dedicated branch in Cameroon. We bring international standards of professionalism and technology to the local construction market.
                </p>
                <p>
                  It started with a simple observation: finding a reliable contractor in Douala or Yaoundé was a challenge. Homeowners relied on vague word-of-mouth, and skilled contractors struggled to find consistent work.
                </p>
                <p>
                  We bridged this gap by introducing a digital infrastructure that vets homeowners and delivers their project details directly to verified professionals. With our main office in Canada and our local team on the ground in Cameroon, we ensure global quality with local expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-orange-600" />,
                title: "Quality Over Quantity",
                desc: "We'd rather send you 5 high-intent leads than 50 tire-kickers. We respect your time."
              },
              {
                icon: <Users className="h-8 w-8 text-orange-600" />,
                title: "Local Expertise",
                desc: "We understand the nuances of the Cameroonian market, from Douala's rainy season to Yaoundé's terrain."
              },
              {
                icon: <Heart className="h-8 w-8 text-orange-600" />,
                title: "Contractor Success",
                desc: "If you don't close deals, we don't succeed. Our support team is here to help you convert leads."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The people working behind the scenes to fill your pipeline.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alain F.", role: "Founder & CEO", img: "https://picsum.photos/seed/african-ceo/300/300" },
              { name: "Clarisse M.", role: "Head of Marketing", img: "https://picsum.photos/seed/african-marketing-woman/300/300" },
              { name: "Patrick N.", role: "Contractor Success Manager", img: "https://picsum.photos/seed/african-manager/300/300" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-orange-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join the Future of Construction Marketing</h2>
          <p className="text-xl text-slate-300 mb-10">
            We are building the largest network of trusted contractors in Cameroon. Are you ready to be part of it?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg"
          >
            Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
