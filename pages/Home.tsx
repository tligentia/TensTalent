
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, UserCircle2, CheckCircle, Target, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  const companies = [
    { name: 'Inditex', location: 'España', desc: 'Retail y Operaciones de alto impacto.', logo: 'https://logo.clearbit.com/inditex.com' },
    { name: 'Telefónica', location: 'España', desc: 'Talento Tecnológico y Digital.', logo: 'https://logo.clearbit.com/telefonica.com' },
    { name: 'Grifols', location: 'Catalunya', desc: 'Liderazgo en Biotecnología.', logo: 'https://logo.clearbit.com/grifols.com' },
    { name: 'Mango', location: 'Catalunya', desc: 'Expansión de Moda Internacional.', logo: 'https://logo.clearbit.com/mango.com' },
  ];

  const stats = [
    { label: 'Empresas confían', value: '+500', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Candidatos colocados', value: '+12k', icon: <Users className="w-5 h-5" /> },
    { label: 'Tasa de éxito', value: '98%', icon: <Target className="w-5 h-5" /> },
    { label: 'Sectores clave', value: '15', icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="px-6 pt-24 pb-16 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-2 text-xs font-black text-primary mb-10 border border-red-100 uppercase tracking-widest animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Líderes en Executive Search & Talento IT
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[1] tracking-tighter mb-10 text-dark">
          El nexo entre el <span className="text-primary italic">talento</span> y el <span className="text-primary italic">éxito</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          Transformamos organizaciones encontrando líderes excepcionales e impulsamos carreras que definen el futuro de la industria.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:border-primary/20 transition-all">
              <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-black text-dark mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group relative flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 transition-all hover:-translate-y-3 duration-500">
            <div className="h-72 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Empresas" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent"></div>
              <div className="absolute bottom-8 left-10">
                <h3 className="text-3xl font-black text-white">Empresas</h3>
              </div>
            </div>
            <div className="p-10 text-left flex flex-col flex-grow">
              <p className="text-gray-500 mb-8 flex-grow text-lg leading-relaxed">
                Potenciamos su crecimiento localizando el capital humano estratégico que marca la diferencia competitiva.
              </p>
              <Link 
                to="/empresa" 
                className="w-full bg-dark hover:bg-primary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-gray-200 group/btn"
              >
                Servicios para Empresas
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="group relative flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 transition-all hover:-translate-y-3 duration-500">
            <div className="h-72 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Candidatos" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-10">
                <h3 className="text-3xl font-black text-white">Candidatos</h3>
              </div>
            </div>
            <div className="p-10 text-left flex flex-col flex-grow">
              <p className="text-gray-500 mb-8 flex-grow text-lg leading-relaxed">
                Conectamos tu talento con proyectos de alto valor en empresas líderes nacionales e internacionales.
              </p>
              <Link 
                to="/candidato" 
                className="w-full bg-primary hover:bg-red-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-100 group/btn"
              >
                Oportunidades de Carrera
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Refined */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-16">
            Nuestros Partners de Confianza
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center text-center p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all group">
                <div className="h-14 mb-6">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as any).src = `https://ui-avatars.com/api/?name=${company.name}&background=fef2f2&color=dc2626&bold=true&size=128`;
                    }}
                  />
                </div>
                <h4 className="font-black text-dark mb-2 text-lg">{company.name}</h4>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  {company.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
