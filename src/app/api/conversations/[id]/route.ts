import { getConversationById } from "@/lib/server/conversations/conversation-actions";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const conversation = await getConversationById(id);
  return new Response(JSON.stringify(conversation), { status: 200 });
}
