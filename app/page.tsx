import { Link } from "@/components/link";
import demos from "./(demos)/demos";

export default async function Home() {
  const interactions = demos
    .filter((d) => !d.draft)
    .map((demo) => ({
      title: demo.title.toLowerCase(),
      path: demo.slug,
    }))
    .toReversed()

  return (
    <main className="min-h-screen">
      <header className="max-w-(--breakpoint-sm) mx-auto pt-24 w-[90%] flex justify-between items-center">
        <h1>
          interactions <span className="text-primary">matter</span>
        </h1>

        <ul className="space-x-6">
          <Link href="https://stylessh.dev" target="_blank">
            stylessh
          </Link>
          <Link href="https://github.com/stylessh/interactions" target="_blank">
            code
          </Link>
        </ul>
      </header>

      <section className="max-w-(--breakpoint-sm) mx-auto my-8 space-y-4 w-[90%]">
        <p className="md:w-5/6 text-pretty">
          here you can find a curated list of demos that showcase the power of
          delightful interactions.
        </p>

        <p>
          these demos are built using{" "}
          <Link href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </Link>
          ,{" "}
          <Link href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </Link>
          , and{" "}
          <Link href="https://react.dev/" target="_blank">
            React
          </Link>
          .
        </p>
      </section>

      <section className="max-w-(--breakpoint-sm) mx-auto mt-16 space-y-4 w-[90%]">
        <h2>check out the latest interactions</h2>

        <ul className="px-6 space-y-2">
          {interactions.map((interaction) => (
            <li key={interaction.path} className="list-disc">
              <Link href={`/${interaction.path}`}>{interaction.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
