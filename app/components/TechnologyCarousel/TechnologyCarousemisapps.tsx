"use client"

// Custom SVG Icons
const DownloadIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const ChevronRightIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

interface App {
  id: number
  name: string
  description: string
  image: string
  link: string
}

const app: App = {
  id: 1,
  name: "Voice Shopping",
  description: "Create Shopping List by Voice.",
  image: "/app-icon-1024x10241x-copia1.png",
  link: "https://speak-list.com",
}

export default function ThreeDCubeAppShowcase() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Neue App <span className="ml-2 text-[#ff69b4] text-4xl md:text-5xl font-extrabold text-center mb-12">iOS</span>
      </h2>

      <div className="relative w-full max-w-md aspect-square">
        <div className="w-full h-full">
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col justify-between transform-gpu">
            <div>
              <img
                src={app.image || "/placeholder.svg"}
                alt={app.name}
                className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg"
              />
              <h3 className="text-3xl font-bold text-white text-center mb-4">{app.name}</h3>
              <p className="text-xl text-indigo-200 text-center mb-8">{app.description}</p>
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-indigo-600 py-3 px-6 rounded-full text-center text-lg mt-10 font-semibold hover:bg-indigo-100 transition-colors duration-300 flex items-center justify-center"
            >
              <DownloadIcon className="w-6 h-6 mr-2" />
              Download App
              <ChevronRightIcon className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
