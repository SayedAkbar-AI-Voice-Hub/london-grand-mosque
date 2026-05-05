import { HeartHandshake, Baby, Speech, BookOpen, Utensils, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: HeartHandshake,
      title: "Marriage (Nikah) Services",
      desc: "We provide comprehensive marriage services including pre-marital counseling, the solemnization of the Nikah ceremony, and officially recognized marriage certificates.",
    },
    {
      icon: Baby,
      title: "Funeral (Janazah) Services",
      desc: "Our dedicated team is here to support you during difficult times, providing full ghusl, shrouding (kafan), Janazah prayers, and burial coordination.",
    },
    {
      icon: Speech,
      title: "Counseling & Guidance",
      desc: "Confidential and compassionate religious, personal, and family counseling guided by Islamic principles with our Imam and trained mentors.",
    },
    {
      icon: BookOpen,
      title: "Madrasah (Weekend School)",
      desc: "Structured weekend learning for children focused on Quranic recitation, basic Islamic studies (Fiqh, Aqaid, Seerah), and character development.",
    },
    {
      icon: Utensils,
      title: "Food Bank & Soup Kitchen",
      desc: "Operating every Saturday, our community food bank serves hundreds of families in need, regardless of faith or background.",
    },
    {
      icon: Heart,
      title: "New Muslim Support",
      desc: "A welcoming program for reverts, offering starter kits, one-on-one mentorship, reading materials, and a supportive community network.",
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Community Services</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Dedicated to supporting you from milestone to milestone in your journey of faith.
        </p>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-6 border border-primary-100 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
                <Link to="/contact" className="text-[10px] text-primary-800 font-bold uppercase tracking-widest hover:text-amber-600 transition flex items-center group-hover:translate-x-1">
                  Inquire Now &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-14 text-center border border-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center translate-x-1/4">
              <HeartHandshake className="w-96 h-96" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 relative z-10">Looking to volunteer?</h2>
            <p className="text-primary-50 max-w-2xl mx-auto mb-8 relative z-10 text-sm font-serif italic leading-relaxed">
              Our services run on the dedication of our community volunteers. Join a committee, help with the food bank, or assist during events.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full transition shadow-lg relative z-10">
              Become a Volunteer
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
