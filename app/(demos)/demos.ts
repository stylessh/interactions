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
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
