
type msgProps = {
  msg: string;
  direction: string
};

export default function TextMsg({ msg, direction }: msgProps) {
  return (
    <div className="grid m-2">
      <span className={`p-2 rounded-sm ${direction == "recieved" ? 'bg-gray-500 justify-self-start' : 'bg-blue-500 justify-self-end'}`}>{msg}</span >
    </div>
  )
}
