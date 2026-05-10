import { useState, useEffect } from "react";
import { booksApi } from "../../lib/api";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminBooks() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    cover_image: "",
    file_url: "",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await booksApi.list();
      setBooks(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await booksApi.update(editing.id, form);
      } else {
        await booksApi.create(form);
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", author: "", description: "", cover_image: "", file_url: "" });
      loadBooks();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEdit = (book: any) => {
    setEditing(book);
    setForm({
      title: book.title,
      author: book.author || "",
      description: book.description || "",
      cover_image: book.cover_image || "",
      file_url: book.file_url || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this book?")) return;
    try {
      await booksApi.delete(id);
      loadBooks();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-500 text-sm">{books.length} books</p>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ title: "", author: "", description: "", cover_image: "", file_url: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
        >
          <Plus className="w-4 h-4" /> New Book
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-lg font-bold mb-4">{editing ? "Edit Book" : "New Book"}</h3>
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label>
                <input
                  type="text"
                  value={form.cover_image}
                  onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">File URL (PDF link)</label>
                <input
                  type="text"
                  value={form.file_url}
                  onChange={(e) => setForm({ ...form, file_url: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="px-6 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700">Save</button>
                <button onClick={() => { setShowForm(false); setEditing(null); }} className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50">Cancel</button>
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
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Author</th>
              <th className="text-right px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 font-medium text-slate-900">{book.title}</td>
                <td className="px-4 py-4 text-sm text-slate-500 hidden md:table-cell">{book.author}</td>
                <td className="px-4 py-4 text-right">
                  <button onClick={() => handleEdit(book)} className="p-2 hover:bg-slate-100 rounded-lg"><Edit2 className="w-4 h-4 text-slate-500" /></button>
                  <button onClick={() => handleDelete(book.id)} className="p-2 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4 text-red-500" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}