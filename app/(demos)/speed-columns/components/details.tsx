import { getRandomGradient } from "@/lib/utils";

const skills = [
  "Design",
  "Development",
  "Product",
  "Motion",
  "SEO",
  "Marketing",
  "Sales",
  "Finance",
  "Management",
  "Leadership",
];

const experiences = [
  {
    id: "goo-1",
    title: "Product Designer",
    company: "Google",
    duration: "2019 - 2024",
  },
  {
    id: "fb-1",
    title: "UI/UX Designer",
    company: "Facebook",
    duration: "2017 - 2019",
  },
  {
    id: "app-1",
    title: "Product Designer",
    company: "Apple",
    duration: "2015 - 2017",
  },
];

const clients = [
  "Google",
  "Facebook",
  "Apple",
  "Microsoft",
  "Amazon",
  "Vercel",
  "Netflix",
  "Tailwind",
  "Shopify",
  "Stripe",
  "Figma",
  "Adobe",
];

export function Details() {
  return (
    <>
      <div className="w-full h-24 md:h-64 bg-transparent" />

      <article>
        <h2 className="text-primary text-xl">Skills</h2>

        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-pretty bg-foreground/10 px-2 py-0.5 rounded-[99px] text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </article>
      <article className="mt-16">
        <h2 className="text-primary text-xl">Experience</h2>

        <ul className="mt-6 flex gap-y-8 flex-col">
          {experiences.map((exp) => (
            <li key={exp.id} className="grid grid-cols-[40px,1fr] gap-6">
              <GradientAvatar />

              <div>
                <h3 className="text-pretty">{exp.title}</h3>
                <p className="text-foreground/50">
                  {exp.company} ·{" "}
                  <span className="text-xs">{exp.duration}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-16">
        <h2 className="text-primary text-xl">Clients</h2>

        <ul className="mt-4 flex flex-wrap gap-2">
          {clients.map((client) => (
            <li
              key={client}
              className="text-pretty bg-foreground/10 px-2 py-0.5 rounded-[99px] text-sm"
            >
              {client}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

function GradientAvatar() {
  const [from, to] = getRandomGradient();

  return (
    <div
      className={`relative w-10 h-10 rounded-full`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    />
  );
}
