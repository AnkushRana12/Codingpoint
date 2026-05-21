import { useNavigate } from 'react-router-dom';
import Marquee from '../components/Marquee';
import CtaBanner from '../components/CtaBanner';
import { BtnPrimary, BtnOutline } from '../components/Buttons';
import { popularCourses, reviews, reviewStats } from '../utils/data';

function ReviewCard({ r }) {
  const highlighted = r.text.replace(r.hl, `|||${r.hl}|||`).split('|||');
  return (
    <div className="rounded-[22px] p-[22px] transition-all duration-200"
      style={{ background: 'rgba(7,11,22,0.9)', border: '1px solid rgba(124,58,237,0.25)' }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)'}>
      <div className="flex justify-between items-center mb-[14px]">
        <div className="text-[28px]" style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>"</div>
        <div className="text-[13px] tracking-widest" style={{ color: '#fbbf24' }}>★★★★★ <span className="text-white text-xs">5.0</span></div>
      </div>
      <div className="text-sm leading-relaxed mb-4" style={{ color: '#d1d5db' }}>
        {highlighted.map((part, i) =>
          part === r.hl ? <span key={i} className="font-semibold" style={{ color: '#60a5fa' }}>{part}</span> : <span key={i}>{part}</span>
        )}
      </div>
      <div className="flex items-center gap-3 pt-[14px]" style={{ borderTop: '1px solid rgba(124,58,237,0.15)' }}>
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[15px] font-extrabold flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>{r.name[0]}</div>
        <div className="flex-1">
          <div className="text-sm font-bold">{r.name}</div>
          <div className="text-xs" style={{ color: '#6b7280' }}>{r.role}</div>
        </div>
        <div className="text-xs font-semibold px-2 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.08)', color: '#22d3ee' }}>@ {r.company}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', padding: '60px 60px 40px' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-6" style={{ border: '1px solid #7c3aed', color: '#d1d5db', background: '#0a0f1d' }}>
            ✦ Shape Today, Code Tomorrow
          </div>
          <h1 className="font-black leading-[1.1] mb-5" style={{ fontSize: '58px' }}>
            Learn Today.<br />Build Tomorrow.<br />Grow With{' '}
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CodingPoint</span>
          </h1>
          <p className="text-[16px] leading-[1.7] mb-[30px]" style={{ color: '#9ca3af', maxWidth: '480px' }}>
            Join India's trusted coding institute and master in-demand skills with expert guidance, real-world projects, and placement support.
          </p>
          <div className="flex gap-[14px] flex-wrap mb-0">
            <BtnPrimary onClick={() => navigate('/courses')}>Explore Courses →</BtnPrimary>
            <BtnOutline>📅 Book Free Demo</BtnOutline>
          </div>

          {/* Stats bar */}
          <div className="rounded-[20px] p-6 mt-6" style={{ background: 'rgba(7,11,22,0.9)', border: '1px solid rgba(124,58,237,0.2)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {[
              { icon: '👥', val: '10K+', lbl: 'Students', bg: 'rgba(37,99,235,0.2)' },
              { icon: '💼', val: '95%', lbl: 'Placement Rate', bg: 'rgba(124,58,237,0.2)' },
              { icon: '🛡️', val: 'Real', lbl: 'World Projects', bg: 'rgba(37,99,235,0.2)' },
              { icon: '⭐', val: '4.9', lbl: 'Rating', bg: 'rgba(124,58,237,0.2)' },
            ].map((s) => (
              <div key={s.lbl} className="flex items-center gap-[14px]">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: s.bg }}>{s.icon}</div>
                <div>
                  <div className="text-[22px] font-extrabold leading-none">{s.val}</div>
                  <div className="text-xs mt-[2px]" style={{ color: '#6b7280' }}>{s.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Right - Code Card */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-[420px] rounded-[28px] overflow-hidden" style={{ background: 'rgba(9,13,25,0.9)', border: '1.5px solid rgba(124,58,237,0.35)', boxShadow: '0 0 70px rgba(124,58,237,0.25)' }}>
            <div className="flex items-center gap-[6px] px-[18px] py-[14px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#ef4444' }}></div>
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#f59e0b' }}></div>
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#22c55e' }}></div>
              <span className="text-xs ml-2" style={{ color: '#4b5563' }}>main.cpp</span>
            </div>
            <div className="p-5 text-[13px] leading-[1.8]" style={{ fontFamily: "'Courier New', monospace" }}>
              <span style={{ color: '#f472b6' }}>#include</span> <span style={{ color: '#facc15' }}>&lt;iostream&gt;</span><br />
              <span style={{ color: '#f472b6' }}>using namespace</span> <span style={{ color: '#22d3ee' }}>std</span><span style={{ color: '#f3f4f6' }}>;</span><br /><br />
              <span style={{ color: '#22d3ee' }}>int</span> <span style={{ color: '#facc15' }}>main</span><span style={{ color: '#f3f4f6' }}>() {'{'}</span><br />
              &nbsp;&nbsp;<span style={{ color: '#22d3ee' }}>int</span> <span style={{ color: '#f3f4f6' }}>n;</span><br />
              &nbsp;&nbsp;<span style={{ color: '#22d3ee' }}>cout</span> <span style={{ color: '#f3f4f6' }}>&lt;&lt;</span> <span style={{ color: '#4ade80' }}>"Enter a number: "</span><span style={{ color: '#f3f4f6' }}>;</span><br />
              &nbsp;&nbsp;<span style={{ color: '#22d3ee' }}>cin</span> <span style={{ color: '#f3f4f6' }}>&gt;&gt; n;</span><br /><br />
              &nbsp;&nbsp;<span style={{ color: '#f472b6' }}>if</span> <span style={{ color: '#f3f4f6' }}>(n %</span> <span style={{ color: '#facc15' }}>2</span> <span style={{ color: '#f3f4f6' }}>==</span> <span style={{ color: '#facc15' }}>0</span><span style={{ color: '#f3f4f6' }}>)</span> <span style={{ color: '#f3f4f6' }}>{'{'}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#22d3ee' }}>cout</span> <span style={{ color: '#f3f4f6' }}>&lt;&lt;</span> <span style={{ color: '#4ade80' }}>"Even Number"</span><span style={{ color: '#f3f4f6' }}>;</span><br />
              &nbsp;&nbsp;<span style={{ color: '#f3f4f6' }}>{'}'}</span> <span style={{ color: '#f472b6' }}>else</span> <span style={{ color: '#f3f4f6' }}>{'{'}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#22d3ee' }}>cout</span> <span style={{ color: '#f3f4f6' }}>&lt;&lt;</span> <span style={{ color: '#4ade80' }}>"Odd Number"</span><span style={{ color: '#f3f4f6' }}>;</span><br />
              &nbsp;&nbsp;<span style={{ color: '#f3f4f6' }}>{'}'}</span><br />
              &nbsp;&nbsp;<span style={{ color: '#f472b6' }}>return</span> <span style={{ color: '#facc15' }}>0</span><span style={{ color: '#f3f4f6' }}>;</span><br />
              <span style={{ color: '#f3f4f6' }}>{'}'}</span>
            </div>
          </div>
          {/* Float icons */}
          {[
            { text: '🐍', top: '-18px', left: '-10px' },
            { text: 'JS', top: '40px', right: '-14px', color: '#facc15' },
            { text: 'C++', bottom: '60px', left: '-14px', fontSize: '13px' },
            { text: '⚛️', bottom: '-10px', right: '-10px', borderColor: '#7c3aed' },
          ].map((f, i) => (
            <div key={i} className="absolute w-14 h-14 rounded-[14px] flex items-center justify-center text-lg font-extrabold"
              style={{
                border: `1.5px solid ${f.borderColor || '#22d3ee'}`,
                background: '#081122',
                boxShadow: '0 0 25px rgba(0,212,255,0.3)',
                top: f.top, left: f.left, right: f.right, bottom: f.bottom,
                color: f.color || 'inherit',
                fontSize: f.fontSize || undefined,
              }}>{f.text}</div>
          ))}
        </div>
      </div>

      {/* MARQUEE */}
      <Marquee />

      {/* POPULAR COURSES */}
      <section style={{ padding: '60px' }}>
        <div className="text-center text-[42px] font-black mb-2">
          Popular{' '}
          <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>this week</span>
        </div>
        <div className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>Top coding courses loved by learners</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', alignItems: 'end' }}>
          {popularCourses.map((c) => (
            <div key={c.title}
              className={`rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 ${c.featured ? 'course-featured' : ''}`}
              style={{ border: '1px solid rgba(124,58,237,0.25)', background: '#070b16' }}
              onClick={() => navigate('/courses')}
              onMouseEnter={(e) => { if (!c.featured) { e.currentTarget.style.transform = 'translateY(-6px)'; } e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'; }}
              onMouseLeave={(e) => { if (!c.featured) { e.currentTarget.style.transform = 'translateY(0)'; } e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)'; }}
            >
              <div className="h-[220px] flex items-center justify-center font-black" style={{ background: c.gradient, fontSize: c.featured ? '70px' : '55px' }}>
                {c.icon}
              </div>
              <div className="p-[18px]">
                <div className="text-[16px] font-extrabold mb-1">{c.title}</div>
                <div className="text-[13px] mb-[10px]" style={{ color: '#6b7280' }}>{c.subtitle}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] px-[10px] py-[3px] rounded-[50px]" style={{ border: '1px solid rgba(124,58,237,0.5)', color: '#c084fc' }}>{c.level}</span>
                  <span className="text-[13px]" style={{ color: '#22d3ee' }}>👥 {c.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <BtnPrimary onClick={() => navigate('/courses')}>View All Courses →</BtnPrimary>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#06090f', padding: '60px' }}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-[50px] text-sm mb-4" style={{ border: '1px solid #7c3aed', color: '#d1d5db', background: '#0a0f1d' }}>
            ⭐ STUDENT REVIEWS
          </div>
          <div className="text-center text-[42px] font-black mb-2">
            What Our{' '}
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Students Say</span>
          </div>
          <div className="text-center text-[16px]" style={{ color: '#6b7280' }}>Real stories. Real success. Real careers.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '40px' }}>
          {reviews.map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
        {/* Stats Bottom */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
          {reviewStats.map((s) => (
            <div key={s.lbl} className="flex items-center gap-4 rounded-[18px] p-[20px]"
              style={{ background: 'rgba(7,11,22,0.9)', border: '1px solid rgba(124,58,237,0.2)' }}>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: s.bg }}>{s.icon}</div>
              <div>
                <div className="text-[28px] font-black">{s.val}</div>
                <div className="text-[13px]" style={{ color: '#6b7280' }}>{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px' }}>
        <CtaBanner icon="🏆" title="Your Dream Job is Closer Than You Think!" sub="Join CodingPoint and take the first step towards your success.">
          <BtnPrimary onClick={() => navigate('/login')}>Enroll Now →</BtnPrimary>
        </CtaBanner>
      </section>
    </div>
  );
}
