"use client";

import { useStore } from "@/lib/store/store";

export default function LeftHeader() {
  const username = useStore((state) => state.userName);

  return (
    <div className="h-12 mb-2 pl-2 flex items-center border border-green-500">
      {username} (Me)
    </div>
  );
}
