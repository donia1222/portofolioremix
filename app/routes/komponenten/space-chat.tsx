"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"
import { X, Trash2, SendHorizontal, Loader2, Sparkles } from "lucide-react"
import "./space-chat-dos.css"

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
  const [isOpen, setIsOpen] = useState(true) // Set to true by default when used in the module
  const [isLoading, setIsLoading] = useState(false)
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [showChatButton, setShowChatButton] = useState(false) // Hide the chat button when used in the module

  const [availableQuestions, setAvailableQuestions] = useState<string[]>([])
  const [visibleQuestions, setVisibleQuestions] = useState<string[]>([])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Example questions
  const allQuestions = [
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
  ]

  // Load messages from localStorage on mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages")
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[]
      setMessages(parsedMessages)
    }
    initializeQuestions()
  }, [])

  // Save messages to localStorage and scroll to bottom when messages change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
    scrollToBottom()
  }, [messages])

  // Initialize suggested questions (only for the first time)
  const initializeQuestions = () => {
    const initialVisible = allQuestions.slice(0, 3)
    const remaining = allQuestions.slice(3)
    setVisibleQuestions(initialVisible)
    setAvailableQuestions(remaining)
  }

  // Scroll to the last message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Send user message and get response
  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return

    setIsLoading(true)

    // Add user message
    const newMessages: Message[] = [...messages, { role: "user", content: messageContent }]

    // Take last 10 messages for context
    const lastMessages = newMessages.slice(-10)

    // Add system message (general prompt)
    const messagesToSend: Message[] = [
      {
        role: "system",
        content: `Hallo! Willkommen bei Lweb.ch, wo wir maßgeschneiderte Lösungen für die Erstellung von Websites, Online-Shops, mobilen Anwendungen und vieles mehr anbieten. Hier sind einige Themen, zu denen ich dir detaillierte Informationen geben kann:
   
        1. **Erstellung von maßgeschneiderten Websites**: Bei Lweb.ch erstellen wir maßgeschneiderte Websites, die du vollständig personalisieren kannst, ohne Programmierkenntnisse zu benötigen. Schon ab 990 CHF kannst du eine Website mit einem benutzerfreundlichen Admin-Panel erhalten, in dem du Bilder, Texte, Farben und vieles mehr anpassen kannst. Wir geben dir die Werkzeuge an die Hand, um sicherzustellen, dass deine Website deiner Vision entspricht und du sie selbstständig verwalten kannst, ohne von Entwicklern abhängig zu sein.
    
        2. **Online-Shops (E-Commerce)**: Wusstest du, dass du schon ab 2450 CHF deinen eigenen Online-Shop haben kannst? Wir sind auf die Erstellung von Online-Shops spezialisiert, die alle Funktionen bieten, die du brauchst: von der Inventarverwaltung bis hin zur Implementierung sicherer Zahlungsmethoden und der Automatisierung von Versandprozessen. Wir verwenden fortschrittliche Tools wie EasyStore von JoomShaper für Joomla, das eine effiziente Verwaltung und umfassende Anpassung des Designs deines Shops ermöglicht.
        
        3. **Integration von Künstlicher Intelligenz (KI) und Chatbots**: Wir implementieren Lösungen für künstliche Intelligenz in Websites, um die Benutzererfahrung zu verbessern. Wir nutzen Technologien wie ChatGPT, um den Kundenservice zu automatisieren, häufige Fragen zu beantworten und rund um die Uhr Unterstützung anzubieten. Mit unserem System können Benutzer in Echtzeit präzise und kontextbezogene Antworten erhalten, was die Interaktion und Kundenzufriedenheit verbessert. Außerdem kann der Chatbot aus jeder Konversation lernen und sich an die spezifischen Bedürfnisse deines Unternehmens anpassen.
        
        4. **Entwicklung mit Joomla**: Wir sind Experten für Joomla, ein leistungsstarkes Content-Management-System (CMS), das die Erstellung dynamischer Websites mit einer benutzerfreundlichen Oberfläche erleichtert. Joomla bietet zahlreiche Vorteile wie Flexibilität, einfache Bedienbarkeit und die Möglichkeit, Erweiterungen und Module zu integrieren. Es ist auch sehr SEO-freundlich, was bedeutet, dass deine Website in Suchmaschinen besser sichtbar wird. Zudem ist Joomla sicher und erhält regelmäßige Updates, um deine Website vor Schwachstellen zu schützen.
        
        5. **Entwicklung von mobilen Anwendungen (React Native)**: Wir sind spezialisiert auf die Erstellung mobiler Anwendungen für iOS und Android unter Verwendung von React Native, einer Technologie, die es ermöglicht, qualitativ hochwertige Anwendungen mit nur einer Codebasis zu entwickeln. Dies reduziert die Entwicklungszeit und -kosten. Unsere Apps sind schnell, reaktionsschnell und bieten eine hervorragende Benutzererfahrung. Außerdem können wir erweiterte Funktionen wie Push-Benachrichtigungen, In-App-Käufe und Abonnements integrieren, sodass deine App bereit für den Markt ist.
        
        6. **Hosting und Domainverwaltung (Hostpoint)**: Wir arbeiten mit Hostpoint, dem führenden Hosting-Anbieter in der Schweiz, um sicherzustellen, dass deine Website auf zuverlässigen und sicheren Servern gehostet wird. Wir kümmern uns um alles, vom Domainkauf bis hin zur Verwaltung skalierbarer Datenbanken, die für Leistung und Sicherheit optimiert sind. Mit Hostpoint wird deine Website eine hohe Verfügbarkeit, optimale Leistung und Schutz vor Cyberbedrohungen haben.
        
        7. **SEO und Website-Leistung**: Wir wissen, wie wichtig es ist, dass deine Website nicht nur gut aussieht, sondern auch in Suchmaschinen gut platziert ist. Deshalb setzen wir SEO-Optimierungsstrategien um, um deine Sichtbarkeit bei Google zu verbessern und organischen Traffic zu generieren. Wir sorgen dafür, dass deine Website in Bezug auf Geschwindigkeit, Benutzerfreundlichkeit und mobile Kompatibilität optimiert ist, was Schlüsselfaktoren für eine gute Platzierung in Suchmaschinen sind.
        
        8. **Kontinuierliche Unterstützung und Wartung**: Unser Service endet nicht, wenn deine Website oder App online ist. Wir bieten kontinuierlichen Support, um sicherzustellen, dass alles reibungslos funktioniert. Dazu gehören Updates, Sicherheitsverbesserungen und Anpassungen an die neuen Anforderungen deines Unternehmens. Du kannst dich darauf verlassen, dass wir technische Probleme lösen oder Änderungen vornehmen, die du benötigst.

        9. **Über den Gründer, Roberto Salvador**: Roberto Salvador hat seit 2019 fünf Anwendungen veröffentlicht und mehr als 25 Webseiten entwickelt. Er ist spezialisiert auf moderne Technologien wie React Native, Astro, Next.js, Remix, JavaScript, TypeScript, CSS und Tailwind. Zudem kann er Projekte auf Plattformen wie Vercel und GCP (Google Cloud Platform) effizient deployen. Täglich widmet er 4 bis 5 Stunden dem autodidaktischen Lernen und der Praxis, während er seit 2010 erfolgreich ein anderes Geschäft führt.

        Zusätzlich bieten wir kostenlose Testversionen an, damit du die Qualität unserer Arbeit bewerten kannst, bevor du dich verpflichtest. Wenn du ein Projekt im Kopf hast oder einfach nur deine Optionen erkunden möchtest, helfe ich dir gerne weiter und zeige dir, wie wir zusammenarbeiten können, um deine Ideen zu verwirklichen.
        **kurze und prägnante Antworten**
        
    
    **Kontakt**:
    - 📧 E-Mail: <a href="mailto:info@lweb.ch" class="custom-link">info@lweb.ch</a>
    - 📞 Telefon: <a href="tel:0817501911" class="custom-link">0817501911</a>
    - 🏢 Adresse: <a href="https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+9,+9475+Sevelen,+Schweiz" target="_blank" class="custom-link">Bahnhofstrasse 9, 9475 Sevelen, Schweiz 🇨🇭</a>
    - 🌐 Website lweb: <a href="http://www.lweb.ch" class="custom-link">www.lweb.ch</a>
    - Website mehr info: <a href="https://www.lweb.ch/webs" class="custom-link">www.lweb.ch/webs</a>
    - Apps mehr info: <a href="https://www.lweb.ch/apps" class="custom-link">www.lweb.ch/apps</a>
    - KI Lösungen: <a href="https://www.lweb.ch/ki-losungen" class="custom-link">www.lweb.ch/ki-losungen</a>
    `,
      },
      ...lastMessages,
    ]

    try {
      // Call the /chat endpoint
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesToSend }),
      })

      const data: ChatResponse = await response.json()

      if (data.response) {
        // Convert Markdown to HTML
        const htmlFromMarkdown = await marked(data.response)

        // Sanitize HTML
        const sanitizedHTML = DOMPurify.sanitize(htmlFromMarkdown)

        // Add bot response with converted HTML
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

  // Handle click on example question
  const handleQuestionClick = (question: string) => {
    sendMessage(question)

    // Update visible questions
    const newVisible = visibleQuestions.filter((q) => q !== question)

    if (availableQuestions.length > 0) {
      const [nextQ, ...remainQ] = availableQuestions

      newVisible.push(nextQ)
      setAvailableQuestions(remainQ)
    }

    setVisibleQuestions(newVisible)
  }

  // Clear the entire chat
  const clearChat = () => {
    setMessages([])
    setShowClearIcon(false)
    localStorage.removeItem("chatMessages")
  }

  // Auto-resize textarea
  const autoResizeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target
    setInput(target.value)

    // Mantener una altura fija
    target.style.height = "40px"
    target.style.overflowY = "auto"
  }

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowChatButton(false)
      } else {
        // Scrolling up
        setShowChatButton(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Efecto para desactivar el zoom
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
      {/* Chat button */}
      {!isOpen && showChatButton && (
        <button onClick={() => setIsOpen(true)} className="space-chat-button">
          <Sparkles className="space-chat-icon" />
        </button>
      )}

      {/* Chat window */}
      <div className={`space-chat-window ${isOpen ? "space-chat-open" : "space-chat-closed"}`}>
        {/* Header */}
        <div className="space-chat-header">
          <h2 className="space-chat-title">
            <Sparkles className="space-chat-title-icon" /> Lweb KI-Chat
          </h2>
          <button onClick={() => setIsOpen(false)} className="space-chat-close-btn" aria-label="Close chat">
            <X className="space-chat-icon-sm" />
          </button>
        </div>

        {/* Messages container */}
        <div className="space-chat-messages">
          {messages.length === 0 ? (
            // Show suggested questions if no messages in chat
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
            // Map messages
            messages.map((msg, index) => (
              <div
                key={index}
                className={`space-chat-message-container ${
                  msg.role === "user" ? "space-chat-user" : "space-chat-assistant"
                }`}
              >
                <div
                  className={`space-chat-message-wrapper ${
                    msg.role === "user" ? "space-chat-message-user" : "space-chat-message-assistant"
                  }`}
                >
                  <span
                    className={`space-chat-message-sender ${
                      msg.role === "user" ? "space-chat-sender-user" : "space-chat-sender-assistant"
                    }`}
                  >
                    {msg.role === "user" ? "Sie" : "Lweb Assistant"}
                  </span>

                  {/* Message rendering */}
                  {msg.role === "assistant" ? (
                    // Use HTML stored in the response
                    <div
                      className="space-chat-message space-chat-message-html"
                      dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                  ) : (
                    // User message (plain text)
                    <div className="space-chat-message space-chat-message-text">{msg.content}</div>
                  )}
                </div>
              </div>
            ))
          )}
          {/* Añadir este div al final de los mensajes */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input and send button */}
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

