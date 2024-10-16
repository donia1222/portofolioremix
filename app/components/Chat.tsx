'use client'

import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";

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
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[];
      setMessages(parsedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    const lastMessages = newMessages.slice(-10);
    const messagesToSend: Message[] = [
      {
        role: "system",
        content: "Responde siempre de manera concisa y directa, enfocándote en proporcionar la información solicitada sin agregar detalles innecesarios.",
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

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all"
      >
        <FaRocket className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 md:w-[28rem] h-[500px] bg-gray-900 shadow-2xl rounded-lg flex flex-col overflow-hidden transition-all z-50 border border-indigo-500">
      <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold flex items-center">
          <FaRocket className="mr-2" /> Lweb Chat
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
          <p className="text-gray-400 text-center">Willkommen im Lweb-Chat. Wie kann ich Ihnen heute helfen?</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white"
                    : msg.role === "assistant"
                    ? "bg-gray-700 text-gray-200"
                    : "bg-green-700 text-gray-200"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={sendMessage} className="flex border-t border-indigo-800">
        <input
          type="text"
          name="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 text-white border-none outline-none placeholder-gray-500"
          placeholder="Transmite tu mensaje al espacio..."
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center"
        >
          <FaRocket className="mr-2" /> Enviar
        </button>
      </form>
    </div>
  );
}