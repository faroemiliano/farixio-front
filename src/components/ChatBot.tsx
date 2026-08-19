import { useEffect, useRef, useState } from "react";
import { getBotResponse } from "../data/chatbotResponses";
import { Bot, Send, X } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [chat, setChat] = useState<Message[]>([
    {
      from: "bot",
      text: "Hola 👋 Soy el asistente de Farixio. ¿En qué puedo ayudarte?",
    },
  ]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, open]);

  function sendMessage() {
    if (!message.trim()) return;

    const userText = message;

    setChat((prev) => [
      ...prev,
      {
        from: "user",
        text: userText,
      },
      {
        from: "bot",
        text: getBotResponse(userText),
      },
    ]);

    setMessage("");
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-violet-600
          text-white
          shadow-[0_0_30px_rgba(139,92,246,0.5)]
          transition
          hover:scale-110
        "
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Bot size={23} />}
      </button>

      {/* Ventana chat */}
      {open && (
        <div
          className="
            fixed inset-x-4 bottom-24 z-50
            flex h-[min(520px,calc(100vh-8rem))]
            flex-col
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-[#0b0b0b]
            text-white
            shadow-2xl
            sm:inset-x-auto sm:right-6 sm:w-[370px]
          "
        >
          {/* Header */}
          <div
            className="
              flex items-center gap-3
              border-b border-white/10
              bg-gradient-to-r from-violet-700 to-purple-600
              px-5 py-4
            "
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15"><Bot size={19} /></div>

            <div>
              <h3 className="font-bold">Farixio AI</h3>

              <p className="flex items-center gap-1.5 text-xs text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Asistente online</p>
            </div>
          </div>

          {/* Mensajes */}
          <div
            className="
              flex-1
              space-y-3
              overflow-y-auto
              p-4
            "
          >
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`
                  max-w-[80%]
                  rounded-2xl
                  px-4 py-3
                  text-sm

                  ${
                    msg.from === "user"
                      ? "ml-auto bg-violet-600 text-white"
                      : "bg-white/10 text-gray-200"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div
            className="
              flex gap-2
              border-t border-white/10
              p-3
            "
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Escribe aquí..."
              aria-label="Mensaje para el asistente"
              className="
                flex-1
                rounded-xl
                bg-white/5
                px-4
                text-sm
                outline-none
                placeholder:text-gray-500
              "
            />

            <button
              onClick={sendMessage}
              className="
                rounded-xl
                bg-violet-600
                px-4
                transition
                hover:bg-violet-500
              "
              aria-label="Enviar mensaje"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
