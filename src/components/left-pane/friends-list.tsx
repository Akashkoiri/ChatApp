"use client";
import { getConversations } from "@/server/conversations/conversation-actions";
import FriendsListItem from "./friends-list-item";

type FriendListProps = {
  data: {
    id: string;
    name: string;
  }[];
};

export default function FriendList({ data }: FriendListProps) {
  return (
    <div className="flex-grow p-2 border border-green-500 flex flex-col h-1 overflow-auto">
      {data.map((user, index) => (
        <FriendsListItem key={index} id={user.id} name={user.name} />
      ))}
    </div>
  );
}
