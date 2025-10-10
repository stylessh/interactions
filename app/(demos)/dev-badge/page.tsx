import { DemoWrapper } from "@/components/demo-wrapper";
import { DevBadge } from "./components";
import { Hotkeys } from "./components/hotkeys";

export default function DevBadgePage() {
  return (
    <DemoWrapper name="dev-badge">
      <div className="flex flex-col justify-center items-center relative">
        <DevBadge />

        <Hotkeys />
      </div>
    </DemoWrapper>
  );
}
