"use client";

import { getMessagesByConversationId } from "@/lib/server/messages/messages-action";
import { Message } from "@/lib/types/message-type";
import { Dispatch, SetStateAction, useEffect } from "react";

type props = {
  conversationId: string;
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

export const useMessages = ({ conversationId, setMessages }: props) => {
  useEffect(() => {
    const getData = async () => {
      if (conversationId) {
        // Server action (Getting data)
        const messages = await getMessagesByConversationId(conversationId);
        setMessages(messages);
      }
    };
    getData();
  }, [conversationId]);
};
