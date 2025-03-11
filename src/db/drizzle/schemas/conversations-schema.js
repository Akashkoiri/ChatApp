import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { messages } from "./mesages-schema";
import { usersToConversations } from "./users-to-conversations-schema";



export const conversations = pgTable("conversations", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull()
});

// Relations
export const conversationsRelations = relations(conversations, ({ many }) => ({
    usersToConversations: many(usersToConversations),
    messages: many(messages),

}));

