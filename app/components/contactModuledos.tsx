"use client"

import type React from "react"
import { useState } from "react"
import handleDownloadVCard from "~/components/downloadVCard"

// Custom Button component definition
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

// Custom icons
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
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
    const phoneNumber = "+41765608645"
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
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-teal-100">
            Kontaktieren Sie LWEB Schweiz
          </h2>
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
                  icon={<WhatsAppIcon />}
                >
                  WhatsApp Kontakt
                </Button>
                <Button
                  onClick={handleDownloadVCard}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out transform hover:scale-105"
                  icon={<DownloadIcon />}
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

