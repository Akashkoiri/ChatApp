"use client";

import { getMessagesByConversationId } from "@/lib/server/messages/messages-action";
import TextMsg from "./text-msg";
import { useStore } from "@/lib/store/store";
import { useEffect, useState } from "react";

type Messages = {
  id: string;
  content: string;
  fromId: string;
  toId: string;
  conversationId: string;
}[];

export default function ChatArea() {
  const [messages, setMessages] = useState<Messages>([]);
  const userId = useStore((state) => state.userId);
  const conversationId = useStore((state) => state.conversationId);

  useEffect(() => {
    const getData = async () => {
      if (conversationId) {
        const messages = await getMessagesByConversationId(conversationId);
        setMessages(messages);
      }
    };
    getData();
  }, [conversationId]);

  return (
    <div className="flex-grow p-2 border border-green-500 flex flex-col gap-2 h-1 overflow-auto">
      {messages.map((msg, index) => (
        <TextMsg
          key={index}
          direction={msg.fromId === userId ? "sent" : "recieved"}
          msg={msg.content}
        />
      ))}
    </div>
  );
}
