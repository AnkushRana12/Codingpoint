import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        background: "#050814",
        borderTop: "1px solid rgba(124,58,246,0.15)",
        padding: "50px 60px 28px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "40px",
          marginBottom: "36px",
        }}
      >
        {/* Brand */}
        <div>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className="w-[80px] h[90px] rounded-full flex items-center justify-center text-xl"
              style={{
                border: "1.5px solid #7c3aed",
                boxShadow: "0 0 18px rgba(124,58,237,0.5)",
              }}
            >
              {" "}
              <img className="w-[500px] h-[50px]" src={logo} />
            </div>
            <div className="text-[22px] font-extrabold">
              Coding<span style={{ color: "#7c3aed" }}>Point</span>
            </div>
          </div>
          <p
            style={{
              color: "#6b7280",
              fontSize: "13px",
              lineHeight: 1.7,
              marginTop: "12px",
              maxWidth: "240px",
            }}
          >
            India's trusted coding institute helping students master in-demand
            skills and land their dream jobs.
          </p>
          <div className="flex gap-2 mt-4">
            {["fb", "ig", "in", "tw", "yt"].map((s) => (
              <div
                key={s}
                className="w-8 h-8 flex items-center justify-center text-sm cursor-pointer transition-all duration-200"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(107,114,128,0.25)",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#7c3aed")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(107,114,128,0.25)")
                }
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[15px] font-extrabold mb-4">Quick Links</h4>
          <ul className="list-none">
            {[
              ["/", "Home"],
              ["/courses", "Courses"],
              ["/about", "About Us"],
              ["/placements", "Placements"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={label} className="mb-[10px]">
                <a
                  onClick={() => navigate(path)}
                  className="cursor-pointer transition-colors duration-200 no-underline text-[13px]"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                >
                  → {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Courses */}
        <div>
          <h4 className="text-[15px] font-extrabold mb-4">Top Courses</h4>
          <ul className="list-none">
            {[
              "Python Programming",
              "React.js Development",
              "JavaScript Essentials",
              "Node.js Backend",
              "C++ Programming",
              "Data Science",
            ].map((c) => (
              <li key={c} className="mb-[10px]">
                <a
                  className="cursor-pointer transition-colors duration-200 no-underline text-[13px]"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                >
                  → {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[15px] font-extrabold mb-4">Contact Us</h4>
          <ul className="list-none">
            {[
              "📍 Bajnath, HP 176125",
              "✉️ support@codingpoint.in",
              "📞 +91 98765 43210",
              "🕐 Mon–Sat: 9AM–6PM",
            ].map((item) => (
              <li key={item} className="mb-[10px]">
                <a
                  className="cursor-pointer text-[13px]"
                  style={{ color: "#6b7280" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex justify-between items-center pt-5"
        style={{ borderTop: "1px solid rgba(124,58,246,0.15)" }}
      >
        <p style={{ color: "#4b5563", fontSize: "13px" }}>
          © 2025 CodingPoint. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (link) => (
              <a
                key={link}
                className="cursor-pointer transition-colors duration-200 no-underline text-[13px]"
                style={{ color: "#4b5563" }}
                onMouseEnter={(e) => (e.target.style.color = "#9ca3af")}
                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
