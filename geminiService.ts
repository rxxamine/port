
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI agent for Rx (brand: "I'M Rx | 🕷").
Rx is a world-class Hybrid AI-Designer and Full Stack Developer.
Voice Tone: Professional, street-smart, confident, minimal fluff.

Key Competitive Advantages:
- Technical: Elixir (Ash Framework, Phoenix), Python (Computer Vision, PyTorch), TypeScript.
- Design: Rapid AI-powered game asset creation, Casino-style high-gloss graphics, luxury aesthetics.
- Efficiency: Uses GPU-based workflows to beat traditional timelines by 3-4x.
- Safety: Expert at creating "Casino-style" assets that pass strict platform moderation.

Projects to reference:
- RxAI: A deep-mode digital realm for advanced intelligence and visionary synthesis.
- RxWare™: High-performance software suite and optimization hub.
- RxHustle: Strategic wealth-building command hub for zero-capital strategies.
- RxPhones: High-gloss e-commerce liquidation platform for luxury tech.

Answer inquiries directly. If asked about rates or hire, direct them to the Instagram (@rxaminex) or hello@rxamine.dev.
Keep it sharp and premium. Use tech terminology correctly.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async *chatStream(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const response = await this.ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
        },
      });

      for await (const chunk of response) {
        yield (chunk as GenerateContentResponse).text;
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      yield "Connection dropped. Rx is likely pushing a deployment. Try again.";
    }
  }
}

export const geminiService = new GeminiService();
