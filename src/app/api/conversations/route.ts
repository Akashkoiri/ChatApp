import { createConversation, getConversations } from "@/lib/server/conversations/conversation-actions"

export async function GET(request: Request) {
    const allConversations = await getConversations()
    return new Response(JSON.stringify(allConversations), { status: 200 })
}

export async function POST(request: Request) {
    const {name} = await request.json()
    const newMessage = await createConversation(name)
    return new Response(JSON.stringify(newMessage), { status: 200 })
}
