import { Link } from "@/components/link";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: fetch the direct demo name, without having to do it with dynamic routing
  // probably creating a json file (?)
  const demoLink =
    "https://github.com/stylessh/interactions/tree/main/app/(demos)";

  return (
    <div>
      <header className="max-w-screen-lg w-[90%] mx-auto h-48 mt-16 flex items-start justify-between">
        <h1>
          sticky <span className="text-primary">features</span>
        </h1>

        <Link href={demoLink} target="_blank">
          code
        </Link>
      </header>

      {children}
    </div>
  );
}
