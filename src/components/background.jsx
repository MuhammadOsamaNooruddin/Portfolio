import { Meteros } from "./BackgroundParticals";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden h-[screen] w-[screen]">
      <Meteros number={20} />
      
    </div>
  );
}
