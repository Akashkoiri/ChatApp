import { getMessages } from "@/lib/server/messages/messages-action"

export async function GET(request: Request) {
    const allMessages = await getMessages()
    return new Response(JSON.stringify(allMessages), { status: 200 })
}

