
type FriendListProps = {
    data: {
        id: string;
        name: string;
        email: string;
    }[]
};

export default function FriendList({ data }: FriendListProps) {
    return (
        <div className="flex-grow p-2 border border-green-500 flex flex-col gap-2 h-1 overflow-auto">
            {data.map((user, index) => (
                <div key={index}>{user.name}</div>
            ))}
        </div>
    )
}
