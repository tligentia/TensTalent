
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Empresas', path: '/empresa' },
    { label: 'Candidatos', path: '/candidato' },
    { label: 'Sobre Nosotros', path: '/' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl text-white group-hover:rotate-6 transition-transform shadow-lg shadow-red-200">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-dark">Tenstalent</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[15px] font-bold transition-all hover:text-primary relative group ${
                location.pathname === item.path ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <button className="bg-primary hover:bg-red-700 text-white px-7 py-3 rounded-xl text-sm font-black shadow-[0_8px_30px_rgb(220,38,38,0.2)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95">
            <Mail className="w-4 h-4" />
            Contactar
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="flex flex-col p-8 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-dark flex items-center justify-between border-b border-gray-100 pb-4"
            >
              {item.label}
              <ChevronRight className="text-primary" />
            </Link>
          ))}
          <button className="mt-4 bg-primary text-white py-5 rounded-2xl text-lg font-black shadow-xl shadow-red-100">
            Contactar ahora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
