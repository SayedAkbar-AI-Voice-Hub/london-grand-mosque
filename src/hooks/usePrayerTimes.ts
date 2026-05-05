import { useState, useEffect } from "react";
import { getTodayTimetable, MAY_2026_TIMETABLE, formatPdfTime, type TimetableDay } from "../data/mockData";

export const formatTime12h = (time24: string) => {
  if (!time24) return "";
  const cleanTime = time24.split(" ")[0];
  const [h, m] = cleanTime.split(":");
  let hours = parseInt(h, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours.toString().padStart(2, "0")}:${m} ${ampm}`;
};

export interface LocalTimings {
  Fajr: string;
  FajrJamat: string | null;
  Sunrise: string;
  Dhuhr: string;
  DhuhrJamat: string | null;
  Asr: string;
  AsrHanafi: string | null;
  AsrJamat: string | null;
  Maghrib: string;
  Isha: string;
  IshaJamat: string | null;
}

function toLocalTimings(day: TimetableDay): LocalTimings {
  return {
    Fajr:       formatPdfTime(day.fajrBeg,   false),
    FajrJamat:  day.fajrJamat  ? formatPdfTime(day.fajrJamat,  false) : null,
    Sunrise:    formatPdfTime(day.sunrise,   false),
    Dhuhr:      formatPdfTime(day.zuhrBeg,   true),
    DhuhrJamat: day.zuhrJamat  ? formatPdfTime(day.zuhrJamat,  true)  : null,
    Asr:        formatPdfTime(day.asrBeg,    true),
    AsrHanafi:  day.asrHanafi  ? formatPdfTime(day.asrHanafi,  true)  : null,
    AsrJamat:   day.asrJamat   ? formatPdfTime(day.asrJamat,   true)  : null,
    Maghrib:    formatPdfTime(day.maghrib,   true),
    Isha:       formatPdfTime(day.ishaBeg,   true),
    IshaJamat:  day.ishaJamat  ? formatPdfTime(day.ishaJamat,  true)  : null,
  };
}

export function usePrayerTimes() {
  const [timings, setTimings] = useState<LocalTimings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localDay = getTodayTimetable();
    if (localDay) {
      setTimings(toLocalTimings(localDay));
      setLoading(false);
    } else {
      fetch("https://api.aladhan.com/v1/timingsByCity?city=Ellesmere+Port&country=UK&method=2")
        .then(r => r.json())
        .then(data => {
          const t = data.data.timings;
          setTimings({
            Fajr: formatTime12h(t.Fajr),   FajrJamat: null,
            Sunrise: formatTime12h(t.Sunrise),
            Dhuhr: formatTime12h(t.Dhuhr), DhuhrJamat: null,
            Asr: formatTime12h(t.Asr),     AsrHanafi: null, AsrJamat: null,
            Maghrib: formatTime12h(t.Maghrib),
            Isha: formatTime12h(t.Isha),   IshaJamat: null,
          });
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, []);

  return { timings, calendar: MAY_2026_TIMETABLE, loading };
}
