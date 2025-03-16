import RightHeader from "@/components/right-pane/right-header";
import ChatArea from "@/components/right-pane/chat-area";
import InputForm from "@/components/right-pane/input-form";
import { getMessages } from "@/lib/server/messages/messages-action";

export default async function RightPane() {
  const messages = await getMessages();

  return (
    <div className="basis-2/3 border border-red-600 bg-[#030712] text-white p-4 flex flex-col">
      {/* Header */}
      <RightHeader />
      {/* Chat Area */}
      <ChatArea messages={messages} />
      {/* Input form */}
      <InputForm />
    </div>
  );
}
