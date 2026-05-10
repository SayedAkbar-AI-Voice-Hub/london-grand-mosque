import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  BookOpen,
  GraduationCap,
  Video,
  Image,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Posts", href: "/admin/posts", icon: FileText },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Books", href: "/admin/books", icon: BookOpen },
  { name: "Courses", href: "/admin/courses", icon: GraduationCap },
  { name: "Videos", href: "/admin/videos", icon: Video },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-primary-950 text-white transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-primary-800">
            <h2 className="text-lg font-bold uppercase tracking-wider">Admin Panel</h2>
            <p className="text-primary-300 text-sm mt-1">{user?.username}</p>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-700 text-white"
                      : "text-primary-200 hover:bg-primary-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-primary-800">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-primary-200 hover:bg-red-600 hover:text-white transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">
            {NAV_ITEMS.find((i) => i.href === location.pathname)?.name || "Admin"}
          </h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}