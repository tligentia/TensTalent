
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Scale, FileText, Info, Mail } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="w-full max-w-4xl bg-white rounded-t-[3rem] shadow-2xl p-8 md:p-12 animate-in slide-in-from-bottom duration-500 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-2xl text-primary">
              {icon}
            </div>
            <h2 className="text-3xl font-black">{title}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="prose prose-red max-w-none text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
        <div className="mt-12 flex justify-end">
          <button onClick={onClose} className="bg-dark text-white px-8 py-3 rounded-xl font-bold">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

const LegalModals: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowCookies(true);

    // Listen to custom events from footer links
    const handleOpenModal = (e: any) => setActiveModal(e.detail);
    window.addEventListener('open-legal-modal', handleOpenModal);
    return () => window.removeEventListener('open-legal-modal', handleOpenModal);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookies(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[90] bg-dark text-white p-6 rounded-[2rem] shadow-2xl animate-in slide-in-from-bottom duration-700">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/20 p-2 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar su experiencia y mostrarle contenido relacionado con sus preferencias.
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={acceptCookies} className="flex-1 bg-primary hover:bg-red-700 text-white py-2.5 rounded-xl text-sm font-bold transition-colors">
              Aceptar todas
            </button>
            <button onClick={() => setShowCookies(false)} className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-sm font-bold transition-colors">
              Configurar
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'aviso-legal'} 
        onClose={() => setActiveModal(null)} 
        title="Aviso Legal"
        icon={<Scale className="w-6 h-6" />}
      >
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los siguientes datos identificativos del titular del sitio web:</p>
        <p className="font-bold">Tenstalent S.L.</p>
        <p>Domicilio Social: Calle Balmes, Barcelona / Paseo de la Castellana, Madrid.</p>
        <p>NIF: B-00000000</p>
        <p>Inscrita en el Registro Mercantil de Barcelona.</p>
        <p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación total de las condiciones aquí expuestas.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'privacidad'} 
        onClose={() => setActiveModal(null)} 
        title="Política de Privacidad"
        icon={<ShieldCheck className="w-6 h-6" />}
      >
        <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD 3/2018, le informamos que Tenstalent es el responsable del tratamiento de sus datos personales.</p>
        <h4 className="text-dark font-black">Finalidad:</h4>
        <p>Gestión de procesos de selección de personal, headhunting y servicios de consultoría de RRHH.</p>
        <h4 className="text-dark font-black">Legitimación:</h4>
        <p>Consentimiento del interesado mediante el envío de su CV o formulario de contacto.</p>
        <h4 className="text-dark font-black">Derechos:</h4>
        <p>Usted tiene derecho a acceder, rectificar, suprimir sus datos y otros derechos detallados en la normativa vigente enviando un correo a privacidad@tenstalent.com.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'transparencia'} 
        onClose={() => setActiveModal(null)} 
        title="Portal de Transparencia"
        icon={<FileText className="w-6 h-6" />}
      >
        <p>Tenstalent mantiene un compromiso firme con la transparencia corporativa y el cumplimiento normativo (Compliance).</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Información institucional y organizativa.</li>
          <li>Contratos con administraciones públicas (si aplica).</li>
          <li>Convenios y subvenciones.</li>
          <li>Información económica, presupuestaria y estadística.</li>
        </ul>
        <p>Actualizado conforme a la Ley 19/2013 de transparencia, acceso a la información pública y buen gobierno.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'contacto'} 
        onClose={() => setActiveModal(null)} 
        title="Contacto"
        icon={<Mail className="w-6 h-6" />}
      >
        <p>Estamos a su entera disposición para resolver cualquier duda o consulta sobre nuestros servicios de selección.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h5 className="font-black mb-2 text-primary">Barcelona (Sede Cataluña)</h5>
            <p className="text-sm">Edificio de Oficinas, Calle Balmes<br/>08006 Barcelona</p>
            <p className="text-sm mt-2 font-bold">+34 930 00 00 00</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h5 className="font-black mb-2 text-primary">Madrid (Sede España)</h5>
            <p className="text-sm">Área de Negocios, Paseo de la Castellana<br/>28046 Madrid</p>
            <p className="text-sm mt-2 font-bold">+34 910 00 00 00</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-medium">Correo electrónico general: <span className="text-primary font-bold">info@tenstalent.com</span></p>
        </div>
      </Modal>
    </>
  );
};

export default LegalModals;
