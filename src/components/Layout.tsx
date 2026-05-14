import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Mail, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Prayer Times", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-primary-900 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary-100">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-2 text-amber-400" />
              82-84 Station Road, Ellesmere Port CH65 4DB
            </span>
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-2 text-amber-400" />
              07968 378 481
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Mail className="w-3 h-3 mr-2 text-amber-400" />
              masjidellesmereport@gmail.com
            </span>
            <span className="text-primary-300">Charity No. 1195799</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shrink-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo.png"
                alt="Ellesmere Port Masjid & Islamic Centre"
                className="h-14 w-auto shrink-0"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-5 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "hover:text-primary-700 transition-colors py-1",
                    location.pathname === link.href
                      ? "text-primary-800 border-b-2 border-primary-800"
                      : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donate"
                className="px-5 py-2 bg-amber-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-amber-400 ml-2 transition shadow-sm"
              >
                Donate Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-primary-700 hover:bg-primary-50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-b border-solid border-slate-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      location.pathname === link.href
                        ? "text-primary-700 bg-primary-50"
                        : "text-slate-700 hover:text-primary-700 hover:bg-slate-50"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 mt-4 rounded-md text-base font-bold text-center text-white bg-amber-500"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-950 text-slate-400 pt-12 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <div className="inline-block bg-white rounded-2xl px-3 py-2">
                  <img src="/logo.png" alt="Ellesmere Port Masjid & Islamic Centre" className="h-14 w-auto" />
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                A welcoming centre of faith, learning, and community service in the heart of Ellesmere Port.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link to="/events" className="hover:text-white transition">Prayer Timetable</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/events" className="hover:text-white transition">Jumu'ah Prayer</Link></li>
                <li><Link to="/events" className="hover:text-white transition">Weekly Classes</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Madrasah</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Nikah Services</Link></li>
                <li><Link to="/donate" className="hover:text-white transition">Donate</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">Visit Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-amber-400 shrink-0 mt-0.5" />
                  <span>82-84 Station Road,<br/>Ellesmere Port CH65 4DB</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-amber-400 shrink-0" />
                  <span>07968 378 481</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-amber-400 shrink-0" />
                  <span>masjidellesmereport@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <p className="uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Ellesmere Port Masjid & Islamic Centre &bull; Registered Charity No. 1195799
            </p>
            <div className="flex gap-6 uppercase tracking-widest font-bold">
              <span className="text-amber-400 cursor-pointer hover:text-amber-300">Facebook</span>
              <span className="text-amber-400 cursor-pointer hover:text-amber-300">Instagram</span>
              <span className="text-amber-400 cursor-pointer hover:text-amber-300">YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
