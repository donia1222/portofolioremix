"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"
import { X, Trash2, SendHorizontal, Loader2, Sparkles } from "lucide-react"
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

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Array de preguntas de ejemplo.
  // Se incluye la opción especial para contactar por WhatsApp.
  const allQuestions = [
    "Kontaktieren Sie uns per WhatsApp?", // Pregunta especial para WhatsApp
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
    "Ist der Chatbot in der Lage, mehrere Sprachen und Kontexte zu handhaben?"
  ]

  // Cargar mensajes guardados en localStorage al montar el componente
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages")
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[]
      setMessages(parsedMessages)
    }
    initializeQuestions()
  }, [])

  // Guardar mensajes en localStorage y desplazar la vista al final cada vez que cambian
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
    scrollToBottom()
  }, [messages])

  // Inicializar preguntas sugeridas: se muestran las primeras 12 y el resto se guarda en availableQuestions
  const initializeQuestions = () => {
    const initialVisible = allQuestions.slice(0, 12)
    const remaining = allQuestions.slice(12)
    setVisibleQuestions(initialVisible)
    setAvailableQuestions(remaining)
  }

  // Desplazar la vista hasta el final del chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Función para enviar el mensaje del usuario y obtener respuesta del servidor
  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return

    setIsLoading(true)

    // Añadir el mensaje del usuario a la lista de mensajes
    const newMessages: Message[] = [...messages, { role: "user", content: messageContent }]

    // Se toman los últimos 10 mensajes para el contexto
    const lastMessages = newMessages.slice(-10)

    // Crear el arreglo de mensajes a enviar (incluye el prompt del sistema)
    const messagesToSend: Message[] = [
      { role: "system", content: systemPrompt },
      ...lastMessages,
    ]

    try {
      // Llamar al endpoint /chat
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesToSend }),
      })

      const data: ChatResponse = await response.json()

      if (data.response) {
        // Convertir la respuesta de Markdown a HTML
        const htmlFromMarkdown = await marked(data.response)

        // Sanitizar el HTML para evitar vulnerabilidades
        const sanitizedHTML = DOMPurify.sanitize(htmlFromMarkdown)

        // Añadir la respuesta del asistente a la lista de mensajes
        const updatedMessages: Message[] = [...newMessages, { role: "assistant", content: sanitizedHTML }]
        setMessages(updatedMessages)
        setInput("")
        setShowClearIcon(true)
      } else if (data.error) {
        console.error(data.error)
      }
    } catch (error) {
      console.error("Failed to send message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Función para abrir WhatsApp con un mensaje predefinido
  const openWhatsApp = () => {
    // Número de WhatsApp en formato internacional sin símbolos (ejemplo: 491234567890)
    const whatsappNumber = "491234567890"
    // Mensaje predefinido en alemán
    const message = "Hallo, ich bin an Ihren Dienstleistungen interessiert"
    // Construir la URL para abrir WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    // Abrir WhatsApp en una nueva pestaña
    window.open(url, "_blank")
  }

  // Manejar el clic en una pregunta de ejemplo
  const handleQuestionClick = (question: string) => {
    // Si la pregunta es la opción de WhatsApp, abrir WhatsApp y no enviar al chat
    if (question.includes("WhatsApp")) {
      openWhatsApp()
      return
    }

    // Enviar la pregunta como mensaje al chat
    sendMessage(question)

    // Actualizar las preguntas visibles: eliminar la pregunta seleccionada
    const newVisible = visibleQuestions.filter((q) => q !== question)
    // Si hay preguntas disponibles, agregar la siguiente a la lista visible
    if (availableQuestions.length > 0) {
      const [nextQ, ...remainQ] = availableQuestions
      newVisible.push(nextQ)
      setAvailableQuestions(remainQ)
    }
    setVisibleQuestions(newVisible)
  }

  // Función para limpiar el chat
  const clearChat = () => {
    setMessages([])
    setShowClearIcon(false)
    localStorage.removeItem("chatMessages")
  }

  // Autoajustar la altura del textarea
  const autoResizeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target
    setInput(target.value)
    // Mantener una altura fija de 40px y overflow auto para el scroll vertical
    target.style.height = "40px"
    target.style.overflowY = "auto"
  }

  // Mostrar/ocultar el botón del chat según el scroll
  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      if (currentScrollY > lastScrollY) {
        // Ocultar botón al hacer scroll hacia abajo
        setShowChatButton(false)
      } else {
        // Mostrar botón al hacer scroll hacia arriba
        setShowChatButton(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Desactivar el zoom en dispositivos móviles
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

  return (
    <>
      {/* Botón para abrir el chat */}
      {!isOpen && showChatButton && (
        <button onClick={() => setIsOpen(true)} className="space-chat-button">
          <Sparkles className="space-chat-icon" />
        </button>
      )}

      {/* Ventana del chat */}
      <div className={`space-chat-window ${isOpen ? "space-chat-open" : "space-chat-closed"}`}>
        {/* Cabecera */}
        <div className="space-chat-header">
          <h2 className="space-chat-title">
            <Sparkles className="space-chat-title-icon" /> Lweb KI-Chat
          </h2>
          <button onClick={() => setIsOpen(false)} className="space-chat-close-btn" aria-label="Close chat">
            <X className="space-chat-icon-sl mt-4" />
          </button>
        </div>

        {/* Contenedor de mensajes */}
        <div className="space-chat-messages">
          {messages.length === 0 ? (
            // Mostrar las preguntas sugeridas si aún no hay mensajes en el chat
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
            // Mostrar cada mensaje del chat
            messages.map((msg, index) => (
              <div
                key={index}
                className={`space-chat-message-container ${msg.role === "user" ? "space-chat-user" : "space-chat-assistant"}`}
              >
                <div className={`space-chat-message-wrapper ${msg.role === "user" ? "space-chat-message-user" : "space-chat-message-assistant"}`}>
                  <span className={`space-chat-message-sender ${msg.role === "user" ? "space-chat-sender-user" : "space-chat-sender-assistant"}`}>
                    {msg.role === "user" ? "Sie" : "Lweb Assistant"}
                  </span>
                  {/* Renderizar el mensaje */}
                  {msg.role === "assistant" ? (
                    <div className="space-chat-message space-chat-message-html" dangerouslySetInnerHTML={{ __html: msg.content }} />
                  ) : (
                    <div className="space-chat-message space-chat-message-text">{msg.content}</div>
                  )}
                </div>
              </div>
            ))
          )}
          {/* Div para desplazar automáticamente al final del chat */}
          <div ref={messagesEndRef} />
        </div>

        {/* Formulario de entrada de mensaje y botón de envío */}
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
              className={`space-chat-send-btn ${!input.trim() && !isLoading ? "space-chat-btn-disabled" : ""}`}
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
            <button type="button" onClick={clearChat} className="space-chat-clear-btn" aria-label="Chat löschen">
              <Trash2 className="space-chat-icon-sm" />
            </button>
          )}
        </form>
      </div>
    </>
  )
}
