"use server";

import db from "@/lib/db/drizzle";
import { users } from "@/lib/db/drizzle/schemas/users-schema";
import { eq } from "drizzle-orm";

// Get all users
export const getUsers = async () => {
  const allUsers = await db.select().from(users);
  return allUsers;
};

// Get user by UserId
export const getUserById = async (userId: string) => {
  const user = await db.select().from(users).where(eq(users.id, userId));
  return user;
};

// Create a new user
export const createUser = async (name: string, email: string) => {
  const newUser = { name, email };
  await db.insert(users).values(newUser);
  console.log(`${name} user created!`);
};

// Update a user's name
export const updateUserName = async (userId: string, newName: string) => {
  await db.update(users).set({ name: newName }).where(eq(users.id, userId));
  console.log("Users's name updated!");
};

// Update a user's email
export const updateUserEmail = async (userId: string, newEmail: string) => {
  await db.update(users).set({ email: newEmail }).where(eq(users.id, userId));
  console.log("Users's email updated!");
};

// Delete a user
export const deleteUser = async (userId: string) => {
  await db.delete(users).where(eq(users.id, userId));
  console.log("User deleted!");
};
