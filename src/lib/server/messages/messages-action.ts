import db from "@/lib/db/drizzle";
import { messages } from "@/lib/db/drizzle/schemas/mesages-schema";
import { users } from "@/lib/db/drizzle/schemas/users-schema";
import { eq } from "drizzle-orm";


// Get all messages
export const getAllMessages = async () => {
    const allMessages = await db.select().from(messages)
    return allMessages
}

// Get msg by user id
export const getAllMessagesByuserId = async (userId: string) => {
    const allMessages = await db.select()
        .from(messages)
        .where(eq(messages.fromId, userId))
    return allMessages
}

// Get msg by user id
export const getAllMessagesByConversationId = async (conversationId: string) => {
    const allMessages = await db.select()
        .from(messages)
        .where(eq(messages.conversationId, conversationId))
    return allMessages
}

// Create a message
export const CreateMessage = async (content: string, fromId: string, toId: string, conversationId: string) => {
    const newMessage = { content, fromId, toId, conversationId };
    await db.insert(messages).values(newMessage);
    console.log('Message Created!');
}

// Update a message
export const UpdateMessage = async (messageId: string, newMessage: string) => {
    await db.update(messages)
        .set({ content: newMessage })
        .where(eq(messages.id, messageId));
}

// Delete a message
export const DeleteMessage = async (messageId: string) => {
    await db.delete(users).where(eq(messages.id, messageId));
    console.log('Message deleted!');
}
