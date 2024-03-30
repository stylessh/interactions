import { MergedBubbles } from "./examples/merged-bubbles";
import { Pill } from "./examples/pill";
import { Alarm } from "./examples/alarm";
import { StackedCards } from "./examples/stacked-cards";
import { Frame } from "./examples/frame";

export const features = [
  {
    id: 1,
    title: "The power of simplicity.",

    component: <Pill />,
  },
  {
    id: 2,
    title: "Experiences for everyone.",

    component: <MergedBubbles />,
  },
  {
    id: 3,
    title: "Blend the line between form and function.",

    component: <Alarm />,
  },
  {
    id: 4,
    title: "The complexity of simplicity.",

    component: <StackedCards />,
  },
  {
    id: 5,
    title: "Delightful micro-interactions.",

    component: <Frame />,
  },
] as const;
