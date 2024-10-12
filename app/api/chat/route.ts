import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";
import { projectData, systemPrompt } from "./data";
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system: systemPrompt,
    messages,
  });

  // console.log(result);
  return result.toAIStreamResponse();
}
