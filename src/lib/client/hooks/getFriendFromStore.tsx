"use client";
import { useStore } from "@/lib/store/store";

export const getFriendFromStore = () => {
  const friend = useStore((state) => state.friend);
  return friend;
};
