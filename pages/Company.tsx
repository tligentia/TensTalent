
import React from 'react';
import { Linkedin, SearchCheck, LayoutDashboard, BadgeCheck, MessageCircle, Calendar, Send } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-primary text-xs font-black uppercase tracking-widest rounded-full border border-red-100 mb-6">
              Executive Search Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Encontramos el talento que su empresa <span className="text-primary">necesita.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Especialistas en Executive Search y Estrategia de Adquisición de Talento con más de 15 años conectando visión empresarial con potencial humano.
            </p>
            <button className="flex items-center gap-3 bg-[#0077B5] hover:bg-[#006699] text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-100">
              <Linkedin className="w-5 h-5 fill-current" />
              Conectar en LinkedIn
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-10 bg-red-100/50 rounded-full blur-[100px] -z-10"></div>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/id/64/800/1000" 
                alt="Executive" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">Nuestros Servicios</h2>
            <p className="text-gray-500 text-lg">Diseñamos soluciones a medida para optimizar el capital humano de su organización.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<SearchCheck className="w-8 h-8" />} 
              title="Executive Search" 
              desc="Localizamos líderes transformadores y perfiles estratégicos mediante headhunting directo a nivel global."
            />
            <ServiceCard 
              icon={<LayoutDashboard className="w-8 h-8" />} 
              title="Estrategia de Talento" 
              desc="Consultoría integral para rediseñar sus procesos de captación, evaluación y retención de talento clave."
            />
            <ServiceCard 
              icon={<BadgeCheck className="w-8 h-8" />} 
              title="Employer Branding" 
              desc="Potenciamos su marca empleadora para convertir su empresa en el destino preferido de los mejores candidatos."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Container */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-200">
          <div className="hero-pattern absolute inset-0"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8">¿Listo para escalar su equipo?</h2>
            <p className="text-red-100 text-xl mb-16 max-w-2xl mx-auto">
              Elija la forma de contacto que más le convenga. Estamos listos para escuchar su propuesta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContactChannel 
                icon={<MessageCircle className="w-8 h-8" />}
                title="WhatsApp Directo"
                subtitle="Respuesta rápida e informal"
                variant="glass"
              />
              <ContactChannel 
                icon={<Calendar className="w-8 h-8" />}
                title="Agendar Llamada"
                subtitle="Elija un hueco en mi agenda"
                variant="solid"
              />
              <ContactChannel 
                icon={<Send className="w-8 h-8" />}
                title="Solicitar Propuesta"
                subtitle="Envíenos sus necesidades"
                variant="glass"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary/50 hover:shadow-2xl transition-all group">
    <div className="size-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const ContactChannel: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, variant: 'glass' | 'solid' }> = ({ icon, title, subtitle, variant }) => {
  const baseStyles = "flex flex-col items-center gap-6 p-8 rounded-[2.5rem] transition-all hover:-translate-y-2 cursor-pointer";
  const variants = {
    glass: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary group",
    solid: "bg-white text-primary shadow-2xl shadow-black/10 hover:bg-gray-50"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]}`}>
      <div className={`size-16 rounded-full flex items-center justify-center ${variant === 'glass' ? 'bg-white/10 group-hover:bg-primary/10' : 'bg-primary/10'}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-black mb-1">{title}</h4>
        <p className={`text-sm ${variant === 'glass' ? 'text-white/70 group-hover:text-primary/70' : 'text-primary/70'}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Company;
