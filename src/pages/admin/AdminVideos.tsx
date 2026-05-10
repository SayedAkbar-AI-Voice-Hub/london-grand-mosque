import { useState, useEffect } from "react";
import { videosApi } from "../../lib/api";
import { Plus, Edit2, Trash2, Play } from "lucide-react";

export default function AdminVideos() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ title: "", description: "", youtube_url: "" });

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const data = await videosApi.list();
      setVideos(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await videosApi.update(editing.id, form);
      } else {
        await videosApi.create(form);
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", description: "", youtube_url: "" });
      loadVideos();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEdit = (video: any) => {
    setEditing(video);
    setForm({
      title: video.title,
      description: video.description || "",
      youtube_url: video.youtube_url,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this video?")) return;
    try {
      await videosApi.delete(id);
      loadVideos();
    } catch (e) {
      console.error(e);
    }
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-500 text-sm">{videos.length} videos</p>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ title: "", description: "", youtube_url: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
        >
          <Plus className="w-4 h-4" /> Add Video
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-lg font-bold mb-4">{editing ? "Edit Video" : "Add Video"}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">YouTube URL</label>
                <input type="text" value={form.youtube_url} onChange={(e) => setForm({ ...form, youtube_url: e.target.value })} placeholder="https://youtube.com/watch?v=..." className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" />
                {form.youtube_url && getYouTubeId(form.youtube_url) && (
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeId(form.youtube_url)}/hqdefault.jpg`}
                    alt="Preview"
                    className="mt-2 rounded-lg w-full max-w-xs"
                  />
                )}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="px-6 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700">Save</button>
                <button onClick={() => { setShowForm(false); setEditing(null); }} className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 h-28 bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
              {getYouTubeId(video.youtube_url) ? (
                <>
                  <img src={`https://img.youtube.com/vi/${getYouTubeId(video.youtube_url)}/hqdefault.jpg`} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">{video.youtube_url}</div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-slate-900">{video.title}</h4>
              {video.description && <p className="text-sm text-slate-500 mt-1 line-clamp-2">{video.description}</p>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => handleEdit(video)} className="p-2 hover:bg-slate-100 rounded-lg"><Edit2 className="w-4 h-4 text-slate-500" /></button>
              <button onClick={() => handleDelete(video.id)} className="p-2 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </div>
        ))}
        {videos.length === 0 && (
          <p className="text-slate-500 text-center py-8">No videos yet. Click "Add Video" to add one.</p>
        )}
      </div>
    </div>
  );
}