
type ChatAreaProps = {
    data: {
        id: string;
        name: string;
        email: string;
        createdAt: Date;
    }[]
};


export default function ChatArea({ data }: ChatAreaProps) {
    return (
        <div className="flex-grow p-2 border border-green-500 flex flex-col gap-2 h-1 overflow-auto">
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )
}
