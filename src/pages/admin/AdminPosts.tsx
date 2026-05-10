import { useState, useEffect } from "react";
import { postsApi } from "../../lib/api";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ title: "", content: "", excerpt: "", image: "", published: false });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await postsApi.adminList();
      setPosts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await postsApi.update(editing.id, form);
      } else {
        await postsApi.create(form);
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", content: "", excerpt: "", image: "", published: false });
      loadPosts();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEdit = (post: any) => {
    setEditing(post);
    setForm({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || "",
      image: post.image || "",
      published: !!post.published,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this post?")) return;
    try {
      await postsApi.delete(id);
      loadPosts();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-500 text-sm">{posts.length} posts</p>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ title: "", content: "", excerpt: "", image: "", published: false });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
        >
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-lg font-bold mb-4">
              {editing ? "Edit Post" : "New Post"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Content (Markdown)</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Published</span>
              </label>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditing(null);
                  }}
                  className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Title</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Status</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Date</th>
              <th className="text-right px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50">
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-900">{post.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{post.slug}</p>
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      post.published
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-slate-500 hidden md:table-cell">
                  {new Date(post.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={() => handleEdit(post)} className="p-2 hover:bg-slate-100 rounded-lg">
                    <Edit2 className="w-4 h-4 text-slate-500" />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="p-2 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}