import db from "@/db/drizzle"
import { conversations } from "@/db/drizzle/schemas/conversations-schema"

export async function GET(request: Request) {
    const allConversations = await db.select().from(conversations)
    return new Response(JSON.stringify(allConversations), { status: 200 })
}

