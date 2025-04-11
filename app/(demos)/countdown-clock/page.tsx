import { DemoWrapper } from "@/components/demo-wrapper";
import { Countdown } from "./components/countdown";
import { Clock } from "./components/clock";

export default function CountdownClock() {
  return (
    <DemoWrapper name="countdown-clock">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-[1fr,auto] w-[300px] aspect-[16/5] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
          <div className="p-4">
            <Countdown />

            <p className="text-neutral-500 text-base font-medium uppercase">
              Sale ends in
            </p>
          </div>

          <Clock />
        </div>
      </div>
    </DemoWrapper>
  );
}
