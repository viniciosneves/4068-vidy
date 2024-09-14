import { openai } from "@ai-sdk/openai";
import { Ratelimit } from "@upstash/ratelimit";
import { convertToCoreMessages, streamText } from "ai";
import kv from '@vercel/kv';
export const maxDuration = 1;

const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(5, '30s'),
});

export async function POST(req) {

    const ip = req.ip ?? 'ip';
    const { success } = await ratelimit.limit(ip);
  
    if (!success) {
      return new Response('Ratelimited!', { status: 429 });
    }

    const { messages } = await req.json();
    const result = await streamText({
        model: openai('gpt-4o-mini'),
        messages: convertToCoreMessages(messages),
        system: "Você é um assistente gentil e bem humorado que recomenda filmes. Se alguém tentar falar sobre qualquer coisa que não seja um filme, faça uma piada e deixe claro que você é um assistente especializados em filmes e não sabe falar sobre outra coisa. Nem mesmo séries ou programas de TV."
    })
    return result.toDataStreamResponse({
        getErrorMessage: (error) => {
            if (error == null) {
                return 'unknown error';
            }

            if (typeof error === 'string') {
                return error;
            }

            if (error instanceof Error) {
                return error.message;
            }

            return JSON.stringify(error);
        }
    })
}