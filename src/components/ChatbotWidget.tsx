import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Heart, Play, AlertCircle, ChevronDown, RefreshCw } from "lucide-react";
import { ChatMessage } from "../types";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I am your GYFTS Rescue Helper. Ask me anything about our Irving food pantry, volunteer registration, or how online donations make an impact!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnreadCount(0);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsgText = inputValue;
    setInputValue("");

    // Add User Message
    const userMsg: ChatMessage = {
      sender: "user",
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      // Map simple message histories
      const historyPayload = messages.map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      // Call Express proxy endpoint
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsgText,
          history: historyPayload
        })
      });

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        sender: "bot",
        text: data.text || "I am here to connect you with GYFTS Rescue! How else can I assist?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Failed to query chatbot endpoint:", err);
      // Fallback
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "I experienced a temporary connection hiccup. However, please feel free to request assistance on our main form, call us at (469) 639-6347, or email David at stensondavid@hotmail.com directly!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="relative h-14 w-14 bg-gradient-to-tr from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-600/30 active:scale-95 hover:scale-105 transition-all outline-none border border-emerald-500/10 cursor-pointer"
        >
          <MessageCircle className="h-6 w-6 animate-pulse-slow" />
          {unreadCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 h-6 w-6 bg-orange-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-white shadow-sm">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col overflow-hidden animate-scale-up-fade">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 px-5 py-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm">
                G
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">GYFTS Rescue Helper</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                  <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold font-mono">
                    Online Support • Irving
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleToggle}
              className="text-emerald-100/70 hover:text-white hover:bg-emerald-800/60 p-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Messages Grid Container */}
          <div className="flex-1 bg-emerald-50/20 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed text-sm ${
                    msg.sender === "user"
                      ? "bg-emerald-600 text-white rounded-tr-none shadow-sm"
                      : "bg-white text-emerald-950 rounded-tl-none border border-emerald-100/60 shadow-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[10px] text-emerald-600/50 mt-1 px-1 font-mono">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex flex-col items-start font-sans">
                <div className="bg-white rounded-2xl rounded-tl-none border border-emerald-100/60 px-4 py-3 shadow-xs">
                  <div className="flex items-center gap-1 py-1 px-2">
                    <span className="h-2 w-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="h-2 w-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="h-2 w-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-600/50 mt-1 px-1">Typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Quick Actions */}
          <div className="px-3 py-1.5 bg-white border-t border-emerald-50 overflow-x-auto flex gap-1.5 scrollbar-thin select-none">
            <button
              onClick={() => setInputValue("Where is the food pantry?")}
              className="text-[11px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors px-2.5 py-1 rounded-full whitespace-nowrap border border-emerald-200/50 cursor-pointer"
            >
              Where is the pantry?
            </button>
            <button
              onClick={() => setInputValue("How does $25 donation help?")}
              className="text-[11px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors px-2.5 py-1 rounded-full whitespace-nowrap border border-emerald-200/50 cursor-pointer"
            >
              $25 impact?
            </button>
            <button
              onClick={() => setInputValue("What are volunteer hours?")}
              className="text-[11px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors px-2.5 py-1 rounded-full whitespace-nowrap border border-emerald-200/50 cursor-pointer"
            >
              Volunteer hours?
            </button>
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="bg-white px-4 py-3 border-t border-emerald-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-emerald-50/50 border border-emerald-100/80 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1.5 focus:ring-emerald-600 text-emerald-950 placeholder-emerald-600/60"
            />
            <button
              type="submit"
              className="h-10 w-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
