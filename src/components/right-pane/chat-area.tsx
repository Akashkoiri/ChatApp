"use client";

import TextMsg from "./text-msg";
import { useStore } from "@/lib/store/store";
import InputForm from "./input-form";
import { useMessages } from "@/lib/client/hooks/useMessages";
import { Message } from "@/lib/types/message-type";
import { useState } from "react";

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([]);

  // Global states
  const userId = useStore((state) => state.userId);
  const conversationId = useStore((state) => state.conversationId);
  // Custom hook
  useMessages({ conversationId, setMessages });

  return (
    <div className="h-1 flex-grow p-2 border border-yellow-500 flex flex-col gap-2">
      <div className="h-full border border-green-500 overflow-auto">
        {messages
          ? messages.map((msg, index) => (
              <TextMsg
                key={index}
                direction={msg.fromId === userId ? "sent" : "recieved"}
                msg={msg.content}
              />
            ))
          : null}
      </div>
      <InputForm setMessages={setMessages} />
    </div>
  );
}
