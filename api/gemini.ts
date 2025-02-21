import axios from "axios";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error(
    "La variable de entorno NEXT_PUBLIC_GEMINI_API_KEY no está definida.",
  );
}

export async function generateCode(prompt: string): Promise<string> {
  try {
    const response = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    // Extraer el texto completo de la respuesta
    const generatedText = response.data.candidates[0].content.parts[0].text;

    // Usar una expresión regular para extraer el bloque de código
    const codeBlockRegex = /```(?:javascript)?\s*([\s\S]*?)\s*```/; // Busca bloques de código en JavaScript
    const match = generatedText.match(codeBlockRegex);

    // Si se encuentra un bloque de código, devolverlo; de lo contrario, devolver el texto completo
    return match ? match[1].trim() : generatedText.trim();
  } catch (error) {
    console.error("Error al comunicarse con la API de Gemini:", error);
    throw new Error("No se pudo generar el código.");
  }
}
