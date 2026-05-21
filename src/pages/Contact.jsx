import { BtnOutline, BtnPrimary } from "../components/Buttons";

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <div
        className="text-center"
        style={{
          padding: "60px",
          background: "linear-gradient(to bottom,#0d1530,#030311)",
          borderBottom: "1px solid rgba(124,58,237,0.15)",
        }}
      >
        <h1
          className="font-black mb-[10px]"
          style={{ fontSize: "52px", color: "#60a5fa" }}
        >
          #Let's_Connect
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "15px", marginBottom: "14px" }}>
          Have questions? Send us your inquiry and our team will help you.
        </p>
        <div className="flex items-center gap-[10px] justify-center">
          <div
            style={{
              height: "1px",
              width: "50px",
              background: "linear-gradient(to right,transparent,#2563eb)",
            }}
          ></div>
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#2563eb" }}
          ></div>
          <div
            style={{
              height: "1px",
              width: "50px",
              background: "linear-gradient(to left,transparent,#2563eb)",
            }}
          ></div>
        </div>
      </div>

      {/* Contact Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          padding: "60px",
        }}
      >
        {/* Info */}
        <div>
          <div
            className="text-xs font-bold mb-2"
            style={{ color: "#60a5fa", letterSpacing: "2px" }}
          >
            GET IN TOUCH
          </div>
          <h2 className="text-[28px] font-black mb-[10px]">
            Visit one of our locations or contact us today
          </h2>
          <div className="text-sm mb-[30px]" style={{ color: "#9ca3af" }}>
            We're here to answer your questions and help you achieve your coding
            goals.
          </div>

          {[
            {
              icon: "📍",
              label: "Head Office",
              val: "Near Pandit Sant Ram GOVT. College (HP)\nBajnath, Himachal Pradesh 176125",
            },
            { icon: "✉️", label: "Email Us", val: "support@codingpoint.in" },
            { icon: "📞", label: "Call Us", val: "+91 98765 43210" },
            {
              icon: "🕐",
              label: "Working Hours",
              val: "Mon - Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
            },
          ].map((c) => (
            <div key={c.label} className="flex gap-[14px] mb-5 items-start">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] flex-shrink-0"
                style={{
                  background: "rgba(37,99,235,0.2)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                {c.icon}
              </div>
              <div>
                <div className="text-[13px] font-bold mb-[2px]">{c.label}</div>
                <div
                  className="text-[13px] leading-[1.6] whitespace-pre-line"
                  style={{ color: "#9ca3af" }}
                >
                  {c.val}
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-[14px] mb-5 items-start">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] flex-shrink-0"
              style={{
                background: "rgba(37,99,235,0.2)",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              🔗
            </div>
            <div>
              <div className="text-[13px] font-bold mb-[2px]">Follow Us</div>
              <div className="flex gap-[10px] mt-[6px]">
                {["fb", "ig", "in", "tw", "yt"].map((s) => (
                  <div
                    key={s}
                    className="w-[34px] h-[34px] flex items-center justify-center text-sm cursor-pointer transition-all duration-200"
                    style={{
                      background: "#111827",
                      border: "1px solid rgba(107,114,128,0.3)",
                      borderRadius: "8px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "#7c3aed")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(107,114,128,0.3)")
                    }
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map card */}
          <div
            className="rounded-[16px] overflow-hidden mt-5"
            style={{
              background: "#111827",
              border: "1px solid rgba(107,114,128,0.2)",
            }}
          >
            {/* <div className="flex flex-col items-center gap-[10px] p-7" style={{ background: 'linear-gradient(135deg,#0d2240,#0a1628)' }}>
              <div className="text-[32px]">📍</div>
              <div className="text-[13px] font-bold text-center">Pandit Sant Ram Government Degree...</div>
              <div className="text-xs text-center" style={{ color: '#6b7280' }}>Tehsil, Ksba, Bajnath, Himachal Pradesh 176125</div>
              <div className="text-[13px]" style={{ color: '#fbbf24' }}>★★★★☆ <span style={{ color: '#6b7280' }}>4.1 • 257 reviews</span></div>
              <button className="text-white border-none px-[18px] py-2 rounded-lg text-xs cursor-pointer" style={{ background: '#2563eb', fontFamily: 'Poppins, sans-serif' }}>🧭 Directions</button>
            </div> */}
            <div className="w-full h-[500px] rounded-3xl overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9216949397555!2d77.21529578095296!3d28.57211401303617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3586d00021d%3A0x2f4ca7e6cd3b4bff!2sDUCAT%20-%20South%20Extension!5e0!3m2!1sen!2sin!4v1779343671607!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className="rounded-[22px] p-7"
          style={{
            background: "#070b16",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <h3 className="text-[22px] font-extrabold mb-[6px]">
            Send Us an Inquiry
          </h3>
          <div className="text-[13px] mb-[22px]" style={{ color: "#6b7280" }}>
            Fill out the form and our team will get back to you shortly.
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <input
              className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full transition-all duration-200 text-white"
              placeholder="Full Name"
              type="text"
              style={{
                background: "#0a0f1d",
                border: "1px solid rgba(107,114,128,0.3)",
                fontFamily: "Poppins, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(107,114,128,0.3)")
              }
            />
            <input
              className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full transition-all duration-200 text-white"
              placeholder="Email Address"
              type="email"
              style={{
                background: "#0a0f1d",
                border: "1px solid rgba(107,114,128,0.3)",
                fontFamily: "Poppins, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(107,114,128,0.3)")
              }
            />
          </div>
          <input
            className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full text-white mb-3 transition-all duration-200"
            placeholder="Phone Number"
            type="tel"
            style={{
              background: "#0a0f1d",
              border: "1px solid rgba(107,114,128,0.3)",
              fontFamily: "Poppins, sans-serif",
              display: "block",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(107,114,128,0.3)")
            }
          />
          <select
            className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full text-white mb-3 cursor-pointer"
            style={{
              background: "#0a0f1d",
              border: "1px solid rgba(107,114,128,0.3)",
              fontFamily: "Poppins, sans-serif",
              appearance: "none",
              display: "block",
            }}
          >
            <option value="">Course Interested In</option>
            {[
              "Python Programming",
              "React.js Development",
              "JavaScript Essentials",
              "Node.js Backend",
              "C++ Programming",
              "Data Science",
              "UI/UX Design",
              "Full Stack MERN",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <textarea
            className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full text-white mb-4 transition-all duration-200"
            placeholder="Your Message"
            style={{
              background: "#0a0f1d",
              border: "1px solid rgba(107,114,128,0.3)",
              fontFamily: "Poppins, sans-serif",
              resize: "none",
              height: "100px",
              display: "block",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(107,114,128,0.3)")
            }
          ></textarea>
          <button
            className="w-full text-white border-none py-[13px] rounded-xl text-[15px] font-bold cursor-pointer flex justify-center items-center"
            style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
          >
            Send Inquiry ✈️
          </button>
        </div>
      </div>

      {/* Help Topics */}
      <div style={{ padding: "40px 60px" }}>
        <h2 className="text-[26px] font-extrabold text-center mb-[6px]">
          How Can We Help You?
        </h2>
        <div
          className="text-center text-sm mb-[30px]"
          style={{ color: "#6b7280" }}
        >
          Choose a topic to get quick assistance
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
          {[
            {
              icon: "👤",
              title: "Admissions",
              sub: "Know about enrollment and eligibility",
            },
            {
              icon: "📚",
              title: "Courses & Fees",
              sub: "Explore our courses and fee structure",
            },
            {
              icon: "💼",
              title: "Placements",
              sub: "Placement support and opportunities",
            },
            {
              icon: "🎧",
              title: "Technical Support",
              sub: "Get help with technical or platform issues",
            },
          ].map((h) => (
            <div
              key={h.title}
              className="rounded-[18px] p-[22px] cursor-pointer transition-all duration-200"
              style={{
                background: "#070b16",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")
              }
            >
              <div className="text-2xl mb-3">{h.icon}</div>
              <div className="text-sm font-extrabold mb-1">{h.title}</div>
              <div className="text-xs mb-3" style={{ color: "#6b7280" }}>
                {h.sub}
              </div>
              <div
                className="text-xs font-semibold"
                style={{ color: "#60a5fa" }}
              >
                Learn More →
              </div>
            </div>
          ))}
        </div>
        <div
          className="rounded-[18px] p-[22px] flex items-center gap-[18px]"
          style={{
            background: "#070b16",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="text-[36px]">🎧</div>
          <div className="flex-1">
            <div className="text-[15px] font-bold">Still have questions?</div>
            <div className="text-[13px]" style={{ color: "#6b7280" }}>
              Our team is ready to help you.
            </div>
          </div>
          <BtnOutline>📅 Book Free Demo</BtnOutline>
        </div>
      </div>
    </div>
  );
}
