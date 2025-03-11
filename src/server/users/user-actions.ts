import db from "@/db/drizzle";
import { User } from "@/db/drizzle/schemas/users-schema.ts";


// Get all users
export const getUsers = async () => {
    const allUsers = await db.select().from(User);
    return allUsers
}

// // Create a new user
// export const CreateUser = async () => {
//     const newUser = { name: 'John', age: 30, email: 'john@example.com' };
//     await db.insert(User).values(newUser);
//     console.log('New user created!');
// }

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