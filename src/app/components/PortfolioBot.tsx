"use client";

import { useEffect, useRef, useState } from "react";
import { FiSend, FiUser, FiZap } from "react-icons/fi";

export default function PortfolioBot() {
  const [messages, setMessages] = useState<{ id: string; role: "user" | "assistant"; content: string }[]>([
    {
      id: "sys-hello",
      role: "assistant",
      content: "Hi! I'm Hamza's portfolio assistant. Ask me about his skills, projects, or anything related to his work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!res.ok) throw new Error("API request failed");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = { id: Date.now().toString(), role: "assistant" as const, content: "" };

      setMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        assistantMessage.content += decoder.decode(value, { stream: true });
        setMessages((prev) => [...prev.slice(0, -1), { ...assistantMessage }]);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-white/20 p-4 md:p-6 shadow-lg bg-gradient-to-br from-slate-800/70 to-purple-900/70 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full">
          <FiZap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Portfolio Assistant</h2>
          <p className="text-sm text-purple-200">Ask me about Hamza's work</p>
        </div>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                  : "bg-white/10 backdrop-blur-sm text-slate-200 border border-white/10"
              }`}
            >
              {/* {m.role === "user" && (
                <div className="flex items-center gap-2 mb-1">
                  <FiUser className="w-3 h-3" />
                  <span className="text-xs font-medium">You</span>
                </div>
              )} */}
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-white/10 backdrop-blur-sm text-slate-200 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-xs text-purple-300">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-red-500/20 backdrop-blur-sm text-red-200 border border-red-500/30">
              <p className="text-xs">{error}</p>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Hamza's skills or projects..."
          className="flex-1 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-xl px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiSend className="w-4 h-4" />
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-400 text-center">
        Try asking: "What projects has Hamza built?" or "What technologies does Hamza use?"
      </p>
    </div>
  );
}















// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function PortfolioBot() {
//   const [messages, setMessages] = useState<{ id: string; role: "user" | "assistant"; content: string }[]>([
//     {
//       id: "sys-hello",
//       role: "assistant",
//       content: "Hi! I’m Hamza’s portfolio assistant. Ask me about his skills, projects, or anything related to his work.",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const endRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { id: Date.now().toString(), role: "user" as const, content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         body: JSON.stringify({ messages: [...messages, userMessage] }),
//       });

//       if (!res.ok) throw new Error("API request failed");

//       const reader = res.body?.getReader();
//       const decoder = new TextDecoder();
//       let assistantMessage = { id: Date.now().toString(), role: "assistant" as const, content: "" };

//       setMessages((prev) => [...prev, assistantMessage]);

//       while (true) {
//         const { done, value } = await reader!.read();
//         if (done) break;
//         assistantMessage.content += decoder.decode(value, { stream: true });
//         setMessages((prev) => [...prev.slice(0, -1), assistantMessage]);
//       }
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="w-full max-w-xl mx-auto rounded-2xl border p-4 md:p-6 shadow-sm bg-white dark:bg-zinc-900">
//       <h2 className="text-xl font-semibold mb-3">Chat with Hamza’s Assistant</h2>

//       <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
//         {messages.map((m) => (
//           <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
//             <div
//               className={`rounded-2xl px-3 py-2 text-sm leading-relaxed shadow
//                 ${m.role === "user"
//                   ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
//                   : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"}`}
//               style={{ maxWidth: "85%" }}
//             >
//               {m.content}
//             </div>
//           </div>
//         ))}
//         {isLoading && <div className="text-xs text-zinc-500">Thinking…</div>}
//         {error && <div className="text-xs text-red-500">Error: {error}</div>}
//         <div ref={endRef} />
//       </div>

//       <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask about Hamza’s skills or projects…"
//           className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:bg-zinc-800 dark:text-zinc-100"
//         />
//         <button
//           type="submit"
//           disabled={isLoading || !input.trim()}
//           className="rounded-xl px-4 py-2 border shadow hover:opacity-90 disabled:opacity-50"
//         >
//           Send
//         </button>
//       </form>

//       <p className="mt-3 text-xs text-zinc-500">
//         Tip: try “What projects has Hamza built?” or “What is Hamza learning now?”
//       </p>
//     </div>
//   );
// }













// // "use client";

// // import { useChat } from "ai/react";
// // import { useEffect, useRef } from "react";

// // export default function PortfolioBot() {
// //   const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
// //     api: "/api/chat", // default, but explicit is fine
// //     initialMessages: [
// //       {
// //         id: "sys-hello",
// //         role: "assistant",
// //         content:
// //           "Hi! I’m Hamza’s portfolio assistant. Ask me about his skills, projects, or anything related to his work.",
// //       },
// //     ],
// //   });

// //   const endRef = useRef<HTMLDivElement>(null);
// //   useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

// //   return (
// //     <div className="w-full max-w-xl mx-auto rounded-2xl border p-4 md:p-6 shadow-sm bg-white dark:bg-zinc-900">
// //       <h2 className="text-xl font-semibold mb-3">Chat with Hamza’s Assistant</h2>

// //       <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
// //         {messages.map((m:any) => (
// //           <div
// //             key={m.id}
// //             className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
// //           >
// //             <div
// //               className={`rounded-2xl px-3 py-2 text-sm leading-relaxed shadow
// //                 ${m.role === "user"
// //                   ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
// //                   : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"}`}
// //               style={{ maxWidth: "85%" }}
// //             >
// //               {m.content}
// //             </div>
// //           </div>
// //         ))}
// //         {isLoading && (
// //           <div className="text-xs text-zinc-500">Thinking…</div>
// //         )}
// //         {error && (
// //           <div className="text-xs text-red-500">Error: {error.message}</div>
// //         )}
// //         <div ref={endRef} />
// //       </div>

// //       <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
// //         <input
// //           value={input}
// //           onChange={handleInputChange}
// //           placeholder="Ask about Hamza’s skills or projects…"
// //           className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:bg-zinc-800 dark:text-zinc-100"
// //         />
// //         <button
// //           type="submit"
// //           disabled={isLoading || !input.trim()}
// //           className="rounded-xl px-4 py-2 border shadow hover:opacity-90 disabled:opacity-50"
// //         >
// //           Send
// //         </button>
// //       </form>

// //       <p className="mt-3 text-xs text-zinc-500">
// //         Tip: try “What projects has Hamza built?” or “What is Hamza learning now?”
// //       </p>
// //     </div>
// //   );
// // }
