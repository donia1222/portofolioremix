import { ActionFunction, json } from "@remix-run/node";
import OpenAI from "openai";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatResponse = {
  response?: string;
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  try {
    console.log("Recibiendo solicitud...");
    const { messages } = await request.json();
    console.log("Mensajes recibidos:", messages);

    if (!Array.isArray(messages) || messages.length === 0) {
      console.log("Mensajes inválidos.");
      return json({ error: "Mensajes inválidos." }, { status: 400 });
    }

    // Validar que cada mensaje tenga el formato correcto
    const isValid = messages.every(
      (msg) =>
        (msg.role === "system" || msg.role === "user" || msg.role === "assistant") &&
        typeof msg.content === "string"
    );

    if (!isValid) {
      console.log("Formato de mensajes inválido.");
      return json({ error: "Formato de mensajes inválido." }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log("Configuración de OpenAI creada.");

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });
    
    // Este es el acceso correcto a los datos de la respuesta
    console.log("Respuesta de OpenAI recibida:", completion);

    const botResponse = completion.choices[0]?.message?.content;

    if (!botResponse) {
      throw new Error("No se recibió respuesta del modelo.");
    }

    console.log("Respuesta del bot:", botResponse);
    return json({ response: botResponse });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return json(
      { error: "Error al obtener la respuesta del chatbot." },
      { status: 500 }
    );
  }
};
