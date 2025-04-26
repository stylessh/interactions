import { DemoWrapper } from "@/components/demo-wrapper";
import { Card } from "./components/card";

export default function ParticleSkeleton() {
  return (
    <DemoWrapper name="analytics-card">
      <div className="flex flex-col justify-center items-center">
        <Card />
      </div>
    </DemoWrapper>
  );
}
