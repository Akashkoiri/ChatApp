"use client";
import { useQueryState } from "nuqs";
import { useStore } from "@/lib/store/store";

type FriendsListItemProps = {
  id: string;
  name: string;
};

export default function FriendsListItem({ id, name }: FriendsListItemProps) {
  const [friend, setFriend] = useQueryState("friend", { defaultValue: "" });
  const setFriendInStore = useStore((state: any) => state.setFriend);

  return (
    <div
      onClick={() => {
        setFriend(name);
        setFriendInStore(id);
      }}
      className="cursor-pointer"
    >
      <div className="flex items-center rounded-md p-3 hover:bg-gray-800">
        {name}
      </div>
      <div className="bg-gray-800 h-[1]"></div>
    </div>
  );
}
