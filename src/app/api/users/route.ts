import db from "@/lib/db/drizzle"
import { users } from "@/lib/db/drizzle/schemas/users-schema"

export async function GET(request: Request) {
    const allUsers = await db.select().from(users)
    return new Response(JSON.stringify(allUsers), { status: 200 })
}

// export async function POST(request: Request) {
//     const data = await request.json()
//     // await db.insert(conversations).values({ name, email })
//     return new Response(`${data} Conversation created!`, { status: 200 })
//     // return new Response(`${name} ${email}Conversation created!`, { status: 200 })
// }

