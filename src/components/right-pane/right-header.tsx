"use client";

import { useSearchParams } from "next/navigation";

export default function RightHeader() {
  const friend = useSearchParams().get("friend");

  return (
    <div className="h-12 mb-2 pl-2 flex items-center border border-green-500">
      {friend}
    </div>
  );
}
