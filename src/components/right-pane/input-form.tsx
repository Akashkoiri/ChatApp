"use client";

import { createMessage } from "@/lib/server/messages/messages-action";
import { useStore } from "@/lib/store/store";
import { Message } from "@/lib/types/message-type";
import { Dispatch, SetStateAction } from "react";

type props = {
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

export default function InputForm({ setMessages }: props) {
  // Global states
  const userId = useStore((state) => state.userId);
  const conversationId = useStore((state) => state.conversationId);

  const handleSubmit = async (formData: FormData) => {
    const msg = formData.get("msg") as string;
    // Server action (Creating data)
    const newMsg = await createMessage(msg, userId, conversationId);
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <form className="h-15 border border-green-500" action={handleSubmit}>
      <input
        type="text"
        className="w-full h-full p-4 outline-none"
        name="msg"
        placeholder="Type a message"
      />
    </form>
  );
}
