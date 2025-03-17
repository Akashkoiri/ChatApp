"use client";
import { useStore } from "@/lib/store/store";

type ConversationListItemProps = {
  id: string;
  name: string;
};

export default function ConversationListItem({
  id,
  name,
}: ConversationListItemProps) {
  const setConversationInStore = useStore((state: any) => state.setConversation);

  return (
    <div
      onClick={() => {setConversationInStore(name, id)}}
      className="cursor-pointer"
    >
      <div className="flex items-center rounded-md p-3 hover:bg-gray-800">
        {name}
      </div>
      <div className="bg-gray-800 h-[1]"></div>
    </div>
  );
}
