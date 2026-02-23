import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Quote, Play, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emmanuel T.",
    role: "General Contractor",
    location: "Douala",
    image: "https://picsum.photos/seed/african-man-smile/200/200",
    quote: "I used to rely on flyers in Akwa. Now I get 5-10 kitchen renovation requests every week directly to my phone. My team has grown from 3 to 12 people in just 8 months.",
    rating: 5,
    projectType: "Kitchen & Bath"
  },
  {
    id: 2,
    name: "Marie-Claire A.",
    role: "Interior Designer",
    location: "Yaoundé",
    image: "https://picsum.photos/seed/african-woman-business/200/200",
    quote: "The leads are actually real. I've tried other services where the numbers were fake. Renovation Leads verifies everything first. The AI matching is spot on.",
    rating: 5,
    projectType: "Interior Design"
  },
  {
    id: 3,
    name: "Samuel K.",
    role: "Roofing Specialist",
    location: "Buea",
    image: "https://picsum.photos/seed/african-man-construction/200/200",
    quote: "Best investment for my roofing business. I closed a 5 million CFA project in my first week. The platform is easy to use and the support team speaks French and English.",
    rating: 5,
    projectType: "Roofing"
  },
  {
    id: 4,
    name: "Jean-Pierre M.",
    role: "Tiling Expert",
    location: "Bamenda",
    image: "https://picsum.photos/seed/african-worker-2/200/200",
    quote: "I was skeptical at first, but the quality of leads is impressive. I don't have to chase clients anymore. They come to me ready to start work.",
    rating: 4,
    projectType: "Flooring"
  },
  {
    id: 5,
    name: "Sarah N.",
    role: "Architect",
    location: "Limbe",
    image: "https://picsum.photos/seed/african-architect-woman/200/200",
    quote: "As an architect, I need clients who value design. Renovation Leads filters out the low-budget inquiries so I only talk to serious homeowners.",
    rating: 5,
    projectType: "Architecture"
  },
  {
    id: 6,
    name: "David O.",
    role: "Plumbing Contractor",
    location: "Douala",
    image: "https://picsum.photos/seed/african-plumber-smile/200/200",
    quote: "My phone rings every day with new jobs. The automated SMS alerts help me respond fast, which is key to winning the job.",
    rating: 5,
    projectType: "Plumbing"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-2 mb-6">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-6 w-6 text-orange-500 fill-orange-500 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Real Stories. <span className="text-orange-500">Real Growth.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from the contractors and businesses building Cameroon's future with us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Video Testimonial (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto bg-slate-800 flex items-center justify-center group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/african-interview/800/600" 
                  alt="Video Testimonial Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="relative z-10 w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-orange-500 fill-orange-500" />)}
                </div>
                <blockquote className="text-2xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  "Since joining Renovation Leads, we've stopped all other forms of advertising. The ROI is simply unmatched in the Cameroonian market."
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-slate-900">Blaise F.</p>
                  <p className="text-orange-600 font-medium">CEO, Douala Construction Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-100" />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.role}</p>
                    <p className="text-xs text-slate-400">{item.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < item.rating ? 'text-orange-400 fill-orange-400' : 'text-slate-200 fill-slate-200'}`} 
                    />
                  ))}
                </div>

                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-100 -z-10 transform -scale-x-100" />
                  <p className="text-slate-600 italic leading-relaxed relative z-10">"{item.quote}"</p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    Verified {item.projectType} Partner
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join the fastest-growing network of contractors in Cameroon today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/25"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
