export function BtnPrimary({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      className="text-white border-none px-7 py-[13px] rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-200 inline-flex items-center"
      style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {children}
    </button>
  );
}

export function BtnOutline({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-transparent px-7 py-[13px] rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200"
      style={{ border: '1.5px solid #7c3aed', ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#a78bfa'; e.currentTarget.style.background = 'rgba(124,58,237,0.08)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'transparent'; }}
    >
      {children}
    </button>
  );
}
