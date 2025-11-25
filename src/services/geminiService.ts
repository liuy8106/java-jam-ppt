import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

// Initialize the client if API key is available
try {
  //if (process.env.API_KEY) {
    //client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  //} else {
    //console.warn("API_KEY not found in environment variables. AI features //will use fallback mock.");
// Vite 使用 import.meta.env 读取环境变量
const apiKey = import.meta.env.VITE_API_KEY; 
if (apiKey) {
  client = new GoogleGenAI({ apiKey: apiKey });
}
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

export const getAIHint = async (userCode: string, context: string): Promise<string> => {
  if (!client) {
    return "AI Unavailable: Please configure the API_KEY to receive real-time hints. \n\nHint: Remember that ArrayLists use .size() to get the length and .get(i) to access elements.";
  }

  try {
    const prompt = `
      You are a helpful Java programming tutor for beginners.
      Context: ${context}
      
      The student is writing the following code snippet (which may be incomplete or incorrect):
      \`\`\`java
      ${userCode}
      \`\`\`
      
      Please provide a short, encouraging hint to help them fix errors or understand the logic. 
      Focus on ArrayList syntax (size vs length, get(i) vs [i]). 
      Do not give the full answer directly, just a nudge. 
      Keep it under 50 words.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Keep trying! Check your method names.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI Tutor. Check console for details.";
  }
};