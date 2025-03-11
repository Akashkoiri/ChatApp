import FriendList from "@/components/friends-list";
import { getAllUsers } from "@/server/users/user-actions";

export default async function LeftPane() {
  const data  = await getAllUsers()

  return (
    <div className="basis-1/3 border border-red-600 bg-[#030712] text-white p-4">
      <div className="border border-green-500 min-h-full p-2">
        <FriendList data={data} />
      </div>
    </div>
  );
}
