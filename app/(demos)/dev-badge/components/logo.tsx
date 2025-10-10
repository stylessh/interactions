import { ComponentProps } from "react";

export const Logo = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 109 113"
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path
      fill="currentColor"
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
    ></path>
    <path
      fill="currentColor"
      fillOpacity="0.2"
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
    ></path>
    <path
      fill="currentColor"
      d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z"
    ></path>
  </svg>
);
