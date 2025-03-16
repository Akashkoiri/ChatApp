import { create } from 'zustand'


// Define the store state and actions types
export type State = {
    userName: string,
    userId: string,
    conversation: string,
    conversationId: string
}

export type Actions = {
    setUser: (userName: string, userId: string) => void
    setConversation: (conversation: string, conversationId: string) => void
}


export const useStore = create<State & Actions>((set) => ({
  userName: "Akash koiri",
    userId: "6648338c-79f4-4eb5-815e-fdf0b74bb653",
    conversation: "",
    conversationId: "",
  setUser: (userName, userId) => set({ userName, userId }),
  setConversation: (conversation, conversationId) => set({ conversation, conversationId })
}))
