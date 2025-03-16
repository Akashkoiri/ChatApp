import Link from "next/link"

export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Link href={"/chat"} className="pointer">
        <button className="bg-blue-600 rounded-sm px-6 py-1 cursor-pointer">Chat</button>
      </Link>
    </div>
  );
}
