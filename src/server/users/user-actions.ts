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

// // Update a user's age
// export const UpdateUser = async () => {
//     await db.update(User).set({ age: 31 }).where(Users.email.eq(newUser.email));
//     console.log('User updated!');
// }

// // Delete a user
// export const DeleteUser = async () => {
//     await db.delete(User).where(Users.email.eq(newUser.email));
//     console.log('User deleted!');
// }