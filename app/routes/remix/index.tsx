import { useState } from 'react';
import { Link } from '@remix-run/react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; // Importa motion
import CloudTextBlock from '~/components/showcase/CloudTextBlock';
import CloudTextBlock2 from '~/components/showcase/CloudTextBlock2';
import CloudTextBlock3 from '~/components/showcase/CloudTextBlock3';
import CloudTextBlock4 from '~/components/showcase/CloudTextBlock4';
import CloudTextBlock5 from '~/components/showcase/CloudTextBlock5';
import CloudTextBlock6 from '~/components/showcase/CloudTextBlock6';
import CloudTextBlock7 from '~/components/showcase/CloudTextBlock7';

const components = [
    { name: '', Component: CloudTextBlock, code: `// Código de CloudTextBlock` },
    { name: '', Component: CloudTextBlock4, code: `// Código de CloudTextBlock4` },
    { name: '', Component: CloudTextBlock5, code: `// Código de CloudTextBlock5` },
    { name: '', Component: CloudTextBlock6, code: `// Código de CloudTextBlock6` },
    { name: '', Component: CloudTextBlock3, code: `// Código de CloudTextBlock3` },
    { name: '', Component: CloudTextBlock2, code: `// Código de CloudTextBlock2` },


];

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState('');

  const openModal = (code: string) => {
    setCurrentCode(code);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 bg-animate-gradient relative">
        
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10 flex items-center justify-center"
        aria-label="Navigate to index"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </Link>
      <header className="p-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          {/* Animación aplicada al <h1> */}
          <motion.h1
            className="text-3xl font-bold text-gray-100 "
            initial={{ opacity: 0, y: -50 }} // Estado inicial: transparente y desplazado hacia arriba
            animate={{ opacity: 1, y: 0 }}  // Animación: opacidad completa y posición original
            transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de transición
          >
            Animierte Textkomponenten für Remix
          </motion.h1>
     
          <p className="text-lg text-gray-300  mt-10">
          Dies ist ein Beispiel dafür, was ich tun kann, beispielsweise für Remix. Außerdem kann ich Plugins und maßgeschneiderte Module für andere Frameworks, CMS oder reinen nativen Code entwickeln.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {components.map(({ name, Component, code }, index) => (
          <div key={index} className="mb-12 bg-white bg-opacity-80 shadow-lg overflow-hidden sm:rounded-lg transition-all hover:shadow-xl">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl leading-6 font-semibold text-gray-900">{name}</h2>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <Component />
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {/* Aquí podrías agregar un botón para ver el código, etc. */}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
