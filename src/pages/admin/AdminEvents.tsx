import { useState, useEffect } from "react";
import { eventsApi } from "../../lib/api";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await eventsApi.list();
      setEvents(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await eventsApi.update(editing.id, form);
      } else {
        await eventsApi.create(form);
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", date: "", location: "", description: "", image: "" });
      loadEvents();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEdit = (event: any) => {
    setEditing(event);
    setForm({
      title: event.title,
      date: event.date,
      location: event.location || "",
      description: event.description || "",
      image: event.image || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this event?")) return;
    try {
      await eventsApi.delete(id);
      loadEvents();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-500 text-sm">{events.length} events</p>
        <button
          onClick={() => {
            setEditing(null);
            setForm({ title: "", date: "", location: "", description: "", image: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-xl text-sm font-medium hover:bg-primary-700"
        >
          <Plus className="w-4 h-4" /> New Event
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-lg font-bold mb-4">{editing ? "Edit Event" : "New Event"}</h3>
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Date (ISO format)</label>
                <input
                  type="text"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  placeholder="2026-06-01T19:00:00Z"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
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
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Date</th>
              <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Location</th>
              <th className="text-right px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-slate-50">
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-900">{event.title}</p>
                </td>
                <td className="px-4 py-4 text-sm text-slate-500 hidden md:table-cell">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-4 text-sm text-slate-500 hidden md:table-cell">
                  {event.location}
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={() => handleEdit(event)} className="p-2 hover:bg-slate-100 rounded-lg">
                    <Edit2 className="w-4 h-4 text-slate-500" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="p-2 hover:bg-red-50 rounded-lg">
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