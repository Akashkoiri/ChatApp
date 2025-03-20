"use server";

import db from "@/lib/db/drizzle";
import { conversations } from "@/lib/db/drizzle/schemas/conversations-schema";
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

// Get user by ConversationId
export const getUsersByConversationId = async (conversationId: string) => {
  const users = await db.query.conversations.findFirst({
    where: eq(conversations.id, conversationId),
    columns: {
      id: false,
      name: false
    },
    with: {
      usersToConversations: {
        columns: {
          userId: true
        }
      }
    }
  })

  return users;
};

// Create a new user
export const createUser = async (name: string, email: string) => {
  const newUser = { name, email };
  await db.insert(users).values(newUser);
  return `${name} user created!`;
};

// Update a user's name
export const updateUserName = async (userId: string, newName: string) => {
  await db.update(users).set({ name: newName }).where(eq(users.id, userId));
  return "Users's name updated!";
};

// Update a user's email
export const updateUserEmail = async (userId: string, newEmail: string) => {
  await db.update(users).set({ email: newEmail }).where(eq(users.id, userId));
  return "Users's email updated!";
};

// Delete a user
export const deleteUser = async (userId: string) => {
  await db.delete(users).where(eq(users.id, userId));
  return "User deleted!";
};

