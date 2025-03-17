"use client";

import { useStore } from "@/lib/store/store";

export default function RightHeader() {
  const conversationInStore = useStore((state: any) => state.conversation);
  return (
    <div className="h-12 mb-2 pl-2 flex items-center border border-green-500">
      {conversationInStore}
    </div>
  );
}
