import FriendsListItem from "./conversation-list-item";

type ConverastionListProps = {
  data: {
    id: string;
    name: string;
  }[];
};

export default function ConversationList({ data }: ConverastionListProps) {
  return (
    <div className="flex-grow p-2 border border-green-500 flex flex-col h-1 overflow-auto">
      {data.map((conversation, index) => (
        <FriendsListItem
          key={index}
          id={conversation.id}
          name={conversation.name}
        />
      ))}
    </div>
  );
}
