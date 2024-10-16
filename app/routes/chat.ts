// app/routes/chat.ts
import { ActionFunction, json } from "@remix-run/node";
import { Configuration, OpenAIApi } from "openai";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return json({ error: "Mensajes inválidos." }, { status: 400 });
    }

    // No es necesario formatear los mensajes ya que vienen correctamente del frontend
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages, // Pasar los mensajes tal cual
    });

    const botResponse = completion.data.choices[0].message?.content;

    if (!botResponse) {
      throw new Error("No se recibió respuesta del modelo.");
    }

    return json({ response: botResponse });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return json(
      { error: "Error al obtener la respuesta del chatbot." },
      { status: 500 }
    );
  }
};
