import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#030311", minHeight: "100vh" }}>
      <div style={{ padding: "20px 60px 10px" }}>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div
            className="w-[130px] h[100px] rounded-full flex items-center justify-center text-xl"
            style={{
              border: "1.5px solid #7c3aed",
              boxShadow: "0 0 18px rgba(124,58,237,0.5)",
            }}
          >
            {" "}
            <img className="w-[650px] h-[90px]" src={logo} />
          </div>
          <div className="text-[22px] font-extrabold">
            Coding<span style={{ color: "#7c3aed" }}>Point</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          padding: "80px 60px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h1
            className="font-black leading-[1.2] mb-3"
            style={{ fontSize: "44px" }}
          >
            Welcome Back to
            <br />
            <span style={{ color: "#60a5fa" }}>CodingPoint</span>
          </h1>
          <p
            style={{ color: "#9ca3af", fontSize: "15px", marginBottom: "28px" }}
          >
            Login to continue your learning journey and unlock new
            opportunities.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              className="rounded-[14px] p-[14px] text-center text-[22px]"
              style={{
                background: "#111827",
                border: "1px solid rgba(107,114,128,0.3)",
              }}
            >
              🐍
              <br />
              <span style={{ fontSize: "12px", color: "#6b7280" }}>Python</span>
            </div>
            <div
              className="rounded-[14px] p-[14px] text-center font-black"
              style={{
                background: "#111827",
                border: "1px solid rgba(107,114,128,0.3)",
                fontSize: "18px",
                color: "#22d3ee",
              }}
            >
              &lt;/&gt;
              <br />
              <span
                style={{ fontSize: "12px", color: "#6b7280", fontWeight: 400 }}
              >
                HTML/CSS
              </span>
            </div>
            <div
              className="rounded-[14px] p-[14px] text-center font-black"
              style={{
                background: "#111827",
                border: "1px solid rgba(107,114,128,0.3)",
                color: "#facc15",
              }}
            >
              JS
              <br />
              <span
                style={{ fontSize: "12px", color: "#6b7280", fontWeight: 400 }}
              >
                JavaScript
              </span>
            </div>
          </div>

          {/* Code mock */}
          <div
            className="rounded-[20px] p-5 mb-5 relative"
            style={{
              background: "#0d1117",
              border: "1px solid rgba(124,58,237,0.3)",
              fontFamily: "'Courier New', monospace",
              fontSize: "13px",
              lineHeight: 1.9,
            }}
          >
            <div className="flex gap-[6px] mb-3">
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
            </div>
            <span style={{ color: "#f472b6" }}>function</span>{" "}
            <span style={{ color: "#facc15" }}>learn</span>
            <span style={{ color: "#f3f4f6" }}>() {"{"}</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#22d3ee" }}>const</span>{" "}
            <span style={{ color: "#f3f4f6" }}>skills = {"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#4ade80" }}>"code"</span>
            <span style={{ color: "#f3f4f6" }}>,</span>{" "}
            <span style={{ color: "#4ade80" }}>"build"</span>
            <span style={{ color: "#f3f4f6" }}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#4ade80" }}>"dominate"</span>
            <span style={{ color: "#f3f4f6" }}>,</span>{" "}
            <span style={{ color: "#4ade80" }}>"succeed"</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#f3f4f6" }}>{"}"};</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#f472b6" }}>return</span>{" "}
            <span style={{ color: "#f3f4f6" }}>skills;</span>
            <br />
            <span style={{ color: "#f3f4f6" }}>{"}"}</span>
            <br />
            <span style={{ color: "#22d3ee" }}>console</span>
            <span style={{ color: "#f3f4f6" }}>.</span>
            <span style={{ color: "#facc15" }}>log</span>
            <span style={{ color: "#f3f4f6" }}>(</span>
            <span style={{ color: "#4ade80" }}>
              "Keep Coding, Keep Growing!"
            </span>
            <span style={{ color: "#f3f4f6" }}>);</span>
          </div>

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
              {
                icon: "🏅",
                bg: "rgba(37,99,235,0.2)",
                title: "Certificate of Completion",
                sub: "Earn certificates and boost your career.",
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

        {/* Right - Login Box */}
        <div>
          <div
            className="rounded-[28px] p-9"
            style={{
              background: "rgba(5,8,22,0.98)",
              border: "1.5px solid rgba(124,58,237,0.35)",
              boxShadow: "0 0 60px rgba(124,58,237,0.18)",
            }}
          >
            <h2 className="text-[26px] font-black text-center mb-[6px]">
              Login to Your Account
            </h2>
            <div
              className="text-center text-sm mb-7"
              style={{ color: "#6b7280" }}
            >
              Enter your credentials to access your dashboard.
            </div>

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

            <button
              className="w-full text-white border-none py-[14px] rounded-xl text-base font-bold cursor-pointer flex justify-center items-center"
              style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
            >
              Login →
            </button>

            <div className="flex items-center gap-3 my-5">
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(107,114,128,0.3)" }}
              ></div>
              <span className="text-[13px]" style={{ color: "#6b7280" }}>
                OR
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(107,114,128,0.3)" }}
              ></div>
            </div>

            {[
              ["🟢", "Login with Google"],
              ["⚫", "Login with GitHub"],
              ["🔵", "Login with LinkedIn"],
            ].map(([icon, label], i) => (
              <button
                key={label}
                className="flex items-center gap-3 w-full rounded-xl px-[18px] py-3 text-sm font-semibold cursor-pointer transition-all duration-200 mb-[10px] last:mb-0"
                style={{
                  background: "#0a0f1d",
                  border: "1px solid rgba(107,114,128,0.35)",
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#7c3aed")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(107,114,128,0.35)")
                }
              >
                {icon} {label}
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
          <div
            className="text-center mt-6 text-[13px]"
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
