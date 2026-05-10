import { useState, useEffect } from "react";
import { eventsApi } from "../lib/api";
import { Clock, Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { usePrayerTimes } from "../hooks/usePrayerTimes";

const DISPLAY_PRAYERS = [
  { key: "Fajr",    jamatKey: "FajrJamat",  label: "Fajr" },
  { key: "Sunrise", jamatKey: null,          label: "Sunrise" },
  { key: "Dhuhr",   jamatKey: "DhuhrJamat", label: "Zuhr" },
  { key: "Asr",     jamatKey: "AsrJamat",   label: "Asr" },
  { key: "Maghrib", jamatKey: null,          label: "Maghrib" },
  { key: "Isha",    jamatKey: "IshaJamat",  label: "Isha" },
] as const;

export default function Home() {
  const { timings, loading } = usePrayerTimes();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    eventsApi.list().then(setEvents).catch(() => {});
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1743450675048-03e0c6b13720?q=80&w=2560&auto=format&fit=crop"
            alt="Eid congregation prayers at mosque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/40 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-xl">
            Welcome to Your Community
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto drop-shadow-md text-white tracking-tight uppercase">
            A Center for <span className="text-amber-400 font-serif italic normal-case">Faith</span>, <span className="text-amber-400 font-serif italic normal-case">Knowledge</span>, and <span className="text-amber-400 font-serif italic normal-case">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto mb-10 drop-shadow">
            Providing a welcoming space for worship, education, and community support in the heart of Ellesmere Port.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events" className="px-8 py-3.5 rounded-full bg-primary-800 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-widest transition shadow-lg w-full sm:w-auto text-center">
              Prayer Times
            </Link>
            <Link to="/donate" className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-widest transition shadow-lg w-full sm:w-auto text-center">
              Support Our Mosque
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Times Section - Overlapping Hero */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="bg-slate-900 rounded-3xl shadow-xl flex flex-col lg:flex-row p-2">
          <div className="p-8 lg:w-1/3 bg-primary-900 text-white flex flex-col justify-center rounded-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Today's Prayers • {format(new Date(), "MMM do")}
            </h2>
            <Link to="/events" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-bold transition group text-xs uppercase tracking-widest mt-auto pt-6">
              View Full Calendar
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="p-6 lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-3 text-white">
            {loading ? (
              <div className="col-span-full flex items-center justify-center py-8 text-white/50 text-xs font-mono">
                Loading prayer times...
              </div>
            ) : timings ? (
              DISPLAY_PRAYERS.map(({ key, jamatKey, label }) => {
                const beg = timings[key as keyof typeof timings] as string;
                const jamat = jamatKey ? timings[jamatKey as keyof typeof timings] as string | null : null;
                return (
                  <div key={key} className="flex flex-col justify-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{label}</span>
                    <span className="text-base font-mono font-semibold">{beg}</span>
                    {jamat && (
                      <span className="text-[10px] text-amber-400 font-bold mt-1 font-mono">
                        Jamāt {jamat}
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="col-span-full flex items-center justify-center py-8 text-white/50 text-xs font-mono">
                Unable to load prayer times.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events Quick View */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">Connect With Us</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Upcoming Events</h2>
            </div>
            <Link to="/events" className="mt-4 md:mt-0 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary-800 hover:text-primary-700 transition px-4 py-2 bg-primary-50 rounded-full">
              View All Events <ArrowRight className="w-3 h-3 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event: any) => (
              <div key={event.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col p-4">
                <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    <span className="text-primary-700">{format(new Date(event.date), "MMM do, yyyy")}</span>
                    <span className="font-mono">{format(new Date(event.date), "h:mm a")}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">
                    <Link to="/events" className="hover:text-amber-600 transition">{event.title}</Link>
                  </h3>
                  <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mt-auto">{event.description}</p>
                </div>
              </div>
            ))}
            {events.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-400 text-sm">
                No upcoming events at this time.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}