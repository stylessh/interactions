const demos = [
  {
    slug: "sticky-features",
    title: "sticky features",
    description: "A demo to showcase sticky features",
    draft: false,
  },
  {
    slug: "feedback",
    title: "feedback",
    description: "A demo to showcase a feedback input with micro-interactions",
    draft: true,
  },
  {
    slug: "speed-columns",
    title: "speed columns",
    description: "A demo to showcase a speed column layout",
    draft: false,
  },
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
