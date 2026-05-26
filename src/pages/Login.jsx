import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { courses } from "../utils/data";

// Pick specific courses for the tech grid
const techGrid = courses.filter((c) =>
  [
    "Python Programming",
    "JavaScript Essentials",
    "React.js Development",
  ].includes(c.title),
);

// Social login icons as SVG/img URLs
const SOCIAL_LOGINS = [
  {
    label: "Login with Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    bg: "#fff",
  },
  {
    label: "Login with GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    bg: "#fff",
  },
  {
    label: "Login with LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    bg: "#0077b5",
  },
];

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#030311] min-h-screen">
      {/* TOP LOGO */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-[60px] pt-[20px] pb-[10px]">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div
            className="w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center"
            style={{
              border: "1.5px solid #7c3aed",
              boxShadow: "0 0 18px rgba(124,58,237,0.5)",
            }}
          >
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </div>

          <div className="text-[22px] font-extrabold">
            Coding<span style={{ color: "#7c3aed" }}>Point</span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[60px] px-5 sm:px-8 md:px-12 lg:px-[60px] py-[40px] sm:py-[60px] lg:py-[80px] items-start">
        {/* LEFT */}
        <div>
          <h1 className="font-black leading-[1.2] mb-3 text-[34px] sm:text-[44px]">
            Welcome Back to
            <br />
            <span style={{ color: "#60a5fa" }}>CodingPoint</span>
          </h1>

          <p
            className="text-[14px] sm:text-[15px] mb-[28px] leading-[1.8]"
            style={{ color: "#9ca3af" }}
          >
            Login to continue your learning journey and unlock new
            opportunities.
          </p>

          {/* TECH GRID — real images from data */}
          <div className="grid grid-cols-3 gap-[10px] mb-[20px]">
            {techGrid.map((c) => (
              <div
                key={c.title}
                className="rounded-[14px] p-[14px] flex flex-col items-center justify-center gap-2"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(107,114,128,0.3)",
                  minHeight: "90px",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="object-contain"
                  style={{ width: "36px", height: "36px" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                {/* Fallback */}
                <span style={{ display: "none", fontSize: "22px" }}>
                  {c.title[0]}
                </span>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                  {c.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>

          {/* CODE BOX */}
          <div
            className="rounded-[20px] p-4 sm:p-5 mb-5 overflow-x-auto"
            style={{
              background: "#0d1117",
              border: "1px solid rgba(124,58,237,0.3)",
              fontFamily: "'Courier New', monospace",
              fontSize: "12px",
              lineHeight: 1.9,
            }}
          >
            <div className="flex gap-[6px] mb-3">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#ef4444" }}
              />
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#f59e0b" }}
              />
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: "#22c55e" }}
              />
            </div>
            <span style={{ color: "#f472b6" }}>function</span>{" "}
            <span style={{ color: "#facc15" }}>learn</span>
            <span style={{ color: "#f3f4f6" }}>() {"{"}</span>
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#22d3ee" }}>const</span>{" "}
            <span style={{ color: "#f3f4f6" }}>skills = {"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#4ade80" }}>"code"</span>
            <span style={{ color: "#f3f4f6" }}>,</span>{" "}
            <span style={{ color: "#4ade80" }}>"build"</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#4ade80" }}>"dominate"</span>
            <span style={{ color: "#f3f4f6" }}>,</span>{" "}
            <span style={{ color: "#4ade80" }}>"succeed"</span>
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#f3f4f6" }}>{"}"};</span>
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#f472b6" }}>return</span>{" "}
            <span style={{ color: "#f3f4f6" }}>skills;</span>
            <br />
            <span style={{ color: "#f3f4f6" }}>{"}"}</span>
          </div>

          {/* FEATURES */}
          <div
            className="rounded-[18px] p-[22px]"
            style={{
              background: "#070b16",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <h3 className="text-lg font-extrabold mb-[18px]">
              Why Learn With{" "}
              <span style={{ color: "#7c3aed" }}>CodingPoint</span>?
            </h3>

            {[
              {
                icon: "🎓",
                bg: "rgba(124,58,237,0.2)",
                title: "Industry-Relevant Courses",
                sub: "Learn in-demand skills from expert mentors.",
              },
              {
                icon: "💼",
                bg: "rgba(37,99,235,0.2)",
                title: "Real-World Projects",
                sub: "Build projects that make your portfolio stand out.",
              },
              {
                icon: "👥",
                bg: "rgba(124,58,237,0.2)",
                title: "Placement Support",
                sub: "Get career guidance and placement assistance.",
              },
            ].map((w) => (
              <div key={w.title} className="flex gap-3 mb-4 last:mb-0">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: w.bg }}
                >
                  {w.icon}
                </div>
                <div>
                  <div className="text-sm font-bold mb-[2px]">{w.title}</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>
                    {w.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT LOGIN */}
        <div>
          <div
            className="rounded-[28px] p-5 sm:p-7 lg:p-9"
            style={{
              background: "rgba(5,8,22,0.98)",
              border: "1.5px solid rgba(124,58,237,0.35)",
              boxShadow: "0 0 60px rgba(124,58,237,0.18)",
            }}
          >
            <h2 className="text-[24px] sm:text-[26px] font-black text-center mb-[6px]">
              Login to Your Account
            </h2>

            <div
              className="text-center text-sm mb-7"
              style={{ color: "#6b7280" }}
            >
              Enter your credentials to access your dashboard.
            </div>

            {/* EMAIL */}
            <div
              className="text-[13px] font-semibold mb-2"
              style={{ color: "#e2e8f0" }}
            >
              Email Address
            </div>

            <div
              className="flex items-center gap-[10px] rounded-[14px] px-4 py-3 mb-4"
              style={{
                background: "#0a0f1d",
                border: "1px solid rgba(107,114,128,0.35)",
              }}
            >
              <span>✉️</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-sm flex-1"
                style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
              />
            </div>

            {/* PASSWORD */}
            <div
              className="text-[13px] font-semibold mb-2"
              style={{ color: "#e2e8f0" }}
            >
              Password
            </div>

            <div
              className="flex items-center gap-[10px] rounded-[14px] px-4 py-3 mb-4"
              style={{
                background: "#0a0f1d",
                border: "1px solid rgba(107,114,128,0.35)",
              }}
            >
              <span>🔒</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-none outline-none text-sm flex-1"
                style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
              />
              <span
                className="cursor-pointer text-sm"
                style={{ color: "#6b7280" }}
              >
                👁️
              </span>
            </div>

            <div className="text-right mb-[18px]">
              <a
                className="cursor-pointer text-[13px]"
                style={{ color: "#a78bfa" }}
              >
                Forgot Password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button
              className="w-full text-white border-none py-[14px] rounded-xl text-base font-bold cursor-pointer"
              style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
            >
              Login →
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-5">
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(107,114,128,0.3)" }}
              />
              <span className="text-[13px]" style={{ color: "#6b7280" }}>
                OR
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(107,114,128,0.3)" }}
              />
            </div>

            {/* SOCIAL LOGINS — real logos */}
            {SOCIAL_LOGINS.map(({ label, logo: socialLogo, bg }) => (
              <button
                key={label}
                className="flex items-center gap-3 w-full rounded-xl px-[18px] py-3 text-sm font-semibold cursor-pointer transition-all duration-200 mb-[10px]"
                style={{
                  background: "#0a0f1d",
                  border: "1px solid rgba(107,114,128,0.35)",
                  color: "#d1d5db",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(107,114,128,0.35)")
                }
              >
                {/* Brand logo */}
                <div
                  className="w-[22px] h-[22px] rounded-[4px] flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: bg }}
                >
                  <img
                    src={socialLogo}
                    alt={label}
                    className="object-contain"
                    style={{ width: "16px", height: "16px" }}
                  />
                </div>
                {label}
              </button>
            ))}

            <div
              className="text-center text-[13px] mt-5"
              style={{ color: "#6b7280" }}
            >
              Don't have an account?{" "}
              <span
                className="cursor-pointer font-semibold"
                style={{ color: "#a78bfa" }}
                onClick={() => navigate("/")}
              >
                Sign Up
              </span>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div
            className="text-center mt-6 text-[13px] leading-[1.8]"
            style={{ color: "#4b5563" }}
          >
            <div className="mb-[6px]">🛡️ Your data is secure with us</div>
            <div>
              By continuing, you agree to our{" "}
              <span className="cursor-pointer" style={{ color: "#a78bfa" }}>
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer" style={{ color: "#a78bfa" }}>
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
