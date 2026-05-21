export default function CtaBanner({ icon, title, sub, children }) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-[28px] px-11 py-9"
      style={{
        background: 'linear-gradient(135deg,#0b1020,#13061d)',
        border: '1px solid rgba(124,58,237,0.3)',
      }}>
      <div className="text-[52px] flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <div className="text-[26px] font-black mb-[6px]">{title}</div>
        <div className="text-[15px]" style={{ color: '#9ca3af' }}>{sub}</div>
      </div>
      {children}
    </div>
  );
}
