import { useState, useEffect, useMemo } from "react";
import { MOCK_EVENTS, getTodayTimetable, type TimetableDay } from "../data/mockData";
import { Calendar as CalendarIcon, ArrowRight, Heart, BookOpen, Users, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { cn } from "../lib/utils";

// ── Prayer time helpers ──────────────────────────────────────────────

type PrayerKey = "fajr" | "sunrise" | "zuhr" | "asr" | "maghrib" | "isha";

/** Convert a timetable time-string to total minutes since midnight. */
function toMin(t: string, k: PrayerKey): number {
  const [h, m] = t.split(":").map(Number);
  if (k === "fajr" || k === "sunrise") return h * 60 + m;
  if (k === "zuhr") return h >= 11 ? h * 60 + m : (h + 12) * 60 + m;
  return (h + 12) * 60 + m; // asr / maghrib / isha always PM
}

/** Format a timetable time-string to a proper 12-hour display (correct AM/PM). */
function fmt12h(t: string, k: PrayerKey): string {
  const totalMin = toMin(t, k);
  const h24 = Math.floor(totalMin / 60);
  const m24 = totalMin % 60;
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m24).padStart(2, "0")} ${ampm}`;
}

/** Get Hijri date string for the UK (Europe/London) timezone. */
function getHijriDate(date: Date): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      calendar: "islamic-umalqura",
      timeZone: "Europe/London",
      day: "numeric",
      month: "long",
      year: "numeric",
    } as Intl.DateTimeFormatOptions).format(date);
  } catch {
    return "";
  }
}

/** Format the current date as a readable string in UK (Europe/London) timezone. */
function formatUKDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Get the current time as total seconds since midnight, in UK (Europe/London) timezone. */
function getUKNowSec(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parseInt(parts.find(p => p.type === type)?.value ?? "0");
  return get("hour") * 3600 + get("minute") * 60 + get("second");
}

// ── Prayer Widget ────────────────────────────────────────────────────

interface PrayerEntry {
  key: PrayerKey;
  label: string;
  arabic: string;
  beginTime: string;   // formatted 12h
  jamatTime: string | null;
  totalMin: number;    // minutes since midnight for sorting
}

function buildPrayers(day: TimetableDay): PrayerEntry[] {
  return [
    { key: "fajr",    label: "Fajr",    arabic: "الفجر",  beginTime: fmt12h(day.fajrBeg, "fajr"),    jamatTime: day.fajrJamat  ? fmt12h(day.fajrJamat,  "fajr")    : null, totalMin: toMin(day.fajrBeg, "fajr") },
    { key: "sunrise", label: "Sunrise", arabic: "شروق",   beginTime: fmt12h(day.sunrise,  "sunrise"), jamatTime: null,                                                        totalMin: toMin(day.sunrise,  "sunrise") },
    { key: "zuhr",    label: "Dhuhr",   arabic: "الظهر",  beginTime: fmt12h(day.zuhrBeg, "zuhr"),    jamatTime: day.zuhrJamat  ? fmt12h(day.zuhrJamat,  "zuhr")    : null, totalMin: toMin(day.zuhrBeg, "zuhr") },
    { key: "asr",     label: "Asr",     arabic: "العصر",  beginTime: fmt12h(day.asrBeg,  "asr"),     jamatTime: day.asrJamat   ? fmt12h(day.asrJamat,   "asr")     : null, totalMin: toMin(day.asrBeg,  "asr") },
    { key: "maghrib", label: "Maghrib", arabic: "المغرب", beginTime: fmt12h(day.maghrib, "maghrib"), jamatTime: null,                                                        totalMin: toMin(day.maghrib, "maghrib") },
    { key: "isha",    label: "Isha",    arabic: "العشاء", beginTime: fmt12h(day.ishaBeg, "isha"),    jamatTime: day.ishaJamat  ? fmt12h(day.ishaJamat,  "isha")    : null, totalMin: toMin(day.ishaBeg, "isha") },
  ];
}

function PrayerWidget() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const day = useMemo(() => getTodayTimetable(), []);
  const prayers = useMemo(() => (day ? buildPrayers(day) : []), [day]);

  const hijri = useMemo(() => getHijriDate(now), []);

  // Current time in total seconds since midnight — always in UK (Europe/London) timezone
  const nowSec = getUKNowSec(now);

  // Next upcoming prayer index
  const nextIdx = prayers.findIndex(p => p.totalMin * 60 > nowSec);
  const hasNext = nextIdx !== -1;
  const nextPrayer = hasNext ? prayers[nextIdx] : prayers[0]; // wrap to Fajr after Isha

  // Current prayer = the one most recently started
  const currentIdx = hasNext
    ? (nextIdx === 0 ? prayers.length - 1 : nextIdx - 1)
    : prayers.length - 1;

  // Countdown in seconds
  let diffSec = hasNext
    ? nextPrayer.totalMin * 60 - nowSec
    : (24 * 3600 - nowSec) + prayers[0].totalMin * 60; // after Isha → until tomorrow's Fajr

  const countHh = Math.floor(diffSec / 3600);
  const countMm = Math.floor((diffSec % 3600) / 60);
  const countSs = diffSec % 60;

  if (!day) return null;

  return (
    <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden text-white">

      {/* ── Date bar ── */}
      <div className="flex items-center justify-between px-6 py-3 bg-primary-900/60 text-xs font-bold uppercase tracking-widest flex-wrap gap-2">
        <span className="text-primary-200">{formatUKDate(now)}</span>
        <span className="text-amber-400">{hijri}</span>
      </div>

      {/* ── Countdown ── */}
      <div className="text-center px-6 pt-8 pb-6 border-b border-white/10">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
          {hasNext ? "Next Prayer" : "Until Tomorrow's Fajr"}
        </p>
        <p className="text-lg font-bold text-amber-400 mb-4">
          {nextPrayer.label} — {nextPrayer.arabic}
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {[
            { val: countHh, label: "Hours" },
            { val: countMm, label: "Minutes" },
            { val: countSs, label: "Seconds" },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-2 md:gap-4">
              {i > 0 && <span className="text-3xl md:text-5xl font-bold text-slate-500 -mt-4">:</span>}
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-mono font-bold text-white tabular-nums">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-1">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Prayer cards grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
        {prayers.map((p, idx) => {
          const isNext = idx === nextIdx || (!hasNext && idx === 0);
          const isCurrent = idx === currentIdx;
          return (
            <div
              key={p.key}
              className={cn(
                "rounded-2xl p-4 flex flex-col gap-1 transition-all",
                isNext
                  ? "bg-primary-700 ring-2 ring-amber-400 shadow-lg"
                  : isCurrent
                  ? "bg-white/10"
                  : "bg-white/5"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  isNext ? "text-amber-300" : "text-slate-400"
                )}>
                  {p.label}
                </span>
                <span className="text-[10px] text-slate-500 font-bold">{p.arabic}</span>
              </div>
              <span className={cn(
                "text-xl font-mono font-bold",
                isNext ? "text-white" : "text-slate-200"
              )}>
                {p.beginTime}
              </span>
              {p.jamatTime && (
                <span className={cn(
                  "text-[10px] font-bold",
                  isNext ? "text-amber-300" : "text-amber-500"
                )}>
                  Jamāt {p.jamatTime}
                </span>
              )}
              {isNext && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 mt-1">
                  ▶ Next Prayer
                </span>
              )}
              {isCurrent && !isNext && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 mt-1">
                  ● Current
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="px-6 pb-4 flex items-center justify-between">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest">
          Ellesmere Port, CH65 4DB
        </p>
        <Link
          to="/events"
          className="text-[10px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
        >
          Full Timetable <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// ── Main Home page ───────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative h-[620px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1743450675048-03e0c6b13720?q=80&w=2560&auto=format&fit=crop"
            alt="Congregation prayers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/40 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Welcome to Your Community Masjid
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white tracking-tight uppercase">Ellesmere Port</h1>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-amber-400 uppercase tracking-widest">Masjid & Islamic Centre</h2>
          <p className="text-base md:text-lg text-primary-100 max-w-2xl mx-auto mb-10">
            A welcoming centre of faith, learning, and community service in the heart of Ellesmere Port.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events" className="px-8 py-3.5 rounded-full bg-primary-700 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-widest transition shadow-lg w-full sm:w-auto text-center">
              Prayer Timetable
            </Link>
            <Link to="/donate" className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold uppercase tracking-widest transition shadow-lg w-full sm:w-auto text-center">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Widget — overlapping hero */}
      <section className="relative z-20 -mt-16 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20">
        <PrayerWidget />
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">Serving the Community</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-6 h-6"/>, title: "Five Daily Prayers", desc: "Open for all five daily prayers with congregation. Jumu'ah every Friday.", link: "/events" },
              { icon: <BookOpen className="w-6 h-6"/>, title: "Islamic Education", desc: "Quran classes, weekend madrasah, weekly halaqahs and tafseer for all ages.", link: "/services" },
              { icon: <Users className="w-6 h-6"/>, title: "Community Support", desc: "Food bank, welfare assistance, counselling, and new Muslim support services.", link: "/services" },
              { icon: <HandHeart className="w-6 h-6"/>, title: "Nikah & Janazah", desc: "Marriage and funeral services conducted with care and Islamic guidance.", link: "/services" },
            ].map((item) => (
              <Link key={item.title} to={item.link} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all">
                <div className="w-12 h-12 bg-primary-900 text-white rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-700 transition">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">Connect With Us</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Upcoming Events</h2>
            </div>
            <Link to="/events" className="mt-4 md:mt-0 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary-800 hover:text-primary-700 transition px-4 py-2 bg-primary-50 rounded-full">
              View All <ArrowRight className="w-3 h-3 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_EVENTS.map(event => (
              <div key={event.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col p-4">
                <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    <span className="text-primary-700">{format(new Date(event.date), "MMM do, yyyy")}</span>
                    <span className="font-mono">{format(new Date(event.date), "h:mm a")}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 leading-tight">{event.title}</h3>
                  <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mt-auto">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Support Your Masjid</h2>
          <p className="text-primary-200 mb-8 text-sm leading-relaxed">
            Your donations help us maintain the masjid, educate our youth, and support families in need. Registered charity — Gift Aid eligible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-bold uppercase tracking-widest text-sm transition shadow-lg">
              Donate Now
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm transition">
              Get In Touch
            </Link>
          </div>
          <p className="text-primary-400 text-xs mt-6 uppercase tracking-widest">Charity No. 1195799</p>
        </div>
      </section>

    </div>
  );
}