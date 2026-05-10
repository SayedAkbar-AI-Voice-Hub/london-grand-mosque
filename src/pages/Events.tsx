import { useState, useEffect } from "react";
import { eventsApi } from "../lib/api";
import { MAY_2026_TIMETABLE, formatPdfTime } from "../data/mockData";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function fmtAm(t: string) { return formatPdfTime(t, false); }
function fmtPm(t: string) { return formatPdfTime(t, true); }

function TimeCell({ beg, jamat, begFn, jamatFn }: {
  beg: string;
  jamat: string | null;
  begFn: (t: string) => string;
  jamatFn: (t: string) => string;
}) {
  return (
    <td className="px-3 py-3 whitespace-nowrap">
      <span className="font-mono text-slate-700 text-xs">{begFn(beg)}</span>
      {jamat && (
        <span className="block font-mono text-amber-600 font-bold text-[10px] mt-0.5">
          {jamatFn(jamat)}
        </span>
      )}
    </td>
  );
}

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const today = new Date();
  const todayDate = today.getMonth() === 4 && today.getFullYear() === 2026 ? today.getDate() : -1;

  useEffect(() => {
    eventsApi.list().then(setEvents).catch(() => {});
  }, []);

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

        {/* Prayer Timetable */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <h2 className="text-xs tracking-widest uppercase font-bold text-primary-900 flex items-center">
              <Clock className="w-4 h-4 mr-3 text-amber-500" />
              May 2026 — Prayer Timetable
            </h2>
            <div className="flex gap-5 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-slate-500">Normal = Begin time</span>
              <span className="text-amber-600">Amber = Jamāt time</span>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-100">
            <table className="min-w-full text-xs">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px] rounded-tl-3xl">Date</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Day</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Fajr</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Sunrise</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Zuhr</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Asr</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px]">Maghrib</th>
                  <th className="px-3 py-3 text-left font-bold tracking-widest uppercase text-[10px] rounded-tr-3xl">Isha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MAY_2026_TIMETABLE.map((day) => {
                  const dayOfWeek = new Date(2026, 4, day.date).getDay();
                  const isFriday = dayOfWeek === 5;
                  const isToday = day.date === todayDate;
                  return (
                    <tr
                      key={day.date}
                      className={
                        isToday
                          ? "bg-primary-50 border-l-4 border-primary-600"
                          : isFriday
                          ? "bg-amber-50/60 hover:bg-amber-50"
                          : "hover:bg-slate-50"
                      }
                    >
                      <td className="px-3 py-3 font-bold text-slate-900 whitespace-nowrap">
                        {isToday ? (
                          <span className="inline-flex items-center gap-1.5">
                            {day.date}
                            <span className="text-[9px] bg-primary-700 text-white px-1.5 py-0.5 rounded-full uppercase font-bold tracking-wider">Today</span>
                          </span>
                        ) : day.date}
                      </td>
                      <td className={`px-3 py-3 font-bold whitespace-nowrap ${isFriday ? "text-amber-700" : "text-slate-500"}`}>
                        {DAYS[dayOfWeek]}
                        {isFriday && <span className="ml-1 text-[9px] uppercase tracking-wider">(Jumu'ah)</span>}
                      </td>
                      <TimeCell beg={day.fajrBeg}  jamat={day.fajrJamat}  begFn={fmtAm} jamatFn={fmtAm} />
                      <td className="px-3 py-3 font-mono text-slate-500 whitespace-nowrap">{fmtAm(day.sunrise)}</td>
                      <TimeCell beg={day.zuhrBeg}  jamat={day.zuhrJamat}  begFn={fmtPm} jamatFn={fmtPm} />
                      <TimeCell beg={day.asrBeg}   jamat={day.asrHanafi ?? day.asrJamat} begFn={fmtPm} jamatFn={fmtPm} />
                      <td className="px-3 py-3 font-mono text-slate-700 whitespace-nowrap">{fmtPm(day.maghrib)}</td>
                      <TimeCell beg={day.ishaBeg}  jamat={day.ishaJamat}  begFn={fmtPm} jamatFn={fmtPm} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 italic px-1">
            * Jumu'ah (Friday) prayers: 1st congregation 1:00 PM · 2nd congregation 2:00 PM. Amber times indicate Jamāt (congregation start). Asr amber time shows Hanafi calculation where shown.
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
            {events.map((event: any) => (
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
            {events.length === 0 && (
              <p className="text-center py-12 text-slate-400 text-sm">No upcoming events at this time.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}