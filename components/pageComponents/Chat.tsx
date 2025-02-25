"use client";
import { useState } from "react";
import { ChatInput } from "@/components/chatElements/ChatInput";
import { PreviewPanel } from "@/components/PreviewTabs/PreviewCode";
import { generateCode } from "@/api/gemini";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [generatedCode, setGeneratedCode] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);

  const handleSendMessage = async (message: string) => {
    const newMessage: Message = { text: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await generateCode(message);
      setGeneratedCode(response);
    } catch (error) {
      console.error("Error al generar la respuesta:", error);
      const errorMessage: Message = {
        text: "Lo siento, no pude procesar tu solicitud.",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const togglePreviewPanel = () => {
    setIsPreviewOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col border-border">
        <div className="flex-1 p-4 overflow-auto">
          {messages.length === 0 ? (
            <p className="text-muted-foreground text-center">
              Start typing to generate code...
            </p>
          ) : (
            <div className="space-y-2">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? "bg-blue-900 text-white self-end"
                        : "bg-muted text-white self-start"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
        {/* Input para enviar mensajes */}
        <div className="p-4 bg-background">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
      {isPreviewOpen && (
        <div className="w-full md:w-1/2">
          <PreviewPanel code={generatedCode} staticPanel={false} />
        </div>
      )}
    </div>
  );
}
