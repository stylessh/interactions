const demos = [
  {
    slug: "sticky-features",
    title: "sticky features",
    description: "A demo to showcase sticky features",
  },
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
