import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { users } from "./users-schema";
import { conversations } from "./conversations-schema.js";


export const messages = pgTable("messages", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    content: text("content").notNull(),
    fromId: uuid("from_id").notNull(),
    toId: uuid("to_id").notNull(),
    conversationId: uuid("conversation").notNull(),
});

// Relations
export const messagesRelations = relations(messages, ({ one }) => ({
    from: one(users, {
		fields: [messages.fromId],
		references: [users.id],
	}),
    to: one(users, {
		fields: [messages.toId],
		references: [users.id],
	}),
    conversation: one(conversations, {
		fields: [messages.toId],
		references: [conversations.id],
	}),
}));
