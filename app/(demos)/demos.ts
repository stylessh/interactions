export type Demo = {
  slug: string;
  title: string;
  draft: boolean;
  description?: string;
};

const demos: Demo[] = [
  {
    slug: "sticky-features",
    title: "sticky features",
    draft: false,
  },
  {
    slug: "dynamic-dots",
    title: "dynamic dots",
    draft: false,
  },
  {
    slug: "content-timeline",
    title: "content timeline",
    draft: false,
  },
  {
    slug: "countdown-clock",
    title: "countdown clock",
    draft: false,
  },
  {
    slug: "button-with-feedback",
    title: "button with feedback",
    draft: false,
  },
  {
    slug: "otp-scanner",
    title: "otp scanner",
    draft: false,
  },
  {
    slug: "analytics-card",
    title: "analytics card",
    draft: false,
  },
  {
    slug: "assistant",
    title: "assistant",
    draft: false,
  },
  {
    slug: "shortcut-button",
    title: "shortcut button",
    draft: false,
  },
  {
    slug: "dev-badge",
    title: "dev badge",
    description:
      "Dev badge that shows project info in realtime. Inspired by Next.js Dev Tools.",
    draft: false,
  },
];

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
