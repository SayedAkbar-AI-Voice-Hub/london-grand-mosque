import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Mail, Phone, Heart, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events & Classes", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-white border-b border-primary-100 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-2 text-primary-800" />
              82-84 Station Road, Ellesmere Port CH65 4DB
            </span>
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-2 text-primary-800" />
              07968 378 481
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Mail className="w-3 h-3 mr-2 text-primary-800" />
              masjidellesmereport@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-primary-100 sticky top-0 z-50 shrink-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white">
                <Heart className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-primary-950 uppercase hidden sm:block">
                Ellesmere Port Mosque
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600 uppercase tracking-widest">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "hover:text-primary-700 transition-colors",
                    location.pathname === link.href
                      ? "text-primary-800 font-bold"
                      : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/donate"
                className="px-6 py-2 bg-primary-800 text-white text-xs font-bold rounded-full uppercase tracking-widest hover:bg-primary-700 ml-4"
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
                  className="block px-3 py-2 mt-4 rounded-md text-base font-bold text-center text-white bg-gold-600"
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
      <footer className="bg-white border-t border-slate-100 py-12 text-slate-600 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1 border-r border-slate-200 pr-8">
              <div className="text-xl font-bold tracking-tight text-primary-950 uppercase mb-4">Ellesmere Port Mosque</div>
              <p className="text-sm text-slate-500 italic">
                A beacon of light, learning, and community in the heart of Ellesmere Port. Welcoming all to the path of peace.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-primary-700 transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-primary-700 transition">Our Services</Link></li>
                <li><Link to="/events" className="hover:text-primary-700 transition">Events & Calendar</Link></li>
                <li><Link to="/contact" className="hover:text-primary-700 transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-4">Prayers & Learning</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/events" className="hover:text-primary-700 transition">Today's Times</Link></li>
                <li><Link to="/events" className="hover:text-primary-700 transition">Weekly Halaqah</Link></li>
                <li><Link to="/about" className="hover:text-primary-700 transition">Ask the Imam</Link></li>
                <li><Link to="/services" className="hover:text-primary-700 transition">Madrasah Registration</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-4">Visit Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-primary-800 shrink-0 mt-0.5" />
                  <span>82-84 Station Road,<br/>Ellesmere Port CH65 4DB, UK</span>
                </li>
                <li className="flex items-center mt-2">
                  <Phone className="w-4 h-4 mr-3 text-primary-800 shrink-0" />
                  <span>07968 378 481</span>
                </li>
                <li className="flex items-center mt-2">
                  <Mail className="w-4 h-4 mr-3 text-primary-800 shrink-0" />
                  <span>masjidellesmereport@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
              &copy; {new Date().getFullYear()} Ellesmere Port Mosque • Registered Charity No. 1234567
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] text-primary-800 font-bold uppercase tracking-widest cursor-pointer hover:text-primary-600">Instagram</span>
              <span className="text-[10px] text-primary-800 font-bold uppercase tracking-widest cursor-pointer hover:text-primary-600">Youtube</span>
              <span className="text-[10px] text-primary-800 font-bold uppercase tracking-widest cursor-pointer hover:text-primary-600">Twitter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
