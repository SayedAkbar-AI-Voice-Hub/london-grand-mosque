import { useState, useEffect } from "react";
import { postsApi } from "../lib/api";
import { Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function News() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    postsApi.list().then(setPosts).catch(() => {});
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">News & Announcements</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Stay updated on our latest projects, press releases, and community news.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <article key={post.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col h-full p-2">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary-700 mb-4">
                  <Clock className="w-3 h-3 mr-2" />
                  <span className="font-mono">{format(new Date(post.created_at), "MMM do, yyyy")}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h2>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{post.excerpt || post.content?.slice(0, 200)}</p>
                <button className="text-amber-600 text-xs uppercase tracking-widest font-bold hover:text-amber-700 transition flex items-center group self-start">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-16 text-slate-400 text-sm">
              No news posts yet. Check back soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}