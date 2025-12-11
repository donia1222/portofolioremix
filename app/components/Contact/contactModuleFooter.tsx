"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Github, X, Linkedin, MessageSquare, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "~/context/LanguageContext"

// Modal component with animations
const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  closeText = "Close",
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
  closeText?: string
}) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-auto"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="text-base text-gray-700 dark:text-gray-300">{content}</div>

            <button
              onClick={onClose}
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
            >
              {closeText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Custom Button component with animations
const Button = ({
  children,
  className = "",
  icon,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode
}) => {
  return (
    <motion.button
      className={`flex items-center justify-center px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  )
}

// Contact Card component
const ContactCard = ({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
}) => {
  return (
    <motion.div
      className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">{icon}</div>
      <div>
        <p className="text-sm font-medium text-blue-300">{title}</p>
        {href ? (
          <a href={href} className="text-white hover:text-blue-400 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </motion.div>
  )
}

// Function to handle vCard download
const handleDownloadVCard = () => {
  const vCardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:LWEB Schweiz",
    "ORG:LWEB Schweiz",
    "TITLE:Web Development",
    "TEL;TYPE=WORK,VOICE:0765608645",
    "ADR;TYPE=WORK:;;Chalberweidstrasse 38;Sevelen;;9475;Schweiz",
    "EMAIL;TYPE=PREF,INTERNET:info@lweb.ch",
    "URL:https://lweb.ch",
    "END:VCARD",
  ].join("\n")

  const blob = new Blob([vCardData], { type: "text/vcard" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "lweb-schweiz.vcf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function ContactModule() {
  const { t } = useLanguage()
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const { name, email, message } = formData

    const mailtoLink = `mailto:info@lweb.ch?subject=Kontakt%20von%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANachricht:%20${encodeURIComponent(message)}`

    window.location.href = mailtoLink
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+41765608645"
    const message = encodeURIComponent(t("whatsappMessage"))
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/lweb-schweiz", "_blank")
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-600 filter blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-teal-600 filter blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("contactTitle")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("contactSubtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
 

                <div className="grid gap-4">
                  <ContactCard icon={<MapPin className="h-5 w-5" />} title={t("address")} value=" 9475 Sevelen, Schweiz🇨🇭" />

                  <ContactCard
                    icon={<Phone className="h-5 w-5" />}
                    title={t("phone")}
                    value="0765608645"
                    href="tel:+410765608645"
                  />

                  <ContactCard
                    icon={<Mail className="h-5 w-5" />}
                    title={t("email")}
                    value="info@lweb.ch"
                    href="mailto:info@lweb.ch"
                  />
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                ></motion.div>

                <AnimatePresence>
                  {isFormOpen && (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="mt-4 space-y-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                          {t("name")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                          {t("email")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                          {t("message")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                        {t("sendMessage")}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
  

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  icon={<MessageSquare className="h-5 w-5" />}
                >
                  WhatsApp
                </Button>

  

                <Button
                  onClick={handleDownloadVCard}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  icon={<Download className="h-5 w-5" />}
                >
                  {t("businessCard")}
                </Button>

                <a
                  href="https://github.com/donia1222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                    icon={<Github className="h-5 w-5" />}
                  >
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex border-t border-gray-700">
            <Button
              onClick={() => setIsImpressumOpen(true)}
              className="w-full bg-transparent hover:bg-gray-700/50 text-gray-400 rounded-none py-3"
            >
              {t("imprint")}
            </Button>
            <div className="w-px bg-gray-700"></div>
            <Button
              onClick={() => setIsDatenschutzOpen(true)}
              className="w-full bg-transparent hover:bg-gray-700/50 text-gray-400 rounded-none py-3"
            >
              {t("privacy")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} LWEB Schweiz. {t("allRightsReserved")}.</p>
        </motion.div>
      </div>

      <Modal
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
        title={t("imprint")}
        closeText={t("close")}
        content={
          <>
            <p>
              <strong>Lweb Schweiz</strong>
            </p>
            <p>Chalberweidstrasse 38, 9475 Sevelen, Schweiz </p>
            <p>
              <strong>Telefon:</strong> 081 750 1911
            </p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@lweb.ch" className="text-blue-600 hover:underline">
                info@lweb.ch
              </a>
            </p>
            <footer className="mt-10 text-sm text-gray-500">
              einige Bilder stammen von{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Freepik
              </a>
            </footer>
          </>
        }
      />

      <Modal
        isOpen={isDatenschutzOpen}
        onClose={() => setIsDatenschutzOpen(false)}
        title={t("privacy")}
        closeText={t("close")}
        content={
          <>
            <p>
              <strong>Datenschutzerklärung von LWEB Schweiz</strong>
            </p>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erklärt, wie wir
              Ihre personenbezogenen Daten sammeln, verwenden und schützen.
            </p>

            <h4 className="font-semibold mt-4">1. Erhebung von Daten</h4>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie mit uns in Kontakt treten, unsere Dienstleistungen in
              Anspruch nehmen oder unsere Website besuchen. Zu den erhobenen Daten gehören unter anderem:
            </p>
            <ul className="list-inside list-disc">
              <li>Name und Vorname</li>
              <li>Kontaktinformationen (E-Mail, Telefon)</li>
              <li>IP-Adresse und Nutzungsdaten unserer Website</li>
            </ul>

            <h4 className="font-semibold mt-4">2. Verwendung der Daten</h4>
            <p>
              Wir verwenden Ihre Daten, um unsere Dienstleistungen zu erbringen, mit Ihnen zu kommunizieren und unsere
              Website zu verbessern. Ihre Daten werden niemals an Dritte verkauft oder weitergegeben.
            </p>

            <h4 className="font-semibold mt-4">3. Schutz der Daten</h4>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem
              Zugriff, Verlust oder Missbrauch zu schützen. Trotzdem können wir keine vollständige Sicherheit
              garantieren.
            </p>

            <h4 className="font-semibold mt-4">4. Ihre Rechte</h4>
            <p>
              Sie haben das Recht, Auskunft über die gespeicherten personenbezogenen Daten zu verlangen, diese zu
              berichtigen oder löschen zu lassen. Für Fragen oder Anfragen zur Datenverarbeitung können Sie uns
              jederzeit kontaktieren.
            </p>

            <h4 className="font-semibold mt-4">5. Änderungen der Datenschutzerklärung</h4>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version ist auf unserer
              Website verfügbar.
            </p>

            <p className="mt-4">Für Fragen oder Anfragen kontaktieren Sie uns bitte unter:</p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@lweb.ch" className="text-blue-600 hover:underline">
                info@lweb.ch
              </a>
            </p>
          </>
        }
      />
    </section>
  )
}
