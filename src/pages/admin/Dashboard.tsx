import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Calendar,
  BookOpen,
  GraduationCap,
  Video,
  Image,
  ArrowUpRight,
} from "lucide-react";
import { postsApi, eventsApi, booksApi } from "../../lib/api";

const STATS = [
  { label: "Posts", icon: FileText, color: "bg-blue-500", href: "/admin/posts", api: postsApi.adminList },
  { label: "Events", icon: Calendar, color: "bg-amber-500", href: "/admin/events", api: eventsApi.list },
  { label: "Books", icon: BookOpen, color: "bg-green-500", href: "/admin/books", api: booksApi.list },
  { label: "Courses", icon: GraduationCap, color: "bg-purple-500", href: "/admin/courses" },
  { label: "Videos", icon: Video, color: "bg-red-500", href: "/admin/videos" },
  { label: "Gallery", icon: Image, color: "bg-teal-500", href: "/admin/gallery" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    async function load() {
      const results: Record<string, number> = {};
      for (const stat of STATS) {
        if (stat.api) {
          try {
            const data = await stat.api();
            results[stat.label] = data.length;
          } catch {
            results[stat.label] = 0;
          }
        }
      }
      setCounts(results);
    }
    load();
  }, []);

  return (
    <div>
      <p className="text-slate-500 mb-6">
        Welcome to the mosque content management system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              to={stat.href}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {counts[stat.label] ?? "-"}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="font-bold text-amber-900 mb-2">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/admin/posts"
            className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-xl text-sm font-medium hover:bg-amber-100 transition"
          >
            + New Post
          </Link>
          <Link
            to="/admin/events"
            className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-xl text-sm font-medium hover:bg-amber-100 transition"
          >
            + New Event
          </Link>
          <Link
            to="/admin/gallery"
            className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-xl text-sm font-medium hover:bg-amber-100 transition"
          >
            + Add Image
          </Link>
          <Link
            to="/admin/videos"
            className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-xl text-sm font-medium hover:bg-amber-100 transition"
          >
            + Add Video
          </Link>
        </div>
      </div>
    </div>
  );
}