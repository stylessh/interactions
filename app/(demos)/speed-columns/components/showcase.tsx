import { getRandomGradient } from "@/lib/utils";

export function Showcase() {
  return (
    <section className="h-max">
      <div className="w-full h-20 bg-transparent" />

      <article className="">
        <h1 className="text-xl text-primary">Different speeds.</h1>
        <p className="mt-4 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed auctor
          vehicula nunc.
        </p>
      </article>

      <article className="my-20">
        <div className="w-full aspect-[4/3] bg-orange-500 relative rounded-md overflow-hidden">
          <h3 className="text-[8vw] text-background font-black absolute -bottom-[4vw] left-1/2 -translate-x-1/2">
            Motion
          </h3>
        </div>

        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed auctor
          vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed
          auctor vehicula nunc.
        </p>
      </article>

      <article className="mt-12">
        <h2 className="text-primary text-xl">Gallery</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia.
        </p>

        <ul className="flex flex-col gap-y-4 mt-6">
          {new Array(6).fill(null).map((_, i) => {
            const [from, to] = getRandomGradient();

            return (
              <div
                key={i}
                className="aspect-[4/3] bg-gradient-to-br from-black to-background"
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              />
            );
          })}
        </ul>
      </article>
    </section>
  );
}
