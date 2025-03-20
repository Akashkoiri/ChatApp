import { primaryKey, uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core/table";
import { conversations } from "./conversations-schema";
import { relations } from "drizzle-orm/relations";
import { users } from "./users-schema";



export const usersToConversations = pgTable('users_to_conversations', {
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
  conversationId: uuid('conversation_id')
    .notNull()
    .references(() => conversations.id),
},
  (t) => [
    primaryKey({ columns: [t.userId, t.conversationId] })
  ],
);

// Relations
export const usersToConversationsRelations = relations(usersToConversations, ({ one }) => ({
  user: one(users, {
    fields: [usersToConversations.userId],
    references: [users.id],
  }),
  conversation: one(conversations, {
    fields: [usersToConversations.conversationId],
    references: [conversations.id],
  }),
}));