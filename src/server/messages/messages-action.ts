import db from "@/db/drizzle";
import { messages } from "@/db/drizzle/schemas/mesages-schema";
import { users } from "@/db/drizzle/schemas/users-schema";
import { eq } from "drizzle-orm";


// Get all messages
export const getAllMessages = async () => {
    const allMessages = await db.select().from(messages)
    return allMessages
}

// Get msg by name
export const getAllMessagesByName = async (name: string) => {
    const allMessages = await db.select()
    .from(messages)
    .where(eq(messages.fromId, name))
    return allMessages
}

// Create a new user
export const CreateMessage = async (content: string, fromId:string, toId:string, conversationId:string) => {
    const newMessage = { content, fromId, toId, conversationId };
    await db.insert(messages).values(newMessage);
    console.log(`${name} user created!`);
}

// Update a user's name
export const UpdateUserName = async (oldName: string, newName: string) => {
    await db.update(users)
    .set({ name: newName })
    .where(eq(users.name, oldName));
    console.log("Users's name updated!");
}

// Update a user's email
export const UpdateUserEmail = async (oldEmail: string, newEmail: string) => {
    await db.update(users)
    .set({ email: newEmail })
    .where(eq(users.email, oldEmail));
    console.log("Users's email updated!");
}

// Delete a user
export const DeleteUser = async (name: string) => {
    await db.delete(users).where(eq(users.name, name));
    console.log('User deleted!');
}
