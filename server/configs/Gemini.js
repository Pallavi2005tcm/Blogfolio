import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:promt,
  });
  return response.text
  console.log(response.text);
}

export default main;