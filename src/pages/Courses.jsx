import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { BtnPrimary, BtnOutline } from '../components/Buttons';
import { courses } from '../utils/data';

const CATEGORIES = ['All Courses', 'Programming', 'Web Development', 'Data Science', 'Tools & Others'];

export default function Courses() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('All Courses');
  const [search, setSearch] = useState('');

  const filtered = courses.filter((c) => {
    const matchCat = activeCat === 'All Courses' || c.cat === activeCat;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section style={{ padding: '60px' }}>
      {/* Header */}
      <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-5" style={{ border: '1px solid #7c3aed', color: '#d1d5db', background: '#0a0f1d' }}>
        ✦ Courses
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 className="font-black leading-[1.15] mb-[14px]" style={{ fontSize: '46px' }}>
            Upgrade Your Skills<br />With <span style={{ color: '#60a5fa' }}>Industry-Ready</span> Courses
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7 }}>
            Learn from experts, build real-world projects, and get placement support.
          </p>
        </div>
        <div className="rounded-[22px] p-[22px]" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.25)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px', marginBottom: '12px' }}>
            {['🐍 Python', 'JS JavaScript', '⚛️ React', 'C++ C++'].map((t) => (
              <div key={t} className="rounded-xl p-3 text-[22px] text-center" style={{ background: '#111827' }}>{t}</div>
            ))}
          </div>
          <div className="rounded-xl p-3 text-center text-[13px]" style={{ background: '#111827', border: '1px solid rgba(37,99,235,0.3)', color: '#60a5fa', fontFamily: 'monospace' }}>
            &lt;/&gt; Keep Coding, Keep Growing!
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex gap-[10px] flex-wrap items-center mb-9">
        <div className="flex items-center gap-[10px] rounded-xl px-4 py-[10px]" style={{ background: '#0a0f1d', border: '1px solid rgba(107,114,128,0.4)', flex: '1', maxWidth: '320px' }}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search for courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-white text-sm w-full"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}
          />
        </div>
        {CATEGORIES.map((cat) => (
          <button key={cat}
            onClick={() => setActiveCat(cat)}
            className="px-[18px] py-[9px] rounded-xl text-[13px] font-semibold cursor-pointer transition-all duration-200"
            style={{
              background: activeCat === cat ? 'linear-gradient(135deg,#2563eb,#7c3aed)' : '#0a0f1d',
              border: activeCat === cat ? '1px solid transparent' : '1px solid rgba(107,114,128,0.35)',
              color: activeCat === cat ? '#fff' : '#d1d5db',
              fontFamily: 'Poppins, sans-serif',
            }}
            onMouseEnter={(e) => { if (activeCat !== cat) e.currentTarget.style.borderColor = '#7c3aed'; }}
            onMouseLeave={(e) => { if (activeCat !== cat) e.currentTarget.style.borderColor = 'rgba(107,114,128,0.35)'; }}
          >{cat}</button>
        ))}
      </div>

      {/* Courses Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px' }}>
        {filtered.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', color: '#6b7280' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
            <div style={{ fontSize: '18px' }}>No courses found</div>
          </div>
        ) : filtered.map((c) => (
          <div key={c.title} className="rounded-[20px] p-[22px] cursor-pointer transition-all duration-200"
            style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(124,58,237,0.12)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl font-extrabold"
                style={{ background: c.iconBg + '22', border: `1px solid ${c.iconBg}44`, color: c.iconColor || '#fff' }}>{c.icon}</div>
              <span className="text-[11px] px-3 py-1 rounded-lg font-bold text-white" style={{ background: c.badgeColor }}>{c.badge}</span>
              <span className="text-lg cursor-pointer transition-colors duration-200" style={{ color: '#4b5563' }}
                onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                onMouseLeave={(e) => e.target.style.color = '#4b5563'}>♡</span>
            </div>
            <div className="text-[18px] font-extrabold mb-1">{c.title}</div>
            <div className="text-[13px] font-semibold mb-2" style={{ color: '#60a5fa' }}>{c.subtitle}</div>
            <div className="text-[13px] leading-[1.6] mb-[14px]" style={{ color: '#6b7280' }}>{c.desc}</div>
            <div className="flex gap-4 text-xs mb-[14px]" style={{ color: '#6b7280' }}>
              <span>⏱ {c.duration}</span><span>📶 {c.level}</span>
            </div>
            <button className="w-full text-white border-none py-[10px] rounded-xl text-sm font-bold cursor-pointer flex justify-center items-center"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
              Explore Course →
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10">
        <CtaBanner icon="🎓" title="Not Sure Which Course is Right for You?" sub="Book a free 1:1 demo session with our experts and get personalized guidance.">
          <div className="flex gap-[14px]">
            <BtnOutline>📅 Book Free Demo</BtnOutline>
            <BtnPrimary>Talk to Expert →</BtnPrimary>
          </div>
        </CtaBanner>
      </div>
    </section>
  );
}
