import { DemoWrapper } from "@/components/demo-wrapper";
import { Details } from "./components/details";
import { Content } from "./components/content";
import { Showcase } from "./components/showcase";
import { MotionColumn } from "./components/motion-column";

export default function SpeedColumns() {
  return (
    <DemoWrapper name="speed-columns" headerClassName="px-4">
      <div className="max-w-screen-lg w-[90%] mx-auto md:grid grid-cols-[1px,3fr,1px,4fr,1px,40%] gap-4 h-max hidden">
        <Line />
        <MotionColumn id="details" multiplier={0.9}>
          <Details />
        </MotionColumn>
        <Line />
        <MotionColumn id="content" multiplier={0.96}>
          <Content />
        </MotionColumn>
        <Line />
        <Showcase />
      </div>

      <div className="max-w-screen-lg w-[90%] mx-auto md:hidden">
        <Showcase />
        <Details />
        <Content />
      </div>
    </DemoWrapper>
  );
}

function Line() {
  return (
    <div className="relative -top-16 h-[calc(100%+256px+128px)] w-[1px] bg-foreground/10" />
  );
}
