
import React from 'react';
import { Linkedin, SearchCheck, LayoutDashboard, BadgeCheck, MessageCircle, Calendar, Send, ChevronRight } from 'lucide-react';

const Company: React.FC = () => {
  const steps = [
    { title: 'Diagnóstico', desc: 'Analizamos la cultura y objetivos críticos de su organización.' },
    { title: 'Localización', desc: 'Mapping exhaustivo y headhunting directo de talento pasivo.' },
    { title: 'Evaluación', desc: 'Entrevistas por competencias y validación de fit cultural.' },
    { title: 'Onboarding', desc: 'Seguimiento durante los primeros meses para asegurar el éxito.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-red-50 text-primary text-xs font-black uppercase tracking-widest rounded-full border border-red-100 mb-8">
              Expertos en Headhunting IT & Executive
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tighter text-dark">
              Encontramos el <span className="text-primary italic">líder</span> que impulsa su visión.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-xl font-medium">
              Especialistas en Executive Search con una metodología propia que combina tecnología de vanguardia y psicología organizacional.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-dark hover:bg-gray-800 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-gray-200">
                Contactar Ahora
              </button>
              <button className="flex items-center gap-3 bg-[#0077B5] hover:bg-[#006699] text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-100">
                <Linkedin className="w-6 h-6 fill-current" />
                Sede LinkedIn
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-20 bg-red-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white transform hover:rotate-2 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Executive Team" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-dark py-24 md:py-32 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Nuestra Metodología de <span className="text-primary italic">Alto Rendimiento</span></h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">No solo buscamos perfiles; construimos el futuro de su empresa a través de procesos rigurosos y transparentes.</p>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                      <p className="text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 mt-12">
                <SearchCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black mb-4">Precision Search</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Algoritmos avanzados para filtrar el top 1% de candidatos pasivos en el mercado.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10">
                <BadgeCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black mb-4">Quality First</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Garantía de reposición extendida en cada una de nuestras contrataciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Refined */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-primary rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(220,38,38,0.3)]">
          <div className="hero-pattern absolute inset-0"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">¿Escalamos su equipo?</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="group bg-white text-primary px-12 py-6 rounded-3xl text-xl font-black transition-all hover:scale-105 flex items-center gap-3">
                Agendar Consultoría
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-dark/20 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl text-xl font-black hover:bg-white hover:text-dark transition-all">
                Ver Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
