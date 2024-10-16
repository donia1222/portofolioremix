'use client'

import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import './SpaceChat.css';  // Importamos el archivo CSS

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatResponse = {
  response?: string;
  error?: string;
};

export default function SpaceChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Referencia para el autoscroll

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[];
      setMessages(parsedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    scrollToBottom(); // Llama a la función de scroll cada vez que los mensajes cambien
  }, [messages]);

  // Función para hacer scroll hacia el final del chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    const lastMessages = newMessages.slice(-10);
    const messagesToSend: Message[] = [
      {
        role: "system",
        content: `Hallo! Willkommen bei Lweb.ch, wo wir maßgeschneiderte Lösungen für die Erstellung von Websites, Online-Shops, mobilen Anwendungen und vieles mehr anbieten. Hier sind einige Themen, zu denen ich dir detaillierte Informationen geben kann:
   
        1. **Erstellung von maßgeschneiderten Websites**: Bei Lweb.ch erstellen wir maßgeschneiderte Websites, die du vollständig personalisieren kannst, ohne Programmierkenntnisse zu benötigen. Schon ab 290 CHF kannst du eine Website mit einem benutzerfreundlichen Admin-Panel erhalten, in dem du Bilder, Texte, Farben und vieles mehr anpassen kannst. Wir geben dir die Werkzeuge an die Hand, um sicherzustellen, dass deine Website deiner Vision entspricht und du sie selbstständig verwalten kannst, ohne von Entwicklern abhängig zu sein.
    
        2. **Online-Shops (E-Commerce)**: Wusstest du, dass du schon ab 1450 CHF deinen eigenen Online-Shop haben kannst? Wir sind auf die Erstellung von Online-Shops spezialisiert, die alle Funktionen bieten, die du brauchst: von der Inventarverwaltung bis hin zur Implementierung sicherer Zahlungsmethoden und der Automatisierung von Versandprozessen. Wir verwenden fortschrittliche Tools wie EasyStore von JoomShaper für Joomla, das eine effiziente Verwaltung und umfassende Anpassung des Designs deines Shops ermöglicht.
        
        3. **Integration von Künstlicher Intelligenz (KI) und Chatbots**: Wir implementieren Lösungen für künstliche Intelligenz in Websites, um die Benutzererfahrung zu verbessern. Wir nutzen Technologien wie ChatGPT, um den Kundenservice zu automatisieren, häufige Fragen zu beantworten und rund um die Uhr Unterstützung anzubieten. Mit unserem System können Benutzer in Echtzeit präzise und kontextbezogene Antworten erhalten, was die Interaktion und Kundenzufriedenheit verbessert. Außerdem kann der Chatbot aus jeder Konversation lernen und sich an die spezifischen Bedürfnisse deines Unternehmens anpassen.
        
        4. **Entwicklung mit Joomla**: Wir sind Experten für Joomla, ein leistungsstarkes Content-Management-System (CMS), das die Erstellung dynamischer Websites mit einer benutzerfreundlichen Oberfläche erleichtert. Joomla bietet zahlreiche Vorteile wie Flexibilität, einfache Bedienbarkeit und die Möglichkeit, Erweiterungen und Module zu integrieren. Es ist auch sehr SEO-freundlich, was bedeutet, dass deine Website in Suchmaschinen besser sichtbar wird. Zudem ist Joomla sicher und erhält regelmäßige Updates, um deine Website vor Schwachstellen zu schützen.
        
        5. **Entwicklung von mobilen Anwendungen (React Native)**: Wir sind spezialisiert auf die Erstellung mobiler Anwendungen für iOS und Android unter Verwendung von React Native, einer Technologie, die es ermöglicht, qualitativ hochwertige Anwendungen mit nur einer Codebasis zu entwickeln. Dies reduziert die Entwicklungszeit und -kosten. Unsere Apps sind schnell, reaktionsschnell und bieten eine hervorragende Benutzererfahrung. Außerdem können wir erweiterte Funktionen wie Push-Benachrichtigungen, In-App-Käufe und Abonnements integrieren, sodass deine App bereit für den Markt ist.
        
        6. **Hosting und Domainverwaltung (Hostpoint)**: Wir arbeiten mit Hostpoint, dem führenden Hosting-Anbieter in der Schweiz, um sicherzustellen, dass deine Website auf zuverlässigen und sicheren Servern gehostet wird. Wir kümmern uns um alles, vom Domainkauf bis hin zur Verwaltung skalierbarer Datenbanken, die für Leistung und Sicherheit optimiert sind. Mit Hostpoint wird deine Website eine hohe Verfügbarkeit, optimale Leistung und Schutz vor Cyberbedrohungen haben.
        
        7. **SEO und Website-Leistung**: Wir wissen, wie wichtig es ist, dass deine Website nicht nur gut aussieht, sondern auch in Suchmaschinen gut platziert ist. Deshalb setzen wir SEO-Optimierungsstrategien um, um deine Sichtbarkeit bei Google zu verbessern und organischen Traffic zu generieren. Wir sorgen dafür, dass deine Website in Bezug auf Geschwindigkeit, Benutzerfreundlichkeit und mobile Kompatibilität optimiert ist, was Schlüsselfaktoren für eine gute Platzierung in Suchmaschinen sind.
        
        8. **Kontinuierliche Unterstützung und Wartung**: Unser Service endet nicht, wenn deine Website oder App online ist. Wir bieten kontinuierlichen Support, um sicherzustellen, dass alles reibungslos funktioniert. Dazu gehören Updates, Sicherheitsverbesserungen und Anpassungen an die neuen Anforderungen deines Unternehmens. Du kannst dich darauf verlassen, dass wir technische Probleme lösen oder Änderungen vornehmen, die du benötigst.

        9. **Über den Gründer, Roberto Salvador**: Roberto Salvador hat seit 2019 fünf Anwendungen veröffentlicht und mehr als 25 Webseiten entwickelt. Er ist spezialisiert auf moderne Technologien wie React Native, Astro, Next.js, Remix, JavaScript, TypeScript, CSS und Tailwind. Zudem kann er Projekte auf Plattformen wie Vercel und GCP (Google Cloud Platform) effizient deployen. Täglich widmet er 4 bis 5 Stunden dem autodidaktischen Lernen und der Praxis, während er seit 2010 erfolgreich ein anderes Geschäft führt.

        Zusätzlich bieten wir kostenlose Testversionen an, damit du die Qualität unserer Arbeit bewerten kannst, bevor du dich verpflichtest. Wenn du ein Projekt im Kopf hast oder einfach nur deine Optionen erkunden möchtest, helfe ich dir gerne weiter und zeige dir, wie wir zusammenarbeiten können, um deine Ideen zu verwirklichen.
        
    
    **Kontakt**:
    - 📧 E-Mail: <a href="mailto:info@lweb.ch" class="custom-link">info@lweb.ch</a>
    - 📞 Telefon: <a href="tel:0817501911" class="custom-link">0817501911</a>
    - 🏢 Adresse: <a href="https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+9,+9475+Sevelen,+Schweiz" target="_blank" class="custom-link">Bahnhofstrasse 9, 9475 Sevelen, Schweiz 🇨🇭</a>
    - 🌐 Website: <a href="http://www.lweb.ch" class="custom-link">www.lweb.ch</a>
    `,
      },
      ...lastMessages,
    ];

    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messagesToSend }),
    });

    const data: ChatResponse = await response.json();

    if (data.response) {
      const updatedMessages: Message[] = [
        ...newMessages,
        { role: "assistant", content: data.response },
      ];
      setMessages(updatedMessages);
      setInput("");
    } else {
      console.error(data.error);
    }
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
        <div className="fixed bottom-4 right-4 w-96 md:w-[28rem] h-[500px] bg-gray-900 shadow-2xl rounded-lg flex flex-col overflow-hidden transition-all z-50 border border-indigo-500">
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

          <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-[url('/placeholder.svg?height=500&width=500')] bg-cover">
            {messages.length === 0 ? (
              <p className="text-gray-400 text-center">Willkommen bei lweb.ch! Wie können wir Ihnen helfen?</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg ${msg.role === "user" ? "bg-indigo-600 text-white" : msg.role === "assistant" ? "bg-gray-700 text-gray-200" : "bg-green-700 text-gray-200"}`}>
                    {msg.role === "assistant" ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                    ) : (
                      <span>{msg.content}</span>
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="flex border-t border-indigo-800">
            <input
              type="text"
              name="message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-800 text-white border-none outline-none placeholder-gray-500"
              placeholder="Ihre Nachricht hier ..."
              required
            />
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center">
              <FaRocket className="mr-2" /> Senden
            </button>
          </form>
        </div>
      )}
    </>
  );
}
