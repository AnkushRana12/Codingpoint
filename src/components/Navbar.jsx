import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Info,
  Briefcase,
  FileText,
  Phone,
} from "lucide-react";

import logo from "./logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "") || "home";

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: <Home size={18} />,
    },
    {
      id: "courses",
      label: "Courses",
      path: "/courses",
      icon: <BookOpen size={18} />,
    },
    {
      id: "about",
      label: "About Us",
      path: "/about",
      icon: <Info size={18} />,
    },
    {
      id: "placements",
      label: "Placements",
      path: "/placements",
      icon: <Briefcase size={18} />,
    },
    {
      id: "blog",
      label: "Blog",
      path: "/blog",
      icon: <FileText size={18} />,
    },
    {
      id: "contact",
      label: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
    },
  ];

  const isActive = (id) => {
    if (id === "home") {
      return currentPage === "home" || location.pathname === "/";
    }
    return currentPage === id;
  };

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#030311]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center border"
              style={{
                borderColor: "#7c3aed",
                boxShadow: "0 0 20px rgba(124,58,237,0.45)",
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xl md:text-2xl font-extrabold text-white">
              Coding<span className="text-violet-500">Point</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigate(link.path)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive(link.id)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}

                {isActive(link.id) && (
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => navigate("/login")}
            className="hidden lg:block text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
              boxShadow: "0 0 22px rgba(124,58,237,0.45)",
            }}
          >
            Enroll Now →
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-[290px] bg-[#07071a] z-50 border-l border-violet-500/20 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full overflow-hidden border"
              style={{
                borderColor: "#7c3aed",
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-lg font-bold text-white">
              Coding<span className="text-violet-500">Point</span>
            </div>
          </div>

          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-2 px-4 py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.path)}
              className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                isActive(link.id)
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </button>
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            onClick={() => handleNav("/login")}
            className="w-full py-4 rounded-xl text-white font-bold transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
              boxShadow: "0 0 22px rgba(124,58,237,0.35)",
            }}
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </>
  );
}
