import { useNavigate } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";
import { BtnPrimary, BtnOutline } from "../components/Buttons";

const TEAM = [
  {
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    exp: "12+ Years Experience",
    spec: "Full Stack Development",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Lead Instructor",
    exp: "8+ Years Experience",
    spec: "Python & Data Science",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Amit Verma",
    role: "Placement Head",
    exp: "10+ Years Experience",
    spec: "Career Counseling",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Patel",
    role: "Web Dev Mentor",
    exp: "6+ Years Experience",
    spec: "React & Node.js",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#030311] text-white overflow-hidden">
      {/* HERO */}
      <div className="text-center px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px] sm:py-[80px]">
        <div
          className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-4"
          style={{
            border: "1px solid #7c3aed",
            color: "#d1d5db",
            background: "#0a0f1d",
          }}
        >
          ✦ About Us
        </div>

        <h1 className="font-black mb-[14px] text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.2]">
          India's Most Trusted
          <br />
          <span style={{ color: "#60a5fa" }}>Coding Institute</span>
        </h1>

        <p
          className="text-[14px] sm:text-[15px] max-w-[700px] mx-auto leading-[1.8]"
          style={{ color: "#9ca3af" }}
        >
          We believe every student deserves access to quality tech education and
          real career opportunities. CodingPoint was built to make that happen.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] max-w-[900px] mx-auto mt-[36px]">
          {[
            { emoji: "🏢", val: "2018", lbl: "Founded" },
            { emoji: "👥", val: "10K+", lbl: "Students" },
            { emoji: "🤝", val: "500+", lbl: "Partners" },
            { emoji: "🏆", val: "95%", lbl: "Placed" },
          ].map((s) => (
            <div
              key={s.lbl}
              className="rounded-[16px] p-5 text-center"
              style={{
                background: "#111827",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="text-[22px]">{s.emoji}</div>
              <div className="text-[24px] sm:text-[28px] font-black">
                {s.val}
              </div>
              <div className="text-xs mt-1" style={{ color: "#6b7280" }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION / VISION / VALUES */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[18px]">
          {[
            {
              icon: "🎯",
              bg: "rgba(37,99,235,0.2)",
              title: "Our Mission",
              text: "To provide world-class coding education to every student in India, regardless of their background, and help them secure high-paying tech jobs.",
            },
            {
              icon: "🔭",
              bg: "rgba(124,58,237,0.2)",
              title: "Our Vision",
              text: "To become India's #1 coding institute by 2027, training 1 lakh+ students and creating 50,000+ tech jobs.",
            },
            {
              icon: "💎",
              bg: "rgba(6,182,212,0.2)",
              title: "Our Values",
              text: "Excellence, integrity, student-first approach, and a commitment to continuous learning and innovation in tech education.",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-[20px] p-[26px]"
              style={{
                background: "#070b16",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center text-[22px] mb-4"
                style={{ background: m.bg }}
              >
                {m.icon}
              </div>
              <div className="text-lg font-extrabold mb-[10px]">{m.title}</div>
              <div
                className="text-[13px] leading-[1.8]"
                style={{ color: "#9ca3af" }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start mt-[50px]">
          <div>
            <h2 className="text-[30px] sm:text-[32px] font-black mb-3">
              Our <span style={{ color: "#60a5fa" }}>Story</span>
            </h2>

            {[
              "CodingPoint was founded in 2018 with a single mission — to bridge the gap between education and employment in the tech industry.",
              "Starting with a small classroom in Bajnath, Himachal Pradesh, we've grown into a pan-India coding institute with 10,000+ students trained and 95% placement success rate.",
              "Today, CodingPoint is trusted by students across India for quality education, real-world projects, and guaranteed placement support.",
            ].map((p, i) => (
              <p
                key={i}
                className="text-sm leading-[1.9] mb-[14px]"
                style={{ color: "#9ca3af" }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-[14px]">
            {[
              { emoji: "📚", val: "20+", lbl: "Courses Offered" },
              { emoji: "👥", val: "50+", lbl: "Expert Mentors" },
              { emoji: "💼", val: "500+", lbl: "Hiring Partners" },
              { emoji: "🏆", val: "15+", lbl: "Awards Won" },
            ].map((s) => (
              <div
                key={s.lbl}
                className="rounded-[16px] p-5 text-center"
                style={{
                  background: "#070b16",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <div className="text-[26px]">{s.emoji}</div>
                <div className="text-[26px] sm:text-[32px] font-black">
                  {s.val}
                </div>
                <div className="text-xs mt-1" style={{ color: "#6b7280" }}>
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] pb-[60px]">
        <h2 className="text-[30px] sm:text-[32px] font-black mb-2">
          Our <span style={{ color: "#60a5fa" }}>Journey</span>
        </h2>

        <p className="text-sm mb-9" style={{ color: "#6b7280" }}>
          From a small classroom to India's most trusted coding institute
        </p>

        <div className="relative border-l border-[rgba(124,58,237,0.25)] pl-6 ml-2">
          {[
            {
              year: "2018",
              title: "CodingPoint Founded",
              desc: "Started with a small batch of 20 students in Bajnath, HP.",
            },
            {
              year: "2019",
              title: "First 100 Placements",
              desc: "Achieved 100+ student placements in top IT companies.",
            },
            {
              year: "2021",
              title: "Online Platform Launch",
              desc: "Expanded to online learning, reaching students across India.",
            },
            {
              year: "2023",
              title: "5000+ Students",
              desc: "Crossed 5000 students trained milestone with 95% placement rate.",
            },
            {
              year: "2025",
              title: "10K+ Community",
              desc: "Now India's trusted coding institute with 500+ hiring partners.",
            },
          ].map((t) => (
            <div key={t.year} className="relative mb-8">
              <div
                className="absolute left-[-34px] top-[6px] w-[14px] h-[14px] rounded-full"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                  border: "2px solid #030311",
                  boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                }}
              />
              <div
                className="text-[13px] font-bold mb-[3px]"
                style={{ color: "#60a5fa" }}
              >
                {t.year}
              </div>
              <div className="text-[15px] font-extrabold mb-1">{t.title}</div>
              <div
                className="text-[13px] leading-[1.8]"
                style={{ color: "#6b7280" }}
              >
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM — real avatar images */}
      <section
        className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px]"
        style={{ background: "#06090f" }}
      >
        <h2 className="text-[30px] sm:text-[32px] font-black text-center mb-2">
          Meet Our <span style={{ color: "#60a5fa" }}>Team</span>
        </h2>

        <p className="text-sm text-center mb-9" style={{ color: "#6b7280" }}>
          The experts behind CodingPoint's success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="rounded-[20px] p-6 text-center transition-all duration-200"
              style={{
                background: "#070b16",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Real avatar photo */}
              <div className="relative w-16 h-16 mx-auto mb-3">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-16 h-16 rounded-full object-cover"
                  style={{
                    border: "2.5px solid rgba(124,58,237,0.6)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.3)",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback initial */}
                <div
                  className="w-16 h-16 rounded-full items-center justify-center text-[26px]"
                  style={{
                    background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                    display: "none",
                  }}
                >
                  {m.name[0]}
                </div>
              </div>

              <div className="text-xs mb-2" style={{ color: "#fbbf24" }}>
                ★★★★★
              </div>

              <div className="text-[15px] font-extrabold mb-[3px]">
                {m.name}
              </div>

              <div
                className="text-[13px] font-semibold mb-[3px]"
                style={{ color: "#60a5fa" }}
              >
                {m.role}
              </div>

              <div className="text-xs mb-[10px]" style={{ color: "#6b7280" }}>
                {m.exp}
              </div>

              <span
                className="text-[11px] px-3 py-[5px] rounded-lg inline-block"
                style={{
                  background: "rgba(37,99,235,0.12)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  color: "#93c5fd",
                }}
              >
                {m.spec}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-[60px] py-[60px]">
        <CtaBanner
          icon="🚀"
          title="Ready to Start Your Coding Journey?"
          sub="Join 10,000+ students who have already transformed their careers with CodingPoint."
        >
          <div className="flex flex-col sm:flex-row gap-[14px] w-full sm:w-auto">
            <BtnPrimary onClick={() => navigate("/courses")}>
              Explore Courses →
            </BtnPrimary>

            <BtnOutline onClick={() => navigate("/contact")}>
              Contact Us
            </BtnOutline>
          </div>
        </CtaBanner>
      </section>
    </div>
  );
}
