const demos = [
  {
    slug: "sticky-features",
    title: "sticky features",
    description: "A demo to showcase sticky features",
  },
  {
    slug: "feedback",
    title: "feedback",
    description: "A demo to showcase a feedback input with micro-interactions",
  },
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
