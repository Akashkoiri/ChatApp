import db from "@/lib/db/drizzle";
import { conversations } from "@/lib/db/drizzle/schemas/conversations-schema";
import { eq } from "drizzle-orm";


// Get all conversations
export const getConversations = async () => {
    const allConversations = await db.select().from(conversations)
    return allConversations
}

// Get conversation by id
export const getConversationById = async (conversationId: string) => {
    const conversation = await db.select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
    console.log(conversation)
    return conversation
}

// Create a new conversation
export const createConversation = async (name: string) => {
    await db.insert(conversations).values({ name });
    console.log(`${name} conversation created!`);
}

// Update a conversation's name
export const updateConversationName = async (conversationId: string, newName: string) => {
    await db.update(conversations)
        .set({ name: newName })
        .where(eq(conversations.id, conversationId));
    console.log("Conversation's name updated!");
}

// Delete a conversation
export const deleteConversation = async (conversationId: string) => {
    await db.delete(conversations).where(eq(conversations.id, conversationId));
    console.log('Conversation deleted!');
}
