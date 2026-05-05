import { MOCK_EVENTS } from "../data/mockData";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { usePrayerTimes, formatTime12h } from "../hooks/usePrayerTimes";

export default function Events() {
  const { calendar, loading } = usePrayerTimes();
  
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Events & Classes</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Join our community gatherings, educational classes, and special events.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Full Prayer Timetable Mockup */}
        <section className="mb-20">
          <h2 className="text-xs tracking-widest uppercase font-bold text-primary-900 mb-6 flex items-center">
            <Clock className="w-4 h-4 mr-3 text-amber-500" /> 
            Monthly Prayer Timetable
          </h2>
          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-2">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-slate-50 rounded-2xl overflow-hidden">
                <tr>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-primary-900 tracking-widest uppercase">Date</th>
                  {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(prayer => (
                    <th key={prayer} className="px-6 py-4 text-left text-[10px] font-bold text-primary-900 tracking-widest uppercase">
                      {prayer}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-50 font-mono">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-slate-500 font-mono text-xs">Loading authentic calendar...</td>
                  </tr>
                ) : (
                  calendar.map((dayData, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">
                        {dayData.date.readable}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Fajr)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Sunrise)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Dhuhr)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Asr)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Maghrib)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-600">{formatTime12h(dayData.timings.Isha)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm mt-4 italic">
            * Jummah prayers are held every Friday at 01:15 PM and 02:15 PM in two congregations.
          </p>
        </section>

        {/* Regular Classes Section */}
        <section className="mb-20">
          <h2 className="text-xs tracking-widest uppercase font-bold text-primary-900 mb-6 flex items-center">
            <Users className="w-4 h-4 mr-3 text-amber-500" /> 
            Weekly Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4">Mondays</span>
              <h3 className="text-lg font-serif italic text-primary-950 mb-2">Seerah of the Prophet (SAW)</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">A detailed journey through the life of Prophet Muhammad, extracting lessons for modern living.</p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2"/> After Maghrib</div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4">Wednesdays</span>
              <h3 className="text-lg font-serif italic text-primary-950 mb-2">Sisters' Fiqh & Halaqah</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">A dedicated interactive safe space for sisters to learn about jurisprudence and daily rulings.</p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2"/> 10:00 AM - 12:00 PM</div>
            </div>
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4">Weekends</span>
              <h3 className="text-lg font-serif italic text-primary-950 mb-2">Youth Quran Academy</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">Tajweed, memorization, and basic Islamic studies for boys and girls ages 5-15.</p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2"/> Sat & Sun, 10 AM - 1 PM</div>
            </div>
          </div>
        </section>

        {/* Calendar Events List */}
        <section>
          <h2 className="text-xs tracking-widest uppercase font-bold text-primary-900 mb-6 flex items-center">
            <CalendarIcon className="w-4 h-4 mr-3 text-amber-500" /> 
            Upcoming Special Events
          </h2>
          <div className="space-y-6">
            {MOCK_EVENTS.map(event => (
              <div key={event.id} className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition group">
                <div className="w-full md:w-64 h-48 md:h-auto rounded-2xl overflow-hidden shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center py-6 pr-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                    <span className="flex items-center text-primary-700"><CalendarIcon className="w-3 h-3 mr-2" /> {format(new Date(event.date), "MMM do, yyyy")}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-2 text-slate-400" /> <span className="font-mono">{format(new Date(event.date), "h:mm a")}</span></span>
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-400" /> {event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-800 transition">{event.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
