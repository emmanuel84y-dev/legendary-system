import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).end();
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `
You are a Senior Strategic Advisor at Pinnacle Consulting.
Analyze the business challenge provided by the user and provide a structured "Consulting Diagnosis".

Structure your response EXACTLY as follows:

1. DIAGNOSIS:
Identify the likely root cause of the issue.

2. STRATEGIC FRAMEWORK:
Suggest a specific management model (e.g., MECE, SWOT, Porter's 5 Forces, Agile) to apply.

3. KEY RECOMMENDATIONS:
Provide EXACTLY 3 actionable, high-impact steps.

4. MEASURABLE OUTCOMES:
List meaningful KPI improvements to expect.

Tone: Professional, authoritative, concise, and insightful.
Avoid generic advice.
      `,
    });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.6,
      },
    });

    // ✅ SAME STRUCTURE AS BEFORE
    const text = result.response.text();

    return res.status(200).send(text);
  } catch (err) {
    console.error('Gemini AI Error:', err);
    return res
      .status(500)
      .send(
        "An error occurred while consulting our AI models. Please check your connectivity and try again."
      );
  }
}