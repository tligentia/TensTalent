
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, UserCircle2, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const companies = [
    { name: 'Inditex', location: 'España', desc: 'Líder mundial en retail, confiando en nosotros para sus perfiles ejecutivos.', logo: 'https://logo.clearbit.com/inditex.com' },
    { name: 'Telefónica', location: 'España', desc: 'Socio estratégico en la captación de talento tecnológico de alto nivel.', logo: 'https://logo.clearbit.com/telefonica.com' },
    { name: 'Grifols', location: 'Catalunya', desc: 'Referente en el sector salud, impulsando la innovación con nuestro talento.', logo: 'https://logo.clearbit.com/grifols.com' },
    { name: 'Mango', location: 'Catalunya', desc: 'Colaboración continua en la búsqueda de directivos para su expansión global.', logo: 'https://logo.clearbit.com/mango.com' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold text-primary mb-8 border border-red-100 uppercase tracking-widest">
          Consultoría de RRHH de Nueva Generación
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
          Conectamos el <span className="text-primary">talento</span> con el <span className="text-primary">propósito</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Simplificamos la búsqueda de talento para empresas y el crecimiento profesional para candidatos. Selecciona tu perfil para comenzar.
        </p>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Company Card */}
          <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 transition-all hover:-translate-y-2 duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern office" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-10 text-left flex flex-col flex-grow">
              <div className="size-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4">Soy una Empresa</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                Encuentra el talento excepcional que impulsará el crecimiento y la innovación en tu organización.
              </p>
              <Link 
                to="/empresa" 
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group/btn shadow-xl shadow-red-100"
              >
                Explorar Talento
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Candidate Card */}
          <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 transition-all hover:-translate-y-2 duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Professional working" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-10 text-left flex flex-col flex-grow">
              <div className="size-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <UserCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4">Soy un Candidato</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                Descubre oportunidades laborales exclusivas que se alinean con tu carrera profesional y valores personales.
              </p>
              <Link 
                to="/candidato" 
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group/btn shadow-xl shadow-red-100"
              >
                Ver Ofertas
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Updated with 4 specific companies */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-16">
            Empresas que confían en nosotros
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="h-12 mb-6 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as any).src = `https://ui-avatars.com/api/?name=${company.name}&background=fef2f2&color=dc2626&bold=true&size=128`;
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-black px-2 py-0.5 bg-red-50 text-primary rounded-md border border-red-100">{company.location}</span>
                  <h4 className="font-bold text-dark">{company.name}</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  "{company.desc}"
                </p>
                <CheckCircle className="w-5 h-5 text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
