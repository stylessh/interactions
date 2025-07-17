const demos = [
  {
    slug: "sticky-features",
    title: "sticky features",
    description: "A demo to showcase sticky features",
    draft: false,
  },
  {
    slug: "dynamic-dots",
    title: "dynamic dots",
    description: "A demo to showcase dynamic dots",
    draft: false,
  },
  {
    slug: "content-timeline",
    title: "content timeline",
    description: "A demo to showcase content timeline",
    draft: false,
  },
  {
    slug: "countdown-clock",
    title: "countdown clock",
    description: "A demo to showcase countdown clock",
    draft: false,
  },
  {
    slug: "button-with-feedback",
    title: "button with feedback",
    description: "A demo to showcase button with feedback",
    draft: false,
  },
  {
    slug: "otp-scanner",
    title: "otp scanner",
    description: "A demo to showcase otp scanner",
    draft: false,
  },
  {
    slug: "analytics-card",
    title: "analytics card",
    description: "A demo to showcase analytics card",
    draft: false,
  },
  {
    slug: "assistant",
    title: "assistant",
    description: "A demo to showcase assistant",
    draft: false,
  },
  {
    slug: "shortcut-button",
    title: "shortcut button",
    description:
      "A demo to showcase shortcut button that reacts to the shortcut press.",
    draft: false,
  },
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
