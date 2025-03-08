import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const User = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});
