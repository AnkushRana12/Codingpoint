import { partners } from '../utils/data';

export default function Marquee() {
  const all = [...partners, ...partners];
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(124,58,237,0.15)',
      borderBottom: '1px solid rgba(124,58,237,0.15)',
      padding: '16px 0',
      background: 'rgba(7,11,22,0.5)',
    }}>
      <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
        {all.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap px-[18px] py-2"
            style={{
              background: 'rgba(17,24,39,0.8)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: '50px',
              color: '#d1d5db',
            }}>
            <div className="w-2 h-2 rounded-full" style={{ background: p.c }}></div>
            {p.n}
          </div>
        ))}
      </div>
    </div>
  );
}
