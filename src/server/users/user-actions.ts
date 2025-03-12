import db from "@/db/drizzle";
import { users } from "@/db/drizzle/schemas/users-schema";
import { eq } from "drizzle-orm";


// Get all users
export const getAllUsers = async () => {
    const allUsers = await db.select().from(users)
    return allUsers
}

// Get user by name
export const getUserByName = async (name: string) => {
    const allUsers = await db.select()
    .from(users)
    .where(eq(users.name, name))
    return allUsers
}

// Create a new user
export const CreateUser = async (name: string, email: string) => {
    const newUser = { name, email };
    await db.insert(users).values(newUser);
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
