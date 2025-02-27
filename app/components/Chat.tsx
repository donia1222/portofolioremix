"use client";

import { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { FaRocket, FaPaperPlane } from "react-icons/fa";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./SpaceChat.css";

type Message = {
  role: "system" | "user" | "assistant";
  content: string; // En el caso del assistant, el contenido ya es HTML
};

type ChatResponse = {
  response?: string;
  error?: string;
};

export default function SpaceChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showClearIcon, setShowClearIcon] = useState(false);

  const [availableQuestions, setAvailableQuestions] = useState<string[]>([]);
  const [visibleQuestions, setVisibleQuestions] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Preguntas de ejemplo
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
  ];

  // Al montar: cargar mensajes de localStorage (si existían) y las preguntas sugeridas
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[];
      setMessages(parsedMessages);
    }
    initializeQuestions();
  }, []);

  // Cada vez que haya nuevos mensajes, guardamos en localStorage y hacemos scroll al final
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Inicializa las preguntas sugeridas (sólo la primera vez)
  const initializeQuestions = () => {
    const initialVisible = allQuestions.slice(0, 3);
    const remaining = allQuestions.slice(3);
    setVisibleQuestions(initialVisible);
    setAvailableQuestions(remaining);
  };

  // Función para hacer scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Envía el mensaje del usuario y obtiene la respuesta del servidor
  const sendMessage = async (messageContent: string) => {
    setIsLoading(true);

    // Agregamos el mensaje del usuario
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: messageContent },
    ];

    // Tomamos los últimos 10 mensajes para el contexto
    const lastMessages = newMessages.slice(-10);

    // Agregamos un mensaje "system" con el prompt general
    const messagesToSend: Message[] = [
      {
        role: "system",
        content: `Hallo! Willkommen bei Lweb.ch, wo wir maßgeschneiderte Lösungen für die Erstellung von Websites, Online-Shops, mobilen Anwendungen und vieles mehr anbieten. Hier sind einige Themen, zu denen ich dir detaillierte Informationen geben kann:
   
1. **Erstellung von maßgeschneiderten Websites**: Bei Lweb.ch erstellen wir maßgeschneiderte Websites, die du vollständig personalisieren kannst, ohne Programmierkenntnisse zu benötigen. Schon ab 990 CHF kannst du eine Website mit einem benutzerfreundlichen Admin-Panel erhalten, in dem du Bilder, Texte, Farben und vieles mehr anpassen kannst.
    
2. **Online-Shops (E-Commerce)**: Wusstest du, dass du schon ab 2450 CHF deinen eigenen Online-Shop haben kannst? Wir bieten alle nötigen Funktionen, von Inventarverwaltung bis zu sicheren Zahlungsmethoden und automatisierten Versandprozessen.
        
3. **Integration von Künstlicher Intelligenz (KI) und Chatbots**: Wir nutzen Technologien wie ChatGPT, um den Kundenservice zu automatisieren und rund um die Uhr Unterstützung anzubieten.
        
4. **Entwicklung mit Joomla**: Joomla ermöglicht die Erstellung dynamischer, SEO-freundlicher Websites, die leicht erweiterbar sind.
        
5. **Entwicklung von mobilen Anwendungen (React Native)**: Mit React Native entwickeln wir hochwertige Apps für iOS und Android mit einer einzigen Codebasis.
        
6. **Hosting und Domainverwaltung (Hostpoint)**: Mit Hostpoint garantieren wir, dass deine Website auf zuverlässigen, sicheren Servern gehostet wird.
        
7. **SEO und Website-Leistung**: Wir optimieren deine Website für Suchmaschinen, um bessere Platzierungen und mehr organischen Traffic zu erzielen.
        
8. **Kontinuierliche Unterstützung und Wartung**: Auch nach dem Launch deiner Website stehen wir dir mit Updates, Sicherheitsverbesserungen und technischem Support zur Seite.
        
9. **Über den Gründer, Roberto Salvador**: Roberto Salvador hat seit 2019 fünf Anwendungen veröffentlicht und mehr als 25 Webseiten entwickelt. Er ist Experte in modernen Technologien wie React Native, Astro, Next.js, Remix, JavaScript, TypeScript, CSS und Tailwind.
        
Zusätzlich bieten wir kostenlose Testversionen an. **kurze und prägnante Antworten**

**Kontakt**:
- 📧 E-Mail: <a href="mailto:info@lweb.ch" class="custom-link">info@lweb.ch</a>
- 📞 Telefon: <a href="tel:0817501911" class="custom-link">0817501911</a>
- 🏢 Adresse: <a href="https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+9,+9475+Sevelen,+Schweiz" target="_blank" class="custom-link">Bahnhofstrasse 9, 9475 Sevelen, Schweiz 🇨🇭</a>
- 🌐 Website: <a href="http://www.lweb.ch" class="custom-link">www.lweb.ch</a>
- Weitere Infos: <a href="https://www.lweb.ch/webs" class="custom-link">www.lweb.ch/webs</a> | <a href="https://www.lweb.ch/apps" class="custom-link">www.lweb.ch/apps</a> | <a href="https://www.lweb.ch/ki-losungen" class="custom-link">www.lweb.ch/ki-losungen</a>`,
      },
      ...lastMessages,
    ];

    // Llamamos al endpoint /chat
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messagesToSend }),
    });

    const data: ChatResponse = await response.json();

    if (data.response) {
      // Convertimos de Markdown a HTML y sanitizamos el resultado
      const htmlFromMarkdown = await marked(data.response);
      const sanitizedHTML = DOMPurify.sanitize(htmlFromMarkdown);

      // Agregamos la respuesta del bot con el HTML convertido
      const updatedMessages: Message[] = [
        ...newMessages,
        { role: "assistant", content: sanitizedHTML },
      ];

      setMessages(updatedMessages);
      setInput("");
      setShowClearIcon(true);
    } else {
      console.error(data.error);
    }

    setIsLoading(false);
  };

  // Cuando el usuario hace clic en una pregunta de ejemplo
  const handleQuestionClick = (question: string) => {
    sendMessage(question);
    const newVisible = visibleQuestions.filter((q) => q !== question);
    if (availableQuestions.length > 0) {
      const [nextQ, ...remainQ] = availableQuestions;
      newVisible.push(nextQ);
      setAvailableQuestions(remainQ);
    }
    setVisibleQuestions(newVisible);
  };

  // Función para limpiar el chat
  const clearChat = () => {
    setMessages([]);
    setShowClearIcon(false);
    localStorage.removeItem("chatMessages");
  };

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all"
        >
          <FaRocket className="h-6 w-6" />
        </button>
      ) : (
        <div
          className="fixed top-0 left-0 w-full h-screen md:bottom-4 md:right-4 md:top-auto md:left-auto md:w-[28rem] md:h-[80vh] bg-gray-900 shadow-2xl rounded-lg flex flex-col overflow-hidden z-50 border border-indigo-500 transform translate-y-0 transition-transform duration-500"
        >
          {/* Header */}
          <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold flex items-center">
              <FaRocket className="mr-2" /> Lweb KI-Chat
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-indigo-800 p-1 rounded-full transition-all"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          {/* Contenedor de mensajes */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-[url('/placeholder.svg?height=500&width=500')] bg-cover">
            {messages.length === 0 ? (
              <div className="space-y-2">
                {visibleQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="block w-full text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text px-4 py-2 rounded-full transition-all hover:text-gray-400"
                    onClick={() => handleQuestionClick(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex flex-col max-w-[75%]">
                    <p
                      className={`text-xs mb-1 ${
                        msg.role === "user" ? "text-indigo-300" : "text-gray-400"
                      } opacity-75`}
                    >
                      {msg.role === "user" ? "User" : "Bot"}
                    </p>

                    {msg.role === "assistant" ? (
                      <div
                        className="px-4 py-2 rounded-lg break-words bg-gray-700 text-gray-200"
                        dangerouslySetInnerHTML={{ __html: msg.content }}
                      />
                    ) : (
                      <div
                        className={`px-4 py-2 rounded-lg break-words ${
                          msg.role === "user"
                            ? "bg-indigo-600 text-white"
                            : "bg-green-700 text-gray-200"
                        }`}
                      >
                        {msg.content}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input y botón para enviar mensaje */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center border-t border-indigo-800"
          >
            <textarea
              name="message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
                scrollToBottom();
              }}
              className="flex-1 px-4 py-2 bg-gray-800 text-white border-none outline-none placeholder-gray-500 resize-none overflow-hidden"
              placeholder="Ihre Nachricht hier ..."
              required
              disabled={isLoading}
              rows={1}
            />
            {showClearIcon && (
              <button
                onClick={clearChat}
                className="text-white hover:bg-red-600 p-2 rounded-full transition-all mr-2"
              >
                <AiOutlineDelete className="h-6 w-6" />
              </button>
            )}
            <button
              type="submit"
              className="px-4 mr-5 py-2 text-indigo-200 transition-all flex items-center justify-center rounded-[20px]"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              ) : (
                <FaPaperPlane className="h-5 w-5" />
              )}
              {isLoading ? "Denken..." : ""}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
