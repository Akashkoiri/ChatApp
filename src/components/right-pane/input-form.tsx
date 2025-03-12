"use client"
import { useState } from "react"

export default function InputForm() {
    const [msg, setMsg] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Submit the msg and post to backend using server action

    };

    return (
        <form className='h-15 mt-2 border border-green-500' onSubmit={handleSubmit}>
            <input
                type="text"
                className="w-full h-full p-4 outline-none"
                placeholder="Type a message"
                value={msg}
                onChange={handleChange}
            />
        </form>
    )
}
