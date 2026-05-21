import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

export default function MainLayout({ children }) {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen relative" style={{ background: '#030311', color: '#fff' }}>
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(circle at top left,#3b0764 0%,transparent 35%),radial-gradient(circle at bottom right,#1d4ed8 0%,transparent 30%)',
        opacity: 0.28,
      }} />
      <div className="relative z-[1]">
        <Navbar />
        <main>{children}</main>
        {!isLogin && <Footer />}
      </div>
    </div>
  );
}
