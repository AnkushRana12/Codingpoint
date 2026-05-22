import { useNavigate } from "react-router-dom";
import Marquee from "../components/Marquee";
import CtaBanner from "../components/CtaBanner";
import { BtnPrimary, BtnOutline } from "../components/Buttons";
import { popularCourses, reviews, reviewStats } from "../utils/data";

function ReviewCard({ r }) {
  const highlighted = r.text.replace(r.hl, `|||${r.hl}|||`).split("|||");

  return (
    <div
      className="rounded-[22px] p-[22px] transition-all duration-200"
      style={{
        background: "rgba(7,11,22,0.9)",
        border: "1px solid rgba(124,58,237,0.25)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)")
      }
    >
      <div className="flex justify-between items-center mb-[14px]">
        <div
          className="text-[28px]"
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          "
        </div>

        <div
          className="text-[13px] tracking-widest"
          style={{ color: "#fbbf24" }}
        >
          ★★★★★ <span className="text-white text-xs">5.0</span>
        </div>
      </div>

      <div
        className="text-sm leading-relaxed mb-4"
        style={{ color: "#d1d5db" }}
      >
        {highlighted.map((part, i) =>
          part === r.hl ? (
            <span
              key={i}
              className="font-semibold"
              style={{ color: "#60a5fa" }}
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </div>

      <div
        className="flex items-center gap-3 pt-[14px]"
        style={{
          borderTop: "1px solid rgba(124,58,237,0.15)",
        }}
      >
        <div
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[15px] font-extrabold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
          }}
        >
          {r.name[0]}
        </div>

        <div className="flex-1">
          <div className="text-sm font-bold">{r.name}</div>

          <div className="text-xs" style={{ color: "#6b7280" }}>
            {r.role}
          </div>
        </div>

        <div
          className="text-xs font-semibold px-2 py-1 rounded-md"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#22d3ee",
          }}
        >
          @ {r.company}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center px-5 sm:px-8 md:px-12 lg:px-[60px] pt-[40px] pb-[40px]">
        {/* LEFT */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-6"
            style={{
              border: "1px solid #7c3aed",
              color: "#d1d5db",
              background: "#0a0f1d",
            }}
          >
            ✦ Shape Today, Code Tomorrow
          </div>

          <h1 className="font-black leading-[1.1] mb-5 text-[38px] sm:text-[48px] lg:text-[58px]">
            Learn Today.
            <br />
            Build Tomorrow.
            <br />
            Grow With{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CodingPoint
            </span>
          </h1>

          <p
            className="text-[15px] sm:text-[16px] leading-[1.8] mb-[30px] max-w-full lg:max-w-[480px]"
            style={{ color: "#9ca3af" }}
          >
            Join India's trusted coding institute and master in-demand skills
            with expert guidance, real-world projects, and placement support.
          </p>

          <div className="flex flex-wrap gap-[14px]">
            <BtnPrimary onClick={() => navigate("/courses")}>
              Explore Courses →
            </BtnPrimary>

            <BtnOutline>📅 Book Free Demo</BtnOutline>
          </div>

          {/* STATS */}
          <div
            className="rounded-[20px] p-5 sm:p-6 mt-6 grid grid-cols-2 md:grid-cols-4 gap-[20px]"
            style={{
              background: "rgba(7,11,22,0.9)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {[
              {
                icon: "👥",
                val: "10K+",
                lbl: "Students",
                bg: "rgba(37,99,235,0.2)",
              },
              {
                icon: "💼",
                val: "95%",
                lbl: "Placement Rate",
                bg: "rgba(124,58,237,0.2)",
              },
              {
                icon: "🛡️",
                val: "Real",
                lbl: "World Projects",
                bg: "rgba(37,99,235,0.2)",
              },
              {
                icon: "⭐",
                val: "4.9",
                lbl: "Rating",
                bg: "rgba(124,58,237,0.2)",
              },
            ].map((s) => (
              <div key={s.lbl} className="flex items-center gap-[14px]">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </div>

                <div>
                  <div className="text-[20px] sm:text-[22px] font-extrabold leading-none">
                    {s.val}
                  </div>

                  <div
                    className="text-xs mt-[2px]"
                    style={{ color: "#6b7280" }}
                  >
                    {s.lbl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center mt-5 lg:mt-0">
          <div
            className="w-full max-w-[420px] rounded-[28px] overflow-hidden"
            style={{
              background: "rgba(9,13,25,0.9)",
              border: "1.5px solid rgba(124,58,237,0.35)",
              boxShadow: "0 0 70px rgba(124,58,237,0.25)",
            }}
          >
            <div
              className="flex items-center gap-[6px] px-[18px] py-[14px]"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#ef4444" }}
              ></div>

              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#f59e0b" }}
              ></div>

              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#22c55e" }}
              ></div>

              <span className="text-xs ml-2" style={{ color: "#4b5563" }}>
                main.cpp
              </span>
            </div>

            <div
              className="p-4 sm:p-5 text-[11px] sm:text-[13px] leading-[1.8] overflow-x-auto"
              style={{
                fontFamily: "'Courier New', monospace",
              }}
            >
              <span style={{ color: "#f472b6" }}>#include</span>{" "}
              <span style={{ color: "#facc15" }}>&lt;iostream&gt;</span>
              <br />
              <span style={{ color: "#f472b6" }}>using namespace</span>{" "}
              <span style={{ color: "#22d3ee" }}>std</span>;
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <Marquee />

      {/* COURSES */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px]">
        <div className="text-center text-[32px] sm:text-[42px] font-black mb-2">
          Popular{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            this week
          </span>
        </div>

        <div
          className="text-center text-[15px] sm:text-[16px] mb-12"
          style={{ color: "#6b7280" }}
        >
          Top coding courses loved by learners
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {popularCourses.map((c) => (
            <div
              key={c.title}
              className="rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid rgba(124,58,237,0.25)",
                background: "#070b16",
              }}
              onClick={() => navigate("/courses")}
            >
              <div
                className="h-[220px] flex items-center justify-center font-black"
                style={{
                  background: c.gradient,
                  fontSize: "55px",
                }}
              >
                {c.icon}
              </div>

              <div className="p-[18px]">
                <div className="text-[16px] font-extrabold mb-1">{c.title}</div>

                <div
                  className="text-[13px] mb-[10px]"
                  style={{ color: "#6b7280" }}
                >
                  {c.subtitle}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] px-[10px] py-[3px] rounded-[50px]"
                    style={{
                      border: "1px solid rgba(124,58,237,0.5)",
                      color: "#c084fc",
                    }}
                  >
                    {c.level}
                  </span>

                  <span className="text-[13px]" style={{ color: "#22d3ee" }}>
                    👥 {c.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px]"
        style={{ background: "#06090f" }}
      >
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-4"
            style={{
              border: "1px solid #7c3aed",
              color: "#d1d5db",
              background: "#0a0f1d",
            }}
          >
            ⭐ STUDENT REVIEWS
          </div>

          <div className="text-[32px] sm:text-[42px] font-black mb-2">
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Students Say
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px]">
        <CtaBanner
          icon="🏆"
          title="Your Dream Job is Closer Than You Think!"
          sub="Join CodingPoint and take the first step towards your success."
        >
          <BtnPrimary onClick={() => navigate("/login")}>
            Enroll Now →
          </BtnPrimary>
        </CtaBanner>
      </section> */}
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
    </div>
  );
}
