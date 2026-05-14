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

export const JUNE_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "2:50", fajrJamat: "4:15", sunrise: "4:49", zuhrBeg: "1:14", zuhrJamat: "2:00", asrBeg: "6:46", asrHanafi: null, asrJamat: "7:00",  maghrib: "9:35",  ishaBeg: "10:38", ishaJamat: "11:00" },
  { date: 2,  fajrBeg: "2:49", fajrJamat: null,   sunrise: "4:48", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:46", asrHanafi: null, asrJamat: null,    maghrib: "9:36",  ishaBeg: "10:39", ishaJamat: null },
  { date: 3,  fajrBeg: "2:48", fajrJamat: null,   sunrise: "4:47", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "6:47", asrHanafi: null, asrJamat: null,    maghrib: "9:37",  ishaBeg: "10:40", ishaJamat: null },
  { date: 4,  fajrBeg: "2:46", fajrJamat: null,   sunrise: "4:46", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:48", asrHanafi: null, asrJamat: null,    maghrib: "9:38",  ishaBeg: "10:41", ishaJamat: null },
  { date: 5,  fajrBeg: "2:45", fajrJamat: null,   sunrise: "4:46", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:48", asrHanafi: null, asrJamat: null,    maghrib: "9:39",  ishaBeg: "10:42", ishaJamat: null },
  { date: 6,  fajrBeg: "2:44", fajrJamat: null,   sunrise: "4:45", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:49", asrHanafi: null, asrJamat: null,    maghrib: "9:40",  ishaBeg: "10:43", ishaJamat: null },
  { date: 7,  fajrBeg: "2:43", fajrJamat: null,   sunrise: "4:45", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:50", asrHanafi: null, asrJamat: null,    maghrib: "9:41",  ishaBeg: "10:44", ishaJamat: null },
  { date: 8,  fajrBeg: "2:43", fajrJamat: null,   sunrise: "4:44", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:50", asrHanafi: null, asrJamat: null,    maghrib: "9:42",  ishaBeg: "10:45", ishaJamat: null },
  { date: 9,  fajrBeg: "2:42", fajrJamat: null,   sunrise: "4:44", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "6:51", asrHanafi: null, asrJamat: null,    maghrib: "9:43",  ishaBeg: "10:46", ishaJamat: null },
  { date: 10, fajrBeg: "2:41", fajrJamat: null,   sunrise: "4:43", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "6:51", asrHanafi: null, asrJamat: null,    maghrib: "9:43",  ishaBeg: "10:46", ishaJamat: null },
  { date: 11, fajrBeg: "2:40", fajrJamat: null,   sunrise: "4:43", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "6:52", asrHanafi: null, asrJamat: null,    maghrib: "9:44",  ishaBeg: "10:47", ishaJamat: null },
  { date: 12, fajrBeg: "2:40", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "6:52", asrHanafi: null, asrJamat: null,    maghrib: "9:45",  ishaBeg: "10:48", ishaJamat: null },
  { date: 13, fajrBeg: "2:39", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "6:53", asrHanafi: null, asrJamat: null,    maghrib: "9:46",  ishaBeg: "10:48", ishaJamat: null },
  { date: 14, fajrBeg: "2:38", fajrJamat: "4:15", sunrise: "4:42", zuhrBeg: "1:17", zuhrJamat: "2:00", asrBeg: "6:53", asrHanafi: null, asrJamat: "7:30",  maghrib: "9:46",  ishaBeg: "10:48", ishaJamat: "11:00" },
  { date: 15, fajrBeg: "2:38", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:47",  ishaBeg: "10:49", ishaJamat: null },
  { date: 16, fajrBeg: "2:38", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:47",  ishaBeg: "10:50", ishaJamat: null },
  { date: 17, fajrBeg: "2:37", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:47",  ishaBeg: "10:50", ishaJamat: null },
  { date: 18, fajrBeg: "2:37", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:48",  ishaBeg: "10:51", ishaJamat: null },
  { date: 19, fajrBeg: "2:37", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:48",  ishaBeg: "10:52", ishaJamat: null },
  { date: 20, fajrBeg: "2:36", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:48",  ishaBeg: "10:52", ishaJamat: null },
  { date: 21, fajrBeg: "2:36", fajrJamat: null,   sunrise: "4:42", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:52", ishaJamat: null },
  { date: 22, fajrBeg: "2:36", fajrJamat: null,   sunrise: "4:43", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:53", ishaJamat: null },
  { date: 23, fajrBeg: "2:37", fajrJamat: null,   sunrise: "4:43", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:53", ishaJamat: null },
  { date: 24, fajrBeg: "2:37", fajrJamat: null,   sunrise: "4:43", zuhrBeg: "1:19", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:52", ishaJamat: null },
  { date: 25, fajrBeg: "2:38", fajrJamat: null,   sunrise: "4:44", zuhrBeg: "1:19", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:52", ishaJamat: null },
  { date: 26, fajrBeg: "2:39", fajrJamat: null,   sunrise: "4:44", zuhrBeg: "1:19", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:52", ishaJamat: null },
  { date: 27, fajrBeg: "2:40", fajrJamat: null,   sunrise: "4:45", zuhrBeg: "1:19", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:49",  ishaBeg: "10:52", ishaJamat: null },
  { date: 28, fajrBeg: "2:40", fajrJamat: "4:15", sunrise: "4:45", zuhrBeg: "1:20", zuhrJamat: "2:00", asrBeg: "6:57", asrHanafi: null, asrJamat: "7:30",  maghrib: "9:48",  ishaBeg: "10:51", ishaJamat: "11:00" },
  { date: 29, fajrBeg: "2:41", fajrJamat: null,   sunrise: "4:46", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:57", asrHanafi: null, asrJamat: null,    maghrib: "9:48",  ishaBeg: "10:51", ishaJamat: null },
  { date: 30, fajrBeg: "2:42", fajrJamat: null,   sunrise: "4:46", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:57", asrHanafi: null, asrJamat: null,    maghrib: "9:48",  ishaBeg: "10:51", ishaJamat: null },
];

export const JULY_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "2:43", fajrJamat: "4:15", sunrise: "4:47", zuhrBeg: "1:20", zuhrJamat: "2:00", asrBeg: "6:56", asrHanafi: null, asrJamat: "7:30",  maghrib: "9:47",  ishaBeg: "10:52", ishaJamat: "11:00" },
  { date: 2,  fajrBeg: "2:44", fajrJamat: null,   sunrise: "4:48", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:47",  ishaBeg: "10:51", ishaJamat: null },
  { date: 3,  fajrBeg: "2:45", fajrJamat: null,   sunrise: "4:49", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:46",  ishaBeg: "10:51", ishaJamat: null },
  { date: 4,  fajrBeg: "2:47", fajrJamat: null,   sunrise: "4:50", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:46",  ishaBeg: "10:50", ishaJamat: null },
  { date: 5,  fajrBeg: "2:48", fajrJamat: null,   sunrise: "4:51", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:45",  ishaBeg: "10:49", ishaJamat: null },
  { date: 6,  fajrBeg: "2:49", fajrJamat: null,   sunrise: "4:52", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:56", asrHanafi: null, asrJamat: null,    maghrib: "9:45",  ishaBeg: "10:49", ishaJamat: null },
  { date: 7,  fajrBeg: "2:50", fajrJamat: "4:30", sunrise: "4:54", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:44",  ishaBeg: "10:48", ishaJamat: null },
  { date: 8,  fajrBeg: "2:52", fajrJamat: null,   sunrise: "4:55", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:43",  ishaBeg: "10:47", ishaJamat: null },
  { date: 9,  fajrBeg: "2:53", fajrJamat: null,   sunrise: "4:56", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:43",  ishaBeg: "10:47", ishaJamat: null },
  { date: 10, fajrBeg: "2:54", fajrJamat: null,   sunrise: "4:57", zuhrBeg: "1:21", zuhrJamat: null,   asrBeg: "6:55", asrHanafi: null, asrJamat: null,    maghrib: "9:42",  ishaBeg: "10:45", ishaJamat: null },
  { date: 11, fajrBeg: "2:56", fajrJamat: null,   sunrise: "4:58", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:42",  ishaBeg: "10:44", ishaJamat: null },
  { date: 12, fajrBeg: "2:57", fajrJamat: null,   sunrise: "4:59", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:41",  ishaBeg: "10:43", ishaJamat: null },
  { date: 13, fajrBeg: "2:59", fajrJamat: null,   sunrise: "5:00", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:40",  ishaBeg: "10:42", ishaJamat: null },
  { date: 14, fajrBeg: "3:00", fajrJamat: null,   sunrise: "5:02", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:54", asrHanafi: null, asrJamat: null,    maghrib: "9:39",  ishaBeg: "10:41", ishaJamat: null },
  { date: 15, fajrBeg: "3:02", fajrJamat: null,   sunrise: "5:03", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:53", asrHanafi: null, asrJamat: null,    maghrib: "9:38",  ishaBeg: "10:40", ishaJamat: null },
  { date: 16, fajrBeg: "3:03", fajrJamat: null,   sunrise: "5:04", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:53", asrHanafi: null, asrJamat: null,    maghrib: "9:37",  ishaBeg: "10:39", ishaJamat: null },
  { date: 17, fajrBeg: "3:05", fajrJamat: null,   sunrise: "5:06", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:53", asrHanafi: null, asrJamat: null,    maghrib: "9:35",  ishaBeg: "10:38", ishaJamat: null },
  { date: 18, fajrBeg: "3:07", fajrJamat: null,   sunrise: "5:07", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:52", asrHanafi: null, asrJamat: null,    maghrib: "9:34",  ishaBeg: "10:37", ishaJamat: null },
  { date: 19, fajrBeg: "3:08", fajrJamat: null,   sunrise: "5:09", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:52", asrHanafi: null, asrJamat: null,    maghrib: "9:33",  ishaBeg: "10:35", ishaJamat: null },
  { date: 20, fajrBeg: "3:10", fajrJamat: null,   sunrise: "5:10", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:51", asrHanafi: null, asrJamat: null,    maghrib: "9:32",  ishaBeg: "10:34", ishaJamat: null },
  { date: 21, fajrBeg: "3:12", fajrJamat: "4:45", sunrise: "5:11", zuhrBeg: "1:23", zuhrJamat: "2:00", asrBeg: "6:50", asrHanafi: null, asrJamat: "7:30",  maghrib: "9:30",  ishaBeg: "10:32", ishaJamat: "10:45" },
  { date: 22, fajrBeg: "3:14", fajrJamat: null,   sunrise: "5:13", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:49", asrHanafi: null, asrJamat: null,    maghrib: "9:29",  ishaBeg: "10:31", ishaJamat: null },
  { date: 23, fajrBeg: "3:15", fajrJamat: null,   sunrise: "5:14", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:48", asrHanafi: null, asrJamat: null,    maghrib: "9:28",  ishaBeg: "10:30", ishaJamat: null },
  { date: 24, fajrBeg: "3:17", fajrJamat: null,   sunrise: "5:16", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:47", asrHanafi: null, asrJamat: null,    maghrib: "9:26",  ishaBeg: "10:28", ishaJamat: null },
  { date: 25, fajrBeg: "3:19", fajrJamat: null,   sunrise: "5:17", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:46", asrHanafi: null, asrJamat: null,    maghrib: "9:25",  ishaBeg: "10:27", ishaJamat: null },
  { date: 26, fajrBeg: "3:21", fajrJamat: null,   sunrise: "5:19", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:45", asrHanafi: null, asrJamat: null,    maghrib: "9:23",  ishaBeg: "10:25", ishaJamat: null },
  { date: 27, fajrBeg: "3:23", fajrJamat: null,   sunrise: "5:21", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:44", asrHanafi: null, asrJamat: null,    maghrib: "9:22",  ishaBeg: "10:23", ishaJamat: null },
  { date: 28, fajrBeg: "3:25", fajrJamat: null,   sunrise: "5:22", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:43", asrHanafi: null, asrJamat: null,    maghrib: "9:18",  ishaBeg: "10:22", ishaJamat: null },
  { date: 29, fajrBeg: "3:27", fajrJamat: null,   sunrise: "5:24", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:42", asrHanafi: null, asrJamat: null,    maghrib: "9:17",  ishaBeg: "10:20", ishaJamat: null },
  { date: 30, fajrBeg: "3:29", fajrJamat: null,   sunrise: "5:25", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:41", asrHanafi: null, asrJamat: null,    maghrib: "9:15",  ishaBeg: "10:18", ishaJamat: null },
  { date: 31, fajrBeg: "3:30", fajrJamat: null,   sunrise: "5:26", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:40", asrHanafi: null, asrJamat: null,    maghrib: "9:13",  ishaBeg: "10:18", ishaJamat: null },
];

export const AUGUST_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "3:32", fajrJamat: "4:45", sunrise: "5:27", zuhrBeg: "1:23", zuhrJamat: "2:00", asrBeg: "6:39", asrHanafi: null, asrJamat: "7:00",  maghrib: "9:12",  ishaBeg: "10:19", ishaJamat: "10:30" },
  { date: 2,  fajrBeg: "3:34", fajrJamat: null,   sunrise: "5:29", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:38", asrHanafi: null, asrJamat: null,    maghrib: "9:10",  ishaBeg: "10:17", ishaJamat: null },
  { date: 3,  fajrBeg: "3:36", fajrJamat: null,   sunrise: "5:30", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:37", asrHanafi: null, asrJamat: null,    maghrib: "9:08",  ishaBeg: "10:15", ishaJamat: null },
  { date: 4,  fajrBeg: "3:38", fajrJamat: null,   sunrise: "5:32", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:36", asrHanafi: null, asrJamat: null,    maghrib: "9:06",  ishaBeg: "10:13", ishaJamat: null },
  { date: 5,  fajrBeg: "3:40", fajrJamat: null,   sunrise: "5:34", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:34", asrHanafi: null, asrJamat: null,    maghrib: "9:04",  ishaBeg: "10:11", ishaJamat: null },
  { date: 6,  fajrBeg: "3:42", fajrJamat: null,   sunrise: "5:35", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:32", asrHanafi: null, asrJamat: null,    maghrib: "9:02",  ishaBeg: "10:09", ishaJamat: null },
  { date: 7,  fajrBeg: "3:44", fajrJamat: null,   sunrise: "5:37", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:31", asrHanafi: null, asrJamat: null,    maghrib: "9:00",  ishaBeg: "10:06", ishaJamat: null },
  { date: 8,  fajrBeg: "3:46", fajrJamat: null,   sunrise: "5:39", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:30", asrHanafi: null, asrJamat: null,    maghrib: "8:58",  ishaBeg: "10:05", ishaJamat: null },
  { date: 9,  fajrBeg: "3:48", fajrJamat: null,   sunrise: "5:40", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:28", asrHanafi: null, asrJamat: null,    maghrib: "8:56",  ishaBeg: "10:03", ishaJamat: null },
  { date: 10, fajrBeg: "3:50", fajrJamat: null,   sunrise: "5:42", zuhrBeg: "1:23", zuhrJamat: null,   asrBeg: "6:27", asrHanafi: null, asrJamat: null,    maghrib: "8:54",  ishaBeg: "10:01", ishaJamat: null },
  { date: 11, fajrBeg: "3:52", fajrJamat: null,   sunrise: "5:44", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:26", asrHanafi: null, asrJamat: null,    maghrib: "8:52",  ishaBeg: "9:59",  ishaJamat: null },
  { date: 12, fajrBeg: "3:54", fajrJamat: null,   sunrise: "5:45", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:24", asrHanafi: null, asrJamat: null,    maghrib: "8:50",  ishaBeg: "9:58",  ishaJamat: null },
  { date: 13, fajrBeg: "3:56", fajrJamat: null,   sunrise: "5:47", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:23", asrHanafi: null, asrJamat: null,    maghrib: "8:48",  ishaBeg: "9:56",  ishaJamat: null },
  { date: 14, fajrBeg: "4:00", fajrJamat: "5:00", sunrise: "5:49", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:21", asrHanafi: null, asrJamat: null,    maghrib: "8:46",  ishaBeg: "9:54",  ishaJamat: "10:15" },
  { date: 15, fajrBeg: "4:00", fajrJamat: null,   sunrise: "5:51", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:20", asrHanafi: null, asrJamat: null,    maghrib: "8:44",  ishaBeg: "9:52",  ishaJamat: null },
  { date: 16, fajrBeg: "4:03", fajrJamat: null,   sunrise: "5:52", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:18", asrHanafi: null, asrJamat: null,    maghrib: "8:42",  ishaBeg: "9:50",  ishaJamat: null },
  { date: 17, fajrBeg: "4:05", fajrJamat: null,   sunrise: "5:54", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:17", asrHanafi: null, asrJamat: null,    maghrib: "8:40",  ishaBeg: "9:48",  ishaJamat: null },
  { date: 18, fajrBeg: "4:07", fajrJamat: null,   sunrise: "5:56", zuhrBeg: "1:22", zuhrJamat: null,   asrBeg: "6:15", asrHanafi: null, asrJamat: null,    maghrib: "8:38",  ishaBeg: "9:46",  ishaJamat: null },
  { date: 19, fajrBeg: "4:09", fajrJamat: null,   sunrise: "5:57", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:14", asrHanafi: null, asrJamat: null,    maghrib: "8:36",  ishaBeg: "9:44",  ishaJamat: null },
  { date: 20, fajrBeg: "4:11", fajrJamat: null,   sunrise: "5:59", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:12", asrHanafi: null, asrJamat: null,    maghrib: "8:33",  ishaBeg: "9:42",  ishaJamat: null },
  { date: 21, fajrBeg: "4:13", fajrJamat: null,   sunrise: "6:01", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:11", asrHanafi: null, asrJamat: null,    maghrib: "8:31",  ishaBeg: "9:40",  ishaJamat: null },
  { date: 22, fajrBeg: "4:15", fajrJamat: null,   sunrise: "6:03", zuhrBeg: "1:20", zuhrJamat: null,   asrBeg: "6:09", asrHanafi: null, asrJamat: null,    maghrib: "8:29",  ishaBeg: "9:38",  ishaJamat: null },
  { date: 23, fajrBeg: "4:17", fajrJamat: null,   sunrise: "6:04", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:07", asrHanafi: null, asrJamat: null,    maghrib: "8:27",  ishaBeg: "9:36",  ishaJamat: null },
  { date: 24, fajrBeg: "4:19", fajrJamat: null,   sunrise: "6:06", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:06", asrHanafi: null, asrJamat: null,    maghrib: "8:26",  ishaBeg: "9:34",  ishaJamat: null },
  { date: 25, fajrBeg: "4:21", fajrJamat: null,   sunrise: "6:08", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:04", asrHanafi: null, asrJamat: null,    maghrib: "8:22",  ishaBeg: "9:32",  ishaJamat: null },
  { date: 26, fajrBeg: "4:23", fajrJamat: null,   sunrise: "6:10", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:02", asrHanafi: null, asrJamat: null,    maghrib: "8:20",  ishaBeg: "9:30",  ishaJamat: null },
  { date: 27, fajrBeg: "4:25", fajrJamat: null,   sunrise: "6:11", zuhrBeg: "1:18", zuhrJamat: null,   asrBeg: "6:00", asrHanafi: null, asrJamat: null,    maghrib: "8:19",  ishaBeg: "9:28",  ishaJamat: null },
  { date: 28, fajrBeg: "4:27", fajrJamat: "5:30", sunrise: "6:13", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "5:59", asrHanafi: null, asrJamat: null,    maghrib: "8:15",  ishaBeg: "9:26",  ishaJamat: "10:00" },
  { date: 29, fajrBeg: "4:29", fajrJamat: null,   sunrise: "6:15", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "5:57", asrHanafi: null, asrJamat: null,    maghrib: "8:13",  ishaBeg: "9:24",  ishaJamat: null },
  { date: 30, fajrBeg: "4:31", fajrJamat: null,   sunrise: "6:16", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "5:55", asrHanafi: null, asrJamat: null,    maghrib: "8:07",  ishaBeg: "9:22",  ishaJamat: null },
  { date: 31, fajrBeg: "4:33", fajrJamat: null,   sunrise: "6:18", zuhrBeg: "1:17", zuhrJamat: null,   asrBeg: "5:55", asrHanafi: null, asrJamat: null,    maghrib: "8:11",  ishaBeg: "9:20",  ishaJamat: null },
];

export const SEPTEMBER_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "4:36", fajrJamat: "5:45", sunrise: "6:20", zuhrBeg: "1:17", zuhrJamat: "2:00", asrBeg: "5:53", asrHanafi: null, asrJamat: "6:30",  maghrib: "8:06",  ishaBeg: "9:18",  ishaJamat: "9:30" },
  { date: 2,  fajrBeg: "4:38", fajrJamat: null,   sunrise: "6:22", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "5:52", asrHanafi: null, asrJamat: null,    maghrib: "8:03",  ishaBeg: "9:16",  ishaJamat: null },
  { date: 3,  fajrBeg: "4:40", fajrJamat: null,   sunrise: "6:23", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "5:50", asrHanafi: null, asrJamat: null,    maghrib: "8:01",  ishaBeg: "9:14",  ishaJamat: null },
  { date: 4,  fajrBeg: "4:42", fajrJamat: null,   sunrise: "6:25", zuhrBeg: "1:16", zuhrJamat: null,   asrBeg: "5:48", asrHanafi: null, asrJamat: null,    maghrib: "7:59",  ishaBeg: "9:11",  ishaJamat: null },
  { date: 5,  fajrBeg: "4:44", fajrJamat: null,   sunrise: "6:27", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "5:46", asrHanafi: null, asrJamat: null,    maghrib: "7:56",  ishaBeg: "9:09",  ishaJamat: null },
  { date: 6,  fajrBeg: "4:46", fajrJamat: null,   sunrise: "6:29", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "5:44", asrHanafi: null, asrJamat: null,    maghrib: "7:54",  ishaBeg: "9:07",  ishaJamat: null },
  { date: 7,  fajrBeg: "4:48", fajrJamat: "6:00", sunrise: "6:30", zuhrBeg: "1:15", zuhrJamat: null,   asrBeg: "5:42", asrHanafi: null, asrJamat: null,    maghrib: "7:52",  ishaBeg: "9:05",  ishaJamat: null },
  { date: 8,  fajrBeg: "4:50", fajrJamat: null,   sunrise: "6:32", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "5:40", asrHanafi: null, asrJamat: null,    maghrib: "7:49",  ishaBeg: "9:02",  ishaJamat: null },
  { date: 9,  fajrBeg: "4:52", fajrJamat: null,   sunrise: "6:34", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "5:38", asrHanafi: null, asrJamat: null,    maghrib: "7:47",  ishaBeg: "9:00",  ishaJamat: null },
  { date: 10, fajrBeg: "4:54", fajrJamat: null,   sunrise: "6:35", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "5:36", asrHanafi: null, asrJamat: null,    maghrib: "7:44",  ishaBeg: "8:58",  ishaJamat: null },
  { date: 11, fajrBeg: "4:56", fajrJamat: null,   sunrise: "6:37", zuhrBeg: "1:14", zuhrJamat: null,   asrBeg: "5:34", asrHanafi: null, asrJamat: null,    maghrib: "7:42",  ishaBeg: "8:56",  ishaJamat: null },
  { date: 12, fajrBeg: "4:58", fajrJamat: null,   sunrise: "6:39", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "5:32", asrHanafi: null, asrJamat: null,    maghrib: "7:40",  ishaBeg: "8:54",  ishaJamat: null },
  { date: 13, fajrBeg: "5:00", fajrJamat: null,   sunrise: "6:40", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "5:30", asrHanafi: null, asrJamat: null,    maghrib: "7:37",  ishaBeg: "8:52",  ishaJamat: null },
  { date: 14, fajrBeg: "5:02", fajrJamat: null,   sunrise: "6:42", zuhrBeg: "1:13", zuhrJamat: null,   asrBeg: "5:28", asrHanafi: null, asrJamat: "6:00",  maghrib: "7:35",  ishaBeg: "8:49",  ishaJamat: "9:00" },
  { date: 15, fajrBeg: "5:04", fajrJamat: null,   sunrise: "6:44", zuhrBeg: "1:12", zuhrJamat: null,   asrBeg: "5:26", asrHanafi: null, asrJamat: null,    maghrib: "7:32",  ishaBeg: "8:47",  ishaJamat: null },
  { date: 16, fajrBeg: "5:06", fajrJamat: null,   sunrise: "6:46", zuhrBeg: "1:12", zuhrJamat: null,   asrBeg: "5:24", asrHanafi: null, asrJamat: null,    maghrib: "7:30",  ishaBeg: "8:45",  ishaJamat: null },
  { date: 17, fajrBeg: "5:08", fajrJamat: null,   sunrise: "6:47", zuhrBeg: "1:12", zuhrJamat: null,   asrBeg: "5:22", asrHanafi: null, asrJamat: null,    maghrib: "7:27",  ishaBeg: "8:43",  ishaJamat: null },
  { date: 18, fajrBeg: "5:10", fajrJamat: null,   sunrise: "6:49", zuhrBeg: "1:11", zuhrJamat: null,   asrBeg: "5:20", asrHanafi: null, asrJamat: null,    maghrib: "7:25",  ishaBeg: "8:40",  ishaJamat: null },
  { date: 19, fajrBeg: "5:12", fajrJamat: null,   sunrise: "6:51", zuhrBeg: "1:11", zuhrJamat: null,   asrBeg: "5:18", asrHanafi: null, asrJamat: null,    maghrib: "7:23",  ishaBeg: "8:38",  ishaJamat: null },
  { date: 20, fajrBeg: "5:14", fajrJamat: null,   sunrise: "6:52", zuhrBeg: "1:11", zuhrJamat: null,   asrBeg: "5:16", asrHanafi: null, asrJamat: null,    maghrib: "7:20",  ishaBeg: "8:36",  ishaJamat: null },
  { date: 21, fajrBeg: "5:16", fajrJamat: "6:15", sunrise: "6:54", zuhrBeg: "1:10", zuhrJamat: null,   asrBeg: "5:14", asrHanafi: null, asrJamat: null,    maghrib: "7:18",  ishaBeg: "8:34",  ishaJamat: null },
  { date: 22, fajrBeg: "5:18", fajrJamat: null,   sunrise: "6:56", zuhrBeg: "1:10", zuhrJamat: null,   asrBeg: "5:12", asrHanafi: null, asrJamat: null,    maghrib: "7:15",  ishaBeg: "8:32",  ishaJamat: null },
  { date: 23, fajrBeg: "5:20", fajrJamat: null,   sunrise: "6:58", zuhrBeg: "1:10", zuhrJamat: null,   asrBeg: "5:10", asrHanafi: null, asrJamat: null,    maghrib: "7:13",  ishaBeg: "8:29",  ishaJamat: null },
  { date: 24, fajrBeg: "5:22", fajrJamat: null,   sunrise: "6:59", zuhrBeg: "1:10", zuhrJamat: null,   asrBeg: "5:08", asrHanafi: null, asrJamat: null,    maghrib: "7:10",  ishaBeg: "8:27",  ishaJamat: null },
  { date: 25, fajrBeg: "5:23", fajrJamat: null,   sunrise: "7:01", zuhrBeg: "1:09", zuhrJamat: null,   asrBeg: "5:06", asrHanafi: null, asrJamat: null,    maghrib: "7:08",  ishaBeg: "8:25",  ishaJamat: null },
  { date: 26, fajrBeg: "5:25", fajrJamat: null,   sunrise: "7:03", zuhrBeg: "1:09", zuhrJamat: null,   asrBeg: "5:04", asrHanafi: null, asrJamat: null,    maghrib: "7:06",  ishaBeg: "8:23",  ishaJamat: null },
  { date: 27, fajrBeg: "5:27", fajrJamat: null,   sunrise: "7:05", zuhrBeg: "1:09", zuhrJamat: null,   asrBeg: "5:02", asrHanafi: null, asrJamat: null,    maghrib: "7:03",  ishaBeg: "8:21",  ishaJamat: null },
  { date: 28, fajrBeg: "5:28", fajrJamat: "6:30", sunrise: "7:06", zuhrBeg: "1:08", zuhrJamat: null,   asrBeg: "4:59", asrHanafi: null, asrJamat: "5:30",  maghrib: "7:01",  ishaBeg: "8:18",  ishaJamat: "8:30" },
  { date: 29, fajrBeg: "5:30", fajrJamat: null,   sunrise: "7:08", zuhrBeg: "1:08", zuhrJamat: null,   asrBeg: "4:57", asrHanafi: null, asrJamat: null,    maghrib: "6:58",  ishaBeg: "8:16",  ishaJamat: null },
  { date: 30, fajrBeg: "5:32", fajrJamat: null,   sunrise: "7:10", zuhrBeg: "1:07", zuhrJamat: null,   asrBeg: "4:55", asrHanafi: null, asrJamat: null,    maghrib: "6:56",  ishaBeg: "8:14",  ishaJamat: null },
];

export const OCTOBER_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "5:33", fajrJamat: "6:30", sunrise: "7:12", zuhrBeg: "1:06", zuhrJamat: "2:00", asrBeg: "4:53", asrHanafi: null, asrJamat: "5:30",  maghrib: "6:53",  ishaBeg: "8:12",  ishaJamat: "8:30" },
  { date: 2,  fajrBeg: "5:35", fajrJamat: null,   sunrise: "7:13", zuhrBeg: "1:06", zuhrJamat: null,   asrBeg: "4:51", asrHanafi: null, asrJamat: null,    maghrib: "6:51",  ishaBeg: "8:10",  ishaJamat: null },
  { date: 3,  fajrBeg: "5:37", fajrJamat: null,   sunrise: "7:15", zuhrBeg: "1:06", zuhrJamat: null,   asrBeg: "4:49", asrHanafi: null, asrJamat: null,    maghrib: "6:49",  ishaBeg: "8:08",  ishaJamat: null },
  { date: 4,  fajrBeg: "5:38", fajrJamat: null,   sunrise: "7:17", zuhrBeg: "1:05", zuhrJamat: null,   asrBeg: "4:47", asrHanafi: null, asrJamat: null,    maghrib: "6:46",  ishaBeg: "8:05",  ishaJamat: null },
  { date: 5,  fajrBeg: "5:40", fajrJamat: null,   sunrise: "7:19", zuhrBeg: "1:05", zuhrJamat: null,   asrBeg: "4:45", asrHanafi: null, asrJamat: null,    maghrib: "6:44",  ishaBeg: "8:03",  ishaJamat: null },
  { date: 6,  fajrBeg: "5:42", fajrJamat: null,   sunrise: "7:21", zuhrBeg: "1:05", zuhrJamat: null,   asrBeg: "4:42", asrHanafi: null, asrJamat: null,    maghrib: "6:42",  ishaBeg: "8:01",  ishaJamat: null },
  { date: 7,  fajrBeg: "5:44", fajrJamat: "6:45", sunrise: "7:22", zuhrBeg: "1:04", zuhrJamat: null,   asrBeg: "4:40", asrHanafi: null, asrJamat: "5:00",  maghrib: "6:39",  ishaBeg: "7:59",  ishaJamat: null },
  { date: 8,  fajrBeg: "5:45", fajrJamat: null,   sunrise: "7:24", zuhrBeg: "1:04", zuhrJamat: null,   asrBeg: "4:38", asrHanafi: null, asrJamat: null,    maghrib: "6:37",  ishaBeg: "7:57",  ishaJamat: null },
  { date: 9,  fajrBeg: "5:47", fajrJamat: null,   sunrise: "7:26", zuhrBeg: "1:04", zuhrJamat: null,   asrBeg: "4:36", asrHanafi: null, asrJamat: null,    maghrib: "6:35",  ishaBeg: "7:55",  ishaJamat: null },
  { date: 10, fajrBeg: "5:49", fajrJamat: null,   sunrise: "7:28", zuhrBeg: "1:02", zuhrJamat: null,   asrBeg: "4:34", asrHanafi: null, asrJamat: null,    maghrib: "6:32",  ishaBeg: "7:53",  ishaJamat: null },
  { date: 11, fajrBeg: "5:51", fajrJamat: null,   sunrise: "7:29", zuhrBeg: "1:02", zuhrJamat: null,   asrBeg: "4:32", asrHanafi: null, asrJamat: null,    maghrib: "6:30",  ishaBeg: "7:50",  ishaJamat: null },
  { date: 12, fajrBeg: "5:52", fajrJamat: null,   sunrise: "7:31", zuhrBeg: "1:02", zuhrJamat: null,   asrBeg: "4:30", asrHanafi: null, asrJamat: null,    maghrib: "6:28",  ishaBeg: "7:48",  ishaJamat: null },
  { date: 13, fajrBeg: "5:54", fajrJamat: null,   sunrise: "7:33", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:38", asrHanafi: null, asrJamat: null,    maghrib: "6:25",  ishaBeg: "7:46",  ishaJamat: null },
  { date: 14, fajrBeg: "5:56", fajrJamat: "7:00", sunrise: "7:35", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:25", asrHanafi: null, asrJamat: null,    maghrib: "6:23",  ishaBeg: "7:44",  ishaJamat: "8:00" },
  { date: 15, fajrBeg: "5:58", fajrJamat: null,   sunrise: "7:37", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:23", asrHanafi: null, asrJamat: null,    maghrib: "6:21",  ishaBeg: "7:42",  ishaJamat: null },
  { date: 16, fajrBeg: "5:59", fajrJamat: null,   sunrise: "7:39", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:21", asrHanafi: null, asrJamat: null,    maghrib: "6:19",  ishaBeg: "7:40",  ishaJamat: null },
  { date: 17, fajrBeg: "6:01", fajrJamat: null,   sunrise: "7:40", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:19", asrHanafi: null, asrJamat: null,    maghrib: "6:16",  ishaBeg: "7:38",  ishaJamat: null },
  { date: 18, fajrBeg: "6:03", fajrJamat: null,   sunrise: "7:42", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:17", asrHanafi: null, asrJamat: null,    maghrib: "6:14",  ishaBeg: "7:36",  ishaJamat: null },
  { date: 19, fajrBeg: "6:05", fajrJamat: null,   sunrise: "7:44", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:15", asrHanafi: null, asrJamat: null,    maghrib: "6:12",  ishaBeg: "7:34",  ishaJamat: null },
  { date: 20, fajrBeg: "6:06", fajrJamat: null,   sunrise: "7:46", zuhrBeg: "1:01", zuhrJamat: null,   asrBeg: "4:13", asrHanafi: null, asrJamat: null,    maghrib: "6:10",  ishaBeg: "7:32",  ishaJamat: null },
  { date: 21, fajrBeg: "6:08", fajrJamat: null,   sunrise: "7:48", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:11", asrHanafi: null, asrJamat: "4:30",  maghrib: "6:08",  ishaBeg: "7:30",  ishaJamat: null },
  { date: 22, fajrBeg: "6:10", fajrJamat: null,   sunrise: "7:50", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:09", asrHanafi: null, asrJamat: null,    maghrib: "6:05",  ishaBeg: "7:28",  ishaJamat: null },
  { date: 23, fajrBeg: "6:12", fajrJamat: null,   sunrise: "7:52", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:07", asrHanafi: null, asrJamat: null,    maghrib: "6:03",  ishaBeg: "7:26",  ishaJamat: null },
  { date: 24, fajrBeg: "6:14", fajrJamat: null,   sunrise: "7:53", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:05", asrHanafi: null, asrJamat: null,    maghrib: "6:01",  ishaBeg: "7:24",  ishaJamat: null },
  { date: 25, fajrBeg: "6:15", fajrJamat: null,   sunrise: "7:55", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:03", asrHanafi: null, asrJamat: null,    maghrib: "5:59",  ishaBeg: "7:22",  ishaJamat: null },
  { date: 26, fajrBeg: "6:17", fajrJamat: null,   sunrise: "7:56", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "4:01", asrHanafi: null, asrJamat: null,    maghrib: "5:57",  ishaBeg: "7:20",  ishaJamat: null },
  { date: 27, fajrBeg: "6:19", fajrJamat: null,   sunrise: "7:58", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "3:59", asrHanafi: null, asrJamat: null,    maghrib: "5:55",  ishaBeg: "7:19",  ishaJamat: null },
  { date: 28, fajrBeg: "6:21", fajrJamat: null,   sunrise: "8:01", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "3:57", asrHanafi: null, asrJamat: null,    maghrib: "5:53",  ishaBeg: "7:17",  ishaJamat: null },
  { date: 29, fajrBeg: "6:23", fajrJamat: null,   sunrise: "8:03", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "3:55", asrHanafi: null, asrJamat: null,    maghrib: "5:51",  ishaBeg: "7:15",  ishaJamat: null },
  { date: 30, fajrBeg: "6:24", fajrJamat: null,   sunrise: "8:05", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "3:53", asrHanafi: null, asrJamat: null,    maghrib: "5:49",  ishaBeg: "7:13",  ishaJamat: null },
  { date: 31, fajrBeg: "6:26", fajrJamat: null,   sunrise: "8:07", zuhrBeg: "1:00", zuhrJamat: null,   asrBeg: "3:51", asrHanafi: null, asrJamat: null,    maghrib: "5:47",  ishaBeg: "7:12",  ishaJamat: null },
];

export const NOVEMBER_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "5:28", fajrJamat: "6:30", sunrise: "7:08", zuhrBeg: "11:59", zuhrJamat: "1:00", asrBeg: "2:48", asrHanafi: null, asrJamat: "3:00",  maghrib: "4:44",  ishaBeg: "6:09",  ishaJamat: "8:00" },
  { date: 2,  fajrBeg: "5:30", fajrJamat: null,   sunrise: "7:10", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:47", asrHanafi: null, asrJamat: null,    maghrib: "4:41",  ishaBeg: "6:07",  ishaJamat: null },
  { date: 3,  fajrBeg: "5:32", fajrJamat: null,   sunrise: "7:12", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:45", asrHanafi: null, asrJamat: null,    maghrib: "4:40",  ishaBeg: "6:05",  ishaJamat: null },
  { date: 4,  fajrBeg: "5:33", fajrJamat: null,   sunrise: "7:14", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:43", asrHanafi: null, asrJamat: null,    maghrib: "4:38",  ishaBeg: "6:04",  ishaJamat: null },
  { date: 5,  fajrBeg: "5:35", fajrJamat: null,   sunrise: "7:16", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:41", asrHanafi: null, asrJamat: null,    maghrib: "4:37",  ishaBeg: "6:02",  ishaJamat: null },
  { date: 6,  fajrBeg: "5:37", fajrJamat: null,   sunrise: "7:18", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:40", asrHanafi: null, asrJamat: null,    maghrib: "4:35",  ishaBeg: "6:01",  ishaJamat: null },
  { date: 7,  fajrBeg: "5:39", fajrJamat: "6:45", sunrise: "7:20", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:38", asrHanafi: null, asrJamat: null,    maghrib: "4:33",  ishaBeg: "5:59",  ishaJamat: null },
  { date: 8,  fajrBeg: "5:41", fajrJamat: null,   sunrise: "7:22", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:36", asrHanafi: null, asrJamat: null,    maghrib: "4:31",  ishaBeg: "5:57",  ishaJamat: null },
  { date: 9,  fajrBeg: "5:43", fajrJamat: null,   sunrise: "7:24", zuhrBeg: "11:59", zuhrJamat: null,   asrBeg: "2:34", asrHanafi: null, asrJamat: null,    maghrib: "4:30",  ishaBeg: "5:56",  ishaJamat: null },
  { date: 10, fajrBeg: "5:44", fajrJamat: null,   sunrise: "7:25", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:33", asrHanafi: null, asrJamat: null,    maghrib: "4:28",  ishaBeg: "5:54",  ishaJamat: null },
  { date: 11, fajrBeg: "5:46", fajrJamat: null,   sunrise: "7:27", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:31", asrHanafi: null, asrJamat: null,    maghrib: "4:26",  ishaBeg: "5:53",  ishaJamat: null },
  { date: 12, fajrBeg: "5:48", fajrJamat: null,   sunrise: "7:29", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:30", asrHanafi: null, asrJamat: null,    maghrib: "4:25",  ishaBeg: "5:52",  ishaJamat: null },
  { date: 13, fajrBeg: "5:50", fajrJamat: null,   sunrise: "7:31", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:28", asrHanafi: null, asrJamat: null,    maghrib: "4:23",  ishaBeg: "5:50",  ishaJamat: null },
  { date: 14, fajrBeg: "5:52", fajrJamat: "7:00", sunrise: "7:33", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:27", asrHanafi: null, asrJamat: null,    maghrib: "4:22",  ishaBeg: "5:49",  ishaJamat: null },
  { date: 15, fajrBeg: "5:53", fajrJamat: null,   sunrise: "7:35", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:25", asrHanafi: null, asrJamat: null,    maghrib: "4:20",  ishaBeg: "5:48",  ishaJamat: null },
  { date: 16, fajrBeg: "5:55", fajrJamat: null,   sunrise: "7:37", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:24", asrHanafi: null, asrJamat: null,    maghrib: "4:19",  ishaBeg: "5:46",  ishaJamat: null },
  { date: 17, fajrBeg: "5:57", fajrJamat: null,   sunrise: "7:38", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:22", asrHanafi: null, asrJamat: null,    maghrib: "4:17",  ishaBeg: "5:45",  ishaJamat: null },
  { date: 18, fajrBeg: "5:59", fajrJamat: null,   sunrise: "7:40", zuhrBeg: "12:00", zuhrJamat: null,   asrBeg: "2:21", asrHanafi: null, asrJamat: null,    maghrib: "4:16",  ishaBeg: "5:44",  ishaJamat: null },
  { date: 19, fajrBeg: "6:00", fajrJamat: null,   sunrise: "7:42", zuhrBeg: "12:01", zuhrJamat: null,   asrBeg: "2:20", asrHanafi: null, asrJamat: null,    maghrib: "4:15",  ishaBeg: "5:43",  ishaJamat: null },
  { date: 20, fajrBeg: "6:02", fajrJamat: null,   sunrise: "7:44", zuhrBeg: "12:01", zuhrJamat: null,   asrBeg: "2:19", asrHanafi: null, asrJamat: null,    maghrib: "4:13",  ishaBeg: "5:42",  ishaJamat: null },
  { date: 21, fajrBeg: "6:04", fajrJamat: "7:00", sunrise: "7:45", zuhrBeg: "12:01", zuhrJamat: null,   asrBeg: "2:17", asrHanafi: null, asrJamat: "2:45",  maghrib: "4:12",  ishaBeg: "5:41",  ishaJamat: "8:00" },
  { date: 22, fajrBeg: "6:05", fajrJamat: null,   sunrise: "7:47", zuhrBeg: "12:02", zuhrJamat: null,   asrBeg: "2:16", asrHanafi: null, asrJamat: null,    maghrib: "4:11",  ishaBeg: "5:40",  ishaJamat: null },
  { date: 23, fajrBeg: "6:07", fajrJamat: null,   sunrise: "7:49", zuhrBeg: "12:02", zuhrJamat: null,   asrBeg: "2:15", asrHanafi: null, asrJamat: null,    maghrib: "4:10",  ishaBeg: "5:39",  ishaJamat: null },
  { date: 24, fajrBeg: "6:09", fajrJamat: null,   sunrise: "7:50", zuhrBeg: "12:02", zuhrJamat: null,   asrBeg: "2:14", asrHanafi: null, asrJamat: null,    maghrib: "4:09",  ishaBeg: "5:38",  ishaJamat: null },
  { date: 25, fajrBeg: "6:10", fajrJamat: null,   sunrise: "7:52", zuhrBeg: "12:02", zuhrJamat: null,   asrBeg: "2:13", asrHanafi: null, asrJamat: null,    maghrib: "4:08",  ishaBeg: "5:37",  ishaJamat: null },
  { date: 26, fajrBeg: "6:12", fajrJamat: null,   sunrise: "7:54", zuhrBeg: "12:03", zuhrJamat: null,   asrBeg: "2:12", asrHanafi: null, asrJamat: null,    maghrib: "4:07",  ishaBeg: "5:36",  ishaJamat: null },
  { date: 27, fajrBeg: "6:13", fajrJamat: null,   sunrise: "7:55", zuhrBeg: "12:03", zuhrJamat: null,   asrBeg: "2:11", asrHanafi: null, asrJamat: null,    maghrib: "4:06",  ishaBeg: "5:35",  ishaJamat: null },
  { date: 28, fajrBeg: "6:15", fajrJamat: null,   sunrise: "7:59", zuhrBeg: "12:03", zuhrJamat: null,   asrBeg: "2:10", asrHanafi: null, asrJamat: null,    maghrib: "4:05",  ishaBeg: "5:35",  ishaJamat: null },
  { date: 29, fajrBeg: "6:16", fajrJamat: null,   sunrise: "8:00", zuhrBeg: "12:04", zuhrJamat: null,   asrBeg: "2:09", asrHanafi: null, asrJamat: null,    maghrib: "4:04",  ishaBeg: "5:34",  ishaJamat: null },
  { date: 30, fajrBeg: "6:18", fajrJamat: null,   sunrise: "8:01", zuhrBeg: "12:04", zuhrJamat: null,   asrBeg: "2:09", asrHanafi: null, asrJamat: null,    maghrib: "4:03",  ishaBeg: "5:34",  ishaJamat: null },
];

export const DECEMBER_2026_TIMETABLE: TimetableDay[] = [
  { date: 1,  fajrBeg: "6:19", fajrJamat: "7:00", sunrise: "8:04", zuhrBeg: "12:04", zuhrJamat: "1:00", asrBeg: "2:08", asrHanafi: null, asrJamat: "2:45",  maghrib: "4:03",  ishaBeg: "5:33",  ishaJamat: "8:00" },
  { date: 2,  fajrBeg: "6:21", fajrJamat: null,   sunrise: "8:04", zuhrBeg: "12:05", zuhrJamat: null,   asrBeg: "2:07", asrHanafi: null, asrJamat: null,    maghrib: "4:02",  ishaBeg: "5:33",  ishaJamat: null },
  { date: 3,  fajrBeg: "6:22", fajrJamat: null,   sunrise: "8:05", zuhrBeg: "12:05", zuhrJamat: null,   asrBeg: "2:06", asrHanafi: null, asrJamat: null,    maghrib: "4:01",  ishaBeg: "5:32",  ishaJamat: null },
  { date: 4,  fajrBeg: "6:23", fajrJamat: null,   sunrise: "8:06", zuhrBeg: "12:05", zuhrJamat: null,   asrBeg: "2:06", asrHanafi: null, asrJamat: null,    maghrib: "4:01",  ishaBeg: "5:32",  ishaJamat: null },
  { date: 5,  fajrBeg: "6:25", fajrJamat: null,   sunrise: "8:07", zuhrBeg: "12:05", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "4:00",  ishaBeg: "5:32",  ishaJamat: null },
  { date: 6,  fajrBeg: "6:26", fajrJamat: null,   sunrise: "8:08", zuhrBeg: "12:06", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "4:00",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 7,  fajrBeg: "6:27", fajrJamat: null,   sunrise: "8:10", zuhrBeg: "12:06", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "4:00",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 8,  fajrBeg: "6:28", fajrJamat: null,   sunrise: "8:11", zuhrBeg: "12:07", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 9,  fajrBeg: "6:29", fajrJamat: null,   sunrise: "8:13", zuhrBeg: "12:07", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 10, fajrBeg: "6:30", fajrJamat: null,   sunrise: "8:13", zuhrBeg: "12:07", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 11, fajrBeg: "6:31", fajrJamat: null,   sunrise: "8:14", zuhrBeg: "12:07", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 12, fajrBeg: "6:32", fajrJamat: null,   sunrise: "8:14", zuhrBeg: "12:08", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 13, fajrBeg: "6:33", fajrJamat: null,   sunrise: "8:15", zuhrBeg: "12:08", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 14, fajrBeg: "6:34", fajrJamat: "7:00", sunrise: "8:16", zuhrBeg: "12:09", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:31",  ishaJamat: null },
  { date: 15, fajrBeg: "6:35", fajrJamat: null,   sunrise: "8:17", zuhrBeg: "12:09", zuhrJamat: null,   asrBeg: "2:03", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:32",  ishaJamat: null },
  { date: 16, fajrBeg: "6:36", fajrJamat: null,   sunrise: "8:18", zuhrBeg: "12:09", zuhrJamat: null,   asrBeg: "2:03", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:32",  ishaJamat: null },
  { date: 17, fajrBeg: "6:36", fajrJamat: null,   sunrise: "8:19", zuhrBeg: "12:10", zuhrJamat: null,   asrBeg: "2:03", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:33",  ishaJamat: null },
  { date: 18, fajrBeg: "6:37", fajrJamat: null,   sunrise: "8:20", zuhrBeg: "12:10", zuhrJamat: null,   asrBeg: "2:03", asrHanafi: null, asrJamat: null,    maghrib: "3:59",  ishaBeg: "5:33",  ishaJamat: null },
  { date: 19, fajrBeg: "6:38", fajrJamat: null,   sunrise: "8:20", zuhrBeg: "12:11", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "4:00",  ishaBeg: "5:34",  ishaJamat: null },
  { date: 20, fajrBeg: "6:38", fajrJamat: null,   sunrise: "8:21", zuhrBeg: "12:11", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "4:00",  ishaBeg: "5:34",  ishaJamat: null },
  { date: 21, fajrBeg: "6:39", fajrJamat: "7:00", sunrise: "8:22", zuhrBeg: "12:11", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: "2:45",  maghrib: "4:01",  ishaBeg: "5:35",  ishaJamat: "8:00" },
  { date: 22, fajrBeg: "6:40", fajrJamat: null,   sunrise: "8:22", zuhrBeg: "12:12", zuhrJamat: null,   asrBeg: "2:04", asrHanafi: null, asrJamat: null,    maghrib: "4:01",  ishaBeg: "5:35",  ishaJamat: null },
  { date: 23, fajrBeg: "6:40", fajrJamat: null,   sunrise: "8:23", zuhrBeg: "12:12", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "4:02",  ishaBeg: "5:36",  ishaJamat: null },
  { date: 24, fajrBeg: "6:41", fajrJamat: null,   sunrise: "8:23", zuhrBeg: "12:13", zuhrJamat: null,   asrBeg: "2:05", asrHanafi: null, asrJamat: null,    maghrib: "4:03",  ishaBeg: "5:37",  ishaJamat: null },
  { date: 25, fajrBeg: "6:41", fajrJamat: null,   sunrise: "8:23", zuhrBeg: "12:13", zuhrJamat: null,   asrBeg: "2:06", asrHanafi: null, asrJamat: null,    maghrib: "4:03",  ishaBeg: "5:38",  ishaJamat: null },
  { date: 26, fajrBeg: "6:41", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:14", zuhrJamat: null,   asrBeg: "2:08", asrHanafi: null, asrJamat: null,    maghrib: "4:04",  ishaBeg: "5:38",  ishaJamat: null },
  { date: 27, fajrBeg: "6:42", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:14", zuhrJamat: null,   asrBeg: "2:09", asrHanafi: null, asrJamat: null,    maghrib: "4:05",  ishaBeg: "5:39",  ishaJamat: null },
  { date: 28, fajrBeg: "6:42", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:14", zuhrJamat: null,   asrBeg: "2:10", asrHanafi: null, asrJamat: null,    maghrib: "4:06",  ishaBeg: "5:40",  ishaJamat: null },
  { date: 29, fajrBeg: "6:42", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:15", zuhrJamat: null,   asrBeg: "2:11", asrHanafi: null, asrJamat: null,    maghrib: "4:07",  ishaBeg: "5:40",  ishaJamat: null },
  { date: 30, fajrBeg: "6:42", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:16", zuhrJamat: null,   asrBeg: "2:12", asrHanafi: null, asrJamat: null,    maghrib: "4:08",  ishaBeg: "5:41",  ishaJamat: null },
  { date: 31, fajrBeg: "6:42", fajrJamat: null,   sunrise: "8:24", zuhrBeg: "12:18", zuhrJamat: null,   asrBeg: "2:12", asrHanafi: null, asrJamat: null,    maghrib: "4:09",  ishaBeg: "5:41",  ishaJamat: null },
];

export const TIMETABLES: Record<number, { label: string; year: number; data: TimetableDay[]; jummahTime: string }> = {
  4:  { label: "May",       year: 2026, data: MAY_2026_TIMETABLE,       jummahTime: "1:45 PM" },
  5:  { label: "June",      year: 2026, data: JUNE_2026_TIMETABLE,      jummahTime: "1:45 PM" },
  6:  { label: "July",      year: 2026, data: JULY_2026_TIMETABLE,      jummahTime: "1:45 PM" },
  7:  { label: "August",    year: 2026, data: AUGUST_2026_TIMETABLE,    jummahTime: "1:45 PM" },
  8:  { label: "September", year: 2026, data: SEPTEMBER_2026_TIMETABLE, jummahTime: "1:45 PM" },
  9:  { label: "October",   year: 2026, data: OCTOBER_2026_TIMETABLE,   jummahTime: "1:45 PM" },
  10: { label: "November",  year: 2026, data: NOVEMBER_2026_TIMETABLE,  jummahTime: "12:45 PM" },
  11: { label: "December",  year: 2026, data: DECEMBER_2026_TIMETABLE,  jummahTime: "12:45 PM" },
};

export function getTodayTimetable(): TimetableDay | null {
  // Always use UK (Europe/London) date — site visitors may be in a different timezone
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const get = (type: string) => parseInt(parts.find(p => p.type === type)?.value ?? "0");
  const m = get("month") - 1; // JS month is 0-based
  const y = get("year");
  const d = get("day");
  const entry = TIMETABLES[m];
  if (entry && entry.year === y) {
    return entry.data.find(row => row.date === d) ?? null;
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
