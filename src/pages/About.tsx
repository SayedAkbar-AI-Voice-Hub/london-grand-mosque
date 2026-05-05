import { Users, BookOpen, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">About the Mosque</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Established in 1995, the Ellesmere Port Mosque is a beacon of Islamic learning, prayer, and community service.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
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
