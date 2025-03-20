"use client"

import { createMessage } from "@/lib/server/messages/messages-action";
import { useStore } from "@/lib/store/store";

export default function InputForm() {
    const userId = useStore((state) => state.userId);
    const conversationId = useStore((state) => state.conversationId);

    const handleSubmit = async (formData: FormData) => {
        // TODO: Submit the msg and post to backend using server action
        const msg = formData.get("msg") as string
        // const res = await createMessage(msg, userId, conversationId)
        const res = await createMessage(msg, userId, conversationId)
        console.log(res)
    };

    return (
        <form className='h-15 mt-2 border border-green-500' action={handleSubmit}>
            <input
                type="text"
                className="w-full h-full p-4 outline-none"
                name="msg"
                placeholder="Type a message"
            />
        </form>
    )
}
