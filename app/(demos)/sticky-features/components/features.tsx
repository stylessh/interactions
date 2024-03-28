import { Pill } from "./examples/pill";

export const features = [
  {
    id: 1,
    title: "The power of simplicity.",

    component: <Pill />,
  },
  {
    id: 2,
    title: "Experiences for everyone.",

    component: (
      <div className="bg-primary w-1/2 aspect-[16/4] rounded-md shadow-md" />
    ),
  },
  {
    id: 3,
    title: "Blend the line between form and function.",

    component: (
      <div className="bg-primary w-1/2 aspect-[16/4] rounded-md shadow-md" />
    ),
  },
  {
    id: 4,
    title: "The complexity of simplicity.",

    component: (
      <div className="bg-primary w-1/2 aspect-[16/4] rounded-md shadow-md" />
    ),
  },
  {
    id: 5,
    title: "Delightful micro-interactions.",

    component: (
      <div className="bg-primary w-1/2 aspect-[16/4] rounded-md shadow-md" />
    ),
  },
] as const;
