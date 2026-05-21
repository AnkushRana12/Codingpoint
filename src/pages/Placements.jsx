import { useNavigate } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { BtnPrimary, BtnOutline } from '../components/Buttons';
import { studentsPlaced, hiringPartners } from '../utils/data';

const placementLogos = ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Deloitte', 'Cognizant', 'Capgemini', 'Accenture', 'Tech M.', 'HCL', 'IBM', 'Virtusa'];

export default function Placements() {
  const navigate = useNavigate();

  return (
    <div>
      <section style={{ padding: '60px' }}>
        {/* Hero */}
        <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-5" style={{ border: '1px solid #7c3aed', color: '#d1d5db', background: '#0a0f1d' }}>
          ✦ Your Career, Our Priority
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <h1 className="font-black leading-[1.15] mb-[14px]" style={{ fontSize: '46px' }}>
              We Don't Just Teach,<br />We <span style={{ color: '#60a5fa' }}>Get You Placed.</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
              At CodingPoint, placement is not a promise, it's our proven track record.
            </p>
            <div className="flex gap-[14px]">
              <BtnPrimary onClick={() => navigate('/courses')}>Explore Courses →</BtnPrimary>
              <BtnOutline>📅 Book Free Demo</BtnOutline>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[260px] h-[260px] rounded-full flex items-center justify-center relative"
              style={{ border: '1px solid rgba(124,58,237,0.35)', background: 'rgba(9,13,25,0.7)', boxShadow: '0 0 60px rgba(124,58,237,0.2)' }}>
              <div className="w-[130px] h-[130px] rounded-[24px] flex items-center justify-center text-[52px]"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>💼</div>
              {[
                { emoji: '👥', top: '10px', left: '-10px' },
                { emoji: '📊', top: '24px', right: '-10px' },
                { emoji: '🤝', bottom: '24px', left: '-10px' },
                { emoji: '🎯', bottom: '10px', right: '-10px' },
              ].map((f, i) => (
                <div key={i} className="absolute w-14 h-14 rounded-[14px] flex items-center justify-center text-lg font-extrabold"
                  style={{ border: '1.5px solid #22d3ee', background: '#081122', boxShadow: '0 0 25px rgba(0,212,255,0.3)', top: f.top, left: f.left, right: f.right, bottom: f.bottom }}>{f.emoji}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Placement Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', margin: '32px 0' }}>
          {[
            { icon: '📊', val: '95%', title: 'Placement Rate', sub: 'Students placed successfully', bg: 'rgba(124,58,237,0.2)' },
            { icon: '💼', val: '2000+', title: 'Students Placed', sub: 'In top product based companies', bg: 'rgba(37,99,235,0.2)' },
            { icon: '👥', val: '500+', title: 'Placement Partners', sub: 'Strong network of recruiting companies', bg: 'rgba(124,58,237,0.2)' },
            { icon: '💳', val: '8.5 LPA', title: 'Average Package', sub: 'Across all courses offered', bg: 'rgba(6,182,212,0.2)' },
          ].map((s) => (
            <div key={s.title} className="rounded-[18px] p-[22px]" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-[14px]" style={{ background: s.bg }}>{s.icon}</div>
              <div className="text-[28px] font-black mb-1">{s.val}</div>
              <div className="text-sm font-bold mb-1">{s.title}</div>
              <div className="text-xs" style={{ color: '#6b7280' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Partner Logos */}
      <div style={{ padding: '0 60px 40px' }}>
        <h2 className="text-[26px] font-extrabold mb-5">Our Placement <span style={{ color: '#7c3aed' }}>Partners</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '10px', marginBottom: '10px' }}>
          {placementLogos.map((name) => (
            <div key={name} className="rounded-xl p-3 text-center text-xs font-bold" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}>{name}</div>
          ))}
        </div>
        <div className="text-center text-sm mt-2" style={{ color: '#7c3aed' }}>and 500+ more companies</div>
      </div>

      {/* Guidance + Bar Chart */}
      <div style={{ padding: '0 60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="rounded-[20px] p-7" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}>
            <h3 className="text-[24px] font-extrabold mb-[22px]">Our Placement <span style={{ color: '#7c3aed' }}>Guidance</span></h3>
            {[
              { icon: '📄', title: 'Resume Building', sub: 'Craft a professional resume that gets noticed.' },
              { icon: '💻', title: 'Aptitude & Coding Training', sub: 'Strengthen your logical and coding skills.' },
              { icon: '🎯', title: 'Mock Interviews', sub: 'Practice with experts and gain confidence.' },
              { icon: '🗣️', title: 'Soft Skills Development', sub: 'Improve communication and interview skills.' },
              { icon: '👨‍💼', title: 'Career Mentorship', sub: '1:1 mentorship to guide your career journey.' },
            ].map((g, i, arr) => (
              <div key={g.title} className="flex gap-[14px] items-start" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: i < arr.length - 1 ? '16px' : '0', marginBottom: i < arr.length - 1 ? '16px' : '0' }}>
                <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[17px] flex-shrink-0" style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)' }}>{g.icon}</div>
                <div>
                  <div className="text-sm font-bold mb-[3px]">{g.title}</div>
                  <div className="text-[13px]" style={{ color: '#6b7280' }}>{g.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[20px] p-7" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}>
            <h3 className="text-[24px] font-extrabold mb-[22px]">Average <span style={{ color: '#7c3aed' }}>Package Offered</span></h3>
            <div className="flex items-end justify-between gap-3" style={{ height: '220px' }}>
              {[{ val: '6.2 LPA', h: 138, yr: '2021' }, { val: '6.8 LPA', h: 152, yr: '2022' }, { val: '7.4 LPA', h: 165, yr: '2023' }, { val: '8.0 LPA', h: 178, yr: '2024' }, { val: '8.5 LPA', h: 190, yr: '2025' }].map((b) => (
                <div key={b.yr} className="flex flex-col items-center flex-1">
                  <div className="text-xs font-bold mb-[6px]" style={{ color: '#e2e8f0' }}>{b.val}</div>
                  <div className="w-full rounded-t-lg min-h-5" style={{ height: `${b.h}px`, background: 'linear-gradient(to top,#2563eb,#7c3aed)', boxShadow: '0 0 18px rgba(124,58,237,0.35)' }}></div>
                  <div className="text-xs mt-2" style={{ color: '#6b7280' }}>{b.yr}</div>
                </div>
              ))}
            </div>
            <div className="text-center text-xs mt-[14px]" style={{ color: '#4b5563' }}>Placement Year</div>
          </div>
        </div>
      </div>

      {/* Students Placed */}
      <div style={{ padding: '0 60px 40px' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[26px] font-extrabold">Students Placed In <span style={{ color: '#60a5fa' }}>Top Companies</span></h2>
          <BtnOutline style={{ padding: '9px 18px', fontSize: '13px' }}>View All Placements →</BtnOutline>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
          {studentsPlaced.map((s) => (
            <div key={s.name} className="rounded-[16px] p-[18px] text-center transition-all duration-200"
              style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-[10px]"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>{s.name[0]}</div>
              <div className="text-[11px] font-bold inline-block rounded-md px-2 py-[2px] mb-[6px]" style={{ background: 'rgba(255,255,255,0.07)', color: '#22d3ee' }}>{s.company}</div>
              <div className="text-[13px] font-bold mb-[3px]">{s.name}</div>
              <div className="text-[11px] mb-[6px]" style={{ color: '#6b7280' }}>{s.role}</div>
              <div className="text-[16px] font-black" style={{ color: '#60a5fa' }}>{s.pkg}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hiring Partners */}
      <section style={{ background: '#06090f', padding: '60px' }}>
        <div className="text-center mb-10">
          <div style={{ color: '#7c3aed', fontSize: '12px', letterSpacing: '4px', marginBottom: '8px' }}>— PLACEMENT PARTNERS —</div>
          <h2 className="text-[42px] font-black mb-[6px]">Our Hiring <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Partners</span></h2>
          <p style={{ color: '#6b7280', fontSize: '15px' }}>Top companies hiring <span style={{ color: '#60a5fa' }}>CodingPoint</span> students</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px', marginBottom: '28px' }}>
          {hiringPartners.map((p) => (
            <div key={p.n} className="rounded-[18px] p-5 text-center cursor-pointer transition-all duration-200"
              style={{
                background: p.hl ? 'linear-gradient(135deg,rgba(124,58,237,0.12),transparent)' : '#070b16',
                border: p.hl ? '1px solid rgba(139,92,246,0.6)' : '1px solid rgba(124,58,237,0.25)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.55)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = p.hl ? 'rgba(139,92,246,0.6)' : 'rgba(124,58,237,0.25)'; }}>
              <div className="w-11 h-11 rounded-xl mx-auto mb-[10px] flex items-center justify-center text-base font-black" style={{ background: p.c + '22' }}>
                <div className="w-5 h-5 rounded-full" style={{ background: p.c }}></div>
              </div>
              <div className="text-sm font-extrabold mb-[6px]">{p.n}</div>
              <div className="text-xs" style={{ color: '#6b7280' }}>👥 {p.students}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[18px] p-5 flex items-center gap-[14px]" style={{ background: '#070b16', border: '1px solid rgba(124,58,237,0.2)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr) auto', gap: '14px' }}>
          {[
            { icon: '🏢', val: '500+', lbl: 'Companies Trust Us', bg: 'rgba(37,99,235,0.2)' },
            { icon: '🎓', val: '2500+', lbl: 'Students Placed', bg: 'rgba(124,58,237,0.2)' },
            { icon: '🏆', val: '95%', lbl: 'Placement Rate', bg: 'rgba(6,182,212,0.2)' },
            { icon: '🚀', val: '1200+', lbl: 'Successful Careers', bg: 'rgba(37,99,235,0.2)' },
          ].map((s) => (
            <div key={s.lbl} className="flex items-center gap-[14px]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: s.bg }}>{s.icon}</div>
              <div>
                <div className="text-[22px] font-extrabold leading-none">{s.val}</div>
                <div className="text-xs mt-[2px]" style={{ color: '#6b7280' }}>{s.lbl}</div>
              </div>
            </div>
          ))}
          <BtnPrimary onClick={() => navigate('/courses')}>Start Your Career Today →</BtnPrimary>
        </div>
      </section>

      <section style={{ padding: '60px' }}>
        <CtaBanner icon="🏆" title="Your Dream Job is Closer Than You Think!" sub="Join CodingPoint and take the first step towards your success.">
          <BtnPrimary onClick={() => navigate('/login')}>Enroll Now →</BtnPrimary>
        </CtaBanner>
      </section>
    </div>
  );
}
