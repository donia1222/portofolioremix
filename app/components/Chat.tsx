// app/components/Chat.tsx
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importar icono de cierre

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatResponse = {
  response?: string;
  error?: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  // Cargar mensajes desde localStorage al montar el componente
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages) as Message[];
      setMessages(parsedMessages);
    }
  }, []);

  // Guardar mensajes en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    // Añadir el mensaje del usuario al estado local
    const newMessages: Message[] = [...messages, { role: "user", content: input }];

    // Obtener los últimos mensajes (puedes ajustar el número)
    const lastMessages = newMessages.slice(-10);

    // Agregar el mensaje de sistema al inicio
    const messagesToSend: Message[] = [
      {
        role: "system",
        content: "Responde siempre de manera concisa y directa, enfocándote en proporcionar la información solicitada sin agregar detalles innecesarios.",
      },
      ...lastMessages,
    ];

    // Enviar los mensajes al servidor
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messagesToSend }),
    });

    const data: ChatResponse = await response.json();

    if (data.response) {
      // Añadir la respuesta del asistente al estado local
      const updatedMessages: Message[] = [
        ...newMessages,
        { role: "assistant", content: data.response },
      ];
      setMessages(updatedMessages);
      setInput("");
    } else {
      // Manejar errores
      console.error(data.error);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        Chat
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 md:w-[28rem] h-[500px] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden transition-all z-50">
      {/* Header del chat */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chat</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-blue-600 p-1 rounded-full transition-all"
        >
          <AiOutlineClose className="h-6 w-6" />
        </button>
      </div>

      {/* Área de mensajes */}
      <div className="p-4 flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No hay mensajes todavía.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : msg.role === "assistant"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-green-200 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input de mensajes */}
      <form onSubmit={sendMessage} className="flex border-t border-gray-300">
        <input
          type="text"
          name="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border-none outline-none"
          placeholder="Escribe un mensaje..."
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
