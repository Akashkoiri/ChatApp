import { getUsers } from "@/lib/server/users/user-actions"

export async function GET(request: Request) {
    const allUsers = await getUsers()
    return new Response(JSON.stringify(allUsers), { status: 200 })
}


