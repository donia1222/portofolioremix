"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"
import { X, Trash2, SendHorizontal, Loader2, Sparkles } from "lucide-react"
import "./space-chat-dos.css"
import { systemPrompt } from './chatPromptBot'


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
    "Wie funktioniert der KI-Chatbot auf dieser Website?",
    "Welche Vorteile bietet die Integration eines intelligenten Chatbots?",
    "Kann ich die Antworten des Chatbots an meine Bedürfnisse anpassen?",
    "Wie wird das KI-Modell des Chatbots trainiert?",
    "Wie schnell reagiert der Chatbot auf verschiedenen Geräten?",
    "Wie wird die Privatsphäre und Datensicherheit im Chatbot gewährleistet?",
    "Ist der Chatbot in der Lage, mehrere Sprachen und Kontexte zu handhaben?"
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
    const initialVisible = allQuestions.slice(0, 8)
    const remaining = allQuestions.slice(8)
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
          content: systemPrompt,
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
            <X className="space-chat-icon-sl mt-4" />
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

