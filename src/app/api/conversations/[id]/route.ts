import db from "@/lib/db/drizzle";
import { conversations } from "@/lib/db/drizzle/schemas/conversations-schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  //   TODO: Check for the id is incomming or not
  const res = await db
    .select()
    .from(conversations)
    .where(eq(conversations.id, id));
  return new Response(JSON.stringify(res), { status: 200 });
}
