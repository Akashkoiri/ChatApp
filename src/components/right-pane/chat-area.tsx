import TextMsg from "./text-msg";

type ChatAreaProps = {

};


export default function ChatArea({}: ChatAreaProps) {
    return (
        <div className="flex-grow p-2 border border-green-500 flex flex-col gap-2 h-1 overflow-auto">
            <TextMsg msg="Hi" direction="recieved"/>
        </div>
    )
}
