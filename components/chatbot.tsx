"use client"

// components/chatbot.tsx
// Portfolio chatbot UI — connects to /api/chat (local ML engine)

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

type Message = {
  role: "user" | "model"
  content: string
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hi! 👋 I'm Ashan's portfolio assistant. Ask me about his skills, projects, or how to get in touch!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "model", content: data.message }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col border border-border/80 bg-background shadow-2xl"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-heading font-bold uppercase tracking-widest text-xs">
                  AMW Assistant
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:text-primary transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className="shrink-0 w-7 h-7 border border-border/60 flex items-center justify-center bg-card/50">
                    {msg.role === "model"
                      ? <Bot size={14} className="text-primary" />
                      : <User size={14} />
                    }
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] px-3 py-2 text-xs leading-relaxed border ${
                      msg.role === "user"
                        ? "bg-foreground text-background border-foreground/20 ml-auto"
                        : "bg-card/40 text-foreground border-border/40"
                    }`}
                  >
                    {/* Render line breaks and bold markdown */}
                    {msg.content.split("\n").map((line, j) => (
                      <span key={j}>
                        {line.split(/(\*\*[^*]+\*\*)/).map((part, k) =>
                          part.startsWith("**") && part.endsWith("**")
                            ? <strong key={k}>{part.slice(2, -2)}</strong>
                            : part
                        )}
                        {j < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Loading dots */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 border border-border/60 flex items-center justify-center bg-card/50">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="px-3 py-2 bg-card/40 border border-border/40 flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-foreground/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-border/50 flex items-center gap-2 px-3 py-3 bg-card/30"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-1.5 border border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={32} className="text-foreground drop-shadow-lg" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={32} className="text-foreground drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}