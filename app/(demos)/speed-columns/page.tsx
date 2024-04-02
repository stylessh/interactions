import { DemoWrapper } from "@/components/demo-wrapper";
import { Details } from "./components/details";
import { Content } from "./components/content";
import { Showcase } from "./components/showcase";

export default function SpeedColumns() {
  return (
    <DemoWrapper name="speed-columns" headerClassName="px-4">
      <div className="max-w-screen-lg w-[90%] mx-auto grid grid-cols-[1px,3fr,1px,4fr,1px,40%] gap-4 h-max">
        <Line />
        <Details />
        <Line />
        <Content />
        <Line />
        <Showcase />
      </div>
    </DemoWrapper>
  );
}

function Line() {
  return (
    <div className="relative -top-16 h-[calc(100%+256px+128px)] w-[1px] bg-foreground/10" />
  );
}
