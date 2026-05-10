import { useState, useEffect } from "react";
import { galleryApi } from "../../lib/api";
import { Plus, Trash2 } from "lucide-react";

export default function AdminGallery() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", url: "", type: "image" });

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const data = await galleryApi.list();
      setImages(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    try {
      await galleryApi.create(form);
      setShowForm(false);
      setForm({ title: "", url: "", type: "image" });
      loadGallery();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this image?")) return;
    try {
      await galleryApi.delete(id);
      loadGallery();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-500 text-sm">{images.length} images</p>
        <button
          onClick={() => {
            setForm({ title: "", url: "", type: "image" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
        >
          <Plus className="w-4 h-4" /> Add Image
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6">
            <h3 className="text-lg font-bold mb-4">Add to Gallery</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input type="text" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" />
                {form.url && (
                  <img src={form.url} alt="Preview" className="mt-2 rounded-lg w-full max-w-xs h-32 object-cover" />
                )}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleAdd} className="px-6 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700">Add</button>
                <button onClick={() => setShowForm(false)} className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
            <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
              <button
                onClick={() => handleDelete(img.id)}
                className="opacity-0 group-hover:opacity-100 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xs font-medium truncate">{img.title}</p>
            </div>
          </div>
        ))}
        {images.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
            No images in gallery. Click "Add Image" to add one.
          </div>
        )}
      </div>
    </div>
  );
}