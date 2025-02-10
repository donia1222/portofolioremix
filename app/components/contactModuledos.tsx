"use client"

import type React from "react"
import { useState } from "react"
import handleDownloadVCard from "~/components/downloadVCard"; 
// Definición del componente Button personalizado
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: React.ReactNode }> = ({
  children,
  className = "",
  icon,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

// Iconos personalizados
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
  </svg>
)


const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default function ContactModule() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const mailtoLink = `mailto:info@lweb.ch?subject=Kontakt%20von%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANachricht:%20${encodeURIComponent(message)}`

    window.location.href = mailtoLink
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+41817501911"
    const message = encodeURIComponent(
      "Hallo! Ich interessiere mich für Ihre Dienstleistungen im Bereich Webseiten und App-Entwicklung. Können wir darüber sprechen?",
    )
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappLink, "_blank")
  }

  const handleLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/company/lweb-schweiz"
    window.open(linkedInUrl, "_blank")
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">Kontaktieren Sie LWEB Schweiz</h2>
          <p className="text-xl text-gray-400">Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen</p>
        </div>

        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-300">Kontaktinformationen</h3>
                  <p className="mt-2 text-base text-gray-300">Bahnhofstrasse 9, 9475 Sevelen, Schweiz 🇨🇭</p>
                </div>
                <div>
                  <p className="text-base text-gray-300">
                    <strong className="text-blue-300">Telefon: </strong>
                    <a href="tel:+41817501911" className="hover:text-blue-400 transition duration-300">
                      081 750 1911
                    </a>
                  </p>
                  <p className="text-base text-gray-300 mt-2">
                    <strong className="text-blue-300">E-Mail: </strong>
                    <a href="mailto:info@lweb.ch" className="hover:text-blue-400 transition duration-300">
                      info@lweb.ch
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out transform hover:scale-105"
                  icon={<PhoneIcon />}
                >
                  WhatsApp Kontakt
                </Button>
                <Button
               onClick={handleDownloadVCard} // Asignar la función de descarga
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out transform hover:scale-105"
                  icon={<LinkedinIcon />}
                >
                  Visitenkarte herunterladen
                </Button>
                <a
                  href="https://github.com/donia1222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white transition duration-300 ease-in-out transform hover:scale-105"
                    icon={<GithubIcon />}
                  >
                    GitHub Profil
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LWEB Schweiz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </section>
  )
}

