import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_GENAI_API_KEY;
    if (!apiKey) {
      console.error('[v0] GOOGLE_GENAI_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key is not configured' },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are Pinnacle Consulting's AI Strategist Assistant. You provide expert business transformation and strategic growth planning advice based on your deep expertise. 
    
Your responses should be:
- Actionable and specific
- Based on proven business principles
- Professional and structured
- Focused on driving measurable results

Provide your response in a clear, organized format with sections and bullet points when appropriate.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `${systemPrompt}\n\nClient Question/Challenge: ${prompt}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });

    const text = response.text();

    return NextResponse.json({ result: text });
  } catch (error) {
    console.error('[v0] AI Strategist Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to process request';
    return NextResponse.json(
      { error: `AI Service Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
