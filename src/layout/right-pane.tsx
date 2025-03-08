import RightHeader from "@/components/right-header";
import ChatArea from "@/components/chat-area";
import InputForm from "@/components/input-form";
import { getUsers } from "@/server/users/user-actions";


export default async function RightPane() {
  // TODO: Fetch all the Chats
  const data = await getUsers()

  return (
    <div className="basis-2/3 border border-red-600 bg-[#030712] text-white p-4 flex flex-col">
      {/* Header */}
      <RightHeader />
      {/* Chat Area */}
      <ChatArea data={data} />
      {/* Input form */}
      <InputForm />
    </div>
  );
}
