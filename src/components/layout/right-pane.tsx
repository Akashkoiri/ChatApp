import RightHeader from "@/components/right-pane/right-header";
import ChatArea from "@/components/right-pane/chat-area";

export default async function RightPane() {
  return (
    <div className="basis-2/3 border border-red-600 bg-[#030712] text-white p-4 flex flex-col">
      <RightHeader />
      <ChatArea />
    </div>
  );
}
