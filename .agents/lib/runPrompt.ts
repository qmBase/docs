import "dotenv/config";
import OpenAI from "openai";

export async function runPrompt(prompt: string): Promise<string> {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
  const apiKey = process.env.AZURE_OPENAI_API_KEY!;
  const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT!;

  const openai = new OpenAI({
    baseURL: endpoint,
    apiKey: apiKey,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "developer", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    model: deploymentName,
    store: true,
  });

  return completion.choices[0].message.content ?? "Error getting response from OpenAI";
}
