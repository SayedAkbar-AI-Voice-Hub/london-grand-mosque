export const MOCK_PRAYER_TIMES = {
  Fajr: "04:30 AM",
  Sunrise: "06:15 AM",
  Dhuhr: "01:05 PM",
  Asr: "05:00 PM",
  Maghrib: "07:55 PM",
  Isha: "09:30 PM",
  Jummah: "01:15 PM"
};

export interface TimetableDay {
  date: number;
  fajrBeg: string;
  fajrJamat: string | null;
  sunrise: string;
  zuhrBeg: string;
  zuhrJamat: string | null;
  asrBeg: string;
  asrHanafi: string | null;
  asrJamat: string | null;
  maghrib: string;
  ishaBeg: string;
  ishaJamat: string | null;
}

export const MAY_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "3:48", fajrJamat: "5:00", sunrise: "5:35", zuhrBeg: "1:14", zuhrJamat: "2:00", asrBeg: "6:16", asrHanafi: null,   asrJamat: "6:45", maghrib: "8:47", ishaBeg: "9:51",  ishaJamat: "10:15" },
  { date: 2,  fajrBeg: "3:45", fajrJamat: null,   sunrise: "5:33", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:18", asrHanafi: null,   asrJamat: null,   maghrib: "8:49", ishaBeg: "9:53",  ishaJamat: null },
  { date: 3,  fajrBeg: "3:43", fajrJamat: null,   sunrise: "5:31", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:19", asrHanafi: null,   asrJamat: null,   maghrib: "8:51", ishaBeg: "9:54",  ishaJamat: null },
  { date: 4,  fajrBeg: "3:41", fajrJamat: null,   sunrise: "5:29", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:20", asrHanafi: null,   asrJamat: null,   maghrib: "8:52", ishaBeg: "9:56",  ishaJamat: null },
  { date: 5,  fajrBeg: "3:38", fajrJamat: null,   sunrise: "5:27", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:21", asrHanafi: null,   asrJamat: null,   maghrib: "8:54", ishaBeg: "9:58",  ishaJamat: null },
  { date: 6,  fajrBeg: "3:36", fajrJamat: null,   sunrise: "5:26", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:22", asrHanafi: null,   asrJamat: null,   maghrib: "8:56", ishaBeg: "9:59",  ishaJamat: null },
  { date: 7,  fajrBeg: "3:34", fajrJamat: "4:45", sunrise: "5:24", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:23", asrHanafi: null,   asrJamat: null,   maghrib: "8:58", ishaBeg: "10:01", ishaJamat: null },
  { date: 8,  fajrBeg: "3:32", fajrJamat: null,   sunrise: "5:22", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:24", asrHanafi: null,   asrJamat: null,   maghrib: "8:59", ishaBeg: "10:03", ishaJamat: null },
  { date: 9,  fajrBeg: "3:29", fajrJamat: null,   sunrise: "5:20", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:25", asrHanafi: null,   asrJamat: null,   maghrib: "9:01", ishaBeg: "10:05", ishaJamat: null },
  { date: 10, fajrBeg: "3:27", fajrJamat: null,   sunrise: "5:18", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:26", asrHanafi: null,   asrJamat: null,   maghrib: "9:03", ishaBeg: "10:07", ishaJamat: null },
  { date: 11, fajrBeg: "3:25", fajrJamat: null,   sunrise: "5:17", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:27", asrHanafi: null,   asrJamat: null,   maghrib: "9:04", ishaBeg: "10:08", ishaJamat: null },
  { date: 12, fajrBeg: "3:23", fajrJamat: null,   sunrise: "5:15", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:28", asrHanafi: null,   asrJamat: null,   maghrib: "9:06", ishaBeg: "10:10", ishaJamat: null },
  { date: 13, fajrBeg: "3:21", fajrJamat: null,   sunrise: "5:13", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:29", asrHanafi: null,   asrJamat: null,   maghrib: "9:08", ishaBeg: "10:12", ishaJamat: null },
  { date: 14, fajrBeg: "3:19", fajrJamat: "4:30", sunrise: "5:12", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:30", asrHanafi: "7:00", asrJamat: null,   maghrib: "9:09", ishaBeg: "10:13", ishaJamat: "10:30" },
  { date: 15, fajrBeg: "3:17", fajrJamat: null,   sunrise: "5:10", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:31", asrHanafi: null,   asrJamat: null,   maghrib: "9:11", ishaBeg: "10:14", ishaJamat: null },
  { date: 16, fajrBeg: "3:15", fajrJamat: null,   sunrise: "5:08", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:32", asrHanafi: null,   asrJamat: null,   maghrib: "9:13", ishaBeg: "10:15", ishaJamat: null },
  { date: 17, fajrBeg: "3:13", fajrJamat: null,   sunrise: "5:07", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:33", asrHanafi: null,   asrJamat: null,   maghrib: "9:14", ishaBeg: "10:16", ishaJamat: null },
  { date: 18, fajrBeg: "3:11", fajrJamat: null,   sunrise: "5:05", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:34", asrHanafi: null,   asrJamat: null,   maghrib: "9:16", ishaBeg: "10:18", ishaJamat: null },
  { date: 19, fajrBeg: "3:10", fajrJamat: null,   sunrise: "5:04", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:35", asrHanafi: null,   asrJamat: null,   maghrib: "9:17", ishaBeg: "10:20", ishaJamat: null },
  { date: 20, fajrBeg: "3:08", fajrJamat: null,   sunrise: "5:02", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:36", asrHanafi: null,   asrJamat: null,   maghrib: "9:19", ishaBeg: "10:21", ishaJamat: null },
  { date: 21, fajrBeg: "3:06", fajrJamat: null,   sunrise: "5:01", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:37", asrHanafi: null,   asrJamat: null,   maghrib: "9:20", ishaBeg: "10:23", ishaJamat: "10:45" },
  { date: 22, fajrBeg: "3:04", fajrJamat: null,   sunrise: "5:00", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:38", asrHanafi: null,   asrJamat: null,   maghrib: "9:22", ishaBeg: "10:24", ishaJamat: null },
  { date: 23, fajrBeg: "3:03", fajrJamat: null,   sunrise: "4:58", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:39", asrHanafi: null,   asrJamat: null,   maghrib: "9:23", ishaBeg: "10:26", ishaJamat: null },
  { date: 24, fajrBeg: "3:01", fajrJamat: null,   sunrise: "4:57", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:39", asrHanafi: null,   asrJamat: null,   maghrib: "9:25", ishaBeg: "10:27", ishaJamat: null },
  { date: 25, fajrBeg: "3:00", fajrJamat: null,   sunrise: "4:56", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "6:40", asrHanafi: null,   asrJamat: null,   maghrib: "9:26", ishaBeg: "10:29", ishaJamat: null },
  { date: 26, fajrBeg: "2:58", fajrJamat: null,   sunrise: "4:55", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:41", asrHanafi: null,   asrJamat: null,   maghrib: "9:27", ishaBeg: "10:30", ishaJamat: null },
  { date: 27, fajrBeg: "2:57", fajrJamat: null,   sunrise: "4:54", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:42", asrHanafi: null,   asrJamat: null,   maghrib: "9:29", ishaBeg: "10:31", ishaJamat: null },
  { date: 28, fajrBeg: "2:55", fajrJamat: "4:15", sunrise: "4:53", zuhrBeg: "1:14", zuhrJamat: "2:00", asrBeg: "6:43", asrHanafi: "7:00", asrJamat: null,   maghrib: "9:30", ishaBeg: "10:33", ishaJamat: null },
  { date: 29, fajrBeg: "2:54", fajrJamat: null,   sunrise: "4:52", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:44", asrHanafi: null,   asrJamat: null,   maghrib: "9:31", ishaBeg: "10:34", ishaJamat: null },
  { date: 30, fajrBeg: "2:52", fajrJamat: null,   sunrise: "4:51", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:44", asrHanafi: null,   asrJamat: null,   maghrib: "9:33", ishaBeg: "10:35", ishaJamat: null },
  { date: 31, fajrBeg: "2:51", fajrJamat: null,   sunrise: "4:50", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:45", asrHanafi: null,   asrJamat: null,   maghrib: "9:34", ishaBeg: "10:37", ishaJamat: null },
];

export function getTodayTimetable(): TimetableDay | null {
  const today = new Date();
  if (today.getMonth() === 4 && today.getFullYear() === 2026) {
    return MAY_2026_TIMETABLE.find(d => d.date === today.getDate()) ?? null;
  }
  return null;
}

export function formatPdfTime(t: string, isPm: boolean): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = isPm ? "PM" : "AM";
  const display = h > 12 ? `${h - 12}:${String(m).padStart(2, "0")}` : `${h}:${String(m).padStart(2, "0")}`;
  return `${display} ${suffix}`;
}

export const MOCK_EVENTS = [
  {
    id: "1",
    title: "Weekly Quran Reflection Series",
    date: "2026-05-08T19:00:00Z",
    location: "Main Prayer Hall",
    description: "Join Imam Khalid for an in-depth tafsir of Surah Al-Kahf.",
    image: "https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Community Iftar & Fundraising Dinner",
    date: "2026-05-15T18:30:00Z",
    location: "Community Center",
    description: "A blessed evening of breaking bread together and supporting our upcoming expansion project.",
    image: "https://images.unsplash.com/photo-1633678010062-c72b92e955e2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Youth Islamic Studies Weekend",
    date: "2026-05-20T10:00:00Z",
    location: "Mosque Hall",
    description: "Weekend learning programme for ages 8-16 covering Quranic recitation, Islamic history, and character development.",
    image: "https://images.unsplash.com/photo-1637034120715-cdd8f1c9347d?q=80&w=600&auto=format&fit=crop"
  }
];

export const MOCK_NEWS = [
  {
    id: "1",
    title: "Mosque Expansion Project Reaches 50% Milestone",
    date: "2026-05-01",
    excerpt: "Alhamdulillah, thanks to your generous donations, we have completed the structural framework for the new library and youth center.",
    image: "https://images.unsplash.com/photo-1627790497727-41fb43f961be?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "New Sisters' Halaqah Schedule Announced",
    date: "2026-04-28",
    excerpt: "We are excited to introduce three new weekly classes specifically tailored for women, covering Fiqh, Seerah, and Tajweed.",
    image: "https://images.unsplash.com/photo-1584339312444-6952d098e152?q=80&w=600&auto=format&fit=crop"
  }
];

export const MOCK_GALLERY = [
  {
    id: "1",
    type: "image",
    url: "https://images.unsplash.com/photo-1743450675048-03e0c6b13720?q=80&w=1080&auto=format&fit=crop",
    title: "Eid Prayers 2025"
  },
  {
    id: "2",
    type: "image",
    url: "https://images.unsplash.com/photo-1627790497727-41fb43f961be?q=80&w=1080&auto=format&fit=crop",
    title: "Mosque Interior Architecture"
  },
  {
    id: "3",
    type: "image",
    url: "https://images.unsplash.com/photo-1575751639353-e292e76daca3?q=80&w=1080&auto=format&fit=crop",
    title: "Jumu'ah Prayer Congregation"
  },
  {
    id: "4",
    type: "image",
    url: "https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?q=80&w=1080&auto=format&fit=crop",
    title: "Quran Reading"
  },
  {
    id: "5",
    type: "image",
    url: "https://images.unsplash.com/photo-1637518026117-9d1ac5e73f07?q=80&w=1080&auto=format&fit=crop",
    title: "Friday Prayer — Istanbul"
  },
  {
    id: "6",
    type: "image",
    url: "https://images.unsplash.com/photo-1771536145122-540a17fc0397?q=80&w=1080&auto=format&fit=crop",
    title: "Prayer Congregation — Masjid Istiqlal"
  }
];
