import { useState, useEffect } from "react";

export const formatTime12h = (time24: string) => {
  if (!time24) return "";
  // Remove timezone string if present from Aladhan API (e.g. "15:30 (BST)")
  const cleanTime = time24.split(" ")[0];
  const [h, m] = cleanTime.split(":");
  let hours = parseInt(h, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours.toString().padStart(2, "0")}:${m} ${ampm}`;
};

export function usePrayerTimes() {
  const [timings, setTimings] = useState<any>(null);
  const [calendar, setCalendar] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimes() {
      try {
        setLoading(true);
        // Today's exact times
        const todayRes = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Chester&country=UK&method=2");
        const todayData = await todayRes.json();
        setTimings(todayData.data.timings);

        // Entire month calendar
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const calRes = await fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Chester&country=UK&method=2`);
        const calData = await calRes.json();
        setCalendar(calData.data);
      } catch (err) {
        console.error("Failed to fetch prayer times:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTimes();
  }, []);

  return { timings, calendar, loading };
}
