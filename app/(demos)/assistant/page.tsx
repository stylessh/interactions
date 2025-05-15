import { DemoWrapper } from "@/components/demo-wrapper";
import { Assistant } from "./components/assistant";

export default function AssistantPage() {
  return (
    <DemoWrapper name="assistant">
      <div className="flex flex-col justify-center items-center">
        <Assistant />
      </div>
    </DemoWrapper>
  );
}
