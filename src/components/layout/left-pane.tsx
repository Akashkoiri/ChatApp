import LeftHeader from "@/components/left-pane/left-header";
import FriendList from "@/components/left-pane/friends-list";
import InstallChatApp from "@/components/left-pane/install-chat-app";
import { getConversations } from "@/lib/server/conversations/conversation-actions";

export default async function LeftPane() {
  const data = await getConversations();

  return (
    <div className="basis-1/3 border border-red-600 bg-[#030712] text-white p-4 flex flex-col">
      <LeftHeader />
      <FriendList data={data} />
      <InstallChatApp />
    </div>
  );
}
