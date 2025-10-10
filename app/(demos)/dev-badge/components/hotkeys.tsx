import { cn } from "@/lib/utils";

export function Hotkeys() {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 bg-background-100 p-2 py-1.5 rounded-md border border-neutral-600 text-foreground",
        "flex items-center gap-16"
      )}
    >
      <div className="flex flex-col gap-2">
        <p className="font-medium text-primary">Status</p>

        <div className="flex items-center gap-4">
          <Shortcut keys="S" label="Success" />

          <div className="h-4 w-px bg-neutral-600" />

          <Shortcut keys="W" label="Warning" />

          <div className="h-4 w-px bg-neutral-600" />

          <Shortcut keys="E" label="Error" />

          <div className="h-4 w-px bg-neutral-600" />

          <Shortcut keys="I" label="Idle" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-primary">Size</p>

        <div className="flex items-center gap-4">
          <Shortcut keys="X" label="Small" />
          <div className="h-4 w-px bg-neutral-600" />
          <Shortcut keys="M" label="Medium" />
        </div>
      </div>
    </div>
  );
}

const Shortcut = ({
  keys,
  label,
}: {
  keys: React.ReactNode;
  label: string;
}) => {
  return (
    <p className="text-sm flex items-center gap-2">
      <kbd className="bg-neutral-500/50 text-neutral-300 px-1.5 py-0 font-medium rounded-md">
        {keys}
      </kbd>

      <span>{label}</span>
    </p>
  );
};
