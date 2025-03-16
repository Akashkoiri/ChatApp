import db from "@/lib/db/drizzle";
import { conversations } from "@/lib/db/drizzle/schemas/conversations-schema";
import { users } from "@/lib/db/drizzle/schemas/users-schema";
import { eq } from "drizzle-orm";


// Get all users
export const getConversations = async () => {
    const allConversations = await db.select().from(conversations)
    return allConversations
}

// Get user by UserId
export const getConversationsById = async (conversationId: string) => {
    const conversation = await db.select()
        .from(conversations)
        .where(eq(conversations.id, conversationId))
    return conversation
}

// Create a new user
export const CreateConversation = async (name: string, email: string) => {
    const newUser = { name, email };
    await db.insert(users).values(newUser);
    console.log(`${name} user created!`);
}

// Update a user's name
export const UpdateConversation = async (userId: string, newName: string) => {
    await db.update(users)
        .set({ name: newName })
        .where(eq(users.id, userId));
    console.log("Users's name updated!");
}

// Delete a user
export const DeleteConversation = async (userId: string) => {
    await db.delete(users).where(eq(users.id, userId));
    console.log('User deleted!');
}
