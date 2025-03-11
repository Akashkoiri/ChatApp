import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { messages } from "./mesages-schema";
import { usersToConversations } from "./users-to-conversations-schema";



export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
	usersToConversations: many(usersToConversations),
	messages: many(messages),
}));
