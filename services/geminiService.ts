import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. Analyze Image using gemini-3-pro-preview
export const analyzeImage = async (base64Image: string, prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: prompt }
        ]
      }
    });
    return response.text || "Analiz tamamlanamadı.";
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};

// 2. Edit Image using gemini-2.5-flash-image
export const editImage = async (base64Image: string, prompt: string): Promise<string> => {
  try {
    // gemini-2.5-flash-image handles editing prompts naturally
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: prompt }
        ]
      }
    });

    // Extract image from response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return "";
  } catch (error) {
    console.error("Edit Error:", error);
    throw error;
  }
};

// 3. Generate Image using gemini-3-pro-image-preview
export const generateImage = async (prompt: string, size: "1K" | "2K" | "4K"): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: "1:1" // Or 4:3, etc.
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return "";
  } catch (error) {
    console.error("Generation Error:", error);
    throw error;
  }
};

// 4. Ask Gemini (Thinking Mode) using gemini-3-pro-preview
export const askGeminiThinking = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: question,
      config: {
        thinkingConfig: { thinkingBudget: 32768 } // Max thinking budget for deep reasoning
      }
    });
    return response.text || "Cevap üretilemedi.";
  } catch (error) {
    console.error("Thinking Error:", error);
    throw error;
  }
};

// 5. Ask Gemini (Fast) using gemini-3-flash-preview
export const askGeminiFast = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
    });
    return response.text || "Cevap üretilemedi.";
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};