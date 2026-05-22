import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="px-4 sm:px-6 md:px-10 lg:px-[60px] pt-[50px] pb-[28px]"
      style={{
        background: "#050814",
        borderTop: "1px solid rgba(124,58,246,0.15)",
      }}
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14 mb-[45px]">
        {/* BRAND */}
        <div className="sm:col-span-2 xl:col-span-1">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
              style={{
                border: "1.5px solid #7c3aed",
                boxShadow: "0 0 18px rgba(124,58,237,0.45)",
              }}
            >
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="CodingPoint Logo"
              />
            </div>

            <div className="text-[22px] sm:text-[24px] font-extrabold">
              Coding
              <span style={{ color: "#7c3aed" }}>Point</span>
            </div>
          </div>

          <p
            className="text-[13px] sm:text-[14px] leading-[1.9] mt-5 max-w-[320px]"
            style={{ color: "#6b7280" }}
          >
            India's trusted coding institute helping students master in-demand
            skills and land their dream tech jobs.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {["fb", "ig", "in", "tw", "yt"].map((s) => (
              <div
                key={s}
                className="w-10 h-10 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 rounded-[12px]"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(107,114,128,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7c3aed";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(107,114,128,0.25)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[17px] font-extrabold mb-5">Quick Links</h4>

          <ul className="list-none space-y-[13px]">
            {[
              ["/", "Home"],
              ["/courses", "Courses"],
              ["/about", "About Us"],
              ["/placements", "Placements"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={label}>
                <button
                  onClick={() => navigate(path)}
                  className="cursor-pointer transition-all duration-200 text-[13px] sm:text-[14px] bg-transparent border-none p-0 text-left"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#60a5fa";
                    e.currentTarget.style.transform = "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6b7280";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  → {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h4 className="text-[17px] font-extrabold mb-5">Top Courses</h4>

          <ul className="list-none space-y-[13px]">
            {[
              "Python Programming",
              "React.js Development",
              "JavaScript Essentials",
              "Node.js Backend",
              "C++ Programming",
              "Data Science",
            ].map((course) => (
              <li key={course}>
                <button
                  className="cursor-pointer transition-all duration-200 text-[13px] sm:text-[14px] bg-transparent border-none p-0 text-left"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#60a5fa";
                    e.currentTarget.style.transform = "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6b7280";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  → {course}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[17px] font-extrabold mb-5">Contact Us</h4>

          <ul className="list-none space-y-[15px]">
            {[
              "📍 Bajnath, HP 176125",
              "✉️ support@codingpoint.in",
              "📞 +91 98765 43210",
              "🕐 Mon–Sat: 9AM–6PM",
            ].map((item) => (
              <li
                key={item}
                className="text-[13px] sm:text-[14px] leading-[1.7]"
                style={{ color: "#6b7280" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="pt-5 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left"
        style={{
          borderTop: "1px solid rgba(124,58,246,0.15)",
        }}
      >
        <p className="text-[12px] sm:text-[13px]" style={{ color: "#4b5563" }}>
          © 2025 CodingPoint. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (link) => (
              <button
                key={link}
                className="cursor-pointer transition-colors duration-200 bg-transparent border-none text-[12px] sm:text-[13px]"
                style={{ color: "#4b5563" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#4b5563";
                }}
              >
                {link}
              </button>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
