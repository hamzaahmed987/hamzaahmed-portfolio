import { NextRequest } from "next/server";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google"; 
import { hamzaProfile } from "../../lib/hamzaProfile";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
    });

    // Enhanced system prompt with more specific guidance
    const systemMessage = {
      role: "system",
      content: `You are Hamza Ahmed's portfolio assistant. Your purpose is to answer questions about Hamza's skills, experience, and projects professionally and concisely.
      
Here is Hamza's profile information: ${JSON.stringify(hamzaProfile)}

Guidelines:
1. Always be professional, friendly, and helpful
2. Keep responses concise but informative
3. If asked about something not in Hamza's profile, politely decline to answer
4. Focus on his technical skills, projects, and experience
5. Never make up information that's not in the provided profile
6. If someone asks for contact information, direct them to use the contact form on the website
7. For project details, highlight the technologies used and key features
8. You can suggest viewing the projects section for more details

Remember to maintain a professional tone that reflects well on Hamza's portfolio.`,
    };

    const response = await streamText({
      model: google("gemini-2.5-flash"),
      messages: [systemMessage, ...messages],
    //   maxTokens: 500,
      temperature: 0.7,
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}







// import { NextRequest } from "next/server";
// import { streamText } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google"; 
// import { hamzaProfile } from "../../lib/hamzaProfile";

// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();

//   const google = createGoogleGenerativeAI({
//     apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
//   });

//   // ✅ prepend system context with your profile
//   const systemMessage = {
//     role: "system",
//     content: `You are Hamza Ahmed's portfolio assistant. 
// Here is Hamza’s profile data: ${JSON.stringify(hamzaProfile)}.
// Always use this information to answer questions about him.`,
//   };

//   const response = await streamText({
//     model: google("gemini-1.5-flash"),
//     messages: [systemMessage, ...messages],
//   });

//   return response.toTextStreamResponse();
// }








// import { NextRequest } from "next/server";
// import { streamText } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google"; 

// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();

//   // ✅ use Google adapter instead of @google/generative-ai directly
//   const google = createGoogleGenerativeAI({
//     apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
//   });

//   const response = await streamText({
//     model: google("gemini-1.5-flash"), 
//     messages,
//   });

//   return response.toTextStreamResponse();
// }
