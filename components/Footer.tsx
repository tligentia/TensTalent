
import React from 'react';
import { Share2, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const openModal = (modalId: string) => {
    window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: modalId }));
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2 opacity-80">
            <div className="bg-primary p-1 rounded-md text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-lg font-bold">Tenstalent</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            <button onClick={() => openModal('aviso-legal')} className="hover:text-primary transition-colors">Aviso Legal</button>
            <button onClick={() => openModal('privacidad')} className="hover:text-primary transition-colors">Privacidad</button>
            <button onClick={() => openModal('transparencia')} className="hover:text-primary transition-colors">Portal de Transparencia</button>
            <button onClick={() => openModal('contacto')} className="hover:text-primary transition-colors">Contacto</button>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-110"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-110"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:scale-110"><Mail className="w-5 h-5" /></a>
          </div>

          <div className="w-full border-t border-gray-100 pt-8 mt-4">
            <p className="text-gray-400 text-sm">
              © 2024 Tenstalent. Especialistas en Headhunting y Selección IT. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
