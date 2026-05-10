import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import { AdminLayout } from "./components/admin/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminBooks from "./pages/admin/AdminBooks";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminVideos from "./pages/admin/AdminVideos";
import AdminGallery from "./pages/admin/AdminGallery";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return <AdminLayout>{children}</AdminLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/donate" element={<Layout><Donate /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/posts" element={<ProtectedRoute><AdminPosts /></ProtectedRoute>} />
          <Route path="/admin/events" element={<ProtectedRoute><AdminEvents /></ProtectedRoute>} />
          <Route path="/admin/books" element={<ProtectedRoute><AdminBooks /></ProtectedRoute>} />
          <Route path="/admin/courses" element={<ProtectedRoute><AdminCourses /></ProtectedRoute>} />
          <Route path="/admin/videos" element={<ProtectedRoute><AdminVideos /></ProtectedRoute>} />
          <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}