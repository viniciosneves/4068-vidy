import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";
export const maxDuration = 1;

let execucoes = 0;

export async function POST(req) {
    execucoes++

    if (execucoes == 2) {
        throw new Error("bora forçar um erro!");

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