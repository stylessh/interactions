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
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export default demos;
