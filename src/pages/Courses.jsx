import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";
import { BtnPrimary, BtnOutline } from "../components/Buttons";
import { courses } from "../utils/data";

const CATEGORIES = [
  "All Courses",
  "Programming",
  "Web Development",
  "Data Science",
  "Tools & Others",
];

export default function Courses() {
  const navigate = useNavigate();

  const [activeCat, setActiveCat] = useState("All Courses");
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) => {
    const matchCat = activeCat === "All Courses" || c.cat === activeCat;

    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());

    return matchCat && matchSearch;
  });

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[40px] sm:py-[60px]">
      {/* HEADER */}
      <div
        className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-5"
        style={{
          border: "1px solid #7c3aed",
          color: "#d1d5db",
          background: "#0a0f1d",
        }}
      >
        ✦ Courses
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center mb-[50px]">
        {/* LEFT */}
        <div>
          <h1 className="font-black leading-[1.15] mb-[14px] text-[34px] sm:text-[42px] lg:text-[46px]">
            Upgrade Your Skills
            <br />
            With <span style={{ color: "#60a5fa" }}>Industry-Ready</span>{" "}
            Courses
          </h1>

          <p
            className="text-[14px] sm:text-[15px] leading-[1.8]"
            style={{ color: "#9ca3af" }}
          >
            Learn from experts, build real-world projects, and get placement
            support.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="rounded-[22px] p-[18px] sm:p-[22px]"
          style={{
            background: "#070b16",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <div className="grid grid-cols-2 gap-[10px] mb-[12px]">
            {["🐍 Python", "JS JavaScript", "⚛️ React", "C++ C++"].map((t) => (
              <div
                key={t}
                className="rounded-xl p-3 text-[16px] sm:text-[22px] text-center"
                style={{ background: "#111827" }}
              >
                {t}
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-3 text-center text-[12px] sm:text-[13px]"
            style={{
              background: "#111827",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "#60a5fa",
              fontFamily: "monospace",
            }}
          >
            &lt;/&gt; Keep Coding, Keep Growing!
          </div>
        </div>
      </div>

      {/* FILTER ROW */}
      <div className="flex flex-col lg:flex-row gap-[14px] lg:items-center mb-9">
        {/* SEARCH */}
        <div
          className="flex items-center gap-[10px] rounded-xl px-4 py-[10px] w-full lg:max-w-[320px]"
          style={{
            background: "#0a0f1d",
            border: "1px solid rgba(107,114,128,0.4)",
          }}
        >
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search for courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-white text-sm w-full"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-[10px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className="px-[16px] py-[9px] rounded-xl text-[12px] sm:text-[13px] font-semibold cursor-pointer transition-all duration-200"
              style={{
                background:
                  activeCat === cat
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "#0a0f1d",

                border:
                  activeCat === cat
                    ? "1px solid transparent"
                    : "1px solid rgba(107,114,128,0.35)",

                color: activeCat === cat ? "#fff" : "#d1d5db",

                fontFamily: "Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                if (activeCat !== cat) {
                  e.currentTarget.style.borderColor = "#7c3aed";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCat !== cat) {
                  e.currentTarget.style.borderColor = "rgba(107,114,128,0.35)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[18px]">
        {filtered.length === 0 ? (
          <div
            className="col-span-full text-center py-[60px]"
            style={{ color: "#6b7280" }}
          >
            <div className="text-[48px] mb-[12px]">🔍</div>

            <div className="text-[18px]">No courses found</div>
          </div>
        ) : (
          filtered.map((c) => (
            <div
              key={c.title}
              className="rounded-[20px] p-[22px] cursor-pointer transition-all duration-200"
              style={{
                background: "#070b16",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";

                e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";

                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(124,58,237,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";

                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* TOP */}
              <div className="flex justify-between items-start mb-4 gap-2">
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl font-extrabold flex-shrink-0"
                  style={{
                    background: c.iconBg + "22",

                    border: `1px solid ${c.iconBg}44`,

                    color: c.iconColor || "#fff",
                  }}
                >
                  {c.icon}
                </div>

                <span
                  className="text-[10px] sm:text-[11px] px-3 py-1 rounded-lg font-bold text-white"
                  style={{
                    background: c.badgeColor,
                  }}
                >
                  {c.badge}
                </span>

                <span
                  className="text-lg cursor-pointer transition-colors duration-200"
                  style={{ color: "#4b5563" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ef4444")}
                  onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                >
                  ♡
                </span>
              </div>

              {/* CONTENT */}
              <div className="text-[18px] font-extrabold mb-1">{c.title}</div>

              <div
                className="text-[13px] font-semibold mb-2"
                style={{ color: "#60a5fa" }}
              >
                {c.subtitle}
              </div>

              <div
                className="text-[13px] leading-[1.7] mb-[14px]"
                style={{ color: "#6b7280" }}
              >
                {c.desc}
              </div>

              <div
                className="flex flex-wrap gap-4 text-xs mb-[14px]"
                style={{ color: "#6b7280" }}
              >
                <span>⏱ {c.duration}</span>
                <span>📶 {c.level}</span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/contact")}
                className="w-full text-white border-none py-[10px] rounded-xl text-sm font-bold cursor-pointer flex justify-center items-center"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                }}
              >
                Explore Course →
              </button>
            </div>
          ))
        )}
      </div>

      {/* CTA */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-[60px] py-[50px] sm:py-[60px]">
        <div
          className="rounded-[28px] p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(124,58,237,0.18))",
            border: "1px solid rgba(124,58,237,0.25)",
            boxShadow: "0 0 40px rgba(124,58,237,0.12)",
          }}
        >
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <div className="text-5xl sm:text-6xl mb-4">🏆</div>

            <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-black leading-[1.2] mb-4">
              Your Dream Job is{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Closer Than You Think!
              </span>
            </h2>

            <p
              className="text-[15px] sm:text-[17px] leading-[1.8] max-w-[700px]"
              style={{ color: "#9ca3af" }}
            >
              Join CodingPoint and take the first step towards your success with
              industry-level skills, live projects, and placement support.
            </p>
          </div>

          {/* BUTTON */}
          <div className="w-full sm:w-auto">
            <BtnPrimary onClick={() => navigate("/login")}>
              Enroll Now →
            </BtnPrimary>
          </div>
        </div>
      </section>
      {/* <div className="mt-10 w-full">
        <CtaBanner
          icon="🎓"
          title="Not Sure Which Course is Right for You?"
          sub="Book a free 1:1 demo session with our experts and get personalized guidance."
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <BtnOutline className="w-full sm:w-auto">
                📅 Book Free Demo
              </BtnOutline>
            </div>

            <div className="w-full sm:w-auto">
              <BtnPrimary className="w-full sm:w-auto">
                Talk to Expert →
              </BtnPrimary>
            </div>
          </div>
        </CtaBanner>
      </div> */}
    </section>
  );
}
