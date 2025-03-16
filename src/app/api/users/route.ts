import db from "@/db/drizzle"
import { conversations } from "@/db/drizzle/schemas/conversations-schema"

export async function GET(request: Request) {
    const allConversations = await db.select().from(conversations)
    return new Response(JSON.stringify(allConversations), { status: 200 })
}

export async function POST(request: Request) {
    const { name, email } = await request.json()
    await db.insert(conversations).values({ name, email })
    return new Response('Conversation created!', { status: 200 })
}