import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY!,
  timeout: 15 * 1000,
});

export async function POST(req: Request) {
  // The body of the request in json format
  const { prompt } = await req.json();

  // console.log({ prompt });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });

  return NextResponse.json(response.data, { status: 200 });
}
