import { Users, BookOpen, Heart, Globe, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">About the Mosque & Our Imam</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Established in 1995, the Ellesmere Port Mosque is a beacon of Islamic learning, prayer, and community service.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Imam Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
             <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" 
                 alt="Imam Tariq Rahman delivering a sermon" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[250px] z-10">
               <div className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Imam Tariq Rahman</div>
               <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">Graduated from Al-Azhar University, Specializing in Islamic Jurisprudence.</div>
             </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
            <h2 className="text-[10px] tracking-widest text-amber-600 uppercase font-bold mb-4">Our Leadership</h2>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6">Meet Imam Tariq Rahman</h3>
            <p className="text-sm font-serif italic text-slate-600 mb-6 leading-relaxed">
              Serving the Ellesmere Port Mosque since 2012, Imam Tariq brings a wealth of traditional knowledge combined with a deep understanding of the contemporary challenges faced by Muslims in the West.
            </p>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              With over 15 years of pastoral experience, he is dedicated to youth empowerment, interfaith dialogue, and providing accessible Islamic education. He frequently hosts the Friday sermons, offers private counseling, and teaches the weekly Tafsir classes.
            </p>
            <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-100">
               <div>
                  <div className="text-2xl font-mono font-medium text-primary-800 mb-1">15+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years Serving Our Community</div>
               </div>
               <div>
                  <div className="text-2xl font-mono font-medium text-primary-800 mb-1">500+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Sermons Delivered</div>
               </div>
            </div>
            <button className="mt-8 text-[10px] uppercase tracking-widest text-primary-800 font-bold hover:text-amber-600 transition flex items-center group">
              Request a meeting or counseling session <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-4">Our Core Pillars</h2>
          <p className="text-sm font-serif italic text-slate-600 leading-relaxed">
            We are rooted in the authentic teachings of the Quran and Sunnah, dedicated to creating an environment of worship, belonging, and active goodness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Community First", desc: "A welcoming home for all generations, fostering unity and mutual support." },
            { icon: BookOpen, title: "Authentic Education", desc: "Providing structured, accessible Islamic education for all age groups." },
            { icon: Heart, title: "Social Service", desc: "Actively serving our neighborhood through food banks and charity drives." },
            { icon: Globe, title: "Interfaith Outreach", desc: "Building bridges of understanding with other faiths and organizations." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-800 mb-6 border border-primary-100">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
