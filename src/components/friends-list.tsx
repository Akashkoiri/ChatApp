
type FriendListProps = {
    data: {
        id: string;
        name: string;
        email: string;
    }[]
};

export default function FriendList({ data }: FriendListProps) {
    return (
        <div className="h-100 w-full p-2 border border-green-500 flex flex-col gap-2 overflow-auto">
            {data.map((item) => (
                <>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                <li key={item.id}>{item.name}</li>
                </>
            ))}
        </div>
    )
}
