import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Get in Touch</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          We are here to help, answer your questions, and welcome you to our community.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details Side */}
          <div>
            <h2 className="text-[10px] tracking-widest text-amber-600 uppercase font-bold mb-4">Contact Information</h2>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6">We'd love to hear from you</h3>
            
            <div className="space-y-6 mb-10 mt-8">
              <div className="flex items-start bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 mr-4 shrink-0 border border-primary-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">82-84 Station Road<br />Ellesmere Port, CH65 4DB<br />United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 mr-4 shrink-0 border border-primary-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600 font-mono text-sm leading-relaxed mb-1">07968 378 481</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Available 9 AM - 5 PM (Mon - Fri)</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 mr-4 shrink-0 border border-primary-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600 font-mono text-sm leading-relaxed">masjidellesmereport@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 mr-4 shrink-0 border border-primary-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-1">Opening Hours</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">The mosque is open 30 minutes before Fajr and closes 30 minutes after Isha every day.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-[10px] tracking-widest text-amber-600 uppercase font-bold mb-6">Send a Message</h3>
            <form className="space-y-5 text-sm">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 transition outline-none text-sm font-mono text-slate-900"
                  placeholder="E.g. Abdullah Smith"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 transition outline-none text-sm font-mono text-slate-900"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 transition outline-none text-sm font-mono text-slate-900"
                    placeholder="+44..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 transition outline-none text-sm font-mono text-slate-900 appearance-none">
                  <option>General Inquiry</option>
                  <option>Ask the Imam</option>
                  <option>Madrasah Enrollment</option>
                  <option>Nikah / Funeral Services</option>
                  <option>Facility Booking</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 transition outline-none text-sm font-mono text-slate-900 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 px-6 bg-slate-900 hover:bg-primary-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition flex items-center justify-center group"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
