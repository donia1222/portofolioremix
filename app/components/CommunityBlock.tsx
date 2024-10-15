import { FiMessageCircle, FiGithub, FiPlayCircle } from "react-icons/fi"; // Importamos los iconos

const CommunityBlock = () => {
  return (
    <section className="w-full py-24 bg-gray-900 text-white pt-60"> {/* Eliminamos cualquier padding top */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 md:px-12 lg:px-24 w-full max-w-[1440px]">
        
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-5xl font-bold">Join the Forge Community</h2>
          <p className="text-xl mt-6 text-gray-400">
            Join a dynamic global network of developers and innovators shaping the frontier of the internet, forging connections and bringing groundbreaking ideas to life.
          </p>
        </div>

        {/* Enlaces con iconos a la derecha */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4">
            <FiMessageCircle className="text-4xl text-blue-400" /> {/* Icono de preguntas técnicas */}
            <div>
              <a href="#" className="text-xl text-blue-200 hover:text-white flex items-center">
                Have technical questions? <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <p className="text-gray-400">Ask a developer in our Discord Community server.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FiGithub className="text-4xl text-blue-400" /> {/* Icono de ayuda extra */}
            <div>
              <a href="#" className="text-xl text-blue-200 hover:text-white flex items-center">
                Looking for some extra help? <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <p className="text-gray-400">Search through our GitHub repositories.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FiPlayCircle className="text-4xl text-blue-400" /> {/* Icono de materiales */}
            <div>
              <a href="#" className="text-xl text-blue-200 hover:text-white flex items-center">
                Looking for materials? <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <p className="text-gray-400">Watch our YouTube tutorials.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunityBlock;
