import { redirect } from "next/navigation";
import demos, { DemoSlug } from "../app/(demos)/demos";
import { Link } from "@/components/link";
import { cn } from "@/lib/utils";

export function DemoWrapper({
  name,
  headerClassName,
  children,
}: {
  name: DemoSlug;
  headerClassName?: string;
  children: React.ReactNode;
}) {
  const demo = demos.find((d) => d.slug === name);

  if (!demo) return redirect("/");

  const demoLink =
    "https://github.com/stylessh/interactions/tree/main/app/(demos)/" +
    demo.slug;

  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr]">
      <header
        className={cn(
          "max-w-screen-lg w-[90%] mx-auto h-16 flex items-center justify-between",
          headerClassName
        )}
      >
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
