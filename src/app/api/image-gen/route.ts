import { PromptTemplate } from "@langchain/core/prompts";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY!,
  timeout: 15 * 1000,
});

export async function POST(req: Request) {
  // The body of the request in json format
  const { userPrompt, promptTemplate } = await req.json();

  // console.log({ userPrompt, promptTemplate });

  // If a template is passed in, the input variables are inferred automatically from the template.
  const prompt = PromptTemplate.fromTemplate(promptTemplate);

  // console.log({ prompt });

  const formattedPrompt = await prompt.format({
    prompt: userPrompt,
  });

  // console.log({ formattedPrompt });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: formattedPrompt,
    n: 1,
    size: "1024x1024",
  });

  return NextResponse.json(response.data, { status: 200 });
}
