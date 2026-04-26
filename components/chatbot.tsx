"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react"
import Image from "next/image"


type Message = {
  role: "user" | "model"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm Ashan's AI assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

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

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "model", content: data.message }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Sorry, I'm having trouble connecting right now. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] z-50 flex flex-col bg-black/5 dark:bg-white/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 dark:border-white/10">
                  <Image src="/bot.png" alt="Bot Avatar" width={36} height={36} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted/50 rounded-full transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden border ${msg.role === "user" ? "bg-black/10 dark:bg-white/10 backdrop-blur-md text-foreground border-white/20 dark:border-white/10" : "bg-muted text-foreground border-transparent"
                      }`}
                  >
                    {msg.role === "user" ? <User size={14} /> : <Image src="/bot.png" alt="Bot" width={32} height={32} className="w-full h-full object-cover" />}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.role === "user"
                      ? "bg-black/10 dark:bg-white/10 backdrop-blur-md text-foreground rounded-br-sm border border-white/20 dark:border-white/10 shadow-sm"
                      : "bg-muted/50 border border-border/50 rounded-bl-sm shadow-sm"
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-muted text-foreground">
                    <Image src="/bot.png" alt="Bot" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="max-w-[75%] p-4 rounded-2xl text-sm bg-muted/50 border border-border/50 rounded-bl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border/50 bg-background/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ashan..."
                  className="w-full bg-muted/50 border border-border/50 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 p-2 bg-primary text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="fixed bottom-10 right-24 z-50 bg-background text-foreground px-4 py-2 rounded-2xl rounded-br-sm shadow-xl border border-border/50 pointer-events-none"
          >
            <p className="text-sm font-medium whitespace-nowrap">HI 👋</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 z-50 flex items-center justify-center focus:outline-none"
      >
        {isOpen ? (
          <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl shadow-black/20 border border-border/50">
            <X size={24} />
          </div>
        ) : (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/bot.png"
              alt="Chat"
              width={80}
              height={80}
              className="object-contain scale-[1.3] hover:scale-[1.4] transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
          </div>
        )}
      </motion.button>
    </>
  )
}