"use client";
import { getFriendFromStore } from "@/lib/client/hooks/getFriendFromStore";
import TextMsg from "./text-msg";
import { useStore } from "@/lib/store/store";

type ChatAreaProps = {
  messages: {
    id: string;
    content: string;
    fromId: string;
    toId: string;
    conversationId: string;
  }[];
};

export default function ChatArea({ messages }: ChatAreaProps) {
  const user = useStore((state) => state.user);

  return (
    <div className="flex-grow p-2 border border-green-500 flex flex-col gap-2 h-1 overflow-auto">
      {messages.map((msg, index) => (
        <TextMsg
          key={index}
          direction={msg.fromId === user ? "sent" : "recieved"}
          msg={msg.content}
        />
      ))}
    </div>
  );
}
