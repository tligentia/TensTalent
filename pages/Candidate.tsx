
import React, { useState } from 'react';
import { CloudUpload, MessageCircle, Mail, Briefcase, Zap, Globe, Trophy } from 'lucide-react';

const Candidate: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('form-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { title: 'Empresas Top', desc: 'Acceso a vacantes que no se publican en portales convencionales.', icon: <Trophy /> },
    { title: 'Crecimiento', desc: 'Asesoramiento personalizado para negociar tu próximo salario.', icon: <Zap /> },
    { title: 'Global', desc: 'Proyectos remotos y presenciales en los hubs más innovadores.', icon: <Globe /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-10 bg-red-50 rounded-full blur-[100px] -z-10"></div>
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3] md:aspect-square border-[10px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="Working candidate" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col order-1 md:order-2">
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-6 block">Tu próximo gran paso</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[1] tracking-tighter mb-10 text-dark">
              Tu carrera,<br />
              <span className="text-primary italic">evolucionada</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
              No eres un número más. En Tenstalent tratamos cada candidatura con el respeto y la discreción que merece tu trayectoria profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-12 py-6 bg-primary text-white text-xl font-black rounded-[2rem] shadow-[0_20px_60px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all transform hover:-translate-y-2 active:scale-95"
              >
                Subir Currículum
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-white border-2 border-gray-100 text-dark text-xl font-black rounded-[2rem] hover:bg-gray-50 transition-all">
                <Briefcase className="text-primary" />
                Ver Ofertas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group text-center md:text-left">
                <div className="size-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto md:mx-0 group-hover:bg-primary group-hover:text-white transition-all">
                  {React.cloneElement(b.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black mb-4">{b.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="form-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-dark">Empieza el <span className="text-primary italic">cambio</span>.</h2>
            <p className="text-gray-400 text-xl font-medium">Proceso 100% confidencial. Respondemos en menos de 48h.</p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre aquí" 
                    className="w-full px-8 py-6 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Email de contacto</label>
                  <input 
                    type="email" 
                    placeholder="hola@ejemplo.com" 
                    className="w-full px-8 py-6 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Tu especialidad</label>
                <select className="w-full px-8 py-6 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner appearance-none cursor-pointer">
                  <option>Selecciona un área</option>
                  <option>Executive / Management</option>
                  <option>Software Engineering</option>
                  <option>Data & AI</option>
                  <option>Sales & Marketing</option>
                  <option>Recursos Humanos</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Currículum Vitae</label>
                <div 
                  className={`border-4 border-dashed rounded-[3rem] p-16 flex flex-col items-center gap-6 transition-all cursor-pointer group ${
                    dragActive ? 'border-primary bg-red-50' : 'border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-gray-200'
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                >
                  <div className="bg-white p-6 rounded-3xl shadow-xl group-hover:scale-110 transition-transform">
                    <CloudUpload className="w-14 h-14 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black mb-1 text-dark">Suelta tu CV aquí</p>
                    <p className="text-gray-400 font-bold">PDF o DOCX hasta 15MB</p>
                  </div>
                  <input type="file" className="hidden" id="cv-upload" />
                </div>
              </div>

              <div className="flex items-start gap-6 pt-4">
                <input type="checkbox" className="size-8 rounded-xl text-primary focus:ring-primary border-gray-200 cursor-pointer" id="privacy" />
                <label htmlFor="privacy" className="text-gray-500 font-bold leading-relaxed text-sm">
                  He leído y acepto la <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'privacidad' }))} className="text-primary font-black hover:underline">política de privacidad</button> y consiento el tratamiento de mis datos para ofertas de empleo.
                </label>
              </div>

              <button className="w-full bg-primary hover:bg-red-700 text-white py-7 rounded-[2.5rem] text-2xl font-black shadow-[0_30px_70px_rgba(220,38,38,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Enviar Candidatura
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-dark text-center relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tighter">¿Necesitas ayuda con tu perfil?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="flex items-center gap-4 px-12 py-6 bg-[#25D366] text-white rounded-[2rem] font-black shadow-2xl shadow-green-900/20 hover:scale-105 transition-transform text-xl">
              <MessageCircle className="w-8 h-8" />
              WhatsApp de Carrera
            </button>
            <button className="flex items-center gap-4 px-12 py-6 bg-white/5 border border-white/20 text-white rounded-[2rem] font-black hover:bg-white/10 transition-all text-xl">
              <Mail className="w-8 h-8" />
              Email Directo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidate;
