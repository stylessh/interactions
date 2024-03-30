import { Link } from "@/components/link";
import { readdir } from "fs/promises";

export default async function Home() {
  const interactions = await readdir("./app/(demos)");

  return (
    <main className="min-h-screen">
      <header className="max-w-screen-sm mx-auto pt-24">
        <h1>
          interactions <span className="text-primary">matters</span>
        </h1>
      </header>

      <section className="max-w-screen-sm mx-auto my-8 space-y-4">
        <p className="w-5/6 text-pretty">
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

      <section className="max-w-screen-sm mx-auto mt-20 space-y-4">
        <h2>check out the latest interactions</h2>

        <ul className="px-4">
          {interactions.map((interaction) => (
            <li key={interaction}>
              <Link href={`/${interaction}`}>{interaction}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
