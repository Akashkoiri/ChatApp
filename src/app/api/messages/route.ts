import db from "@/lib/db/drizzle"
import { messages } from "@/lib/db/drizzle/schemas/mesages-schema"

export async function GET(request: Request) {
    const allMessages = await db.select().from(messages)
    return new Response(JSON.stringify(allMessages), { status: 200 })
}

