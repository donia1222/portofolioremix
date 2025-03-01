"use client"

import React, { useState, useEffect, useRef, ChangeEvent } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"
import {
  X,
  Trash2,
  SendHorizontal,
  Loader2,
  Sparkles,
  Plus,
  ChevronLeft,
  ChevronRight,
  Minus,
} from "lucide-react"
import "../css/space-chat.css"
import { systemPrompt } from "./chatPrompt"

type Message = {
  role: "system" | "user" | "assistant"
  content: string
}

type ChatResponse = {
  response?: string
  error?: string
}

export default function SpaceChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [showChatButton, setShowChatButton] = useState(true)

  const [availableQuestions, setAvailableQuestions] = useState<string[]>([])
  const [visibleQuestions, setVisibleQuestions] = useState<string[]>([])

  // Estados para el flujo de cita
  const [appointmentStep, setAppointmentStep] = useState(0)
  const [appointmentService, setAppointmentService] = useState("")
  const [appointmentName, setAppointmentName] = useState("")
  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  // Estado para mostrar/ocultar el calendario
  const [calendarOpen, setCalendarOpen] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Array de preguntas de ejemplo
  const allQuestions = [
    "Einen Termin über WhatsApp vereinbaren?", 
    "Erstellen Sie Websites?",
    "Bieten Sie Dienstleistungen zur Entwicklung mobiler Anwendungen an?",
    "Wie funktioniert die künstliche Intelligenz in Ihren Lösungen?",
    "Wie viel kostet es, eine maßgeschneiderte Website zu erstellen?",
    "Welche Technologien verwenden Sie zur Entwicklung von Websites?",
    "Können Sie SEO-optimierte Websites erstellen?",
    "Wie funktioniert die Wartung von Websites nach der Erstellung?",
    "Bieten Sie Integrationen für E-Commerce-Lösungen an?",
    "Können Sie mobile Apps für iOS und Android entwickeln?",
    "Welche Support-Optionen bieten Sie nach der Entwicklung an?",
    "Wie funktioniert der KI-Chatbot auf dieser Website?",
    "Welche Vorteile bietet die Integration eines intelligenten Chatbots?",
    "Kann ich die Antworten des Chatbots an meine Bedürfnisse anpassen?",
    "Wie wird das KI-Modell des Chatbots trainiert?",
    "Wie schnell reagiert der Chatbot auf verschiedenen Geräten?",
    "Wie wird die Privatsphäre und Datensicherheit im Chatbot gewährleistet?",
    "Ist der Chatbot in der Lage, mehrere Sprachen und Kontexte zu handhaben?",
  ]

  useEffect(() => {
    // Cargar mensajes previos del localStorage
    const storedMessages = localStorage.getItem("chatMessages")
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[]
      setMessages(parsedMessages)
    }
    initializeQuestions()
  }, [])

  useEffect(() => {
    // Guardar en localStorage cada vez que cambien los mensajes
    localStorage.setItem("chatMessages", JSON.stringify(messages))
    scrollToBottom()
  }, [messages])

  const initializeQuestions = () => {
    const initialVisible = allQuestions.slice(0, 12)
    const remaining = allQuestions.slice(12)
    setVisibleQuestions(initialVisible)
    setAvailableQuestions(remaining)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Enviar mensaje al servidor
// En la parte de tu SpaceChat.tsx
const sendMessage = async (messageContent: string) => {
  if (!messageContent.trim()) return

  // 1) Convertimos a minúsculas
  const lowerText = messageContent.toLowerCase()

  // 2) Definimos las palabras clave que activan el flujo de cita
  //    (puedes poner "termin über whatsapp vereinbaren", "cita", etc.)
  const appointmentKeywords = [
    "termin vereinbaren",
    "termin über whatsapp",
    "einen termin über whatsapp vereinbaren",
    "termin buchen",
    "termin reservieren",
    "termin vereinbarung",
    "termin anfragen",
        // Inglés
    "appointment",
    "book a meeting",
    "schedule appointment",
        // Español
    "agendar cita",
    "reservar cita",
    "una cita",
    // Italiano
    "prenotare un appuntamento",
    "fissare un appuntamento",
    "appuntamento",
    "prenotazione appuntamento",
    "richiedere un appuntamento",
    // Francés
    "prendre rendez-vous",
    "réserver un rendez-vous",
    "fixer un rendez-vous",
    "demander un rendez-vous",
    "rendez-vous",
    "réserver un créneau",
    "planifier un rendez-vous",
  ]
  

  // 3) Si detectamos alguna de esas palabras, forzamos el flujo
  if (appointmentKeywords.some((kw) => lowerText.includes(kw))) {
    setAppointmentStep(1)
    setInput("") // limpiar el campo
    return // IMPORTANTE: no seguimos para no mandar a GPT
  }

  // 4) Si no, entonces sí mandamos el mensaje a la IA
  setIsLoading(true)
  const newMessages: Message[] = [...messages, { role: "user", content: messageContent }]
  const lastMessages = newMessages.slice(-10)
  const messagesToSend: Message[] = [
    { role: "system", content: systemPrompt },
    ...lastMessages,
  ]

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messagesToSend }),
    })

    const data: ChatResponse = await response.json()

    if (data.response) {
      const htmlFromMarkdown = marked(data.response) as string
      const sanitizedHTML = DOMPurify.sanitize(htmlFromMarkdown)
      const updatedMessages: Message[] = [
        ...newMessages,
        { role: "assistant", content: sanitizedHTML },
      ]
      setMessages(updatedMessages)
      setInput("")
      setShowClearIcon(true)
    } else if (data.error) {
      console.error("Error del servidor:", data.error)
    }
  } catch (error) {
    console.error("Fallo al enviar el mensaje:", error)
  } finally {
    setIsLoading(false)
  }
}


  // Enviar cita a WhatsApp y resetear flujo
  const sendAppointmentRequest = () => {
    // Cambia a tu número
    const whatsappNumber = "+41765608645" 
    // Ajustamos el mensaje para que contenga la fecha en DD-MM-YYYY
    const message = `Hallo, ich möchte einen Termin vereinbaren.
Service: ${appointmentService}
Name: ${appointmentName}
Datum: ${appointmentDate}
Uhrzeit: ${appointmentTime}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    // Reiniciar
    setAppointmentStep(0)
    setAppointmentService("")
    setAppointmentName("")
    setAppointmentDate("")
    setAppointmentTime("")
    setCalendarOpen(false)
  }

  // Detectar clic en pregunta sugerida
  const handleQuestionClick = (question: string) => {
    if (question.includes("Termin über WhatsApp vereinbaren")) {
      setAppointmentStep(1)
      return
    }
    sendMessage(question)
    const newVisible = visibleQuestions.filter((q) => q !== question)
    if (availableQuestions.length > 0) {
      const [nextQ, ...remainQ] = availableQuestions
      newVisible.push(nextQ)
      setAvailableQuestions(remainQ)
    }
    setVisibleQuestions(newVisible)
  }

  // Borrar todo el chat
  const clearChat = () => {
    setMessages([])
    setShowClearIcon(false)
    localStorage.removeItem("chatMessages")
  }

  // Crecimiento automático del textarea
  const autoResizeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target
    setInput(target.value)
    target.style.height = "40px"
    target.style.overflowY = "auto"
  }

  // Ocultar o mostrar botón del chat según scroll
  useEffect(() => {
    let lastScrollY = window.pageYOffset
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      if (currentScrollY > lastScrollY) {
        setShowChatButton(false)
      } else {
        setShowChatButton(true)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ajustar meta viewport en móvil
  useEffect(() => {
    const metaViewport = document.querySelector("meta[name=viewport]")
    if (metaViewport) {
      metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    }
    return () => {
      if (metaViewport) {
        metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0")
      }
    }
  }, [])

  // Maneja la selección de fecha (ahora en DD-MM-YYYY)
  const handleDateSelect = (selectedDate: string) => {
    setAppointmentDate(selectedDate)
    setCalendarOpen(false)
  }

  // Renderiza formulario de cita
  const renderAppointmentFlow = () => {
    return (
      <div className="appointment-flow">
        <div className="appointment-flow-header">
          <button
            style={{ backgroundColor: "#ef4444", marginRight: "0.5rem" }}
            onClick={() => {
              setAppointmentStep(0)
              setCalendarOpen(false)
            }}
          >
            Termin abbrechen
          </button>
          {/* Botón 'Zurück': retrocede un paso si estamos en un step mayor a 1 */}
          {appointmentStep > 1 && (
            <button
              style={{ backgroundColor: "#999" }}
              onClick={() => setAppointmentStep(appointmentStep - 1)}
            >
              Zurück
            </button>
          )}
        </div>

        {appointmentStep === 1 && (
          <div>
            <p>Möchten Sie einen Termin mit Lweb vereinbaren?</p>
            <button onClick={() => setAppointmentStep(2)}>Ja</button>
            <button onClick={() => setAppointmentStep(0)}>Nein</button>
          </div>
        )}
        {appointmentStep === 2 && (
          <div>
            <p>Welcher Service interessiert Sie?</p>
            <button
              onClick={() => {
                setAppointmentService("Website erstellen")
                setAppointmentStep(3)
              }}
            >
              Website erstellen
            </button>
            <button
              onClick={() => {
                setAppointmentService("App erstellen")
                setAppointmentStep(3)
              }}
            >
              App erstellen
            </button>
            <button
              onClick={() => {
                setAppointmentService("Künstliche Intelligenz")
                setAppointmentStep(3)
              }}
            >
              Künstliche Intelligenz
            </button>
            <button
              onClick={() => {
                setAppointmentService("Personalisierte Komponenten")
                setAppointmentStep(3)
              }}
            >
              Personalisierte Komponenten
            </button>
          </div>
        )}
        {appointmentStep === 3 && (
          <div>
            <p>Wie ist Ihr Name?</p>
            <input
              type="text"
              value={appointmentName}
              onChange={(e) => setAppointmentName(e.target.value)}
              placeholder="Ihr Name"
            />
            <button
              onClick={() => {
                if (appointmentName.trim()) setAppointmentStep(4)
              }}
            >
              Weiter
            </button>
          </div>
        )}
        {appointmentStep === 4 && (
          <div>
            <p>Wählen Sie ein Datum :</p>
            <button
              onClick={() => setCalendarOpen(!calendarOpen)}
              aria-label="Kalender öffnen"
              style={{ marginBottom: "1rem" }}
            >
              {calendarOpen ? (
                <Minus style={{ color: "white", fontWeight: "bold" }} />
              ) : (
                <Plus style={{ color: "white", fontWeight: "bold" }} />
              )}
            </button>

            {calendarOpen && <CustomCalendar onDateSelect={handleDateSelect} />}

            {appointmentDate && (
              <div style={{ marginTop: "1rem" }}>
                <strong>Gewähltes Datum:</strong> {appointmentDate}
              </div>
            )}
            {!calendarOpen && (
              <button
                onClick={() => {
                  if (appointmentDate) setAppointmentStep(5)
                }}
                style={{ display: "block", marginTop: "1rem" }}
              >
                Weiter
              </button>
            )}
          </div>
        )}
        {appointmentStep === 5 && (
          <div>
            <p>Wählen Sie eine Uhrzeit:</p>
            <div className="time-slots">
              {[
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
              ].map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setAppointmentTime(time)
                    setAppointmentStep(6)
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        {appointmentStep === 6 && (
          <div>
            <p>Überprüfen Sie Ihre Angaben:</p>
            <p>
              <strong>Service:</strong> {appointmentService}
            </p>
            <p>
              <strong>Name:</strong> {appointmentName}
            </p>
            <p>
              <strong>Datum:</strong> {appointmentDate}
            </p>
            <p>
              <strong>Uhrzeit:</strong> {appointmentTime}
            </p>
            <button onClick={sendAppointmentRequest}>Anfrage senden</button>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Botón flotante para abrir chat */}
      {!isOpen && showChatButton && (
        <button onClick={() => setIsOpen(true)} className="space-chat-button">
          <Sparkles className="space-chat-icon" />
        </button>
      )}

      <div className={`space-chat-window ${isOpen ? "space-chat-open" : "space-chat-closed"}`}>
        <div className="space-chat-header">
          <h2 className="space-chat-title">
            <Sparkles className="space-chat-title-icon" /> Lweb KI-Chat
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="space-chat-close-btn"
            aria-label="Close chat"
          >
            <X className="space-chat-icon-sl mt-4" />
          </button>
        </div>

        {appointmentStep > 0 ? (
          renderAppointmentFlow()
        ) : (
          <>
            <div className="space-chat-messages">
              {messages.length === 0 ? (
                <div className="space-chat-suggestions">
                  <p className="space-chat-help-text">Wie kann ich Ihnen helfen?</p>
                  {visibleQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="space-chat-suggestion-btn"
                      onClick={() => handleQuestionClick(question)}
                      disabled={isLoading}
                    >
                      <span className="space-chat-suggestion-text">{question}</span>
                    </button>
                  ))}
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`space-chat-message-container ${
                      msg.role === "user" ? "space-chat-user" : "space-chat-assistant"
                    }`}
                  >
                    <div
                      className={`space-chat-message-wrapper ${
                        msg.role === "user"
                          ? "space-chat-message-user"
                          : "space-chat-message-assistant"
                      }`}
                    >
                      <span
                        className={`space-chat-message-sender ${
                          msg.role === "user"
                            ? "space-chat-sender-user"
                            : "space-chat-sender-assistant"
                        }`}
                      >
                        {msg.role === "user" ? "Sie" : "Lweb Assistant"}
                      </span>
                      {msg.role === "assistant" ? (
                        <div
                          className="space-chat-message space-chat-message-html"
                          dangerouslySetInnerHTML={{ __html: msg.content }}
                        />
                      ) : (
                        <div className="space-chat-message space-chat-message-text">
                          {msg.content}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="space-chat-form"
            >
              <div className="space-chat-input-container">
                <textarea
                  ref={textareaRef}
                  name="message"
                  value={input}
                  onChange={autoResizeTextarea}
                  className="space-chat-textarea"
                  placeholder="Ihre Nachricht hier ..."
                  required
                  disabled={isLoading}
                  rows={1}
                />
                <button
                  type="submit"
                  className={`space-chat-send-btn ${
                    !input.trim() && !isLoading ? "space-chat-btn-disabled" : ""
                  }`}
                  disabled={!input.trim() || isLoading}
                  aria-label="Senden"
                >
                  {isLoading ? (
                    <Loader2 className="space-chat-icon-sm space-chat-spin" />
                  ) : (
                    <SendHorizontal className="space-chat-icon-sm" />
                  )}
                </button>
              </div>
              {showClearIcon && (
                <button
                  type="button"
                  onClick={clearChat}
                  className="space-chat-clear-btn"
                  aria-label="Chat löschen"
                >
                  <Trash2 className="space-chat-icon-sm" />
                </button>
              )}
            </form>
          </>
        )}
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Componente de calendario más ancho pero menos alto, con formato final DD-MM-YYYY
// ---------------------------------------------------------------------------
type CustomCalendarProps = {
  onDateSelect: (selectedDate: string) => void
}

function CustomCalendar({ onDateSelect }: CustomCalendarProps) {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth()) // 0 = enero

  // Días en alemán (lunes = 0)
  const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]

  const monthFormatter = new Intl.DateTimeFormat("de-DE", { month: "long" })
  const yearFormatter = new Intl.DateTimeFormat("de-DE", { year: "numeric" })

  // Mes anterior
  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1
    let newYear = currentYear
    if (newMonth < 0) {
      newMonth = 11
      newYear = currentYear - 1
    }
    setCurrentMonth(newMonth)
    setCurrentYear(newYear)
  }

  // Mes siguiente
  const handleNextMonth = () => {
    let newMonth = currentMonth + 1
    let newYear = currentYear
    if (newMonth > 11) {
      newMonth = 0
      newYear = currentYear + 1
    }
    setCurrentMonth(newMonth)
    setCurrentYear(newYear)
  }

  // Número de días del mes actual
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Día de la semana del 1 (Sunday=0, Monday=1, etc.)
  let startDay = new Date(currentYear, currentMonth, 1).getDay()
  // Ajuste para que lunes sea 0 en vez de domingo
  if (startDay === 0) {
    startDay = 6
  } else {
    startDay = startDay - 1
  }

  // Celdas en blanco para alinear inicio del mes
  const blankCells = Array.from({ length: startDay }, () => null)

  // Array de días
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Clic en un día
  const handleDayClick = (day: number) => {
    const selectedDateObj = new Date(currentYear, currentMonth, day)
    const dayOfWeek = selectedDateObj.getDay() // 0=Dom, 6=Sáb
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return // No seleccionar fines de semana
    }

    // Formato DD-MM-YYYY
    const dd = String(day).padStart(2, "0")
    const mm = String(currentMonth + 1).padStart(2, "0")
    const yyyy = String(currentYear)
    const selectedDate = `${dd}-${mm}-${yyyy}`

    onDateSelect(selectedDate)
  }

  const monthName = monthFormatter.format(new Date(currentYear, currentMonth))
  const yearName = yearFormatter.format(new Date(currentYear, currentMonth))

  return (
    <div
      style={{
        width: "320px",        // Más ancho
        border: "1px solid #ccc",
        padding: "0.4rem",
        textAlign: "center",
        marginTop: "0.3rem",
        fontSize: "0.875rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.4rem",
        }}
      >
        <button onClick={handlePrevMonth} aria-label="Vorheriger Monat">
          <ChevronLeft />
        </button>
        <h4 style={{ margin: 0, fontSize: "0.95rem" }}>
          {monthName} {yearName}
        </h4>
        <button onClick={handleNextMonth} aria-label="Nächster Monat">
          <ChevronRight />
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginBottom: "0.3rem",
        }}
      >
        {weekDays.map((wd) => (
          <div key={wd} style={{ fontWeight: "bold", textAlign: "center" }}>
            {wd}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          rowGap: "0.2rem",
        }}
      >
        {blankCells.map((_, index) => (
          <div key={`blank-${index}`} />
        ))}
        {daysArray.map((day) => {
          const dateObj = new Date(currentYear, currentMonth, day)
          const dayOfWeek = dateObj.getDay()
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

          const dayStyle: React.CSSProperties = {
            color: isWeekend ? "#aaa" : "#000",
            cursor: isWeekend ? "not-allowed" : "pointer",
            border: "1px solid #ccc",
            borderRadius: "3px",
            textAlign: "center",
            padding: "0.3rem 0",   // Menos alto
          }

          return (
            <div
              key={day}
              style={dayStyle}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
