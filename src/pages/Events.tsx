import { useState } from "react";
import { MOCK_EVENTS, TIMETABLES, formatPdfTime } from "../data/mockData";
import { Calendar as CalendarIcon, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";

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

const MONTH_KEYS = Object.keys(TIMETABLES).map(Number).sort((a, b) => a - b);

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const today = new Date();
  const currentMonthKey = today.getMonth();

  const defaultMonth = MONTH_KEYS.includes(currentMonthKey) ? currentMonthKey : MONTH_KEYS[0];
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const entry = TIMETABLES[selectedMonth];
  const timetable = entry?.data ?? [];
  const year = entry?.year ?? today.getFullYear();

  const todayDate =
    selectedMonth === currentMonthKey && year === today.getFullYear()
      ? today.getDate()
      : -1;

  const currentIdx = MONTH_KEYS.indexOf(selectedMonth);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Prayer Timetable</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Ellesmere Port Masjid & Islamic Centre — 82-84 Station Road, CH65 4DB
        </p>
        <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mt-3">
          Jumu'ah Prayer: {entry?.jummahTime} &bull; Bayan starts 1:20 PM
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

        {/* Month Selector */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => currentIdx > 0 && setSelectedMonth(MONTH_KEYS[currentIdx - 1])}
              disabled={currentIdx === 0}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary-800 hover:border-primary-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap gap-2">
              {MONTH_KEYS.map((mk) => {
                const e = TIMETABLES[mk];
                return (
                  <button
                    key={mk}
                    onClick={() => setSelectedMonth(mk)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition",
                      selectedMonth === mk
                        ? "bg-primary-900 text-white shadow-sm"
                        : mk === currentMonthKey
                        ? "bg-primary-100 text-primary-800 border border-primary-300 hover:bg-primary-200"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-800"
                    )}
                  >
                    {e.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => currentIdx < MONTH_KEYS.length - 1 && setSelectedMonth(MONTH_KEYS[currentIdx + 1])}
              disabled={currentIdx === MONTH_KEYS.length - 1}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary-800 hover:border-primary-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-5 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-slate-500 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400 inline-block"/> Begin time</span>
            <span className="text-amber-600 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block"/> Jamāt time</span>
          </div>
        </div>

        {/* Prayer Timetable */}
        <section className="mb-16">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-primary-900">
              {entry?.label} {year} — Prayer Timetable
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              * British Summer Time note applies where relevant. Please verify times locally.
            </p>
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
                {timetable.map((day) => {
                  const dayOfWeek = new Date(year, selectedMonth, day.date).getDay();
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
          <p className="text-slate-500 text-xs mt-3 italic px-1">
            Jumu'ah prayer at {entry?.jummahTime}. Bayan (lecture) starts at 1:20 PM. Amber times indicate Jamāt (congregation) start.
          </p>
        </section>

        {/* Regular Classes Section */}
        <section className="mb-16">
          <h2 className="text-xs tracking-widest uppercase font-bold text-primary-900 mb-6 flex items-center">
            <Users className="w-4 h-4 mr-3 text-amber-500" />
            Weekly Classes & Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: "Mondays", title: "Seerah of the Prophet (SAW)", desc: "A detailed journey through the life of Prophet Muhammad ﷺ, extracting lessons for modern living.", time: "After Maghrib" },
              { day: "Wednesdays", title: "Sisters' Fiqh & Halaqah", desc: "A dedicated interactive space for sisters to learn jurisprudence, daily rulings, and connect.", time: "10:00 AM – 12:00 PM" },
              { day: "Weekends", title: "Youth Quran Academy", desc: "Tajweed, memorisation, and Islamic studies for boys and girls aged 5–15.", time: "Sat & Sun, 10 AM – 1 PM" },
              { day: "Thursdays", title: "Tafseer Al-Quran", desc: "Weekly Tafseer class covering the meanings and context of the Quran.", time: "After Isha" },
              { day: "Fridays", title: "Jumu'ah Bayan", desc: "Weekly Friday sermon and congregation prayer. Bayan begins at 1:20 PM.", time: "Bayan 1:20 PM • Prayer " + (entry?.jummahTime ?? "1:45 PM") },
              { day: "Daily", title: "Five Daily Prayers", desc: "The masjid is open for all five daily prayers. Congregation times shown in the timetable above.", time: "See timetable above" },
            ].map((cls) => (
              <div key={cls.day} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4">{cls.day}</span>
                <h3 className="text-base font-bold text-primary-950 mb-2">{cls.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{cls.desc}</p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2"/>{cls.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
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