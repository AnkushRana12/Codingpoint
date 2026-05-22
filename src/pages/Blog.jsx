import { useState } from "react";
import { blogPosts } from "../utils/data";

const CATS = ["All", "Programming", "Career", "Web Dev", "Data Science"];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-10 sm:py-14 lg:py-[60px]">
      {/* Header */}
      <div
        className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-4"
        style={{
          border: "1px solid #7c3aed",
          color: "#d1d5db",
          background: "#0a0f1d",
        }}
      >
        ✦ Blog & Resources
      </div>

      <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] leading-tight font-black text-center mb-2">
        Learn, Grow & <span style={{ color: "#60a5fa" }}>Stay Updated</span>
      </h1>

      <p
        className="text-center text-sm sm:text-[15px] mb-8 sm:mb-9 max-w-[700px] mx-auto"
        style={{ color: "#6b7280" }}
      >
        Tips, tutorials, and career advice from CodingPoint's expert mentors.
      </p>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[10px] flex-wrap items-center justify-center mb-9">
        {/* Search */}
        <div
          className="flex items-center gap-[10px] rounded-xl px-4 py-[10px] w-full sm:w-[340px]"
          style={{
            background: "#0a0f1d",
            border: "1px solid rgba(107,114,128,0.4)",
          }}
        >
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search articles..."
            className="bg-transparent border-none outline-none text-sm w-full"
            style={{
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-[10px] w-full lg:w-auto">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-[18px] py-[9px] rounded-xl text-[13px] font-semibold cursor-pointer transition-all duration-200"
              style={{
                background:
                  activeFilter === cat
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "#0a0f1d",
                border:
                  activeFilter === cat
                    ? "1px solid transparent"
                    : "1px solid rgba(107,114,128,0.35)",
                color: activeFilter === cat ? "#fff" : "#d1d5db",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[18px]">
        {blogPosts.map((p) => (
          <div
            key={p.title}
            className="rounded-[20px] overflow-hidden cursor-pointer transition-all duration-200"
            style={{
              background: "#070b16",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
              e.currentTarget.querySelector(".blog-title-text").style.color =
                "#60a5fa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
              e.currentTarget.querySelector(".blog-title-text").style.color =
                "#fff";
            }}
          >
            <div
              style={{
                height: "4px",
                background: p.color,
              }}
            ></div>

            <div className="p-5">
              <div
                className="inline-flex items-center gap-[6px] text-[11px] font-bold px-3 py-1 rounded-md mb-[14px]"
                style={{
                  background: p.color + "22",
                  color: p.color,
                }}
              >
                🏷 {p.cat}
              </div>

              <div className="blog-title-text text-[16px] font-extrabold leading-[1.4] mb-2 transition-colors duration-200">
                {p.title}
              </div>

              <div
                className="text-[13px] leading-[1.6] mb-4"
                style={{ color: "#6b7280" }}
              >
                {p.excerpt}
              </div>

              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center pt-[14px]"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-xs" style={{ color: "#4b5563" }}>
                  📅 {p.date} · {p.read}
                </span>

                <span
                  className="text-xs font-semibold"
                  style={{ color: "#60a5fa" }}
                >
                  Read More →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div
        className="text-center rounded-[24px] p-6 sm:p-8 lg:p-10 mt-12"
        style={{
          background: "linear-gradient(135deg,#0b1020,#13061d)",
          border: "1px solid rgba(124,58,237,0.3)",
        }}
      >
        <div className="text-[32px] sm:text-[36px] mb-3">📧</div>

        <h3 className="text-[24px] sm:text-[30px] font-black mb-2">
          Subscribe to Our Newsletter
        </h3>

        <p
          className="text-sm mb-6 max-w-[650px] mx-auto"
          style={{ color: "#9ca3af" }}
        >
          Get weekly coding tips, career advice, and exclusive resources
          delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-[10px] max-w-[500px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-[10px] px-4 py-3 text-sm outline-none text-white w-full"
            style={{
              background: "#111827",
              border: "1px solid rgba(107,114,128,0.3)",
              fontFamily: "Poppins, sans-serif",
            }}
          />

          <button
            className="text-white border-none px-5 py-3 rounded-xl text-sm font-bold cursor-pointer w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            }}
          >
            Subscribe →
          </button>
        </div>
      </div>
    </section>
  );
}
