import { BtnOutline } from "../components/Buttons";

export default function Contact() {
  return (
    <div className="bg-[#030311] text-white overflow-hidden">
      {/* HERO */}
      <div
        className="text-center px-5 sm:px-8 md:px-12 lg:px-[60px] py-[50px] sm:py-[60px]"
        style={{
          background: "linear-gradient(to bottom,#0d1530,#030311)",
          borderBottom: "1px solid rgba(124,58,237,0.15)",
        }}
      >
        <h1
          className="font-black mb-[10px] text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.2]"
          style={{ color: "#60a5fa" }}
        >
          #Let's_Connect
        </h1>

        <p
          className="text-[14px] sm:text-[15px] mb-[14px] max-w-[700px] mx-auto leading-[1.8]"
          style={{ color: "#9ca3af" }}
        >
          Have questions? Send us your inquiry and our team will help you.
        </p>

        <div className="flex items-center gap-[10px] justify-center">
          <div
            className="h-[1px] w-[50px]"
            style={{
              background: "linear-gradient(to right,transparent,#2563eb)",
            }}
          ></div>

          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#2563eb" }}
          ></div>

          <div
            className="h-[1px] w-[50px]"
            style={{
              background: "linear-gradient(to left,transparent,#2563eb)",
            }}
          ></div>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[40px] lg:gap-[50px] px-5 sm:px-8 md:px-12 lg:px-[60px] py-[40px] sm:py-[60px]">
        {/* LEFT */}
        <div>
          <div
            className="text-xs font-bold mb-2 tracking-[2px]"
            style={{ color: "#60a5fa" }}
          >
            GET IN TOUCH
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-black mb-[10px] leading-[1.3]">
            Visit one of our locations or contact us today
          </h2>

          <div
            className="text-sm mb-[30px] leading-[1.8]"
            style={{ color: "#9ca3af" }}
          >
            We're here to answer your questions and help you achieve your coding
            goals.
          </div>

          {[
            {
              icon: "📍",
              label: "Head Office",
              val: "Near Pandit Sant Ram GOVT. College (HP)\nBajnath, Himachal Pradesh 176125",
            },
            {
              icon: "✉️",
              label: "Email Us",
              val: "support@codingpoint.in",
            },
            {
              icon: "📞",
              label: "Call Us",
              val: "+91 98765 43210",
            },
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
                  className="text-[13px] leading-[1.7] whitespace-pre-line"
                  style={{ color: "#9ca3af" }}
                >
                  {c.val}
                </div>
              </div>
            </div>
          ))}

          {/* SOCIAL */}
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

              <div className="flex flex-wrap gap-[10px] mt-[6px]">
                {["fb", "ig", "in", "tw", "yt"].map((s) => (
                  <div
                    key={s}
                    className="w-[34px] h-[34px] flex items-center justify-center text-sm cursor-pointer transition-all duration-200 rounded-[8px]"
                    style={{
                      background: "#111827",
                      border: "1px solid rgba(107,114,128,0.3)",
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

          {/* MAP */}
          <div
            className="rounded-[18px] overflow-hidden mt-5"
            style={{
              background: "#111827",
              border: "1px solid rgba(107,114,128,0.2)",
            }}
          >
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9216949397555!2d77.21529578095296!3d28.57211401303617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3586d00021d%3A0x2f4ca7e6cd3b4bff!2sDUCAT%20-%20South%20Extension!5e0!3m2!1sen!2sin!4v1779343671607!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          className="rounded-[22px] p-5 sm:p-7"
          style={{
            background: "#070b16",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <h3 className="text-[24px] font-extrabold mb-[6px]">
            Send Us an Inquiry
          </h3>

          <div className="text-[13px] mb-[22px]" style={{ color: "#6b7280" }}>
            Fill out the form and our team will get back to you shortly.
          </div>

          {/* INPUTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mb-[12px]">
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
            className="rounded-[10px] px-[14px] py-[11px] text-sm outline-none w-full text-white mb-4 transition-all duration-200 resize-none h-[120px]"
            placeholder="Your Message"
            style={{
              background: "#0a0f1d",
              border: "1px solid rgba(107,114,128,0.3)",
              fontFamily: "Poppins, sans-serif",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(107,114,128,0.3)")
            }
          ></textarea>

          <button
            className="w-full text-white border-none py-[13px] rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300"
            style={{
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            }}
          >
            Send Inquiry ✈️
          </button>
        </div>
      </div>

      {/* HELP TOPICS */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-[60px] pb-[60px]">
        <h2 className="text-[28px] font-extrabold text-center mb-[6px]">
          How Can We Help You?
        </h2>

        <div
          className="text-center text-sm mb-[30px]"
          style={{ color: "#6b7280" }}
        >
          Choose a topic to get quick assistance
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[14px] mb-[24px]">
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

              <div
                className="text-xs mb-3 leading-[1.7]"
                style={{ color: "#6b7280" }}
              >
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

        {/* SUPPORT CARD */}
        <div
          className="rounded-[18px] p-[22px] flex flex-col sm:flex-row sm:items-center gap-[18px]"
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

          <div className="w-full sm:w-auto">
            <BtnOutline className="w-full sm:w-auto">
              📅 Book Free Demo
            </BtnOutline>
          </div>
        </div>
      </div>
    </div>
  );
}
