import { useState } from 'react'
import { motion } from 'framer-motion'
import { Form } from '@remix-run/react'
import { Check, Copy } from 'lucide-react'

const buttons = [
  {
    name: 'Gradient Pulse',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="gradient-pulse"
          className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-pulse"
        >
          Gradient Pulse
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="gradient-pulse"
    className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-pulse"
  >
    Gradient Pulse
  </button>
</Form>`,
  },
  {
    name: 'Neon Glow',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="neon-glow"
          className="px-6 py-3 bg-black text-green-400 font-mono font-bold rounded-md border-2 border-green-400 hover:bg-green-400 hover:text-black transition duration-300 ease-in-out shadow-[0_0_10px_#4ade80]"
        >
          Neon Glow
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="neon-glow"
    className="px-6 py-3 bg-black text-green-400 font-mono font-bold rounded-md border-2 border-green-400 hover:bg-green-400 hover:text-black transition duration-300 ease-in-out shadow-[0_0_10px_#4ade80]"
  >
    Neon Glow
  </button>
</Form>`,
  },
  {
    name: 'Neumorphic',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="neumorphic"
          className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] transition duration-300 ease-in-out"
        >
          Neumorphic
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="neumorphic"
    className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] transition duration-300 ease-in-out"
  >
    Neumorphic
  </button>
</Form>`,
  },
  {
    name: 'Glassmorphism',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <div className="p-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl">
          <button
            type="submit"
            name="action"
            value="glassmorphism"
            className="px-6 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white font-semibold rounded-xl border border-white border-opacity-20 hover:bg-opacity-30 transition duration-300 ease-in-out"
          >
            Glassmorphism
          </button>
        </div>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <div className="p-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl">
    <button
      type="submit"
      name="action"
      value="glassmorphism"
      className="px-6 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white font-semibold rounded-xl border border-white border-opacity-20 hover:bg-opacity-30 transition duration-300 ease-in-out"
    >
      Glassmorphism
    </button>
  </div>
</Form>`,
  },
  {
    name: 'Cyberpunk',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="cyberpunk"
          className="px-6 py-3 bg-yellow-400 text-black font-bold uppercase tracking-wider border-b-4 border-yellow-600 rounded-none hover:bg-yellow-300 active:border-yellow-600 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Cyberpunk
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="cyberpunk"
    className="px-6 py-3 bg-yellow-400 text-black font-bold uppercase tracking-wider border-b-4 border-yellow-600 rounded-none hover:bg-yellow-300 active:border-yellow-600 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  >
    Cyberpunk
  </button>
</Form>`,
  },
  {
    name: 'Minimal Outline',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="minimal-outline"
          className="px-6 py-3 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          Minimal Outline
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="minimal-outline"
    className="px-6 py-3 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
  >
    Minimal Outline
  </button>
</Form>`,
  },
  {
    name: 'Retro Pixel',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="retro-pixel"
          className="px-6 py-3 bg-green-500 text-white font-bold uppercase text-sm tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
        >
          Retro Pixel
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="retro-pixel"
    className="px-6 py-3 bg-green-500 text-white font-bold uppercase text-sm tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
  >
    Retro Pixel
  </button>
</Form>`,
  },
  {
    name: 'Morphing',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="morphing"
          className="group relative px-6 py-3 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
        >
          <span className="absolute right-0 flex items-center justify-start w-10 h-full text-white duration-300 transform translate-x-full group-hover:-translate-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <span className="transition-all duration-300 group-hover:pr-8">Morphing</span>
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="morphing"
    className="group relative px-6 py-3 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
  >
    <span className="absolute right-0 flex items-center justify-start w-10 h-full text-white duration-300 transform translate-x-full group-hover:-translate-x-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
    <span className="transition-all duration-300 group-hover:pr-8">Morphing</span>
  </button>
</Form>`,
  },
  {
    name: '3D Button',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="3d-button"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transform transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
        >
          3D Button
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="3d-button"
    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transform transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
  >
    3D Button
  </button>
</Form>`,
  },
  {
    name: 'Animated Border',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="animated-border"
          className="relative px-6 py-3 font-bold text-black group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
          <span className="relative">Animated Border</span>
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="animated-border"
    className="relative px-6 py-3 font-bold text-black group"
  >
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
    <span className="relative">Animated Border</span>
  </button>
</Form>`,
  },
  {
    name: 'Neon Pulse',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="neon-pulse"
          className="px-6 py-3 bg-black text-white font-semibold rounded-md relative overflow-hidden group"
        >
          <span className="relative z-10">Neon Pulse</span>
          <span className="absolute inset-0 bg-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          <span className="absolute inset-0 bg-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-100"></span>
          <span className="absolute inset-0 bg-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-200"></span>
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="neon-pulse"
    className="px-6 py-3 bg-black text-white font-semibold rounded-md relative overflow-hidden group"
  >
    <span className="relative z-10">Neon Pulse</span>
    <span className="absolute inset-0 bg-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
    <span className="absolute inset-0 bg-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-100"></span>
    <span className="absolute inset-0 bg-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-200"></span>
  </button>
</Form>`,
  },
  {
    name: 'Liquid Fill',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="liquid-fill"
          className="px-6 py-3 bg-transparent text-blue-600 font-semibold border-2 border-blue-600 rounded-md relative overflow-hidden group transition-colors duration-300 ease-in-out hover:text-white"
        >
          <span className="relative z-10">Liquid Fill</span>
          <span className="absolute inset-0 bg-blue-600 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="liquid-fill"
    className="px-6 py-3 bg-transparent text-blue-600 font-semibold border-2 border-blue-600 rounded-md relative overflow-hidden group transition-colors duration-300 ease-in-out hover:text-white"
  >
    <span className="relative z-10">Liquid Fill</span>
    <span className="absolute inset-0 bg-blue-600 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
  </button>
</Form>`,
  },
  {
    name: 'Glitch Effect',
    component: (
      <Form method="post" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          name="action"
          value="glitch-effect"
          className="px-6 py-3 bg-black text-white font-bold relative overflow-hidden group"
        >
          <span className="relative z-10">Glitch Effect</span>
          <span className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-blue-500 transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
        </button>
      </Form>
    ),
    code: `<Form method="post" onSubmit={(e) => e.preventDefault()}>
  <button
    type="submit"
    name="action"
    value="glitch-effect"
    className="px-6 py-3 bg-black text-white font-bold relative overflow-hidden group"
  >
    <span className="relative z-10">Glitch Effect</span>
    <span className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
    <span className="absolute top-0 left-0 w-full h-full bg-blue-500 transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
    <span className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
  </button>
</Form>`,
  },
]


export default function ButtonShowcase() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Modern Button Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-700">{button.name}</h2>
              <div className="flex justify-center mb-4">
                {button.component}
              </div>
              <div className="relative">
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  <code className="text-gray-800">{button.code}</code>
                </pre>
                <button
                  onClick={() => copyCode(button.code, index)}
                  className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  aria-label="Copy code"
                >
                  {copiedIndex === index ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}