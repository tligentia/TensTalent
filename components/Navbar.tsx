
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Briefcase, User, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Servicios', path: '/empresa', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Candidatos', path: '/candidato', icon: <User className="w-4 h-4" /> },
    { label: 'Sobre Nosotros', path: '/', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl text-white group-hover:scale-105 transition-transform shadow-lg shadow-red-200">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-dark">Tenstalent</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[15px] font-bold transition-all hover:scale-105 ${
                location.pathname === item.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-[#ef4444] hover:bg-red-700 text-white px-7 py-3 rounded-xl text-sm font-black shadow-[0_8px_30px_rgb(239,68,68,0.3)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95">
            <Mail className="w-4 h-4" />
            Contactar
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
