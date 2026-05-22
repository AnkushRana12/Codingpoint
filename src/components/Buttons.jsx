export function BtnPrimary({ children, onClick, style = {}, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full sm:w-auto text-white border-none px-5 sm:px-7 py-[12px] sm:py-[13px] rounded-xl text-[14px] sm:text-[15px] font-bold cursor-pointer transition-all duration-200 inline-flex items-center justify-center ${className}`}
      style={{
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {children}
    </button>
  );
}

export function BtnOutline({ children, onClick, style = {}, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full sm:w-auto text-white bg-transparent px-5 sm:px-7 py-[12px] sm:py-[13px] rounded-xl text-[14px] sm:text-[15px] font-semibold cursor-pointer transition-all duration-200 inline-flex items-center justify-center ${className}`}
      style={{
        border: "1.5px solid #7c3aed",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#a78bfa";
        e.currentTarget.style.background = "rgba(124,58,237,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#7c3aed";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}
