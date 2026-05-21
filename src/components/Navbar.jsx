import { useNavigate, useLocation } from "react-router-dom";
import logo from "./logo.png";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "") || "home";

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "courses", label: "Courses", path: "/courses" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "placements", label: "Placements", path: "/placements" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (id) => {
    if (id === "home")
      return currentPage === "home" || location.pathname === "/";
    return currentPage === id;
  };

  return (
    <nav
      className="flex items-center justify-between px-[60px] py-[18px] sticky top-0 z-[100] border-b"
      style={{
        background: "rgba(3,3,17,0.92)",
        backdropFilter: "blur(12px)",
        borderBottomColor: "rgba(139,92,246,0.15)",
      }}
    >
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div
          className=" w-[110px] h[90px] rounded-full flex items-center justify-center text-xl"
          style={{
            border: "1.5px solid #7c3aed",
            boxShadow: "0 0 18px rgba(124,58,237,0.5)",
          }}
        >
          <img className="w-[650px] h-[80px]" src={logo} />
        </div>

        <div className="text-[22px] font-extrabold text-white">
          Coding<span style={{ color: "#7c3aed" }}>Point</span>
        </div>
      </div>

      <div className="flex gap-9">
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={() => navigate(link.path)}
            className="text-sm font-medium cursor-pointer transition-colors duration-200 pb-[2px] no-underline"
            style={{
              color: isActive(link.id) ? "#22d3ee" : "#d1d5db",
              borderBottom: isActive(link.id)
                ? "2px solid #22d3ee"
                : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (!isActive(link.id)) e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              if (!isActive(link.id)) e.target.style.color = "#d1d5db";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={() => navigate("/login")}
        className="text-white border-none px-[22px] py-[10px] rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-200"
        style={{
          background: "linear-gradient(135deg,#2563eb,#7c3aed)",
          boxShadow: "0 0 20px rgba(124,58,237,0.4)",
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = "0.9";
          e.target.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = "1";
          e.target.style.transform = "scale(1)";
        }}
      >
        Enroll Now →
      </button>
    </nav>
  );
}
