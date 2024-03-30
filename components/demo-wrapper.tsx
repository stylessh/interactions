import { redirect } from "next/navigation";
import demos, { DemoSlug } from "../app/(demos)/demos";
import { Link } from "@/components/link";

export function DemoWrapper({
  name,
  children,
}: {
  name: DemoSlug;
  children: React.ReactNode;
}) {
  const demo = demos.find((d) => d.slug === name);

  if (!demo) return redirect("/");

  const demoLink =
    "https://github.com/stylessh/interactions/tree/main/app/(demos)/" +
    demo.slug;

  return (
    <main className="min-h-screen">
      <header className="max-w-screen-lg w-[90%] mx-auto h-24 md:h-48 mt-8 md:mt-16 flex items-start justify-between">
        <h1>{demo.title}</h1>

        <div className="flex items-center space-x-6">
          <Link href={"/"}>back to home</Link>

          <Link href={demoLink} target="_blank">
            code
          </Link>
        </div>
      </header>

      {children}
    </main>
  );
}
