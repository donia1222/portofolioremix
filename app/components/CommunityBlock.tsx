import { FiGlobe, FiCpu, FiMonitor, FiShoppingCart } from "react-icons/fi"; // Importamos los nuevos iconos
import { Link } from "@remix-run/react"; // Importar Link de Remix para la navegación

const CommunityBlock = () => {
  return (
    <section className="w-full py-24 bg-gray-900 text-white  "> {/* Eliminamos cualquier padding top */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 md:px-12 lg:px-24 w-full max-w-[1440px]">
        
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 mr-10">
          <h2 className="text-5xl font-bold ml-9 ">Aktuelle Neuigkeiten</h2> {/* Título en alemán */}
          <p className="text-xl mt-6 text-gray-400 ml-9">
            Bleiben Sie auf dem Laufenden mit den neuesten Updates und Entwicklungen unseres Unternehmens.
          </p>
        </div>

        {/* Enlaces con iconos a la derecha */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4">
            <FiGlobe className="text-4xl text-blue-400" /> {/* Ícono de sitio web */}
            <div>
              <Link
                to="/blog#low-cost-homepage-ab-290-chf"
                className="text-xl text-blue-200 hover:text-white flex items-center"
              >
                Reservierungssystem <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
              <p className="text-gray-400">Reservierungssystem: HTML, CSS , JavaScript, PHP, MySQL.</p>
            </div>
          </div>

  

          <div className="flex items-center space-x-4">
            <FiMonitor className="text-4xl text-blue-400" /> {/* Ícono de pantalla para web design */}
            <div>
              <Link
                to="/blog#animierte-und-dynamische-webseiten-im-jahr-2025"
                className="text-xl text-blue-200 hover:text-white flex items-center"
              >
                Dynamische Webseiten <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
              <p className="text-gray-400">Entdecken Sie die Zukunft von dynamischen und animierten Webseiten.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FiShoppingCart className="text-4xl text-blue-400" /> {/* Ícono de carrito de compras */}
            <div>
              <Link
                to="/blog#online-shop-ab-1450-chf"
                className="text-xl text-blue-200 hover:text-white flex items-center"
              >
                Online Shop <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
              <p className="text-gray-400">Starten Sie Ihren eigenen Online-Shop ab nur 1450 CHF.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunityBlock;
