"use server";

import db from "@/lib/db/drizzle";
import { conversations } from "@/lib/db/drizzle/schemas/conversations-schema";
import { messages } from "@/lib/db/drizzle/schemas/mesages-schema";
import { users, usersRelations } from "@/lib/db/drizzle/schemas/users-schema";
import { usersToConversations } from "@/lib/db/drizzle/schemas/users-to-conversations-schema";
import { eq } from "drizzle-orm";

// Get all messages
export const getMessages = async () => {
  const allMessages = await db.select().from(messages);
  return allMessages;
};

// Get msg by user id
export const getMessagesByuserId = async (userId: string) => {
  const allMessages = await db
    .select()
    .from(messages)
    .where(eq(messages.fromId, userId));
  return allMessages;
};

// Get msg by conversation id
export const getMessagesByConversationId = async (conversationId: string) => {
  const allMessages = await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, conversationId));
  return allMessages;
};

// Create a message
export const createMessage = async (
  content: string,
  fromId: string,
  conversationId: string
) => {
  const toId = await db.query.conversations.findFirst({
    where: eq(conversations.id, conversationId)
  })

  // const newMessage = { content, fromId, toId, conversationId };
  // await db.insert(messages).values(newMessage);
  // return "Message Created!";
  return toId;
};

// Update a message
export const updateMessage = async (messageId: string, newMessage: string) => {
  await db
    .update(messages)
    .set({ content: newMessage })
    .where(eq(messages.id, messageId));
  return "Message updated!";
};

// Delete a message
export const deleteMessage = async (messageId: string) => {
  await db.delete(users).where(eq(messages.id, messageId));
  return "Message deleted!";
};
