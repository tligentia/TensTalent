
import React, { useState } from 'react';
import { CloudUpload, MessageCircle, Mail } from 'lucide-react';

const Candidate: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Matching screenshot layout */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image on the left as per screenshot */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-50 rounded-[3rem] -z-10 transform -rotate-3 transition-transform group-hover:rotate-0"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace laptop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content on the right as per screenshot */}
          <div className="flex flex-col">
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8">
              Impulsa tu<br />
              carrera con<br />
              <span className="text-primary">Tenstalent</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
              Déjanos tu CV y encontraremos la oportunidad perfecta para ti. Proceso rápido, sencillo y directo a las mejores vacantes del sector.
            </p>
            <div>
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-12 py-5 bg-[#ef4444] text-white text-lg font-black rounded-2xl shadow-[0_12px_40px_rgba(239,68,68,0.4)] hover:bg-red-700 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Enviar mi CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="form-section" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">Únete a nosotros</span>
            <h2 className="text-5xl font-black mb-4">Formulario de Aplicación</h2>
            <p className="text-gray-500 text-lg">Completa tus datos para formar parte de nuestra exclusiva red de talento.</p>
          </div>

          <div className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    className="w-full px-8 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    className="w-full px-8 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Perfil de LinkedIn</label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/in/tuperfil" 
                  className="w-full px-8 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold text-lg shadow-inner"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">Adjuntar CV</label>
                <div 
                  className={`border-4 border-dashed rounded-[3rem] p-16 flex flex-col items-center gap-6 transition-all cursor-pointer group ${
                    dragActive ? 'border-primary bg-red-50' : 'border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-gray-200'
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                >
                  <div className="bg-white p-6 rounded-3xl shadow-lg group-hover:scale-110 transition-transform">
                    <CloudUpload className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black mb-1 text-dark">Sube tu archivo</p>
                    <p className="text-gray-400 font-bold">PDF o DOCX hasta 10MB</p>
                  </div>
                  <input type="file" className="hidden" id="cv-upload" />
                </div>
              </div>

              <div className="flex items-start gap-5 py-2">
                <div className="pt-1">
                  <input type="checkbox" className="size-6 rounded-lg text-primary focus:ring-primary border-gray-200" id="privacy" />
                </div>
                <label htmlFor="privacy" className="text-gray-500 font-bold leading-relaxed text-[15px]">
                  Acepto el tratamiento de mis datos personales según la <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'privacidad' }))} className="text-primary font-black hover:underline">política de privacidad</button> para procesos de selección.
                </label>
              </div>

              <button className="w-full bg-[#ef4444] hover:bg-red-700 text-white py-6 rounded-[2rem] text-2xl font-black shadow-[0_20px_50px_rgba(239,68,68,0.3)] transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                Enviar mi currículum
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-black mb-8">¿Dudas? Nuestro equipo te ayuda</h3>
          <p className="text-xl text-gray-400 mb-16 font-medium">Estamos disponibles para guiarte en tu próximo gran paso profesional.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="flex items-center gap-4 px-12 py-5 bg-[#25D366] text-white rounded-2xl font-black shadow-[0_15px_35px_rgba(37,211,102,0.3)] hover:scale-105 transition-transform text-lg">
              <MessageCircle className="w-7 h-7" />
              WhatsApp Directo
            </button>
            <button className="flex items-center gap-4 px-12 py-5 bg-white border-2 border-gray-100 text-dark rounded-2xl font-black shadow-xl shadow-gray-50 hover:bg-gray-50 transition-all text-lg">
              <Mail className="w-7 h-7" />
              Contactar por Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidate;
