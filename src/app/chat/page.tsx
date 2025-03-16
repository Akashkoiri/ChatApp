import LeftPane from "@/components/layout/left-pane";
import RightPane from "@/components/layout/right-pane";

export default async function Chat() {
  return (
    <main className="flex gap-2 min-h-screen w-full p-5 bg-amber-50 text-black">
      {/* Left Pane */}
      <LeftPane />
      {/* Right Pane */}
      <RightPane />
    </main>
  );
}
